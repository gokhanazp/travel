import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import { toursData } from '../data/toursData'

const ToursPage = () => {
  const { language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('all')

  const content = {
    en: {
      title: 'Our Accessible Tours',
      subtitle: 'Discover Istanbul\'s most beautiful places with our specially designed accessible tours. Every tour is carefully planned for travelers with different needs.',
      allTours: 'All Tours',
      historical: 'Historical Sites',
      cultural: 'Cultural Tours',
      nature: 'Nature Tours',
      duration: 'Duration',
      price: 'Price',
      accessibility: 'Accessibility',
      viewDetails: 'View Details',
      bookNow: 'Book Now',
      features: 'Features',
      highlights: 'Highlights',
      perPerson: 'per person',
      noTours: 'No tours found in this category.'
    },
    tr: {
      title: 'Erişilebilir Turlarımız',
      subtitle: 'Özel olarak tasarlanmış erişilebilir turlarımızla İstanbul\'un en güzel yerlerini keşfedin. Her tur, farklı ihtiyaçları olan gezginler için özenle planlanmıştır.',
      allTours: 'Tüm Turlar',
      historical: 'Tarihi Mekanlar',
      cultural: 'Kültürel Turlar',
      nature: 'Doğa Turları',
      duration: 'Süre',
      price: 'Fiyat',
      accessibility: 'Erişilebilirlik',
      viewDetails: 'Detayları Gör',
      bookNow: 'Rezervasyon Yap',
      features: 'Özellikler',
      highlights: 'Öne Çıkanlar',
      perPerson: 'kişi başı',
      noTours: 'Bu kategoride tur bulunamadı.'
    }
  }

  const currentContent = content[language]

  const categories = [
    { id: 'all', label: currentContent.allTours },
    { id: 'historical', label: currentContent.historical },
    { id: 'cultural', label: currentContent.cultural },
    { id: 'nature', label: currentContent.nature }
  ]

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

  const filteredTours = selectedCategory === 'all' 
    ? toursData 
    : toursData.filter(tour => {
        // Simple category filtering based on tour content
        const title = language === 'en' ? tour.titleEn.toLowerCase() : tour.title.toLowerCase()
        const description = language === 'en' ? tour.longDescriptionEn.toLowerCase() : tour.longDescription.toLowerCase()
        
        switch(selectedCategory) {
          case 'historical':
            return title.includes('mosque') || title.includes('palace') || title.includes('hagia') || 
                   title.includes('cami') || title.includes('saray') || title.includes('ayasofya')
          case 'cultural':
            return title.includes('bazaar') || title.includes('museum') || title.includes('cultural') ||
                   title.includes('çarşı') || title.includes('müze') || title.includes('kültür')
          case 'nature':
            return title.includes('bosphorus') || title.includes('park') || title.includes('garden') ||
                   title.includes('boğaz') || title.includes('park') || title.includes('bahçe')
          default:
            return true
        }
      })

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

      {/* Category Filter Section - Separate */}
      <div className="bg-gradient-to-br from-orange-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500 to-pink-500 text-white mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Filter Tours
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Choose Your Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select from our carefully curated accessible tour categories designed for every type of traveler
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative px-8 py-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-2xl'
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-xl shadow-lg'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${
                    selectedCategory === category.id
                      ? 'bg-white/20'
                      : 'bg-gradient-to-r from-orange-100 to-pink-100 group-hover:from-orange-200 group-hover:to-pink-200'
                  }`}>
                    <svg className={`w-6 h-6 ${
                      selectedCategory === category.id
                        ? 'text-white'
                        : 'text-orange-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <span className="text-lg font-bold">{category.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tours Grid Section */}
      <div
        className="relative py-20"
        style={{
          backgroundImage: 'url(https://demo2.wpopal.com/havezic/wp-content/uploads/2024/07/h1_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Beautiful Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-orange-50/90 to-pink-50/95"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Tours Grid - Enhanced */}
          {filteredTours.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredTours.map((tour, index) => (
                <div
                  key={tour.id}
                  className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Tour Image - Enhanced */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={tour.mainImage}
                      alt={language === 'en' ? tour.titleEn : tour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Accessibility Badge - Enhanced */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm ${getAccessibilityColor(language === 'en' ? tour.accessibilityEn : tour.accessibility)}`}>
                        ♿ {language === 'en' ? tour.accessibilityEn : tour.accessibility}
                      </span>
                    </div>

                    {/* Favorite Button */}
                    <div className="absolute top-4 left-4">
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                        {language === 'en' ? tour.titleEn : tour.title}
                      </h3>
                      <div className="flex items-center text-orange-300">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium">
                          {language === 'en' ? tour.durationEn : tour.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Tour Content - Enhanced */}
                  <div className="p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed text-base line-clamp-3">
                      {language === 'en' ? tour.shortDescriptionEn : tour.shortDescription}
                    </p>

                    {/* Price Section - Enhanced */}
                    <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-4 mb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm text-gray-600 block">{currentContent.price}</span>
                          <span className="text-3xl font-bold text-orange-600">
                            {tour.price} {language === 'en' ? tour.currencyEn : tour.currency}
                          </span>
                          <span className="text-sm text-gray-500 ml-2">{currentContent.perPerson}</span>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-yellow-500 mb-1">
                            {'★'.repeat(5)}
                          </div>
                          <span className="text-sm text-gray-600">4.9 (120+ reviews)</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights - Enhanced */}
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 mb-4 text-lg">{currentContent.highlights}:</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {(language === 'en' ? tour.highlightsEn : tour.highlights).slice(0, 3).map((highlight, idx) => (
                          <div key={idx} className="flex items-center bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700 font-medium">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons - Enhanced */}
                    <div className="space-y-3">
                      <Link
                        to={`/tour/${tour.slug}`}
                        className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-4 px-6 rounded-2xl font-bold text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
                      >
                        <span>{currentContent.viewDetails}</span>
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <Link
                        to="/reservation"
                        className="w-full bg-white hover:bg-gray-50 text-gray-800 py-3 px-6 rounded-2xl font-semibold text-center transition-all duration-300 border-2 border-gray-200 hover:border-orange-300 flex items-center justify-center group"
                      >
                        <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{currentContent.bookNow}</span>
                      </Link>
                    </div>
                </div>
              </div>
            ))}
          </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 max-w-md mx-auto shadow-xl">
                <div className="text-orange-400 mb-6">
                  <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{currentContent.noTours}</h3>
                <p className="text-gray-600 mb-6">Try selecting a different category or view all tours.</p>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {currentContent.allTours}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ToursPage
