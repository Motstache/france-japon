import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const SocialSection: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { id: 1, nameKey: 'instagram', url: 'https://instagram.com/Motstache', icon: '📸' },
    { id: 2, nameKey: 'youtube', url: 'https://youtube.com/Motstache', icon: '▶️' },
    { id: 3, nameKey: 'polarsteps', url: 'https://polarsteps.com/Motstache', icon: '🧭' },
  ];

  return (
    <section id="social" className="max-w-7xl mx-auto p-6 md:p-10">
      <h2 className="text-3xl font-bold mb-6">{t('socialTitle')}</h2>
      <p className="mb-6">{t('socialSubtitle')}</p>

      <ul className="flex space-x-6 justify-center">
        {socialLinks.map(({ id, url, icon, nameKey }) => (
          <li key={id}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-orange-400"
            >
              <span className="text-xl">{icon}</span>
              <span>{t(nameKey)}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialSection;
