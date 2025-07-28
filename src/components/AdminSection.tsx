import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const AdminSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="admin" className="max-w-7xl mx-auto p-6 md:p-10 bg-gray-900 rounded-xl my-10">
      <h2 className="text-3xl font-bold mb-6">{t('adminTitle')}</h2>
      <p className="mb-4">{t('adminSubtitle')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">{t('essentialDocs')}</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>{t('passports')}</strong> : {t('passportsDesc')}
            </li>
            <li>
              <strong>{t('visas')}</strong> : {t('visasDesc')}
            </li>
            <li>
              <strong>{t('carnet')}</strong> : {t('carnetDesc')}
            </li>
            <li>
              <strong>{t('insurance')}</strong> : {t('insuranceDesc')}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">{t('carnetTitle')}</h3>
          <p>{t('carnetDetail')}</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">{t('permitTitle')}</h3>
          <p>{t('permitDetail')}</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">{t('insuranceTitle')}</h3>
          <p>{t('insuranceDetail')}</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">{t('visasTitle')}</h3>
          <p>{t('visasDetail')}</p>
        </div>
      </div>
    </section>
  );
};

export default AdminSection;
