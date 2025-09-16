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

      {/* Hero Section - Enhanced */}
      <div
        className="relative py-32 overflow-hidden"
        style={{
          backgroundImage: 'url(https://demo2.wpopal.com/havezic/wp-content/uploads/2024/07/h1_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Enhanced Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 via-orange-500/85 to-pink-600/90"></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-16 text-orange-300 opacity-20">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>

        <div className="absolute bottom-24 right-20 text-pink-300 opacity-15">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Accessible Tourism
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            {currentContent.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            {currentContent.subtitle}
          </p>
        </div>
      </div>

      {/* Tours Section */}
      <div className="bg-gradient-to-br from-orange-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500 to-pink-500 text-white mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Our Tours
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Accessible Istanbul Tours</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the beauty of Istanbul with our specially designed accessible tours, perfect for travelers with mobility needs
            </p>
          </div>

          {/* Tour Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {toursData.map((tour, index) => (
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
                    <Link
                      to={`/tour/${tour.slug}`}
                      className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-3 px-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group text-sm"
                    >
                      <span>{currentContent.viewDetails}</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link
                      to="/reservation"
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
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ToursPage
