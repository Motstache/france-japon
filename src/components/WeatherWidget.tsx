import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const WeatherWidget: React.FC = () => {
  const { t } = useTranslation();
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);
  const [liveWeatherData, setLiveWeatherData] = useState<any>(null);
  const [liveExchangeRate, setLiveExchangeRate] = useState<number | null>(null);
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [loadingExchange, setLoadingExchange] = useState(false);
  const [errorWeather, setErrorWeather] = useState<string | null>(null);
  const [errorExchange, setErrorExchange] = useState<string | null>(null);

  const countries = [
    { name: 'France', capital: 'Paris', flag: '🇫🇷', currency: 'EUR', timezone: 'Europe/Paris', lat: 48.8566, lon: 2.3522 },
    { name: 'Allemagne', capital: 'Berlin', flag: '🇩🇪', currency: 'EUR', timezone: 'Europe/Berlin', lat: 52.5200, lon: 13.4050 },
    { name: 'Autriche', capital: 'Vienne', flag: '🇦🇹', currency: 'EUR', timezone: 'Europe/Vienna', lat: 48.2082, lon: 16.3738 },
    { name: 'Slovénie', capital: 'Ljubljana', flag: '🇸🇮', currency: 'EUR', timezone: 'Europe/Ljubljana', lat: 46.0569, lon: 14.5058 },
    { name: 'Croatie', capital: 'Zagreb', flag: '🇭🇷', currency: 'HRK', timezone: 'Europe/Zagreb', lat: 45.8150, lon: 15.9819 },
    { name: 'Turquie', capital: 'Istanbul', flag: '🇹🇷', currency: 'TRY', timezone: 'Europe/Istanbul', lat: 41.0082, lon: 28.9784 },
    { name: 'Géorgie', capital: 'Tbilissi', flag: '🇬🇪', currency: 'GEL', timezone: 'Asia/Tbilisi', lat: 41.7151, lon: 44.8271 },
    { name: 'Kazakhstan', capital: 'Almaty', flag: '🇰🇿', currency: 'KZT', timezone: 'Asia/Almaty', lat: 43.2220, lon: 76.8512 },
    { name: 'Mongolie', capital: 'Oulan-Bator', flag: '🇲🇳', currency: 'MNT', timezone: 'Asia/Ulaanbaatar', lat: 47.8864, lon: 106.9057 },
    { name: 'Russie', capital: 'Vladivostok', flag: '🇷🇺', currency: 'RUB', timezone: 'Asia/Vladivostok', lat: 43.1056, lon: 131.8735 },
    { name: 'Corée du Sud', capital: 'Séoul', flag: '🇰🇷', currency: 'KRW', timezone: 'Asia/Seoul', lat: 37.5665, lon: 126.9780 },
    { name: 'Japon', capital: 'Tokyo', flag: '🇯🇵', currency: 'JPY', timezone: 'Asia/Tokyo', lat: 35.6762, lon: 139.6503 }
  ];

  // Fonction pour convertir les codes OpenWeatherMap vers notre système
  const convertOpenWeatherToCode = (owmCode: number): number => {
    if (owmCode >= 200 && owmCode < 300) return 95; // Orage
    if (owmCode >= 300 && owmCode < 400) return 51; // Bruine
    if (owmCode >= 500 && owmCode < 600) return 61; // Pluie
    if (owmCode >= 600 && owmCode < 700) return 71; // Neige
    if (owmCode >= 700 && owmCode < 800) return 45; // Brouillard
    if (owmCode === 800) return 0; // Ciel dégagé
    if (owmCode === 801) return 1; // Peu nuageux
    if (owmCode === 802) return 2; // Partiellement nuageux
    if (owmCode >= 803) return 3; // Très nuageux
    return 1; // Par défaut
  };

  // Fonction pour convertir les codes WeatherAPI vers notre système
  const convertWeatherApiToCode = (wapiCode: number): number => {
    if (wapiCode === 1000) return 0; // Ensoleillé
    if ([1003, 1006].includes(wapiCode)) return 1; // Partiellement nuageux
    if ([1009, 1030].includes(wapiCode)) return 3; // Couvert/Brumeux
    if ([1063, 1180, 1183, 1186, 1189, 1192, 1195].includes(wapiCode)) return 61; // Pluie
    if ([1066, 1210, 1213, 1216, 1219, 1222, 1225].includes(wapiCode)) return 71; // Neige
    if ([1087, 1273, 1276, 1279, 1282].includes(wapiCode)) return 95; // Orage
    return 1; // Par défaut
  };

  // Fonction pour obtenir une température de fallback réaliste selon la localisation
  const getFallbackTemperature = (lat: number, lon: number): number => {
    const now = new Date();
    const month = now.getMonth(); // 0-11
    const isWinter = month >= 11 || month <= 2;
    const isSummer = month >= 5 && month <= 8;
    
    // Température de base selon la latitude
    let baseTemp = 15; // Température moyenne
    if (lat > 60) baseTemp = isWinter ? -10 : 10; // Très nord
    else if (lat > 50) baseTemp = isWinter ? 0 : 15; // Nord
    else if (lat > 40) baseTemp = isWinter ? 5 : 20; // Tempéré
    else if (lat > 30) baseTemp = isWinter ? 10 : 25; // Subtropical
    else baseTemp = isWinter ? 15 : 30; // Tropical
    
    // Ajustement saisonnier
    if (isSummer) baseTemp += 5;
    if (isWinter) baseTemp -= 5;
    
    // Variation aléatoire de ±5°C
    return Math.round(baseTemp + (Math.random() * 10 - 5));
  };

  // Fonction pour mapper les codes météo Open-Meteo aux icônes
  const getWeatherIcon = (weatherCode: number) => {
    if (weatherCode === 0) return '☀️'; // Clear sky
    if (weatherCode >= 1 && weatherCode <= 3) return '⛅'; // Partly cloudy
    if (weatherCode >= 45 && weatherCode <= 48) return '🌫️'; // Fog
    if (weatherCode >= 51 && weatherCode <= 67) return '🌧️'; // Rain
    if (weatherCode >= 71 && weatherCode <= 77) return '❄️'; // Snow
    if (weatherCode >= 80 && weatherCode <= 82) return '🌦️'; // Rain showers
    if (weatherCode >= 95 && weatherCode <= 99) return '⛈️'; // Thunderstorm
    return '🌤️'; // Default
  };

  // Fonction pour obtenir la description météo en français
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

  // Fonction pour récupérer les données météo avec Open-Meteo
  const fetchWeatherData = async (lat: number, lon: number) => {
    setLoadingWeather(true);
    setErrorWeather(null);
    
    try {
      // Utiliser Open-Meteo API (gratuite, sans clé requise)
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      const data = await response.json();
      
      // Les données Open-Meteo sont déjà au bon format
      setLiveWeatherData({
        current: {
          temperature_2m: Math.round(data.current.temperature_2m),
          relative_humidity_2m: data.current.relative_humidity_2m,
          weather_code: data.current.weather_code,
          wind_speed_10m: Math.round(data.current.wind_speed_10m)
        }
      });
    } catch (error) {
      console.error('Erreur météo:', error);
      
      setErrorWeather('APIs météo temporairement indisponibles');
      
      // Données de fallback
      const fallbackTemp = getFallbackTemperature(lat, lon);
      setLiveWeatherData({
        current: {
          temperature_2m: fallbackTemp,
          relative_humidity_2m: Math.floor(Math.random() * 30) + 50,
          weather_code: 1, // Partiellement nuageux
          wind_speed_10m: Math.floor(Math.random() * 15) + 5
        }
      });
    } finally {
      setLoadingWeather(false);
    }
  };

  // Fonction pour récupérer les taux de change
  const fetchExchangeRate = async (targetCurrency: string) => {
    if (targetCurrency === 'EUR') {
      setLiveExchangeRate(1.00);
      return;
    }

    setLoadingExchange(true);
    setErrorExchange(null);
    
    try {
      // Utiliser l'API ExchangeRate-API (gratuite, sans clé)
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/EUR`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.rates && data.rates[targetCurrency]) {
        setLiveExchangeRate(data.rates[targetCurrency]);
      } else {
        throw new Error('Currency not found');
      }
    } catch (error) {
      console.error('Erreur taux de change:', error);
      setErrorExchange('API devises temporairement indisponible');
      
      // Taux de fallback basés sur des valeurs récentes (janvier 2025)
      const fallbackRates: { [key: string]: number } = {
        HRK: 7.53, 
        TRY: 36.25, 
        GEL: 2.95, 
        KZT: 520.00,
        MNT: 3650.00, 
        RUB: 105.50, 
        KRW: 1520.00, 
        JPY: 162.80
      };
      setLiveExchangeRate(fallbackRates[targetCurrency] || 1.00);
    } finally {
      setLoadingExchange(false);
    }
  };

  // Effet pour charger les données quand le pays change
  useEffect(() => {
    const currentCountry = countries[currentCountryIndex];
    fetchWeatherData(currentCountry.lat, currentCountry.lon);
    fetchExchangeRate(currentCountry.currency);
  }, [currentCountryIndex]);

  const currentCountry = countries[currentCountryIndex];

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-2 sm:mr-3">
          <span className="text-white text-sm sm:text-lg">🌤️</span>
        </div>
        <div>
          <h3 className="text-white font-bold text-sm sm:text-base md:text-lg">{t('weatherTitle')}</h3>
          <p className="text-gray-300 text-xs sm:text-sm">{t('weatherSubtitle')}</p>
        </div>
      </div>
      
      <div className="space-y-3 sm:space-y-4 md:space-y-6">
        {/* Navigation entre pays */}
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setCurrentCountryIndex(prev => prev > 0 ? prev - 1 : countries.length - 1)}
            className="p-1 sm:p-1.5 md:p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors duration-200"
          >
            <span className="text-white text-sm sm:text-base">←</span>
          </button>
          
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">{currentCountry.flag}</div>
            <h4 className="font-bold text-sm sm:text-base md:text-lg text-white">{currentCountry.capital}</h4>
            <p className="text-gray-300 text-xs sm:text-sm">{currentCountry.name}</p>
          </div>
          
          <button 
            onClick={() => setCurrentCountryIndex(prev => prev < countries.length - 1 ? prev + 1 : 0)}
            className="p-1 sm:p-1.5 md:p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors duration-200"
          >
            <span className="text-white text-sm sm:text-base">→</span>
          </button>
        </div>
        
        {/* Météo */}
        <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-2 sm:p-3 md:p-4">
          {loadingWeather ? (
            <div className="flex items-center justify-center py-2 sm:py-3 md:py-4">
              <div className="animate-spin rounded-full h-4 w-4 sm:h-6 sm:w-6 border-b-2 border-blue-400"></div>
              <span className="text-blue-200 ml-2 text-xs sm:text-sm">{t('loadingWeather')}</span>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-1 sm:mb-2 md:mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-base sm:text-lg md:text-xl">
                    {liveWeatherData?.current?.weather_code !== undefined ? 
                      getWeatherIcon(liveWeatherData.current.weather_code) : '🌤️'
                    }
                  </span>
                  <div>
                    <div className="text-white font-bold text-base sm:text-lg md:text-xl">
                      {liveWeatherData?.current?.temperature_2m ? Math.round(liveWeatherData.current.temperature_2m) : '--'}°C
                    </div>
                    <div className="text-blue-200 text-xs sm:text-sm">
                      {liveWeatherData?.current?.weather_code !== undefined ? 
                        getWeatherDescription(liveWeatherData.current.weather_code) : 'N/A'
                      }
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm">
                <div className="text-center">
                  <div className="text-blue-200">{t('humidity')}</div>
                  <div className="text-white font-semibold">
                    {liveWeatherData?.current?.relative_humidity_2m || '--'}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-blue-200">{t('wind')}</div>
                  <div className="text-white font-semibold">
                    {liveWeatherData?.current?.wind_speed_10m ? Math.round(liveWeatherData.current.wind_speed_10m) : '--'} km/h
                  </div>
                </div>
              </div>
              
              {errorWeather && (
                <div className="mt-1 sm:mt-2 text-xs text-yellow-300">
                  ⚠️ Données approximatives (API indisponible)
                </div>
              )}
            </>
          )}
        </div>

        {/* Taux de change */}
        <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-2 sm:p-3 md:p-4">
          {loadingExchange ? (
            <div className="flex items-center justify-center py-2 sm:py-3 md:py-4">
              <div className="animate-spin rounded-full h-4 w-4 sm:h-6 sm:w-6 border-b-2 border-green-400"></div>
              <span className="text-green-200 ml-2 text-xs sm:text-sm">{t('loadingExchange')}</span>
            </div>
          ) : (
            <>
              <div className="flex items-center space-x-2 mb-1 sm:mb-2 md:mb-3">
                <span className="text-base sm:text-lg md:text-xl">💱</span>
                <div>
                  <div className="text-white font-bold text-xs sm:text-sm md:text-base">{t('exchangeRate')}</div>
                  <div className="text-green-200 text-xs sm:text-sm">EUR → {currentCountry.currency}</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-sm sm:text-lg md:text-2xl font-bold text-green-300">
                  {liveExchangeRate === 1.00 
                    ? '1 EUR = 1 EUR' 
                    : `1 EUR = ${liveExchangeRate?.toFixed(2)} ${currentCountry.currency}`
                  }
                </div>
                {liveExchangeRate && liveExchangeRate !== 1.00 && (
                  <div className="text-green-200 text-xs sm:text-sm mt-1 sm:mt-2 md:mt-2">
                    100 EUR = {(liveExchangeRate * 100).toLocaleString()} {currentCountry.currency}
                  </div>
                )}
              </div>
              
              {errorExchange && (
                <div className="mt-1 sm:mt-2 text-xs text-yellow-300">
                  ⚠️ Taux approximatif (API indisponible)
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
