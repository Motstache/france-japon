import React, { useEffect, useState } from "react";
import { useTranslation } from "../hooks/useTranslation";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  const departureDate = new Date("2026-03-15T00:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Japon2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Nancy → Tokyo
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-6">
          {t("heroSubtitle")}
        </p>

        {/* ✅ Compte à rebours */}
        <div className="flex justify-center space-x-4 text-center mb-6">
          <div className="bg-gray-800 rounded-xl p-3 w-20">
            <p className="text-2xl md:text-3xl font-bold text-orange-400">
              {timeLeft.days}
            </p>
            <span className="text-gray-300 text-sm">Jours</span>
          </div>
          <div className="bg-gray-800 rounded-xl p-3 w-20">
            <p className="text-2xl md:text-3xl font-bold text-orange-400">
              {timeLeft.hours}
            </p>
            <span className="text-gray-300 text-sm">Heures</span>
          </div>
          <div className="bg-gray-800 rounded-xl p-3 w-20">
            <p className="text-2xl md:text-3xl font-bold text-orange-400">
              {timeLeft.minutes}
            </p>
            <span className="text-gray-300 text-sm">Minutes</span>
          </div>
          <div className="bg-gray-800 rounded-xl p-3 w-20">
            <p className="text-2xl md:text-3xl font-bold text-orange-400">
              {timeLeft.seconds}
            </p>
            <span className="text-gray-300 text-sm">Secondes</span>
          </div>
        </div>

        <a
          href="#project"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
        >
          {t("heroButton")}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
