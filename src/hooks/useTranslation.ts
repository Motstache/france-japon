import { useState, useCallback, useEffect } from 'react';
import { translations, type Language, type TranslationKey } from '../utils/translations';

// État global partagé
let globalLanguage: Language = 'fr';
let globalListeners: Array<(lang: Language) => void> = [];

export function useTranslation() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(globalLanguage);
  const [, forceUpdate] = useState({});

  // S'abonner aux changements globaux
  useEffect(() => {
    const listener = (newLang: Language) => {
      setCurrentLanguage(newLang);
      // Forcer une mise à jour pour s'assurer que tous les composants se re-rendent
      forceUpdate({});
    };
    globalListeners.push(listener);

    return () => {
      globalListeners = globalListeners.filter(l => l !== listener);
    };
  }, []);

  const t = useCallback((key: TranslationKey): string => {
    const translation = translations[currentLanguage]?.[key] || translations.fr[key];
    if (!translation) {
      console.warn(`Missing translation for key: ${key} in language: ${currentLanguage}`);
      return key;
    }
    return translation;
  }, [currentLanguage]);

  const changeLanguage = useCallback((language: Language) => {
    globalLanguage = language;
    console.log('Changing language to:', language); // Debug log
    // Notifier tous les composants
    globalListeners.forEach(listener => listener(language));
  }, []);

  return {
    t,
    currentLanguage,
    changeLanguage,
    availableLanguages: Object.keys(translations) as Language[]
  };
}