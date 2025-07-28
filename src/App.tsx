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
    // Remove any hash to prevent anchor scroll
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    // Immediately scroll to top before React paint
    window.scrollTo(0, 0);

    // Remove any focused element to prevent focus scroll
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    // Double-check scroll to top on next tick (after paint)
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

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
