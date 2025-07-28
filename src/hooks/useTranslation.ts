import { useState, useCallback, useEffect } from 'react';
import { translations, type Language, type TranslationKey } from '../utils/translations';

let globalLanguage: Language = 'fr';
let globalListeners: Array<(lang: Language) => void> = [];

export function useTranslation() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(globalLanguage);

  useEffect(() => {
    const listener = (newLang: Language) => {
      setCurrentLanguage(newLang);
    };
    globalListeners.push(listener);
    return () => {
      globalListeners = globalListeners.filter(l => l !== listener);
    };
  }, []);

  const t = useCallback((key: TranslationKey): string => {
    return translations[currentLanguage]?.[key] || translations.fr[key] || key;
  }, [currentLanguage]);

  const changeLanguage = useCallback((language: Language) => {
    globalLanguage = language;
    globalListeners.forEach(listener => listener(language));
  }, []);

  return {
    t,
    currentLanguage,
    changeLanguage,
    availableLanguages: Object.keys(translations) as Language[],
  };
}
