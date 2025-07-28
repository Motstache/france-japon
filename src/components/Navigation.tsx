import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface NavigationProps {
  currentLanguage: string;
  onLanguageChange: (langCode: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentLanguage, onLanguageChange }) => {
  const { t, availableLanguages } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageSelect = (lang: string) => {
    onLanguageChange(lang);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-3">
        {/* Logo + Nom */}
        <a href="#home" className="flex items-center space-x-2 font-bold text-lg">
          <img
            src="https://zupimages.net/up/25/29/al3n.png"
            alt="Motstache Logo"
            className="w-8 h-8 rounded-full"
          />
          <span>Motstache</span>
        </a>

        {/* Boutons de navigation pour PC */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="hover:text-orange-400 transition">{t('home')}</a>
          <a href="#social" className="hover:text-orange-400 transition">{t('social')}</a>
          <a href="#about-us" className="hover:text-orange-400 transition">{t('aboutUs')}</a>
          <a href="#project" className="hover:text-orange-400 transition">{t('project')}</a>
          <a href="#bikes" className="hover:text-orange-400 transition">{t('bikes')}</a>
          <a href="#admin" className="hover:text-orange-400 transition">{t('admin')}</a>

          {/* Sélecteur langue */}
          <select
            className="bg-gray-700 text-white rounded px-2 py-1 cursor-pointer"
            value={currentLanguage}
            onChange={(e) => handleLanguageSelect(e.target.value)}
          >
            {availableLanguages.map((lang) => (
              <option key={lang} value={lang}>
                {lang.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* Menu burger pour mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700">
          <a
            href="#home"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('home')}
          </a>
          <a
            href="#social"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('social')}
          </a>
          <a
            href="#about-us"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('aboutUs')}
          </a>
          <a
            href="#project"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('project')}
          </a>
          <a
            href="#bikes"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('bikes')}
          </a>
          <a
            href="#admin"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('admin')}
          </a>

          {/* Sélecteur langue mobile */}
          <select
            className="m-4 bg-gray-600 text-white rounded px-2 py-1 cursor-pointer"
            value={currentLanguage}
            onChange={(e) => handleLanguageSelect(e.target.value)}
          >
            {availableLanguages.map((lang) => (
              <option key={lang} value={lang}>
                {lang.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
