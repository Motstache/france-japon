import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useTranslation } from './hooks/useTranslation';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SocialSection from './components/SocialSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import BikesSection from './components/BikesSection';
import AdminSection from './components/AdminSection';
import Footer from './components/Footer';
import { supabase } from './utils/supabaseClient';

function App() {
  const { currentLanguage, changeLanguage, t } = useTranslation();
  const appRef = useRef<HTMLDivElement>(null);

  // State pour données Supabase
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    async function getData() {
      const { data, error } = await supabase.from('todos').select('*');
      if (error) {
        console.error('Erreur Supabase:', error.message);
        setError(error);
      } else {
        setData(data || []);
      }
      setLoading(false);
    }
    getData();
  }, []);

  // Gestion du scroll top au chargement
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Empêche scroll automatique après
    const preventScroll = (e: Event) => {
      e.preventDefault();
      window.scrollTo(0, 0);
    };
    window.addEventListener('scroll', preventScroll, { once: true });

    return () => {
      window.removeEventListener('scroll', preventScroll);
    };
  }, []);

  // Forcer scroll top plusieurs fois (sécurisé)
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
      setTimeout(forceScrollTop, 500),
    ];
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const handleLanguageChange = (langCode: string) => {
    changeLanguage(langCode as any);
  };

  return (
    <div ref={appRef} className="min-h-screen bg-gray-900 text-white">
      <Navigation currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange} />
      <HeroSection />
      <SocialSection />
      <AboutSection />
      <ProjectSection />
      <BikesSection />

      <div className="p-4">
        <h2 className="text-xl font-bold">{t('dataFromSupabase')}</h2>
        {loading ? (
          <p>{t('loading')}</p>
        ) : error ? (
          <p className="text-red-500">{t('errorOccurred')} : {error.message}</p>
        ) : (
          <ul>
            {data.map((item, index) => (
              <li key={index}>{JSON.stringify(item)}</li>
            ))}
          </ul>
        )}
      </div>

      <AdminSection />
      <Footer />
    </div>
  );
}

export default App;
