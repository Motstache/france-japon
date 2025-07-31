import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import WeatherWidget from './WeatherWidget';
import TranslationWidget from './TranslationWidget';
import PolarstepsWidget from './PolarstepsWidget';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const heroElement = document.getElementById('home');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0"
    >
      <img
        src="/Japon2.jpg"
        alt="Accueil"
        className="absolute inset-0 w-full h-full object-cover sm:object-contain"
      />
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
          {t('heroTitle')}
        </h1>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed px-2">
          {t('heroSubtitle')}
        </p>

        <div className="mt-6 sm:mt-8 md:mt-16 mb-4 text-center">
          <p className="text-gray-400 text-xs sm:text-sm italic px-2">
            {t('cookieNotice')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-center justify-center w-full max-w-7xl mx-auto">
          <WeatherWidget />
          <PolarstepsWidget />
          <TranslationWidget />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
