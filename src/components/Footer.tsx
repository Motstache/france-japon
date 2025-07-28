import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/Logo Motstache.png" 
                alt="MotoVlog Logo" 
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold text-white">Motstache</span>
            </div>
            <p className="text-gray-400">
              {t('footerDesc')}
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">{t('navigation')}</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-orange-400 transition-colors duration-200">{t('home')}</a>
              <a href="#about-us" className="block text-gray-400 hover:text-orange-400 transition-colors duration-200">{t('aboutUs')}</a>
              <a href="#project" className="block text-gray-400 hover:text-orange-400 transition-colors duration-200">{t('project')}</a>
              <a href="#bikes" className="block text-gray-400 hover:text-orange-400 transition-colors duration-200">{t('bikes')}</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t('information')}</h3>
            <div className="space-y-2">
              <a href="#admin" className="block text-gray-400 hover:text-orange-400 transition-colors duration-200">{t('admin')}</a>
              <a href="#social" className="block text-gray-400 hover:text-orange-400 transition-colors duration-200">{t('social')}</a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">{t('contact')}</h3>
            <div className="space-y-2 text-gray-400">
              <p>📧 motstache@gmail.com</p>
              <p>📍 Nancy, France</p>
              <p>🗓️ {t('departure')}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
