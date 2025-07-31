import React, { useEffect, useState } from "react";
import { Calendar, Route, MapPin } from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";

const ProjectSection: React.FC = () => {
  const { t } = useTranslation();
  const departureDate = new Date("2026-03-15T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Mise à jour du compte à rebours
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = departureDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="project" className="relative py-20 bg-gray-900">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/projet-japon-bg.jpg')",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("projectTitle")}{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Nancy → Tokyo
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            {t("projectSubtitle")}
          </p>

          {/* Compte à rebours stylé */}
          <div className="flex justify-center space-x-4 text-center">
            <div className="bg-gray-800 rounded-xl p-4 w-20">
              <p className="text-3xl font-bold text-orange-400">{timeLeft.days}</p>
              <span className="text-gray-300 text-sm">Jours</span>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 w-20">
              <p className="text-3xl font-bold text-orange-400">{timeLeft.hours}</p>
              <span className="text-gray-300 text-sm">Heures</span>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 w-20">
              <p className="text-3xl font-bold text-orange-400">{timeLeft.minutes}</p>
              <span className="text-gray-300 text-sm">Minutes</span>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 w-20">
              <p className="text-3xl font-bold text-orange-400">{timeLeft.seconds}</p>
              <span className="text-gray-300 text-sm">Secondes</span>
            </div>
          </div>
        </div>

        {/* Trois cartes infos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <Calendar className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{t("duration")}</h3>
            <p className="text-gray-300">{t("durationValue")}</p>
            <p className="text-orange-400 font-semibold">{t("durationSub")}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <Route className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{t("distance")}</h3>
            <p className="text-gray-300">{t("distanceValue")}</p>
            <p className="text-orange-400 font-semibold">{t("distanceSub")}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <MapPin className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{t("route")}</h3>
            <p className="text-gray-300">{t("routeValue")}</p>
            <p className="text-orange-400 font-semibold">{t("routeSub")}</p>
          </div>
        </div>

        {/* Itinéraire détaillé */}
        <div className="bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">{t("detailedRoute")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">{t("centralEurope")}</h4>
              <p className="text-sm text-gray-400">{t("centralEuropeCountries")}</p>
           
