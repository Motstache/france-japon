import React, { useState } from 'react';
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

  const speakText = (text: string, language: string) => {
    if (!text.trim()) return;

    if (!('speechSynthesis' in window)) {
      alert('Votre navigateur ne supporte pas la synthèse vocale.');
      return;
    }

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = 0.8;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="translation-widget p-4 bg-gray-900 rounded shadow-md text-white max-w-md mx-auto">
      <h2 className="mb-2 text-lg font-semibold">{t('translationWidgetTitle')}</h2>

      <textarea
        className="w-full p-2 mb-4 bg-gray-800 rounded resize-none"
        placeholder={t('writeYourText')}
        rows={4}
        value={sourceText}
        onChange={(e) => setSourceText(e.target.value)}
      />

      <select
        className="mb-4 p-2 bg-gray-800 rounded w-full"
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        <option value="fr">Français</option>
        <option value="en">English</option>
        <option value="ja">日本語</option>
        <option value="ru">Русский</option>
      </select>

      <textarea
        className="w-full p-2 mb-2 bg-gray-800 rounded resize-none"
        placeholder={t('translatedText')}
        rows={4}
        value={targetText}
        readOnly
      />

      <button
        onClick={() => speakText(targetText, langCodeToSpeechLang[targetLanguage])}
        disabled={!targetText.trim() || isPlaying}
        className={`px-4 py-2 rounded ${
          isPlaying ? 'bg-gray-700 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
        } text-white transition`}
        title={t('listenPronunciation')}
      >
        {isPlaying ? '⏸ Lecture...' : '▶️ Écouter'}
      </button>
    </div>
  );
}
