import React from 'react';
import { Calendar, Route, MapPin } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const ProjectSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="project" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('projectTitle')} <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Nancy → Tokyo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('projectSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <Calendar className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{t('duration')}</h3>
            <p className="text-gray-300">{t('durationValue')}</p>
            <p className="text-orange-400 font-semibold">{t('durationSub')}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <Route className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{t('distance')}</h3>
            <p className="text-gray-300">{t('distanceValue')}</p>
            <p className="text-orange-400 font-semibold">{t('distanceSub')}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <MapPin className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{t('route')}</h3>
            <p className="text-gray-300">{t('routeValue')}</p>
            <p className="text-orange-400 font-semibold">{t('routeSub')}</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">{t('detailedRoute')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">{t('centralEurope')}</h4>
              <p className="text-sm text-gray-400">{t('centralEuropeCountries')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">{t('balkans')}</h4>
              <p className="text-sm text-gray-400">{t('balkansCountries')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">{t('caucasus')}</h4>
              <p className="text-sm text-gray-400">{t('caucasusCountries')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">{t('centralAsia')}</h4>
              <p className="text-sm text-gray-400">{t('centralAsiaCountries')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">5</span>
              </div>
              <h4 className="font-semibold mb-2">{t('farEast')}</h4>
              <p className="text-sm text-gray-400">{t('farEastCountries')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;