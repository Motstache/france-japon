import React from 'react';

type Language = {
  code: string;
  name: string;
  flag: string;
};

type Props = {
  currentLanguage: string;
  onLanguageChange: (langCode: string) => void;
};

const languages: Language[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
];

const LanguageSelector: React.FC<Props> = ({ currentLanguage, onLanguageChange }) => {
  return (
    <div className="flex space-x-3 items-center bg-gray-800/70 rounded-lg p-2">
      {languages.map(({ code, name, flag }) => (
        <button
          key={code}
          onClick={() => onLanguageChange(code)}
          className={`px-3 py-1 rounded-lg transition ${
            currentLanguage === code ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'
          }`}
          aria-label={`Changer la langue en ${name}`}
          title={name}
        >
          <span className="mr-1">{flag}</span>
          <span className="hidden sm:inline">{name}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
