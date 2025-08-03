import React, { useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";
import WeatherWidget from "./WeatherWidget";
import PolarstepsWidget from "./PolarstepsWidget";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const heroElement = document.getElementById("home");
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "instant", block: "start" });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 md:py-0"
    >
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Japon2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
          {t("heroTitle")}
        </h1>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed px-2">
          {t("heroSubtitle")}
        </p>

        {/* Notice cookies - affichée UNE SEULE FOIS */}
        <p className="text-gray-300 text-sm sm:text-base mb-3">
          ℹ️ Veuillez accepter les cookies pour visualiser la carte
        </p>

        {/* ✅ Polarsteps + Météo avec la même largeur */}
        <div className="w-full max-w-5xl mx-auto mb-4">
          <PolarstepsWidget />
        </div>

        <div className="w-full max-w-5xl mx-auto mt-4">
          <WeatherWidget />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
