import React, { useEffect, useState } from "react";
import { useTranslation } from "../hooks/useTranslation";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-03-15T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
      style={{ backgroundImage: "url('/Japon2.jpg')" }}
    >
      <div className="bg-black/50 absolute inset-0"></div>

      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          {t("heroTitle")}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          {t("heroSubtitle")}
        </p>

        {/* Compte à rebours stylé */}
        <div className="flex justify-center space-x-4 text-center mb-10">
          {["days", "hours", "minutes", "seconds"].map((unit, i) => (
            <div key={i} className="bg-black/40 p-4 rounded-xl shadow-lg w-20 animate-pulse">
              <div className="text-3xl font-bold text-orange-400">
                {timeLeft[unit as keyof typeof timeLeft]}
              </div>
              <div className="text-sm uppercase">{t(unit)}</div>
            </div>
          ))}
        </div>

        {/* Widgets */}
        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Widget Météo */}
          <iframe
            src="https://weatherwidget.io/w/"
            style={{ border: "none", width: "100%", height: "150px" }}
            title="Météo"
          ></iframe>

          {/* Widget Polarsteps */}
          <iframe
            src="https://polarsteps.com/Motstache"
            style={{ border: "none", width: "100%", height: "150px" }}
            title="Polarsteps"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
