import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import WeatherWidget from './WeatherWidget';
import PolarstepsWidget from './PolarstepsWidget';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  // S'assurer que la section hero est visible au chargement
  useEffect(() => {
    const heroElement = document.getElementById('home');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden py-20 md:py-0"
    >
      {/* ✅ Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Japon2.jpg')", // ✅ image dans /public
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
          {t('heroTitle')}
        </h1>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed px-2">
          {t('heroSubtitle')}
        </p>

        {/* ✅ Widget Polarsteps pleine largeur */}
        <div className="w-full mb-6">
          <PolarstepsWidget />
        </div>

        {/* ✅ Widget météo en bandeau */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-4xl">
            <WeatherWidget />
          </div>
        </div>

        {/* ✅ Texte sur les cookies */}
        <div className="mt-6 sm:mt-8 md:mt-12 mb-4 text-center">
          <p className="text-gray-400 text-xs sm:text-sm italic px-2">
            {t('cookieNotice')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
