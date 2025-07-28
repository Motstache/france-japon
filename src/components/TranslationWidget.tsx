import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const langCodeToSpeechLang: { [key: string]: string } = {
  fr: 'fr-FR',
  en: 'en-US',
  ja: 'ja-JP',
  ru: 'ru-RU',
};

export default function TranslationWidget() {
  const { t, currentLanguage } = useTranslation();

  const [sourceText, setSourceText] = useState('');
  const [targetText, setTargetText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('fr');
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Reset playing state if speechSynthesis is cancelled elsewhere
    const handleEnd = () => setIsPlaying(false);
    window.speechSynthesis.addEventListener('end', handleEnd);
    return () => {
      window.speechSynthesis.removeEventListener('end', handleEnd);
    };
  }, []);

  const speakText = (text: string, language: string) => {
    if (!text.trim()) return;

    if (!('speechSynthesis' in window)) {
      console.error("Synthèse vocale non supportée dans ce navigateur");
      return;
    }

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    console.log(`🔊 Lecture vocale démarrée: "${text}" en ${language}`);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = 0.8;

    utterance.onend = () => {
      console.log("🔈 Lecture vocale terminée");
      setIsPlaying(false);
    };

    utterance.onerror = (event) => {
      console.error("Erreur de synthèse vocale:", event);
      setIsPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-800 rounded-md shadow-md text-white relative">
      <h2 className="text-xl mb-4">{t('translationWidgetTitle')}</h2>

      <textarea
        className="w-full p-2 mb-4 bg-gray-700 rounded"
        rows={4}
        placeholder={t('writeYourText')}
        value={sourceText}
        onChange={(e) => setSourceText(e.target.value)}
      />

      <select
        className="mb-4 p-2 rounded bg-gray-700"
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        <option value="fr">Français</option>
        <option value="en">English</option>
        <option value="ja">日本語</option>
        <option value="ru">Русский</option>
      </select>

      <div className="relative">
        <textarea
          className="w-full p-2 bg-gray-700 rounded pr-10"
          rows={4}
          placeholder={t('translatedText')}
          value={targetText}
          readOnly
        />

        <button
          onClick={() => speakText(targetText, langCodeToSpeechLang[targetLanguage])}
          disabled={!targetText.trim() || isPlaying}
          className={`absolute right-2 top-2 p-2 rounded-lg transition-all duration-200 ${
            targetText.trim() && !isPlaying
              ? 'bg-blue-500 hover:bg-blue-600 text-white'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
          title={t('listenPronunciation')}
        >
          {isPlaying ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <span>🔊</span>
          )}
        </button>
      </div>
    </div>
  );
}
