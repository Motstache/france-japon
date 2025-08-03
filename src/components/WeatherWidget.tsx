import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface WeatherWidgetProps {
  compact?: boolean;
  showCurrencies?: boolean;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({
  compact = false,
  showCurrencies = false,
}) => {
  const { t } = useTranslation();
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);
  const [liveWeatherData, setLiveWeatherData] = useState<any>(null);
  const [liveExchangeRate, setLiveExchangeRate] = useState<number | null>(null);
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [loadingExchange, setLoadingExchange] = useState(false);
  const [errorWeather, setErrorWeather] = useState<string | null>(null);
  const [errorExchange, setErrorExchange] = useState<string | null>(null);

  const countries = [
    { name: 'France', capital: 'Paris', flag: '🇫🇷', currency: 'EUR', lat: 48.8566, lon: 2.3522 },
    { name: 'Allemagne', capital: 'Berlin', flag: '🇩🇪', currency: 'EUR', lat: 52.5200, lon: 13.4050 },
    { name: 'Autriche', capital: 'Vienne', flag: '🇦🇹', currency: 'EUR', lat: 48.2082, lon: 16.3738 },
    { name: 'Slovénie', capital: 'Ljubljana', flag: '🇸🇮', currency: 'EUR', lat: 46.0569, lon: 14.5058 },
    { name: 'Croatie', capital: 'Zagreb', flag: '🇭🇷', currency: 'HRK', lat: 45.8150, lon: 15.9819 },
    { name: 'Turquie', capital: 'Istanbul', flag: '🇹🇷', currency: 'TRY', lat: 41.0082, lon: 28.9784 },
    { name: 'Géorgie', capital: 'Tbilissi', flag: '🇬🇪', currency: 'GEL', lat: 41.7151, lon: 44.8271 },
    { name: 'Kazakhstan', capital: 'Almaty', flag: '🇰🇿', currency: 'KZT', lat: 43.2220, lon: 76.8512 },
    { name: 'Mongolie', capital: 'Oulan-Bator', flag: '🇲🇳', currency: 'MNT', lat: 47.8864, lon: 106.9057 },
    { name: 'Russie', capital: 'Vladivostok', flag: '🇷🇺', currency: 'RUB', lat: 43.1056, lon: 131.8735 },
    { name: 'Corée du Sud', capital: 'Séoul', flag: '🇰🇷', currency: 'KRW', lat: 37.5665, lon: 126.9780 },
    { name: 'Japon', capital: 'Tokyo', flag: '🇯🇵', currency: 'JPY', lat: 35.6762, lon: 139.6503 }
  ];

  const getWeatherIcon = (weatherCode: number) => {
    if (weatherCode === 0) return '☀️';
    if (weatherCode >= 1 && weatherCode <= 3) return '⛅';
    if (weatherCode >= 45 && weatherCode <= 48) return '🌫️';
    if (weatherCode >= 51 && weatherCode <= 67) return '🌧️';
    if (weatherCode >= 71 && weatherCode <= 77) return '❄️';
    if (weatherCode >= 80 && weatherCode <= 82) return '🌦️';
    if (weatherCode >= 95 && weatherCode <= 99) return '⛈️';
    return '🌤️';
  };

  const getWeatherDescription = (weatherCode: number) => {
    if (weatherCode === 0) return 'Ciel dégagé';
    if (weatherCode === 1) return 'Principalement dégagé';
    if (weatherCode === 2) return 'Partiellement nuageux';
    if (weatherCode === 3) return 'Couvert';
    if (weatherCode >= 45 && weatherCode <= 48) return 'Brouillard';
    if (weatherCode >= 51 && weatherCode <= 57) return 'Bruine';
    if (weatherCode >= 61 && weatherCode <= 67) return 'Pluie';
    if (weatherCode >= 71 && weatherCode <= 77) return 'Neige';
    if (weatherCode >= 80 && weatherCode <= 82) return 'Averses';
    if (weatherCode >= 95 && weatherCode <= 99) return 'Orage';
    return 'Conditions variables';
  };

  const fetchWeatherData = async (lat: number, lon: number) => {
    setLoadingWeather(true);
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`
      );
      const data = await res.json();
      setLiveWeatherData({
        current: {
          temperature_2m: Math.round(data.current.temperature_2m),
          relative_humidity_2m: data.current.relative_humidity_2m,
          weather_code: data.current.weather_code,
          wind_speed_10m: Math.round(data.current.wind_speed_10m),
        },
      });
    } catch {
      setLiveWeatherData(null);
    } finally {
      setLoadingWeather(false);
    }
  };

  const fetchExchangeRate = async (currency: string) => {
    if (currency === 'EUR') {
      setLiveExchangeRate(1.0);
      return;
    }
    setLoadingExchange(true);
    try {
      const res = await fetch(`https://api.exchangerate-api.com/v4/latest/EUR`);
      const data = await res.json();
      setLiveExchangeRate(data.rates[currency] || 1.0);
    } catch {
      setLiveExchangeRate(null);
    } finally {
      setLoadingExchange(false);
    }
  };

  useEffect(() => {
    const country = countries[currentCountryIndex];
    fetchWeatherData(country.lat, country.lon);
    fetchExchangeRate(country.currency);
  }, [currentCountryIndex]);

  const country = countries[currentCountryIndex];

  if (compact) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-4 text-white text-xs sm:text-sm md:text-base">
        <span>{country.flag} {country.capital}</span>
        {liveWeatherData && (
          <span>
            {getWeatherIcon(liveWeatherData.current.weather_code)}{' '}
            {liveWeatherData.current.temperature_2m}°C
          </span>
        )}
        {showCurrencies && liveExchangeRate && (
          <span>
            💱 1 € = {liveExchangeRate.toFixed(2)} {country.currency}
          </span>
        )}
      </div>
    );
  }

  // ✅ Mode normal (inchangé)
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-md mx-auto">
      {/* ... ton UI détaillée complète comme avant ... */}
      {/* (tu peux garder exactement ton bloc JSX initial ici) */}
    </div>
  );
};

export default WeatherWidget;
