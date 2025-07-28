import React, { useRef } from 'react';
import { useTranslation } from './hooks/useTranslation';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SocialSection from './components/SocialSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import BikesSection from './components/BikesSection';
import AdminSection from './components/AdminSection';
import Footer from './components/Footer';

import LanguageSelector from './components/LanguageSelector';

function App() {
  const { currentLanguage, changeLanguage } = useTranslation();
  const appRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (langCode: string) => {
    changeLanguage(langCode as any);
  };

  return (
    <div ref={appRef} className="min-h-screen bg-gray-900 text-white">
      {/* Sélecteur global de langue avec drapeaux */}
      <div className="p-4 flex justify-end">
        <LanguageSelector 
          currentLanguage={currentLanguage} 
          onLanguageChange={handleLanguageChange} 
        />
      </div>

      <Navigation 
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />

      <HeroSection />
      <SocialSection />
      <AboutSection />
      <ProjectSection />
      <BikesSection />
      <AdminSection />
      <Footer />
    </div>
  );
}

export default App;
