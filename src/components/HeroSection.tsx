import React, { useEffect, useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import WeatherWidget from "./WeatherWidget";
import PolarstepsWidget from "./PolarstepsWidget";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  // État pour le compte à rebours
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-03-15T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/Japon2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          {t("heroTitle")}
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-orange-400 mb-6 drop-shadow-lg">
          Nancy → Tokyo
        </h2>

        {/* Compte à rebours stylé */}
        <div className="flex justify-center gap-4 mb-8 animate-pulse">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div
              key={label}
              className="bg-white/20 rounded-lg p-4 w-20 text-center shadow-lg backdrop-blur-md"
            >
              <p className="text-3xl font-bold text-orange-400">{value}</p>
              <p className="text-sm uppercase">{label}</p>
            </div>
          ))}
        </div>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
          {t("heroSubtitle")}
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <WeatherWidget />
          <PolarstepsWidget />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
