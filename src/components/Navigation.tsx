import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface NavigationProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const languages = [
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
  { code: 'ja', label: 'JP', flag: '🇯🇵' }
];

const Navigation: React.FC<NavigationProps> = ({ currentLanguage, onLanguageChange }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-md z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <div className="flex items-center space-x-4">
          {/* Logo + Brand */}
          <a href="#home" className="flex items-center space-x-2 text-white font-bold text-lg select-none">
            <img src="https://zupimages.net/up/25/29/al3n.png" alt="Motstache Logo" className="h-8 w-8" />
            <span>Motstache</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
            <a href="#home" className="hover:text-orange-400">{t('home')}</a>
            <a href="#social" className="hover:text-orange-400">{t('social')}</a>
            <a href="#about-us" className="hover:text-orange-400">{t('aboutUs')}</a>
            <a href="#project" className="hover:text-orange-400">{t('project')}</a>
            <a href="#bikes" className="hover:text-orange-400">{t('bikes')}</a>
            <a href="#admin" className="hover:text-orange-400">{t('admin')}</a>
          </div>
        </div>

        {/* Language Selector */}
        <div className="flex items-center space-x-2">
          {languages.map(({ code, flag }) => (
            <button
              key={code}
              onClick={() => onLanguageChange(code)}
              className={`text-xl focus:outline-none ${
                currentLanguage === code ? 'opacity-100' : 'opacity-50 hover:opacity-100'
              }`}
              title={code.toUpperCase()}
            >
              {flag}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 pt-2 pb-4 space-y-2 text-gray-300 text-sm font-medium">
            <a href="#home" className="block hover:text-orange-400" onClick={() => setIsMenuOpen(false)}>{t('home')}</a>
            <a href="#social" className="block hover:text-orange-400" onClick={() => setIsMenuOpen(false)}>{t('social')}</a>
            <a href="#about-us" className="block hover:text-orange-400" onClick={() => setIsMenuOpen(false)}>{t('aboutUs')}</a>
            <a href="#project" className="block hover:text-orange-400" onClick={() => setIsMenuOpen(false)}>{t('project')}</a>
            <a href="#bikes" className="block hover:text-orange-400" onClick={() => setIsMenuOpen(false)}>{t('bikes')}</a>
            <a href="#admin" className="block hover:text-orange-400" onClick={() => setIsMenuOpen(false)}>{t('admin')}</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
