import React from "react";
import { useTranslation } from "../hooks/useTranslation";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
      style={{ backgroundImage: "url('/Japon2.jpg')" }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 px-4 max-w-4xl">
        {/* Titre principal */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          {t("heroTitle")}
        </h1>

        {/* Texte Nancy → Tokyo */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          Nancy → Tokyo
        </h2>

        {/* Sous-titre */}
        <p className="text-xl md:text-2xl mb-6 drop-shadow-md">
          {t("heroSubtitle")}
        </p>

        {/* Boutons réseaux / traduction */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="#project"
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition"
          >
            {t("discoverProject")}
          </a>
          <a
            href="#social"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-lg font-semibold transition"
          >
            {t("followUs")}
          </a>
        </div>

        {/* Widgets météo et Polarsteps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-4 rounded-xl">
            <h3 className="text-lg font-bold mb-2">{t("weatherWidget")}</h3>
            <iframe
              src="https://weatherwidget.io/w/"
              style={{ border: "none", width: "100%", height: "150px" }}
              title="Météo"
            ></iframe>
          </div>

          <div className="bg-white/10 p-4 rounded-xl">
            <h3 className="text-lg font-bold mb-2">Polarsteps</h3>
            <iframe
              src="https://polarsteps.com/Motstache"
              style={{ border: "none", width: "100%", height: "150px" }}
              title="Polarsteps"
            ></iframe>
          </div>
        </div>

        {/* Sélecteur de langue */}
        <div className="mt-6">
          <p className="text-gray-200">{t("chooseLanguage")}</p>
          {/* Ici tu avais ton LanguageSelector */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
