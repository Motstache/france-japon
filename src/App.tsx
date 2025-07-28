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
    // Bloquer scroll automatique provoqué par les ancres
    const preventAutoScroll = (e: Event) => {
      e.preventDefault();
      window.scrollTo(0, 0);
    };

    // Dès le chargement complet
    window.scrollTo(0, 0);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    // Empêcher les scroll causés par le focus ou les hash de navigation
    window.addEventListener('scroll', preventAutoScroll, { passive: false, capture: true });

    // Nettoyage à la destruction
    return () => {
      window.removeEventListener('scroll', preventAutoScroll, { capture: true });
    };
  }, []);

  return (
    <div ref={appRef} className="min-h-screen bg-gray-900 text-white" style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
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
