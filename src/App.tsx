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

  const handleLanguageChange = (langCode: string) => {
    changeLanguage(langCode as any);
  };

  useEffect(() => {
    // Bloquer scroll & focus pendant 1s
    function preventScroll(e: Event) {
      e.preventDefault();
      e.stopPropagation();
      window.scrollTo(0, 0);
      return false;
    }

    // Bloquer les événements scroll, wheel, touchmove, keydown (flèches)
    window.addEventListener('scroll', preventScroll, { passive: false });
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('keydown', preventScroll, { passive: false });

    // Forcer scroll en haut tout de suite et après 500ms
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);

      // Après 1s, on enlève le blocage pour libérer scroll
      window.removeEventListener('scroll', preventScroll);
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventScroll);
    }, 1000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', preventScroll);
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
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
