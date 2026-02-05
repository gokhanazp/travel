import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const TourCard = ({ tour, index = 0 }) => {
  const { language, t } = useLanguage();

  // Determine if the card is the special "Plan Your Tour" card
  const isCustomTour = tour.isCustom || false;

  // Get language-specific content
  const title = language === 'en' ? tour.titleEn : tour.title;
  const shortDescription = language === 'en' ? tour.shortDescriptionEn : tour.shortDescription;
  const tags = language === 'en' ? tour.tagsEn : tour.tags;
  const price = language === 'en' ? tour.priceEn : tour.price;

  return (
    <div
      className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col ${isCustomTour ? 'border-2 border-dashed border-orange-400' : ''}`}
      style={{ animationDelay: `${index * 0.05}s`, animation: 'fadeInUp 0.5s ease-out forwards' }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={tour.image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Popular Badge */}
        {tour.isPopular && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full shadow-md">
              {t('mostPopular') || 'Most Popular'}
            </span>
          </div>
        )}

        {/* Title */}
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-xl font-bold text-white leading-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags?.map((tag, idx) => (
            <span key={idx} className="px-2.5 py-1 text-xs font-semibold text-orange-800 bg-orange-100 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Short Description */}
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {shortDescription}
        </p>

        {/* Price & Action */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            {price ? (
              <div className="text-left">
                <span className="text-xs text-gray-500">{t('priceFrom') || 'Price from'}</span>
                <p className="text-lg font-bold text-gray-800">{price}</p>
              </div>
            ) : (
              <div></div> // Empty div to maintain layout for the custom card
            )}
            <Link
              to={isCustomTour ? '/contact' : `/tour/${tour.slug}`}
              className="bg-orange-500 text-white font-bold py-2 px-5 rounded-lg hover:bg-orange-600 transition-colors duration-300 text-center"
            >
              {isCustomTour ? (t('planYourTour') || 'Plan Your Tour') : (t('viewDetails') || 'View Details')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
