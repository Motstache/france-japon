import React, { useState } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface NavigationProps {
  currentLanguage: string;
  onLanguageChange: (langCode: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentLanguage, onLanguageChange }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
  ];

  const handleLanguageChange = (langCode: string) => {
    onLanguageChange(langCode);
    setIsLanguageMenuOpen(false);
    setIsMenuOpen(false); // Fermer le menu mobile aussi
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img 
              src="/Logo Motstache.png" 
              alt="MotoVlog Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-white">Motstache</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" onClick="event.preventDefault()" className="hover:text-orange-400 transition-colors duration-200">{t('home')}</a>
            <a href="#" onClick="event.preventDefault()" className="hover:text-orange-400 transition-colors duration-200">{t('aboutUs')}</a>
            <a href="#" onClick="event.preventDefault()" className="hover:text-orange-400 transition-colors duration-200">{t('project')}</a>
            <a href="#" onClick="event.preventDefault()" className="hover:text-orange-400 transition-colors duration-200">{t('bikes')}</a>
            <a href="#" onClick="event.preventDefault()" className="hover:text-orange-400 transition-colors duration-200">{t('admin')}</a>
            <a href="#" onClick="event.preventDefault()" className="hover:text-orange-400 transition-colors duration-200">{t('social')}</a>
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-2 hover:text-orange-400 transition-colors duration-200 bg-gray-800 px-3 py-2 rounded-lg border border-gray-700"
              >
                <Languages className="w-4 h-4" />
                <span>{languages.find(lang => lang.code === currentLanguage)?.flag}</span>
                <span className="text-sm">{languages.find(lang => lang.code === currentLanguage)?.code.toUpperCase()}</span>
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute right-0 top-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50 min-w-[180px]">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-3 ${
                        currentLanguage === language.code ? 'bg-gray-700 text-orange-400' : 'text-white'
                      } ${language.code === languages[0].code ? 'rounded-t-lg' : ''} ${language.code === languages[languages.length - 1].code ? 'rounded-b-lg' : ''}`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span className="font-medium">{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <a href="#" onClick="event.preventDefault()" className="hover:text-orange-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('home')}</a>
              <a href="#" onClick="event.preventDefault()" className="hover:text-orange-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('aboutUs')}</a>
              <a href="#" onClick="event.preventDefault()" className="hover:text-orange-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('project')}</a>
              <a href="#" onClick="event.preventDefault()" className="hover:text-orange-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('bikes')}</a>
              <a href="#" onClick="event.preventDefault()" className="hover:text-orange-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('admin')}</a>
              <a href="#" onClick="event.preventDefault()" className="hover:text-orange-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('social')}</a>
              
              {/* Mobile Language Selector */}
              <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-400 text-sm mb-3 flex items-center">
                  <Languages className="w-4 h-4 mr-2" />
                  {t('languages')}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                        currentLanguage === language.code 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                      }`}
                    >
                      <span>{language.flag}</span>
                      <span className="text-sm">{language.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
