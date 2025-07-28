import React, { useState } from 'react';
import { Languages, Globe } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const TranslationWidget: React.FC = () => {
  const { t } = useTranslation();
  const [sourceLanguage, setSourceLanguage] = useState('fr');
  const [targetLanguage, setTargetLanguage] = useState('en');
  const [sourceText, setSourceText] = useState('');
  const [targetText, setTargetText] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const translationLanguages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'mn', name: 'Монгол', flag: '🇲🇳' },
    { code: 'kk', name: 'Қазақша', flag: '🇰🇿' },
    { code: 'uz', name: "O'zbek", flag: '🇺🇿' },
    { code: 'tg', name: 'Тоҷикӣ', flag: '🇹🇯' },
    { code: 'ky', name: 'Кыргызча', flag: '🇰🇬' },
    { code: 'hy', name: 'Հայերեն', flag: '🇦🇲' },
    { code: 'ka', name: 'ქართული', flag: '🇬🇪' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
    { code: 'mk', name: 'Македонски', flag: '🇲🇰' },
    { code: 'sq', name: 'Shqip', flag: '🇦🇱' },
    { code: 'sr', name: 'Српски', flag: '🇷🇸' },
    { code: 'hr', name: 'Hrvatski', flag: '🇭🇷' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];

  const usefulPhrases = {
    fr: [
      "Bonjour, comment allez-vous ?",
      "Où est la station-service ?",
      "Combien ça coûte ?",
      "Pouvez-vous m'aider ?",
      "Merci beaucoup !",
      "Au revoir !"
    ],
    en: [
      "Hello, how are you?",
      "Where is the gas station?",
      "How much does it cost?",
      "Can you help me?",
      "Thank you very much!",
      "Goodbye!"
    ],
    de: [
      "Hallo, wie geht es Ihnen?",
      "Wo ist die Tankstelle?",
      "Wie viel kostet das?",
      "Können Sie mir helfen?",
      "Vielen Dank!",
      "Auf Wiedersehen!"
    ],
    ru: [
      "Привет, как дела?",
      "Где заправка?",
      "Сколько это стоит?",
      "Можете мне помочь?",
      "Большое спасибо!",
      "До свидания!"
    ],
    ja: [
      "こんにちは、元気ですか？",
      "ガソリンスタンドはどこですか？",
      "いくらですか？",
      "手伝ってもらえますか？",
      "ありがとうございます！",
      "さようなら！"
    ]
  };

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;

    setIsTranslating(true);

    try {
      // Utiliser Google Translate API via un service proxy
      const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(sourceText)}`);
      const data = await response.json();

      if (data && data[0] && data[0][0] && data[0][0][0]) {
        setTargetText(data[0][0][0]);
      }
    } catch (error) {
      console.error('Erreur de traduction:', error);
      // Fallback: ouvrir Google Translate dans un nouvel onglet
      const googleTranslateUrl = `https://translate.google.com/?sl=${sourceLanguage}&tl=${targetLanguage}&text=${encodeURIComponent(sourceText)}`;
      window.open(googleTranslateUrl, '_blank');
    } finally {
      setIsTranslating(false);
    }
  };

  const swapLanguages = () => {
    const tempLang = sourceLanguage;
    const tempText = sourceText;
    setSourceLanguage(targetLanguage);
    setTargetLanguage(tempLang);
    setSourceText(targetText);
    setTargetText(tempText);
  };

  const speakText = (text: string, languageCode: string) => {
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

    // Remplacement des codes de langue si besoin pour la synthèse vocale
    const langMap: Record<string, string> = {
      fr: 'fr-FR',
      en: 'en-US',
      de: 'de-DE',
      ru: 'ru-RU',
      ja: 'ja-JP',
      ko: 'ko-KR',
      mn: 'mn-MN',
      kk: 'kk-KZ',
      uz: 'uz-UZ',
      tg: 'tg-TJ',
      ky: 'ky-KG',
      hy: 'hy-AM',
      ka: 'ka-GE',
      tr: 'tr-TR',
      el: 'el-GR',
      mk: 'mk-MK',
      sq: 'sq-AL',
      sr: 'sr-RS',
      hr: 'hr-HR',
      zh: 'zh-CN',
      th: 'th-TH',
      vi: 'vi-VN',
      hi: 'hi-IN',
      ar: 'ar-SA'
    };

    utterance.lang = langMap[languageCode] || 'fr-FR';
    utterance.rate = 0.8;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  };

  const insertPhrase = (phrase: string) => {
    setSourceText(phrase);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-2 sm:mr-3">
          <Languages className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </div>
        <div>
          <h3 className="text-white font-bold text-sm sm:text-base md:text-lg">{t('translationTitle')}</h3>
          <p className="text-gray-300 text-xs sm:text-sm">{t('translationSubtitle')}</p>
        </div>
      </div>

      <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 md:mb-6 text-center italic leading-relaxed">
        "{t('translationQuote')}"
      </p>

      <div className="space-y-3 sm:space-y-4 md:space-y-6">
        {/* Sélecteurs de langues */}
        <div className="flex items-center space-x-2">
          <select
            value={sourceLanguage}
            onChange={(e) => setSourceLanguage(e.target.value)}
            className="flex-1 bg-gray-800/70 border border-gray-600 rounded-lg px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 text-white text-xs sm:text-sm focus:border-blue-400 focus:outline-none cursor-pointer"
          >
            {translationLanguages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>

          <button
            onClick={swapLanguages}
            className="p-1 sm:p-1.5 md:p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors duration-200"
            title="Échanger les langues"
          >
            <div className="text-white text-xs sm:text-sm">⇄</div>
          </button>

          <select
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
            className="flex-1 bg-gray-800/70 border border-gray-600 rounded-lg px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 text-white text-xs sm:text-sm focus:border-blue-400 focus:outline-none cursor-pointer"
          >
            {translationLanguages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Zones de texte */}
        <div className="space-y-3 sm:space-y-4">
          {/* Texte source */}
          <div>
            <label className="block text-gray-300 text-xs sm:text-sm mb-1">
              {translationLanguages.find(l => l.code === sourceLanguage)?.flag} {t('writeIn')} {translationLanguages.find(l => l.code === sourceLanguage)?.name} :
            </label>
            <textarea
              placeholder={`${t('writeIn')} ${translationLanguages.find(l => l.code === sourceLanguage)?.name}...`}
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
              className="w-full bg-gray-800/70 border border-gray-600 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 md:py-3 text-white placeholder-gray-400 text-xs sm:text-sm focus:border-blue-400 focus:outline-none resize-none"
              rows={2}
            />
          </div>

          {/* Translation Button */}
          <div className="flex justify-center">
            <button
              onClick={handleTranslate}
              disabled={!sourceText.trim() || isTranslating}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 text-xs sm:text-sm"
            >
              {isTranslating ? (
                <>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>{t('translating')}</span>
                </>
              ) : (
                <>
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{t('translate')}</span>
                </>
              )}
            </button>
          </div>

          {/* Texte cible */}
          <div className="relative">
            <label className="block text-gray-300 text-xs sm:text-sm mb-1">
              {translationLanguages.find(l => l.code === targetLanguage)?.flag} {t('writeIn')} {translationLanguages.find(l => l.code === targetLanguage)?.name} :
            </label>
            <div className="relative">
              <textarea
                placeholder={`${t('translate')} ${translationLanguages.find(l => l.code === targetLanguage)?.name}...`}
                value={targetText}
                onChange={(e) => setTargetText(e.target.value)}
                className="w-full bg-gray-800/70 border border-gray-600 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 md:py-3 pr-8 sm:pr-10 md:pr-12 text-white placeholder-gray-400 text-xs sm:text-sm focus:border-blue-400 focus:outline-none resize-none"
                rows={2}
              />
              {/* Bouton de lecture vocale */}
              <button
                onClick={() => speakText(targetText, targetLanguage)}
                disabled={!targetText.trim() || isPlaying}
                className={`absolute right-1 top-1 sm:right-2 sm:top-2 p-1 sm:p-2 rounded-lg transition-all duration-200 ${
                  targetText.trim() && !isPlaying
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
                title={t('listenPronunciation')}
              >
                {isPlaying ? (
                  <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4">🔊</div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Phrases utiles */}
        {usefulPhrases[sourceLanguage as keyof typeof usefulPhrases] && (
          <div>
            <label className="block text-gray-300 text-xs sm:text-sm mb-1">{t('usefulPhrases')} :</label>
            <div className="space-y-1 max-h-20 sm:max-h-24 md:max-h-32 overflow-y-auto">
              {usefulPhrases[sourceLanguage as keyof typeof usefulPhrases].map((phrase, index) => (
                <button 
                  key={index}
                  onClick={() => insertPhrase(phrase)}
                  className="w-full text-left bg-gray-700/50 hover:bg-gray-600/50 rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 md:py-2 text-white text-xs transition-colors duration-200"
                >
                  "{phrase}"
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TranslationWidget;
