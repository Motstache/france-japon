import React from 'react';
import { Bike, Backpack } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const BikesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="bikes" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('bikesTitle')}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('bikesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-700 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Bike className="w-12 h-12 text-orange-400 mr-4" />
              <div>
                <h3 className="text-2xl font-bold">Yamaha Ténéré 700</h3>
                <p className="text-gray-300">{t('gauthierBike')}</p>
              </div>
            </div>
            <img 
              src="https://zupimages.net/up/25/28/gu8c.jpg" 
              alt="Yamaha Tenere 700"
              className="w-full h-48 object-cover rounded-xl mb-6"
            />
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">{t('engine')}</span>
                <span>{t('engineValue')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">{t('power')}</span>
                <span>{t('powerValue')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">{t('tank')}</span>
                <span>{t('tankValue')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">{t('weight')}</span>
                <span>{t('weightValue')}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Bike className="w-12 h-12 text-pink-400 mr-4" />
              <div>
                <h3 className="text-2xl font-bold">Yamaha Ténéré 700</h3>
                <p className="text-gray-300">{t('magaliBike')}</p>
              </div>
            </div>
            <img 
              src="https://zupimages.net/up/25/28/49uk.jpg" 
              alt="Yamaha Tenere 700"
              className="w-full h-48 object-cover rounded-xl mb-6"
            />
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">{t('engine')}</span>
                <span>{t('engineValue')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">{t('power')}</span>
                <span>{t('powerValue')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">{t('tank')}</span>
                <span>{t('tankValue')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">{t('weight')}</span>
                <span>{t('weightValue')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Equipment Section */}
        <div className="bg-gray-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
            <Backpack className="w-8 h-8 mr-3 text-orange-400" />
            {t('equipmentTitle')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-orange-400">{t('protectionSafety')}</h4>
              
              {/* Gauthier's Equipment */}
              <div className="mb-8">
                <h5 className="text-lg font-semibold mb-3 text-blue-400">{t('gauthierEquipment')}</h5>
                <ul className="space-y-2 text-gray-300">
                  <li>• {t('klimHelmet')}</li>
                  <li>• {t('beringWinterJacket')}</li>
                  <li>• {t('revitSummerJacket')}</li>
                  <li>• {t('beringPants')}</li>
                  <li>• {t('sidiBoots')}</li>
                  <li>• {t('alpinestarGloves')}</li>
                </ul>
              </div>
              
              {/* Magali's Equipment */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold mb-3 text-pink-400">{t('magaliEquipment')}</h5>
                <ul className="space-y-2 text-gray-300">
                  <li>• {t('shoeiHelmet')}</li>
                  <li>• {t('ixonJacket')}</li>
                  <li>• {t('formaBoots')}</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-orange-400">{t('luggageNavigation')}</h4>
              <div className="mb-6">
                <h5 className="text-lg font-semibold mb-3 text-green-400">{t('onEachBike')}</h5>
                <ul className="space-y-2 text-gray-300">
                  <li>• {t('loneriderCases')}</li>
                  <li>• {t('loneriderBag')}</li>
                  <li>• {t('crashBarBags')}</li>
                  <li>• {t('handlebarBag')}</li>
                  <li>• {t('carpurideGPS')}</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-orange-400">{t('campingSurvival')}</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• {t('mototent')}</li>
                <li>• {t('sleepingBags')}</li>
                <li>• {t('stove')}</li>
                <li>• {t('waterBottles')}</li>
                <li>• {t('firstAidKit')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikesSection;
