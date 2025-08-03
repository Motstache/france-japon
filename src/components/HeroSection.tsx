import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-center text-white bg-gray-900"
    >
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/Japon2.jpg')" }}
      ></div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('heroTitle')}</h1>
        <p className="text-lg md:text-xl mb-8">{t('heroSubtitle')}</p>
        <a
          href="#project"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
        >
          {t('discover')}
        </a>
      </div>

      {/* Widgets en bas de la section */}
      <div className="absolute bottom-6 w-full flex flex-col md:flex-row items-center justify-center gap-6 z-10 px-4">
        {/* Widget météo */}
        <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 shadow-lg w-64 text-white">
          <iframe
            src="https://widget.meteoblue.com/en/weather/widget/three?geoloc=detect&days=3&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=light"
            style={{ width: '100%', height: '200px', border: 'none' }}
          ></iframe>
        </div>

        {/* Widget Polarsteps */}
        <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 shadow-lg w-64 text-white">
          <iframe
            src="https://www.polarsteps.com/Motstache?embed=true"
            style={{ width: '100%', height: '200px', border: 'none' }}
          ></iframe>
        </div>

        {/* Sélecteur de langue */}
        <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 shadow-lg w-64 text-white">
          <p className="mb-2 font-semibold">{t('languages')}</p>
          <div className="flex justify-center gap-2">
            <button className="px-3 py-1 bg-gray-800 rounded">FR</button>
            <button className="px-3 py-1 bg-gray-800 rounded">EN</button>
            <button className="px-3 py-1 bg-gray-800 rounded">DE</button>
            <button className="px-3 py-1 bg-gray-800 rounded">JA</button>
            <button className="px-3 py-1 bg-gray-800 rounded">RU</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
