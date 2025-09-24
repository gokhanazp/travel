import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import { toursData } from '../data/toursData'

const ToursPage = () => {
  const { language } = useLanguage()



  const content = {
    en: {
      title: 'Our Accessible Tours',
      subtitle: 'Discover Istanbul\'s most beautiful places with our specially designed accessible tours. Every tour is carefully planned for travelers with different needs.',
      duration: 'Duration',
      price: 'Price',
      accessibility: 'Accessibility',
      viewDetails: 'View Details',
      bookNow: 'Book Now',
      features: 'Features',
      highlights: 'Highlights',
      perPerson: 'per person',
      days: 'days',
      nights: 'nights',
      includes: 'What\'s Included',
      rating: 'Rating',
      reviews: 'reviews',
      wheelchairAccessible: 'Wheelchair Accessible',
      professionalGuide: 'Professional Guide',
      transportation: 'Transportation Included'
    },
    tr: {
      title: 'Erişilebilir Turlarımız',
      subtitle: 'Özel olarak tasarlanmış erişilebilir turlarımızla İstanbul\'un en güzel yerlerini keşfedin. Her tur, farklı ihtiyaçları olan gezginler için özenle planlanmıştır.',
      duration: 'Süre',
      price: 'Fiyat',
      accessibility: 'Erişilebilirlik',
      viewDetails: 'Detayları Gör',
      bookNow: 'Rezervasyon Yap',
      features: 'Özellikler',
      highlights: 'Öne Çıkanlar',
      perPerson: 'kişi başı',
      days: 'gün',
      nights: 'gece',
      includes: 'Dahil Olanlar',
      rating: 'Puan',
      reviews: 'değerlendirme',
      wheelchairAccessible: 'Tekerlekli Sandalye Erişimli',
      professionalGuide: 'Profesyonel Rehber',
      transportation: 'Ulaşım Dahil'
    }
  }

  const currentContent = content[language]

  const getAccessibilityColor = (level) => {
    const levels = {
      en: {
        "Fully accessible": "bg-green-100 text-green-800",
        "Mostly accessible": "bg-yellow-100 text-yellow-800",
        "Partially accessible": "bg-orange-100 text-orange-800"
      },
      tr: {
        "Tam erişilebilir": "bg-green-100 text-green-800",
        "Çoğunlukla erişilebilir": "bg-yellow-100 text-yellow-800",
        "Kısmi erişilebilir": "bg-orange-100 text-orange-800"
      }
    }
    return levels[language]?.[level] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      <Header />

      {/* Tours Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden">
        {/* Dekoratif elementler */}
        <div className="absolute top-10 left-10 text-blue-200 opacity-30">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>

        <div className="absolute bottom-10 right-10 text-orange-200 opacity-20">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 opacity-10">
          <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 mb-6">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                {language === 'en' ? 'Accessible Tours' : 'Erişilebilir Turlar'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{currentContent.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.subtitle}
            </p>
          </div>

          {/* Tour Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {toursData.map((tour, index) => {
              // Special design for the first tour (PBWAI0021) - Featured Accessible Tour
              if (tour.id === 'PBWAI0021') {
                return (
                  <div
                    key={tour.id}
                    className="lg:col-span-2 xl:col-span-3 group bg-gradient-to-r from-blue-50 via-white to-green-50 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-2 border-blue-200 relative"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {/* Featured Badge - Moved to top left corner inside card */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                        ⭐ {language === 'en' ? 'FEATURED' : 'ÖNE ÇIKAN'}
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Left Side - Image */}
                      <div className="relative h-96 lg:h-full overflow-hidden">
                        <img
                          src={tour.mainImage}
                          alt={language === 'en' ? tour.titleEn : tour.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

                        {/* Tour Code Badge */}
                        <div className="absolute top-16 left-4">
                          <span className="px-4 py-2 bg-blue-600 text-white text-lg font-bold rounded-full shadow-lg">
                            {tour.id}
                          </span>
                        </div>

                        {/* Accessibility Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="px-4 py-2 bg-green-600 text-white text-sm font-bold rounded-full shadow-lg">
                            ♿ {language === 'en' ?
                                (typeof tour.accessibilityEn === 'string' ? tour.accessibilityEn : 'Fully accessible') :
                                (typeof tour.accessibility === 'string' ? tour.accessibility : 'Tam erişilebilir')
                              }
                          </span>
                        </div>

                        {/* Title Overlay */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                            {language === 'en' ? tour.titleEn : tour.title}
                          </h3>
                          <div className="flex items-center justify-between text-blue-200">
                            <div className="flex items-center">
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-lg font-medium">
                                {language === 'en' ? tour.durationEn : tour.duration}
                              </span>
                            </div>
                            <div className="flex items-center text-yellow-400">
                              {'★'.repeat(5)}
                              <span className="text-white text-lg ml-2">4.9</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Content */}
                      <div className="p-8">
                        {/* Description */}
                        <p className="text-gray-700 mb-6 leading-relaxed text-base">
                          {language === 'en' ? tour.longDescriptionEn : tour.longDescription}
                        </p>

                        {/* Accessibility Features */}
                        {tour.accessibilityOverview && (
                          <div className="mb-6">
                            <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center">
                              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {language === 'en' ? 'Accessibility Features' : 'Erişilebilirlik Özellikleri'}
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                                  </svg>
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-gray-900">{language === 'en' ? 'Accommodation' : 'Konaklama'}</p>
                                  <p className="text-xs text-gray-600">{language === 'en' ? 'Accessible rooms' : 'Erişilebilir odalar'}</p>
                                </div>
                              </div>

                              <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                  </svg>
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-gray-900">{language === 'en' ? 'Transportation' : 'Ulaşım'}</p>
                                  <p className="text-xs text-gray-600">{language === 'en' ? 'Lift & ramp vehicles' : 'Asansörlü araçlar'}</p>
                                </div>
                              </div>

                              <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                  </svg>
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-gray-900">{language === 'en' ? 'Support Staff' : 'Destek Personeli'}</p>
                                  <p className="text-xs text-gray-600">{language === 'en' ? '24/7 assistance' : '7/24 yardım'}</p>
                                </div>
                              </div>

                              <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2m-6 0h8m-8 0a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2" />
                                  </svg>
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-gray-900">{language === 'en' ? 'Sign Language' : 'İşaret Dili'}</p>
                                  <p className="text-xs text-gray-600">{language === 'en' ? 'Interpreter support' : 'Tercüman desteği'}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Price Section */}
                        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 mb-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-sm text-gray-600 block">{currentContent.price}</span>
                              <span className="text-4xl font-bold text-blue-600">
                                €{tour.price}
                              </span>
                              <span className="text-sm text-gray-500 ml-2">{currentContent.perPerson}</span>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center text-yellow-500 mb-2">
                                {'★'.repeat(5)}
                              </div>
                              <span className="text-sm text-gray-600">4.9 (150+ {currentContent.reviews})</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-4">
                          <Link
                            to={language === 'tr' ? `/tur/${tour.slug}` : `/tour/${tour.slug}`}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-xl font-bold text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
                          >
                            <span>{currentContent.viewDetails}</span>
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                          <Link
                            to={`/reservation?tour=${tour.id}`}
                            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 px-6 rounded-xl font-bold text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
                          >
                            <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{currentContent.bookNow}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }

              // Regular tour cards for other tours
              return (
              <div
                key={tour.id}
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
                    <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${getAccessibilityColor(language === 'en' ?
                        (typeof tour.accessibilityEn === 'string' ? tour.accessibilityEn : 'Fully accessible') :
                        (typeof tour.accessibility === 'string' ? tour.accessibility : 'Tam erişilebilir')
                      )}`}>
                      ♿ {language === 'en' ?
                          (typeof tour.accessibilityEn === 'string' ? tour.accessibilityEn : 'Fully accessible') :
                          (typeof tour.accessibility === 'string' ? tour.accessibility : 'Tam erişilebilir')
                        }
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
                    <Link
                      to={language === 'tr' ? `/tur/${tour.slug}` : `/tour/${tour.slug}`}
                      className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-3 px-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group text-sm"
                    >
                      <span>{currentContent.viewDetails}</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link
                      to={`/reservation?tour=${tour.id}`}
                      className="w-full bg-white hover:bg-gray-50 text-gray-800 py-2 px-4 rounded-xl font-medium text-center transition-all duration-300 border-2 border-gray-200 hover:border-orange-300 flex items-center justify-center group text-sm"
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
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ToursPage
