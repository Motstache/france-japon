import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Snowflake, Wind } from 'lucide-react';

interface WeatherData {
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
}

const WeatherDisplay: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simuler un délai de chargement pour démontrer le lazy loading
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Utiliser Open-Meteo pour Tokyo (coordonnées: 35.6762, 139.6503)
        // Utiliser OpenWeatherMap pour Tokyo
        const API_KEY = '8c8c4f7d4b5e4a2f9d1c3e5f7a9b2c4d'; // Clé de démonstration
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=35.6762&lon=139.6503&appid=${API_KEY}&units=metric&lang=fr&cnt=24`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        
        // Convertir les données OpenWeatherMap au format attendu
        // Prendre les prévisions pour les 3 prochains jours (8 prévisions par jour)
        const dailyData = {
          time: [],
          weather_code: [],
          temperature_2m_max: [],
          temperature_2m_min: []
        };
        
        // Grouper par jour
        const dayGroups: { [key: string]: any[] } = {};
        data.list.slice(0, 24).forEach((item: any) => {
          const date = item.dt_txt.split(' ')[0];
          if (!dayGroups[date]) dayGroups[date] = [];
          dayGroups[date].push(item);
        });
        
        // Calculer min/max pour chaque jour
        Object.keys(dayGroups).slice(0, 3).forEach(date => {
          const dayItems = dayGroups[date];
          const temps = dayItems.map(item => item.main.temp);
          const weatherCodes = dayItems.map(item => convertOpenWeatherToCode(item.weather[0].id));
          
          dailyData.time.push(date);
          dailyData.temperature_2m_max.push(Math.max(...temps));
          dailyData.temperature_2m_min.push(Math.min(...temps));
          dailyData.weather_code.push(weatherCodes[0]); // Code météo du matin
        });
        
        setWeatherData({ daily: dailyData });
      } catch (err) {
        console.error('Erreur météo:', err);
        setError('APIs météo temporairement indisponibles');
        
        // Données de fallback réalistes pour Tokyo
        const now = new Date();
        const month = now.getMonth();
        const isWinter = month >= 11 || month <= 2;
        const baseTemp = isWinter ? 8 : 25;
        
        setWeatherData({
          daily: {
            time: [
              new Date().toISOString().split('T')[0],
              new Date(Date.now() + 86400000).toISOString().split('T')[0],
              new Date(Date.now() + 172800000).toISOString().split('T')[0]
            ],
            weather_code: [1, 2, 0],
            temperature_2m_max: [baseTemp + 3, baseTemp + 5, baseTemp + 2],
            temperature_2m_min: [baseTemp - 5, baseTemp - 3, baseTemp - 4]
          }
        });
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  // Fonction pour convertir les codes OpenWeatherMap
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

  // Fonction pour mapper les codes météo Open-Meteo aux icônes Lucide
  const getWeatherIcon = (weatherCode: number) => {
    if (weatherCode === 0) return <Sun className="w-8 h-8 text-yellow-500" />; // Clear sky
    if (weatherCode >= 1 && weatherCode <= 3) return <Cloud className="w-8 h-8 text-gray-500" />; // Partly cloudy
    if (weatherCode >= 45 && weatherCode <= 48) return <Wind className="w-8 h-8 text-gray-400" />; // Fog
    if (weatherCode >= 51 && weatherCode <= 67) return <CloudRain className="w-8 h-8 text-blue-500" />; // Rain
    if (weatherCode >= 71 && weatherCode <= 77) return <Snowflake className="w-8 h-8 text-blue-200" />; // Snow
    if (weatherCode >= 80 && weatherCode <= 82) return <CloudRain className="w-8 h-8 text-blue-500" />; // Rain showers
    if (weatherCode >= 95 && weatherCode <= 99) return <CloudRain className="w-8 h-8 text-purple-500" />; // Thunderstorm
    return <Wind className="w-8 h-8 text-gray-400" />; // Default
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

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <Cloud className="w-6 h-6 mr-2 text-blue-500" />
        Météo - Tokyo
      </h2>
      
      {error && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
          <p className="text-yellow-800 text-sm">
            ⚠️ {error} - Affichage des données de démonstration
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {weatherData?.daily?.weather_code?.slice(0, 3).map((weatherCode, index) => (
          <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-4 border border-blue-200">
            <div className="flex items-center justify-between mb-3">
              {getWeatherIcon(weatherCode)}
              <div className="text-right">
                <div className="text-xl font-bold text-gray-800">
                  {weatherData.daily.temperature_2m_max[index] ? Math.round(weatherData.daily.temperature_2m_max[index]) : '--'}°C
                </div>
                <div className="text-sm text-gray-600">
                  {weatherData.daily.temperature_2m_min[index] ? Math.round(weatherData.daily.temperature_2m_min[index]) : '--'}°C
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-2 capitalize">
              {getWeatherDescription(weatherCode)}
            </p>
            <div className="text-xs text-gray-500">
              <p>{weatherData.daily.time[index] ? new Date(weatherData.daily.time[index]).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'short' }) : 'N/A'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;