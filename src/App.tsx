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
    // Force scroll top on load
    window.scrollTo(0, 0);

    // Log scroll position to debug
    setTimeout(() => {
      console.log('Scroll position after load:', window.scrollY, document.documentElement.scrollTop, document.body.scrollTop);
    }, 100);

    // Remove focus from any element to prevent auto-scroll
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, []);

  return (
    <div ref={appRef} className="min-h-screen bg-gray-900 text-white">
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
