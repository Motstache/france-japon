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
    // Empêche le scroll automatique juste au chargement
    const preventAutoScroll = (e: Event) => {
      e.preventDefault();
      window.scrollTo(0, 0);
    };

    // Forcer scroll en haut au chargement
    window.scrollTo(0, 0);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    // Ajouter l'écouteur temporairement
    window.addEventListener('scroll', preventAutoScroll, { passive: false, capture: true });

    // Supprimer l'écouteur après un court délai pour laisser le scroll manuel fonctionner
    const timer = setTimeout(() => {
      window.removeEventListener('scroll', preventAutoScroll, { capture: true });
    }, 200); // 200 ms suffisent

    return () => {
      clearTimeout(timer);
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
