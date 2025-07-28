import { supabase } from './utils/supabaseClient';
import React, { useEffect, useState } from 'react';
import { useEffect, useLayoutEffect, useRef } from 'react';
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
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    console.log("✅ L'application React s'est bien chargée !");
    async function getData() {
      console.log("🔄 Chargement des données depuis Supabase...");
      const { data, error } = await supabase.from("table").select("*");
      console.log("✅ Résultat Supabase :", { data, error });
      setData(data || []);
      setError(error);
    }
    getData();
  }, []);

  const { currentLanguage, changeLanguage } = useTranslation();
  const appRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (langCode: string) => {
    changeLanguage(langCode as any);
  };

  // Forcer le défilement en haut IMMÉDIATEMENT
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Empêcher tout comportement de défilement automatique
    const preventScroll = (e: Event) => {
      e.preventDefault();
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('scroll', preventScroll, { once: true });
    
    return () => {
      window.removeEventListener('scroll', preventScroll);
    };
  }, []);

  // Forcer plusieurs fois pour être sûr
  useEffect(() => {
    const forceScrollTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    forceScrollTop();
    
    const timers = [
      setTimeout(forceScrollTop, 0),
      setTimeout(forceScrollTop, 50),
      setTimeout(forceScrollTop, 100),
      setTimeout(forceScrollTop, 200),
      setTimeout(forceScrollTop, 500)
    ];

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
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
      
    <div style={{ background: '#222', padding: '10px', margin: '10px 0' }}>
      <h2>🔍 Debug Supabase</h2>
      <pre style={{ whiteSpace: 'pre-wrap', color: 'lime' }}>{JSON.stringify(data, null, 2)}</pre>
      {error && <p style={{ color: 'red' }}>Erreur: {error.message}</p>}
    </div>
    <AdminSection />
      <Footer />
    </div>
  );
}

export default App;