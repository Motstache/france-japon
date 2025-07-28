import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 max-w-4xl">
        {t('heroTitle')}
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mb-8">
        {t('heroSubtitle')}
      </p>
    </section>
  );
};

export default HeroSection;
