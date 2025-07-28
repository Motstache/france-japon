import React, { useEffect, useRef } from 'react';
import { useTranslation } from './hooks/useTranslation';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SocialSection from './components/SocialSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import BikesSection from './components/BikesSection';
import AdminSection from './components/AdminSection';
import Footer from './components/Footer';

function App() {
  const { currentLanguage, changeLanguage } = useTranslation();
  const appRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (langCode: string) => {
    changeLanguage(langCode as any);
  };

  useEffect(() => {
    // Forcer scroll en haut après léger délai pour laisser le DOM se stabiliser
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);

      // Enlever le focus sur tout élément actif (empêche scroll automatique lié au focus)
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      ref={appRef}
      className="min-h-screen bg-gray-900 text-white"
      style={{ margin: 0, padding: 0, overflowX: 'hidden' }}
    >
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
