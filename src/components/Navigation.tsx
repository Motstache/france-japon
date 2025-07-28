import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface NavigationProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentLanguage, onLanguageChange }) => {
  const { t, availableLanguages } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">

        {/* Logo + Nom */}
        <div className="flex items-center space-x-2 cursor-pointer select-none">
          {/* Logo image */}
          <img
            src="https://zupimages.net/up/25/29/al3n.png"
            alt="Motstache Logo"
            className="h-8 w-8 object-contain"
          />
          <div className="font-bold text-xl text-white">Motstache</div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="hover:text-orange-400 transition-colors duration-200">{t('home')}</a>
          <a href="#social" className="hover:text-orange-400 transition-colors duration-200">{t('social')}</a>
          <a href="#about-us" className="hover:text-orange-400 transition-colors duration-200">{t('aboutUs')}</a>
          <a href="#project" className="hover:text-orange-400 transition-colors duration-200">{t('project')}</a>
          <a href="#bikes" className="hover:text-orange-400 transition-colors duration-200">{t('bikes')}</a>
          <a href="#admin" className="hover:text-orange-400 transition-colors duration-200">{t('admin')}</a>
        </div>

        {/* Language Selector */}
        <div className="hidden md:block">
          <select
            value={currentLanguage}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="bg-gray-800/70 border border-gray-600 rounded-lg px-2 py-1 text-white text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            {availableLanguages.map(lang => (
              <option key={lang} value={lang}>
                {lang.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white px-4 py-2 space-y-2">
          <a href="#home" onClick={() => setIsMenuOpen(false)} className="block hover:text-orange-400">{t('home')}</a>
          <a href="#social" onClick={() => setIsMenuOpen(false)} className="block hover:text-orange-400">{t('social')}</a>
          <a href="#about-us" onClick={() => setIsMenuOpen(false)} className="block hover:text-orange-400">{t('aboutUs')}</a>
          <a href="#project" onClick={() => setIsMenuOpen(false)} className="block hover:text-orange-400">{t('project')}</a>
          <a href="#bikes" onClick={() => setIsMenuOpen(false)} className="block hover:text-orange-400">{t('bikes')}</a>
          <a href="#admin" onClick={() => setIsMenuOpen(false)} className="block hover:text-orange-400">{t('admin')}</a>

          {/* Mobile language selector */}
          <select
            value={currentLanguage}
            onChange={(e) => {
              onLanguageChange(e.target.value);
              setIsMenuOpen(false);
            }}
            className="w-full bg-gray-800/70 border border-gray-600 rounded-lg px-2 py-1 text-white text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400 mt-2"
          >
            {availableLanguages.map(lang => (
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
