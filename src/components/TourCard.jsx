import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const TourCard = ({ tour, index = 0, showViewDetails = true }) => {
  const { language } = useLanguage()

  const content = {
    en: {
      viewDetails: 'View Details',
      bookNow: 'Book Now',
      perPerson: 'per person',
      reviews: 'reviews',
      highlights: 'Highlights',
      wheelchairAccessible: 'Wheelchair Accessible',
      professionalGuide: 'Professional Guide',
      transportation: 'Transportation Included',
      price: 'Price'
    },
    tr: {
      viewDetails: 'Detayları Gör',
      bookNow: 'Rezervasyon Yap',
      perPerson: 'kişi başı',
      reviews: 'değerlendirme',
      highlights: 'Öne Çıkanlar',
      wheelchairAccessible: 'Tekerlekli Sandalye Erişimli',
      professionalGuide: 'Profesyonel Rehber',
      transportation: 'Ulaşım Dahil',
      price: 'Fiyat'
    }
  }

  const currentContent = content[language]

  const getAccessibilityColor = (accessibility) => {
    if (accessibility?.toLowerCase().includes('full') || accessibility?.toLowerCase().includes('tam')) {
      return 'bg-green-500/90 text-white'
    } else if (accessibility?.toLowerCase().includes('partial') || accessibility?.toLowerCase().includes('kısmi')) {
      return 'bg-yellow-500/90 text-white'
    }
    return 'bg-blue-500/90 text-white'
  }

  return (
    <div
      className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
      style={{animationDelay: `${index * 0.1}s`}}
    >
      {/* Tour Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={tour.mainImage}
          alt={language === 'en' ? tour.titleEn : tour.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* Tour Code Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-orange-500 text-white text-sm font-bold rounded-full">
            {tour.id}
          </span>
        </div>

        {/* Accessibility Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${getAccessibilityColor(language === 'en' ? tour.accessibilityEn : tour.accessibility)}`}>
            ♿ {language === 'en' ? tour.accessibilityEn : tour.accessibility}
          </span>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-2 leading-tight">
            {language === 'en' ? tour.titleEn : tour.title}
          </h3>
          <div className="flex items-center justify-between text-orange-300">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">
                {language === 'en' ? tour.durationEn : tour.duration}
              </span>
            </div>
            <div className="flex items-center text-yellow-400">
              {'★'.repeat(5)}
              <span className="text-white text-sm ml-1">4.9</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Content */}
      <div className="p-6">
        {/* Description */}
        <p className="text-gray-700 mb-4 leading-relaxed text-sm line-clamp-2">
          {language === 'en' ? tour.shortDescriptionEn : tour.shortDescription}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex items-center text-xs text-gray-600">
            <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {currentContent.wheelchairAccessible}
          </div>
          <div className="flex items-center text-xs text-gray-600">
            <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {currentContent.professionalGuide}
          </div>
          <div className="flex items-center text-xs text-gray-600">
            <svg className="w-4 h-4 mr-1 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            {currentContent.transportation}
          </div>
        </div>

        {/* Price Section */}
        <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-600 block">{currentContent.price}</span>
              <span className="text-2xl font-bold text-orange-600">
                €{tour.price}
              </span>
              <span className="text-xs text-gray-500 ml-1">{currentContent.perPerson}</span>
            </div>
            <div className="text-right">
              <div className="flex items-center text-yellow-500 mb-1">
                {'★'.repeat(5)}
              </div>
              <span className="text-xs text-gray-600">4.9 (120+ {currentContent.reviews})</span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="font-bold text-gray-900 mb-3 text-sm">{currentContent.highlights}:</h4>
          <div className="space-y-2">
            {(language === 'en' ? tour.highlightsEn : tour.highlights).slice(0, 2).map((highlight, idx) => (
              <div key={idx} className="flex items-start">
                <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 text-xs leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          {showViewDetails && (
            <Link
              to={`/tour/${tour.slug}`}
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-3 px-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group text-sm"
            >
              <span>{currentContent.viewDetails}</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
          <Link
            to={`/reservation?tour=${tour.id}`}
            className={`w-full ${showViewDetails ? 'bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 hover:border-orange-300' : 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl'} py-${showViewDetails ? '2' : '3'} px-4 rounded-xl font-${showViewDetails ? 'medium' : 'semibold'} text-center transition-all duration-300 ${!showViewDetails ? 'transform hover:scale-105' : ''} flex items-center justify-center group text-sm`}
          >
            <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{currentContent.bookNow}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TourCard
