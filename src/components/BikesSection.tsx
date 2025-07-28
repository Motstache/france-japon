import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const BikesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="bikes" className="max-w-7xl mx-auto p-6 md:p-10 bg-gray-800 rounded-xl my-10">
      <h2 className="text-3xl font-bold mb-6">{t('bikes')}</h2>
      <div>
        <h3 className="text-xl font-semibold mb-2">{t('ourEquipment')}</h3>
        <p className="mb-4">{t('protectionSafety')}</p>

        <div className="mb-4">
          <h4 className="font-semibold">{t('gauthierEquipment')}</h4>
          <ul className="list-disc list-inside">
            <li>Casque Klim Kryos Carbon</li>
            <li>Veste temps froid Bering Hurricane</li>
            <li>Veste temps chaud Revit Nucleon</li>
            <li>Pantalon Bering Hurricane</li>
            <li>Bottes Sidi Adventure</li>
            <li>Gants chauffants Alpinestar HT-7</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold">{t('magaliEquipment')}</h4>
          <ul className="list-disc list-inside">
            <li>Casque Shoei ADV Hornet</li>
            <li>Veste temps froid Ixon Tour Adventure</li>
            <li>Bottes Forma Adventure Evo</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">{t('luggageNavigation')}</h3>
          <p>Sur chaque moto</p>
          <ul className="list-disc list-inside">
            <li>Valises latérales Lonerider</li>
            <li>Sac de selle Lonerider Overlander</li>
            <li>Sacoches crash bar Lonerider 6L</li>
            <li>Sacoche de guidon Lonerider</li>
            <li>GPS Carpuride</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">{t('campingSurvival')}</h3>
          <ul className="list-disc list-inside">
            <li>Mototent Lonerider</li>
            <li>Sacs de couchage</li>
            <li>Réchaud</li>
            <li>Gourdes filtrantes Öko</li>
            <li>Trousse de premiers secours</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BikesSection;
