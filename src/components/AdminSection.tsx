import React, { useState, useRef, useEffect } from 'react';
import { FileText, Globe, Settings, MessageCircle, Send, X, ThumbsUp, Reply } from 'lucide-react';
import { useCommunityMessages } from '../hooks/useCommunityMessages';
import { useTranslation } from '../hooks/useTranslation';

const AdminSection: React.FC = () => {
  const { t } = useTranslation();
  const { messages: communityMessages, loading: messagesLoading, error: messagesError, addMessage } = useCommunityMessages();
  const [newMessage, setNewMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Debug: vérifier les traductions
  useEffect(() => {
    console.log('AdminSection - adminTitle:', t('adminTitle'));
    console.log('AdminSection - adminSubtitle:', t('adminSubtitle'));
  }, [t]);

  // Défilement automatique vers le bas quand de nouveaux messages arrivent
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [communityMessages]);

  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() && userName.trim()) {
      try {
        console.log('Soumission du formulaire:', { userName, newMessage }); // Debug log
        await addMessage(userName, newMessage);
        setNewMessage('');
        console.log('Message ajouté, formulaire réinitialisé'); // Debug log
      } catch (error) {
        console.error('Erreur lors de l\'envoi du message:', error);
      }
    }
  };

  return (
    <section id="admin" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('adminTitle')}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('adminSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <FileText className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">{t('passports')}</h3>
            <p className="text-gray-400 text-sm">{t('passportsDesc')}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">{t('visas')}</h3>
            <p className="text-gray-400 text-sm">{t('visasDesc')}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <Settings className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">{t('carnet')}</h3>
            <p className="text-gray-400 text-sm">{t('carnetDesc')}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <FileText className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">{t('insurance')}</h3>
            <p className="text-gray-400 text-sm">{t('insuranceDesc')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">{t('essentialDocs')}</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-400 pl-4">
                <h4 className="font-semibold text-orange-400">{t('carnetTitle')}</h4>
                <p className="text-gray-300 text-sm">{t('carnetDetail')}</p>
              </div>
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-blue-400">{t('permitTitle')}</h4>
                <p className="text-gray-300 text-sm">{t('permitDetail')}</p>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-green-400">{t('insuranceTitle')}</h4>
                <p className="text-gray-300 text-sm">{t('insuranceDetail')}</p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-semibold text-purple-400">{t('visasTitle')}</h4>
                <p className="text-gray-300 text-sm">{t('visasDetail')}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <MessageCircle className="w-6 h-6 mr-2 text-orange-400" />
              {t('communityDiscussion')} {messagesLoading && <span className="text-sm text-gray-500 ml-2">(Chargement...)</span>}
              {messagesError && (
                <span className="text-sm text-red-500 font-normal">
                  (Mode hors ligne)
                </span>
              )}
            </h3>
            <p className="text-gray-300 mb-6">
              {t('discussionDesc')}
            </p>
            
            {messagesError && (
              <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  ⚠️ Connexion à la base de données impossible. Les messages ne seront pas sauvegardés.
                </p>
              </div>
            )}
            
            {/* Chat Messages */}
            <div className="bg-gray-700 rounded-lg p-4 h-96 overflow-y-auto mb-4 space-y-4">
              {messagesLoading && (
                <div className="flex items-center justify-center py-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-400"></div>
                  <span className="text-gray-300 ml-2">Chargement des messages...</span>
                </div>
              )}
              
              {!messagesLoading && communityMessages.length === 0 && !messagesError && (
                <div className="flex items-center justify-center h-full text-gray-500">
                  <div className="text-center">
                    <MessageCircle className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                    <p>Aucun message pour le moment</p>
                    <p className="text-sm">Soyez le premier à écrire !</p>
                  </div>
                </div>
              )}
              
              {communityMessages.map((message) => (
                <div key={message.id} className="bg-gray-600 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`font-semibold ${message.author === 'Gauthier' || message.author === 'Magali' ? 'text-orange-400' : 'text-blue-400'}`}>
                        {message.author}
                        {(message.author === 'Gauthier' || message.author === 'Magali') && (
                          <span className="ml-1 text-xs bg-orange-500 px-2 py-1 rounded-full">Équipe</span>
                        )}
                      </span>
                      <span className="text-xs text-gray-400">
                        {new Date(message.created_at).toLocaleString('fr-FR')}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-200">{message.content}</p>
                </div>
              ))}
              {/* Élément invisible pour le défilement automatique */}
              <div ref={messagesEndRef} />
            </div>

            {/* Reply indicator */}
            {replyingTo && (
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 text-sm">
                    {t('replying')}
                  </span>
                  <button 
                    onClick={() => setReplyingTo(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Message Form */}
            <form onSubmit={handleMessageSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder={t('yourName')}
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none"
                  required
                />
              </div>
              <div className="flex space-x-2">
                <textarea
                  placeholder={replyingTo ? t('yourReply') : t('yourMessage')}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  rows={3}
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none resize-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminSection;