import React, { useState, useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";

const WeatherWidget: React.FC = () => {
  const { t } = useTranslation();
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);
  const [liveWeatherData, setLiveWeatherData] = useState<any>(null);
  const [liveExchangeRate, setLiveExchangeRate] = useState<number | null>(null);

  const countries = [
    { name: "France", capital: "Paris", flag: "🇫🇷", currency: "EUR", lat: 48.8566, lon: 2.3522 },
    { name: "Allemagne", capital: "Berlin", flag: "🇩🇪", currency: "EUR", lat: 52.52, lon: 13.405 },
    { name: "Turquie", capital: "Istanbul", flag: "🇹🇷", currency: "TRY", lat: 41.0082, lon: 28.9784 },
    { name: "Japon", capital: "Tokyo", flag: "🇯🇵", currency: "JPY", lat: 35.6762, lon: 139.6503 },
  ];

  // Récupération météo (API Open-Meteo)
  useEffect(() => {
    const country = countries[currentCountryIndex];
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${country.lat}&longitude=${country.lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`
    )
      .then((res) => res.json())
      .then((data) => setLiveWeatherData(data.current))
      .catch(() => setLiveWeatherData(null));

    fetch(`https://api.exchangerate-api.com/v4/latest/EUR`)
      .then((res) => res.json())
      .then((data) => setLiveExchangeRate(data.rates[country.currency] || 1))
      .catch(() => setLiveExchangeRate(1));
  }, [currentCountryIndex]);

  const country = countries[currentCountryIndex];

  return (
    <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 text-white text-sm">
      <div className="flex items-center justify-between flex-wrap gap-2">
        {/* Navigation pays */}
        <button
          onClick={() => setCurrentCountryIndex((prev) => (prev > 0 ? prev - 1 : countries.length - 1))}
          className="px-2 bg-gray-700/40 rounded"
        >
          ←
        </button>

        <div className="flex items-center gap-2">
          <span className="text-lg">{country.flag}</span>
          <span className="font-bold">{country.capital}</span>
        </div>

        <button
          onClick={() => setCurrentCountryIndex((prev) => (prev + 1) % countries.length)}
          className="px-2 bg-gray-700/40 rounded"
        >
          →
        </button>

        {/* Météo */}
        <span>
          🌡️ {liveWeatherData ? `${Math.round(liveWeatherData.temperature_2m)}°C` : "--°C"}
        </span>
        <span>💨 {liveWeatherData ? `${Math.round(liveWeatherData.wind_speed_10m)} km/h` : "-- km/h"}</span>

        {/* Devises */}
        <span>
          💱 1 EUR = {liveExchangeRate ? liveExchangeRate.toFixed(2) : "--"} {country.currency}
        </span>
      </div>
    </div>
  );
};

export default WeatherWidget;
