import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface WeatherWidgetProps {
  compact?: boolean;
  showCurrencies?: boolean;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ compact = false, showCurrencies = false }) => {
  const { t } = useTranslation();
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);
  const [liveWeatherData, setLiveWeatherData] = useState<any>(null);
  const [liveExchangeRate, setLiveExchangeRate] = useState<number | null>(null);

  const countries = [
    { name: 'France', capital: 'Paris', flag: '🇫🇷', currency: 'EUR', lat: 48.8566, lon: 2.3522 },
    { name: 'Allemagne', capital: 'Berlin', flag: '🇩🇪', currency: 'EUR', lat: 52.52, lon: 13.405 },
    { name: 'Turquie', capital: 'Istanbul', flag: '🇹🇷', currency: 'TRY', lat: 41.0082, lon: 28.9784 },
    { name: 'Japon', capital: 'Tokyo', flag: '🇯🇵', currency: 'JPY', lat: 35.6762, lon: 139.6503 }
  ];

  const getWeatherIcon = (code: number) => {
    if (code === 0) return '☀️';
    if (code <= 3) return '⛅';
    if (code >= 61 && code <= 67) return '🌧️';
    if (code >= 71 && code <= 77) return '❄️';
    if (code >= 95) return '⛈️';
    return '🌤️';
  };

  useEffect(() => {
    const fetchWeather = async () => {
      const country = countries[currentCountryIndex];
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${country.lat}&longitude=${country.lon}&current=temperature_2m,weather_code&timezone=auto`
        );
        const data = await res.json();
        setLiveWeatherData(data.current);
      } catch (err) {
        setLiveWeatherData({ temperature_2m: 20, weather_code: 1 });
      }

      try {
        const res = await fetch(`https://api.exchangerate-api.com/v4/latest/EUR`);
        const data = await res.json();
        setLiveExchangeRate(data.rates[country.currency] || 1);
      } catch {
        setLiveExchangeRate(1);
      }
    };
    fetchWeather();
  }, [currentCountryIndex]);

  const currentCountry = countries[currentCountryIndex];

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 text-white w-full">
      <div className="flex flex-wrap items-center justify-center text-xs sm:text-sm gap-4">
        {/* Navigation pays */}
        <button
          onClick={() => setCurrentCountryIndex((prev) => (prev > 0 ? prev - 1 : countries.length - 1))}
          className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600"
        >
          ◀
        </button>

        <span>{currentCountry.flag} {currentCountry.capital} ({currentCountry.name})</span>

        <span>
          {getWeatherIcon(liveWeatherData?.weather_code || 1)} {liveWeatherData?.temperature_2m ?? '--'}°C
        </span>

        {showCurrencies && liveExchangeRate && (
          <span>💱 1 EUR = {liveExchangeRate.toFixed(2)} {currentCountry.currency}</span>
        )}

        <button
          onClick={() => setCurrentCountryIndex((prev) => (prev < countries.length - 1 ? prev + 1 : 0))}
          className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default WeatherWidget;
