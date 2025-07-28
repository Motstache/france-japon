import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about-us" className="max-w-7xl mx-auto p-6 md:p-10 bg-gray-800 rounded-xl my-10">
      <h2 className="text-3xl font-bold mb-6">{t('aboutUs')}</h2>
      <p className="mb-6">{t('aboutUsText')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">{t('gauthier')}</h3>
          <p>{t('gauthierDesc')}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{t('magali')}</h3>
          <p>{t('magaliDesc')}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
