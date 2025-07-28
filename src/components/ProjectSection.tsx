import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const ProjectSection: React.FC = () => {
  const { t } = useTranslation();

  const detailedRoute = [
    { id: 1, key: 'centralEurope', countriesKey: 'centralEuropeCountries' },
    { id: 2, key: 'balkans', countriesKey: 'balkansCountries' },
    { id: 3, key: 'caucasus', countriesKey: 'caucasusCountries' },
    { id: 4, key: 'centralAsia', countriesKey: 'centralAsiaCountries' },
    { id: 5, key: 'farEast', countriesKey: 'farEastCountries' },
  ];

  return (
    <section id="project" className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">{t('projectTitle')}</h2>

      {detailedRoute.map(({ id, key, countriesKey }) => (
        <div key={id} className="mb-4">
          <h3 className="text-xl font-semibold">{t(key)}</h3>
          <p>{t(countriesKey)}</p>
        </div>
      ))}
    </section>
  );
};

export default ProjectSection;
