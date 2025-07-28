import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const LANGUAGES = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
];

interface NavigationProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentLanguage, onLanguageChange }) => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const currentLang = LANGUAGES.find(lang => lang.code === currentLanguage) || LANGUAGES[0];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleChangeLanguage = (code: string) => {
    onLanguageChange(code);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white flex items-center justify-between p-4 shadow-md sticky top-0 z-50">
      {/* Logo / Title */}
      <div className="font-bold text-xl cursor-pointer select-none">Motstache</div>

      {/* Links */}
      <ul className="hidden sm:flex space-x-6 text-sm font-medium">
        <li><a href="#home" className="hover:text-orange-400 transition">{t('home')}</a></li>
        <li><a href="#social" className="hover:text-orange-400 transition">{t('social')}</a></li>
        <li><a href="#about-us" className="hover:text-orange-400 transition">{t('aboutUs')}</a></li>
        <li><a href="#project" className="hover:text-orange-400 transition">{t('project')}</a></li>
        <li><a href="#bikes" className="hover:text-orange-400 transition">{t('bikes')}</a></li>
        <li><a href="#admin" className="hover:text-orange-400 transition">{t('admin')}</a></li>
      </ul>

      {/* Language selector */}
      <div className="relative">
        <button
          onClick={toggleMenu}
          className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 rounded-md px-3 py-1 focus:outline-none"
          aria-haspopup="true"
          aria-expanded={menuOpen}
          aria-label={t('selectLanguage')}
        >
          <span className="text-xl">{currentLang.flag}</span>
          <span className="hidden sm:inline">{currentLang.label}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {menuOpen && (
          <ul
            className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
            role="menu"
            aria-label={t('selectLanguage')}
          >
            {LANGUAGES.map(lang => (
              <li key={lang.code} role="none">
                <button
                  onClick={() => handleChangeLanguage(lang.code)}
                  className={`flex items-center space-x-2 w-full px-4 py-2 text-left text-sm hover:bg-gray-700 focus:bg-gray-700 focus:outline-none ${
                    lang.code === currentLanguage ? 'font-semibold bg-gray-700' : ''
                  }`}
                  role="menuitem"
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
