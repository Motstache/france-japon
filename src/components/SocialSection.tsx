import React from 'react';
import { Coffee, Instagram, Youtube, Facebook, MapPin } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import AnimatedBanner from './AnimatedBanner';

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

        {/* Icônes des réseaux sociaux */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <a
            href="https://buymeacoffee.com/motstachej"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
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

          <a
            href="https://www.instagram.com/motstache/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <Instagram className="w-12 h-12 text-white mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-white mb-2">Instagram</h3>
              <p className="text-purple-100 mb-3 text-sm">{t('dailyPhotos')}</p>
              <div className="bg-white/20 rounded-full px-3 py-1 text-white font-semibold text-sm">
                @motstache
              </div>
            </div>
          </a>

          <a
            href="https://www.youtube.com/@motstache"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <Youtube className="w-12 h-12 text-white mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-white mb-2">YouTube</h3>
              <p className="text-red-100 mb-3 text-sm">{t('completeVlogs')}</p>
              <div className="bg-white/20 rounded-full px-3 py-1 text-white font-semibold text-sm">
                Motstache
              </div>
            </div>
          </a>

          <a
            href="https://www.facebook.com/motstache"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <Facebook className="w-12 h-12 text-white mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-white mb-2">Facebook</h3>
              <p className="text-blue-100 mb-3 text-sm">{t('community')}</p>
              <div className="bg-white/20 rounded-full px-3 py-1 text-white font-semibold text-sm">
                Motstache
              </div>
            </div>
          </a>

          <a
            href="https://www.polarsteps.com/Motstache"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <MapPin className="w-12 h-12 text-white mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-white mb-2">Polarsteps</h3>
              <p className="text-green-100 mb-3 text-sm">{t('realTimeTracking')}</p>
              <div className="bg-white/20 rounded-full px-3 py-1 text-white font-semibold text-sm">
                Motstache
              </div>
            </div>
          </a>
        </div>

        {/* Texte d'accroche */}
        <div className="text-center mt-16 mb-6">
          <h3 className="text-2xl font-bold text-orange-400 mb-3">
            📸 Découvrez notre dernière aventure sur Instagram !
          </h3>
          <p className="text-gray-300 mb-6">
            Suivez nos péripéties en direct et plongez dans l'ambiance de notre voyage à moto vers le Japon 🚀
          </p>

          {/* Widget Instagram redimensionné et centré */}
          <div className="flex justify-center">
            <iframe
              src="https://cdn.lightwidget.com/widgets/c4bdfdd32912546a9530f77248e3785f.html"
              scrolling="no"
              allowTransparency={true}
              className="lightwidget-widget rounded-xl shadow-xl"
              style={{
                width: "90%",
                maxWidth: "500px",
                height: "450px",
                border: 0,
                overflow: "hidden",
              }}
            ></iframe>
          </div>
        </div>

        {/* Bannière animée */}
        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg mb-4">
            💡 <strong>{t('supportMakesADifference')}</strong>
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('supportDescription')}
          </p>

          <AnimatedBanner />
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
