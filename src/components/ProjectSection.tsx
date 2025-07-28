import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const ProjectSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="project" className="py-10 px-4 max-w-5xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">{t('projectTitle')}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Europe Centrale */}
        <div className="flex items-center space-x-4">
          <span className="w-6 h-6 rounded-full bg-blue-500"></span>
          <div>
            <h3 className="text-xl font-semibold">{t('centralEurope')}</h3>
            <p className="text-gray-300">{t('centralEuropeCountries')}</p>
          </div>
        </div>

        {/* Balkans */}
        <div className="flex items-center space-x-4">
          <span className="w-6 h-6 rounded-full bg-green-500"></span>
          <div>
            <h3 className="text-xl font-semibold">{t('balkans')}</h3>
            <p className="text-gray-300">{t('balkansCountries')}</p>
          </div>
        </div>

        {/* Caucase */}
        <div className="flex items-center space-x-4">
          <span className="w-6 h-6 rounded-full bg-yellow-500"></span>
          <div>
            <h3 className="text-xl font-semibold">{t('caucasus')}</h3>
            <p className="text-gray-300">{t('caucasusCountries')}</p>
          </div>
        </div>

        {/* Asie Centrale */}
        <div className="flex items-center space-x-4">
          <span className="w-6 h-6 rounded-full bg-purple-500"></span>
          <div>
            <h3 className="text-xl font-semibold">{t('centralAsia')}</h3>
            <p className="text-gray-300">{t('centralAsiaCountries')}</p>
          </div>
        </div>

        {/* Extrême-Orient */}
        <div className="flex items-center space-x-4">
          <span className="w-6 h-6 rounded-full bg-pink-500"></span>
          <div>
            <h3 className="text-xl font-semibold">{t('farEast')}</h3>
            <p className="text-gray-300">{t('farEastCountries')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
