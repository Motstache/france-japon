import React from 'react';

type LangCode = 'fr' | 'en' | 'de' | 'ru' | 'ja';

interface LanguageSelectorProps {
  currentLanguage: LangCode;
  onLanguageChange: (lang: LangCode) => void;
}

const languages: { code: LangCode; label: string; flag: string }[] = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLanguage, onLanguageChange }) => {
  return (
    <div className="flex space-x-3">
      {languages.map(({ code, label, flag }) => (
        <button
          key={code}
          onClick={() => onLanguageChange(code)}
          className={`flex items-center space-x-1 px-3 py-1 rounded-md font-semibold transition-colors ${
            currentLanguage === code
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
          title={label}
          aria-label={`Switch language to ${label}`}
        >
          <span className="text-xl">{flag}</span>
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
