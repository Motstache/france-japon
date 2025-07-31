import React from "react";
import { useTranslation } from "../hooks/useTranslation";
import Countdown from "./Countdown";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{
        backgroundImage: "url('/Japon2.jpg')", // ✅ ton image de fond
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          {t("heroTitle")}
        </h1>

        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
          Nancy → Tokyo
        </h2>

        {/* ✅ Compte à rebours ajouté ici */}
        <div className="mb-6">
          <Countdown />
        </div>

        <p className="text-xl text-gray-200 mb-6">{t("heroSubtitle")}</p>

        <a
          href="#project"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition duration-300"
        >
          {t("heroButton")}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
