import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface NavigationProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentLanguage, onLanguageChange }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Liste des liens de navigation
  const navLinks = [
    { href: '#home', label: t('home') },
    { href: '#social', label: t('socialTitle') },
    { href: '#about-us', label: t('aboutUs') },
    { href: '#project', label: t('project') },
    { href: '#bikes', label: t('bikesTitle') },
    { href: '#admin', label: t('adminTitle') },
  ];

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          {/* Logo + Nom */}
          <a href="#home" className="flex items-center space-x-2">
            <img
              src="https://zupimages.net/up/25/29/al3n.png"
              alt="Motstache logo"
              className="h-8 w-8 object-contain"
            />
            <span className="font-bold text-lg select-none">Motstache</span>
          </a>

          {/* Menu desktop */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-orange-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Sélecteur de langue desktop */}
          <div className="hidden md:block">
            <select
              value={currentLanguage}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="bg-gray-700 text-white rounded px-2 py-1 cursor-pointer"
            >
              <option value="fr">🇫🇷 Français</option>
              <option value="en">🇬🇧 English</option>
              <option value="de">🇩🇪 Deutsch</option>
              <option value="ru">🇷🇺 Русский</option>
              <option value="ja">🇯🇵 日本語</option>
            </select>
          </div>

          {/* Bouton menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-orange-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          {/* Sélecteur de langue mobile */}
          <select
            value={currentLanguage}
            onChange={(e) => {
              onLanguageChange(e.target.value);
              setIsMenuOpen(false);
            }}
            className="w-full mt-2 bg-gray-600 text-white rounded px-2 py-1 cursor-pointer"
          >
            <option value="fr">🇫🇷 Français</option>
            <option value="en">🇬🇧 English</option>
            <option value="de">🇩🇪 Deutsch</option>
            <option value="ru">🇷🇺 Русский</option>
            <option value="ja">🇯🇵 日本語</option>
          </select>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
