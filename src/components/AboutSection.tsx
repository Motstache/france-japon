import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about-us" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('aboutTitle')}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('aboutSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gauthier */}
          <div className="bg-gray-700 rounded-2xl p-8 transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-6 overflow-hidden">
                <img 
                  src="/photo-gauthier.jpg"
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-orange-400">Gauthier</h3>
                <p className="text-gray-300">{t('gauthierTitle')}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t('gauthierDesc')}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">Voyage</span>
              <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">Cultures</span>
              <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">Échanges</span>
            </div>
          </div>

          {/* Magali */}
          <div className="bg-gray-700 rounded-2xl p-8 transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-6">
                <img 
                  src="/photo-magali.jpg"
                  alt="Magali" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-orange-400">Magali</h3>
                <p className="text-gray-300">{t('magaliTitle')}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t('magaliDesc')}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">Japonais</span>
              <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">Cultures</span>
              <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">Échanges authentiques</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;