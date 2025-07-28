import React from 'react';
import { MapPin } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const PolarstepsWidget: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-[600px] flex-shrink-0 mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 border border-white/20">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-2 sm:mr-3">
            <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </div>
        </div>
        <div className="mb-4 relative">
          <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-gray-800/50 rounded-xl border border-gray-600/30 overflow-hidden">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.polarsteps.com/Motstache/16629490-paris-tokyo-a-moto/embed"
              className="rounded-xl border-0"
              title="Carte interactive Polarsteps - Nancy Tokyo à moto"
            ></iframe>
          </div>
        </div>
        
        {/* Stats and actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-2 sm:mb-3 gap-2 sm:gap-3 md:gap-0">
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            <div className="text-center">
              <div className="text-white font-bold text-xs sm:text-sm md:text-base">23</div>
              <div className="text-gray-400 text-xs sm:text-sm">{t('countries')}</div>
            </div>
            <div className="text-center">
              <div className="text-white font-bold text-xs sm:text-sm md:text-base">35k</div>
              <div className="text-gray-400 text-xs sm:text-sm">{t('kilometers')}</div>
            </div>
            <div className="text-center">
              <div className="text-white font-bold text-xs sm:text-sm md:text-base">10</div>
              <div className="text-gray-400 text-xs sm:text-sm">{t('months')}</div>
            </div>
          </div>
          <a 
            href="https://www.polarsteps.com/Motstache/16629490-paris-tokyo-a-moto" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 text-xs sm:text-sm font-semibold transition-colors text-center sm:text-left"
          >
            {t('viewOnPolarsteps')} →
          </a>
        </div>
        
        {/* Status */}
        <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-2 sm:p-3 flex items-center justify-center sm:justify-start">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
          <div>
            <p className="text-orange-300 font-semibold text-xs sm:text-sm text-center sm:text-left">{t('preparationPhase')}</p>
            <p className="text-gray-300 text-xs">{t('plannedDeparture')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolarstepsWidget;
