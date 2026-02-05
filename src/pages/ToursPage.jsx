import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TourCard from '../components/TourCard';
import { toursData } from '../data/toursData';
import { useLanguage } from '../contexts/LanguageContext';

const ToursPage = () => {
  const { t } = useLanguage();

  const includedFeatures = [
    { text: t('featureHotels') },
    { text: t('featureVehicles') },
    { text: t('featureRestaurants') },
    { text: t('featureGuides') },
    { text: t('featurePacing') },
    { text: t('featureAssistance') },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('toursPageTitle')}
            </h1>
          </div>
        </section>

        {/* Included Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
              {t('whatAllToursInclude')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {includedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {toursData
                .filter(tour => !tour.isCustom)
                .map((tour, index) => (
                  <TourCard key={tour.id} tour={tour} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ToursPage;
