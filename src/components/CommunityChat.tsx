import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Users, AlertCircle } from 'lucide-react';
import { useCommunityMessages } from '../hooks/useCommunityMessages';

const CommunityChat: React.FC = () => {
  const { messages, loading, error, addMessage } = useCommunityMessages();
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Défilement automatique vers le bas quand de nouveaux messages arrivent
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    try {
      setIsSubmitting(true);
      await addMessage(author.trim(), content.trim());
      setContent('');
    } catch (err) {
      console.error('Erreur lors de l\'envoi du message:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <MessageCircle className="w-6 h-6 mr-2 text-green-500" />
        Chat Communautaire
        <span className="ml-2 text-sm font-normal text-gray-500 flex items-center">
          <Users className="w-4 h-4 mr-1" />
          {messages.length} message{messages.length !== 1 ? 's' : ''}
        </span>
      </h2>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
            <p className="text-red-800 text-sm">
              Connexion à la base de données échouée - Mode hors ligne
            </p>
          </div>
        </div>
      )}

      {/* Zone des messages */}
      <div className="bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto mb-4 border">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            <div className="text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-2 text-gray-300" />
              <p>Aucun message pour le moment</p>
              <p className="text-sm">Soyez le premier à écrire !</p>
              {/* Élément invisible pour le défilement automatique */}
              <div ref={messagesEndRef} />
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {messages.map((message) => (
              <div key={message.id} className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-blue-600 text-sm">
                    {message.author}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(message.created_at).toLocaleString('fr-FR', {
                      day: '2-digit',
                      month: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {message.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Formulaire d'envoi */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Votre nom"
            value={author}
            onChange={handleAuthorChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Votre message..."
            value={content}
            onChange={handleContentChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting || !author.trim() || !content.trim()}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Envoi...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Envoyer
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default CommunityChat;
