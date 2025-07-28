import { useState, useEffect } from 'react'
import { supabase, type CommunityMessage } from '../lib/supabase'

export function useCommunityMessages() {
  const [messages, setMessages] = useState<CommunityMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Charger les messages initiaux
  useEffect(() => {
    loadMessages()
  }, [])

  // Écouter les nouveaux messages en temps réel
  useEffect(() => {
    const channel = supabase
      .channel('community_messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'community_messages'
        },
        (payload) => {
          const newMessage = payload.new as CommunityMessage
          setMessages(current => [...current, newMessage])
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const loadMessages = async () => {
    try {
      setLoading(true)
      setError(null)
      const { data, error } = await supabase
        .from('community_messages')
        .select('*')
        .order('created_at', { ascending: true })

      if (error) throw error
      console.log('Messages chargés:', data) // Debug log
      setMessages(data || [])
    } catch (err) {
      console.error('Erreur lors du chargement des messages:', err)
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors du chargement des messages'
      
      // Si la table n'existe pas, on affiche un message plus informatif
      if (errorMessage.includes('does not exist') || errorMessage.includes('42P01')) {
        setError('La table des messages n\'existe pas encore. Veuillez configurer votre base de données Supabase.')
      } else {
        setError(errorMessage)
      }
      
      // En cas d'erreur (table n'existe pas), utiliser un tableau vide
      setMessages([])
    } finally {
      setLoading(false)
    }
  }

  const addMessage = async (author: string, content: string) => {
    try {
      setError(null)
      console.log('Envoi du message:', { author, content }) // Debug log
      const { error } = await supabase
        .from('community_messages')
        .insert([{ author, content }])

      if (error) throw error
      console.log('Message envoyé avec succès') // Debug log
      // Recharger les messages après l'ajout
      await loadMessages()
    } catch (err) {
      console.error('Erreur lors de l\'envoi du message:', err)
      setError(err instanceof Error ? err.message : 'Erreur lors de l\'envoi du message')
      throw err
    }
  }

  return {
    messages,
    loading,
    error,
    addMessage,
    refetch: loadMessages
  }
}
