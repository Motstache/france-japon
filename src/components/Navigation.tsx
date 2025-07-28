import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface NavigationProps {
  currentLanguage: string;
  onLanguageChange: (langCode: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentLanguage, onLanguageChange }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour scroll en haut et fermer menu si ouvert
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">Motstache</div>

        <div className="hidden md:flex space-x-6">
          <a
            href="#home"
            onClick={(e) => handleAnchorClick(e, 'home')}
            className="hover:text-orange-400 transition-colors duration-200"
          >
            {t('home')}
          </a>
          <a
            href="#about-us"
            onClick={(e) => handleAnchorClick(e, 'about-us')}
            className="hover:text-orange-400 transition-colors duration-200"
          >
            {t('aboutUs')}
          </a>
          <a
            href="#project"
            onClick={(e) => handleAnchorClick(e, 'project')}
            className="hover:text-orange-400 transition-colors duration-200"
          >
            {t('project')}
          </a>
          <a
            href="#bikes"
            onClick={(e) => handleAnchorClick(e, 'bikes')}
            className="hover:text-orange-400 transition-colors duration-200"
          >
            {t('bikes')}
          </a>
          <a
            href="#admin"
            onClick={(e) => handleAnchorClick(e, 'admin')}
            className="hover:text-orange-400 transition-colors duration-200"
          >
            {t('admin')}
          </a>
          <a
            href="#social"
            onClick={(e) => handleAnchorClick(e, 'social')}
            className="hover:text-orange-400 transition-colors duration-200"
          >
            {t('social')}
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 px-4 py-4 space-y-4">
          <a
            href="#home"
            onClick={(e) => handleAnchorClick(e, 'home')}
            className="block hover:text-orange-400 transition-colors duration-200"
          >
            {t('home')}
          </a>
          <a
            href="#about-us"
            onClick={(e) => handleAnchorClick(e, 'about-us')}
            className="block hover:text-orange-400 transition-colors duration-200"
          >
            {t('aboutUs')}
          </a>
          <a
            href="#project"
            onClick={(e) => handleAnchorClick(e, 'project')}
            className="block hover:text-orange-400 transition-colors duration-200"
          >
            {t('project')}
          </a>
          <a
            href="#bikes"
            onClick={(e) => handleAnchorClick(e, 'bikes')}
            className="block hover:text-orange-400 transition-colors duration-200"
          >
            {t('bikes')}
          </a>
          <a
            href="#admin"
            onClick={(e) => handleAnchorClick(e, 'admin')}
            className="block hover:text-orange-400 transition-colors duration-200"
          >
            {t('admin')}
          </a>
          <a
            href="#social"
            onClick={(e) => handleAnchorClick(e, 'social')}
            className="block hover:text-orange-400 transition-colors duration-200"
          >
            {t('social')}
          </a>
        </div>
      )}

      <div className="mt-2 flex justify-end space-x-4 pr-4">
        <select
          value={currentLanguage}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="bg-gray-600 text-white rounded px-2 py-1"
          aria-label="Changer la langue"
        >
          <option value="fr">Français</option>
          <option value="en">English</option>
          {/* ajoute d’autres langues si besoin */}
        </select>
      </div>
    </nav>
  );
};

export default Navigation;
