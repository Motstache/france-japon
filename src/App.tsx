import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { supabase } from './utils/supabaseClient';
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
  console.log("✅ App.tsx chargé !");

  const { currentLanguage, changeLanguage } = useTranslation();
  const appRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    console.log("🔄 Tentative de récupération des données Supabase...");
    async function getData() {
      try {
       	const { data, error } = await supabase.from("todos").select("*");
        console.log("📦 Résultat Supabase :", { data, error });
        setData(data || []);
        setError(error);
      } catch (err) {
        console.error("❌ Erreur lors de l'appel Supabase :", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  const handleLanguageChange = (langCode: string) => {
    changeLanguage(langCode as any);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // ✅ Si une erreur survient, l'afficher en plein écran
  if (error) {
    return (
      <div style={{ background: 'black', color: 'red', padding: '20px', fontSize: '18px' }}>
        ❌ Erreur dans l'application : {error.message || JSON.stringify(error)}
      </div>
    );
  }

  return (
    <div ref={appRef} className="min-h-screen bg-gray-900 text-white">
      <Navigation currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange} />

      <HeroSection />
      <SocialSection />
      <AboutSection />
      <ProjectSection />
      <BikesSection />

      <div className="p-4 bg-gray-800 mt-4">
        <h2 className="text-xl font-bold">📊 Debug Supabase</h2>
        {loading ? (
          <p>Chargement...</p>
        ) : (
          <pre style={{ whiteSpace: 'pre-wrap', color: 'lime' }}>{JSON.stringify(data, null, 2)}</pre>
        )}
      </div>

<div>
  <pre>{JSON.stringify(import.meta.env.VITE_SUPABASE_KEY)}</pre>
</div>

      <AdminSection />
      <Footer />
    </div>
  );
}

export default App;
