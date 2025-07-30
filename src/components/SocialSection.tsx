import React from 'react';
import { Coffee, Instagram, Youtube, Facebook, MapPin } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const AnimatedBanner: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden h-32 mt-8">
      <div
        className="absolute inset-0 animate-slide bg-repeat-x"
        style={{
          backgroundImage: "url('/banner-motos.png')",
          backgroundSize: "cover",
        }}
      />
      <style>{`
        @keyframes slide {
          0% { background-position: 0 0; }
          100% { background-position: -2000px 0; }
        }
        .animate-slide {
          animation: slide 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

const SocialSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="social" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('socialTitle')}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('socialSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* --- Tous les blocs réseaux sociaux --- */}
          {/* (Ton code des 5 blocs reste inchangé ici) */}
          <a href="https://buymeacoffee.com/motstachej" target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <Coffee className="w-12 h-12 text-white mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-white mb-2">{t('supportUs')}</h3>
              <p className="text-yellow-100 mb-3 text-sm">{t('supportDesc')}</p>
              <div className="bg-white/20 rounded-full px-3 py-1 text-white font-semibold text-sm">
                Buy Me a Coffee
              </div>
              <p className="text-yellow-100 text-xs mt-2 italic">
                {t('supportQuote')}
              </p>
            </div>
          </a>

          {/* Les autres blocs Instagram / YouTube / Facebook / Polarsteps */}
          {/* ... (ton code complet reste identique) ... */}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg mb-4">
            💡 <strong>{t('supportMakesADifference')}</strong>
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('supportDescription')}
          </p>

          {/* Ajout de la bannière animée */}
          <AnimatedBanner />
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
