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
    // Supprimer hash initial
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    // Scroll haut initial
    window.scrollTo(0, 0);

    // Bloquer le scroll automatique lié au hash quand il change (en user navigation)
    const onHashChange = () => {
      window.scrollTo(0, 0);
      // Remplace le hash par une URL sans hash
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    };

    window.addEventListener('hashchange', onHashChange, false);

    // Nettoyage
    return () => {
      window.removeEventListener('hashchange', onHashChange);
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
