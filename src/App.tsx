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
    // Supprimer le hash dans l'URL pour éviter scroll automatique lié aux ancres
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    // Forcer scroll en haut
    window.scrollTo(0, 0);

    // Forcer le blur sur l'élément actif s'il y en a un
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    // Bloquer temporairement tout focus automatique qui provoquerait un scroll
    const preventFocus = (e: FocusEvent) => {
      e.preventDefault();
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    };
    window.addEventListener('focusin', preventFocus);

    // Supprimer le listener après 500ms
    const timeout = setTimeout(() => {
      window.removeEventListener('focusin', preventFocus);
    }, 500);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('focusin', preventFocus);
    };
  }, []);

  return (
    <div
      ref={appRef}
      className="min-h-screen bg-gray-900 text-white"
      style={{ margin: 0, padding: 0, overflowX: 'hidden' }}
    >
      <Navigation currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange} />
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
