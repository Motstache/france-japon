import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const ProjectSection: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    { id: 1, titleKey: 'centralEurope', descKey: 'centralEuropeCountries', color: 'bg-red-500' },
    { id: 2, titleKey: 'balkans', descKey: 'balkansCountries', color: 'bg-yellow-500' },
    { id: 3, titleKey: 'caucasus', descKey: 'caucasusCountries', color: 'bg-green-500' },
    { id: 4, titleKey: 'centralAsia', descKey: 'centralAsiaCountries', color: 'bg-blue-500' },
    { id: 5, titleKey: 'farEast', descKey: 'farEastCountries', color: 'bg-purple-500' },
  ];

  return (
    <section id="project" className="max-w-7xl mx-auto p-6 md:p-10">
      <h2 className="text-3xl font-bold mb-8 text-center">{t('project')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(({ id, titleKey, descKey, color }) => (
          <div key={id} className="flex items-center space-x-4">
            <div className={`w-6 h-6 rounded-full ${color}`}></div>
            <div>
              <h3 className="text-xl font-semibold">{t(titleKey)}</h3>
              <p className="text-gray-300">{t(descKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
