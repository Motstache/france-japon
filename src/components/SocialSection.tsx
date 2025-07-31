import React from "react";
import { Coffee, Instagram, Youtube, Facebook, MapPin } from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";
import AnimatedBanner from "./AnimatedBanner";

const SocialSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="social" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("socialTitle")}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("socialSubtitle")}</p>
        </div>

        {/* Icônes des réseaux sociaux */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* ... (les icônes inchangées) */}
        </div>

        {/* Widgets Instagram côte à côte */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 mb-6">
          {/* Dernière publication */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-orange-400 mb-3">
              📸 Découvrez notre publication sur Instagram !
            </h3>
            <p className="text-gray-300 mb-6">
              Suivez nos péripéties et plongez dans l'ambiance de notre voyage et sa préparation 🚀
            </p>
            <iframe
              src="https://cdn.lightwidget.com/widgets/c4bdfdd32912546a9530f77248e3785f.html"
              scrolling="no"
              allowTransparency={true}
              className="rounded-xl shadow-xl mx-auto"
              style={{
                width: "90%",
                maxWidth: "500px",
                height: "450px",
                border: 0,
                overflow: "hidden",
              }}
            ></iframe>
          </div>

          {/* Publication sur l'itinéraire */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-orange-400 mb-3">
              🗺️ Découvrez le trajet théorique de notre aventure !
            </h3>
            <p className="text-gray-300 mb-6">
              Voici notre itinéraire de rêve jusqu’au Japon 🏍️✨
            </p>
            <iframe
              src="https://www.instagram.com/reel/DMifUCAN8n1/embed"
              scrolling="no"
              allowTransparency={true}
              className="rounded-xl shadow-xl mx-auto"
              style={{
                width: "90%",
                maxWidth: "500px",
                height: "450px",
                border: 0,
                overflow: "hidden",
              }}
            ></iframe>
          </div>
        </div>

        {/* Bannière animée */}
        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg mb-4">
            💡 <strong>{t("supportMakesADifference")}</strong>
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">{t("supportDescription")}</p>

          <AnimatedBanner />
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
