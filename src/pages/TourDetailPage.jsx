import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import { toursData } from '../data/toursData'

const TourDetailPage = () => {
  const { slug } = useParams()
  const { language } = useLanguage()
  const [tour, setTour] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedImage, setSelectedImage] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showQuestionForm, setShowQuestionForm] = useState(false)
  const [questionForm, setQuestionForm] = useState({
    name: '',
    email: '',
    phone: '',
    question: ''
  })

  useEffect(() => {
    const foundTour = toursData.find(t => t.slug === slug)
    setTour(foundTour)
    if (foundTour) {
      setSelectedImage(0)
    }
  }, [slug])

  if (!tour) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Tour Not Found' : 'Tur Bulunamadı'}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {language === 'en' 
                ? 'The tour you are looking for does not exist.' 
                : 'Aradığınız tur mevcut değil.'}
            </p>
            <Link
              to="/"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {language === 'en' ? 'Back to Home' : 'Ana Sayfaya Dön'}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const content = {
    en: {
      overview: 'Overview',
      itinerary: 'Itinerary',
      accessibility: 'Accessibility',
      inclusions: 'Inclusions/Exclusions',
      extraServices: 'Extra Services',
      reviews: 'Reviews',
      gallery: 'Gallery',
      duration: 'Duration',
      price: 'Price',
      features: 'Features',
      highlights: 'Highlights',
      bookNow: 'Book Now',
      backToTours: 'Back to Tours',
      participantPhotos: 'Participant Photos',
      readMore: 'Read More',
      readLess: 'Read Less',
      minutes: 'minutes',
      rating: 'Rating',
      noReviews: 'No reviews yet',
      priceIncludes: 'Price Includes',
      priceExcludes: 'Price Excludes',
      additionalServices: 'Additional Services'
    },
    tr: {
      overview: 'Genel Bakış',
      itinerary: 'Program',
      accessibility: 'Erişilebilirlik',
      inclusions: 'Inclusions/Exclusions',
      extraServices: 'Ekstra Hizmetler',
      reviews: 'Yorumlar',
      gallery: 'Galeri',
      duration: 'Süre',
      price: 'Fiyat',
      features: 'Özellikler',
      highlights: 'Öne Çıkanlar',
      bookNow: 'Rezervasyon Yap',
      backToTours: 'Turlara Dön',
      participantPhotos: 'Katılımcı Fotoğrafları',
      readMore: 'Devamını Oku',
      readLess: 'Daha Az Göster',
      minutes: 'dakika',
      rating: 'Puan',
      noReviews: 'Henüz yorum yok',
      priceIncludes: 'Fiyata Dahil',
      priceExcludes: 'Fiyata Dahil Değil',
      additionalServices: 'Ek Hizmetler'
    }
  }

  const currentContent = content[language]
  const title = language === 'en' ? tour.titleEn : tour.title
  const description = language === 'en' ? tour.longDescriptionEn : tour.longDescription
  const features = language === 'en' ? tour.featuresEn : tour.features
  const highlights = language === 'en' ? tour.highlightsEn : tour.highlights
  const duration = language === 'en' ? tour.durationEn : tour.duration
  const accessibility = language === 'en' ? tour.accessibilityEn : tour.accessibility
  const itinerary = tour.itinerary || []
  const reviews = tour.reviews || []

  const tabs = [
    { id: 'overview', label: currentContent.overview },
    { id: 'itinerary', label: currentContent.itinerary },
    { id: 'inclusions', label: currentContent.inclusions },
    { id: 'extraServices', label: currentContent.extraServices },
    { id: 'reviews', label: currentContent.reviews },
    { id: 'gallery', label: currentContent.gallery }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Refined Hero Section */}
      <div className="relative">
        <div className="relative h-96 overflow-hidden">
          <img
            src={tour.mainImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

          {/* Floating Elements */}
          <div className="absolute top-6 right-6">
            <div className="flex space-x-2">
              <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Accessibility Badge */}
          <div className="absolute top-6 left-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-500 text-white">
              ♿ {accessibility}
            </span>
          </div>

          {/* Main Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full p-6 md:p-8">
              <div className="max-w-4xl">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-medium">
                    {duration}
                  </span>
                  <div className="flex items-center text-yellow-400">
                    {'★'.repeat(5)}
                    <span className="text-white ml-2 text-sm">(4.9)</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">{title}</h1>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mb-4">
                  {language === 'en' ? tour.shortDescriptionEn : tour.shortDescription}
                </p>

                <div className="flex items-center space-x-4">
                  <div className="text-white">
                    <span className="text-2xl md:text-3xl font-bold text-orange-400">
                      {tour.price} {language === 'en' ? tour.currencyEn : tour.currency}
                    </span>
                    <span className="text-sm ml-2 opacity-80">{language === 'en' ? 'per person' : 'kişi başı'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Content */}
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
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-orange-50/90 to-pink-50/95"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Enhanced Main Content */}
            <div className="lg:col-span-2">
              {/* Enhanced Navigation Tabs */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl mb-8 shadow-lg">
                {/* Mobile Dropdown */}
                <div className="md:hidden p-4">
                  <div className="relative">
                    <button
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold"
                    >
                      <span>{tabs.find(tab => tab.id === activeTab)?.label}</span>
                      <svg className={`w-5 h-5 transition-transform duration-200 ${mobileMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileMenuOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 z-10">
                        {tabs.map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => {
                              setActiveTab(tab.id);
                              setMobileMenuOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 hover:bg-gray-50 first:rounded-t-xl last:rounded-b-xl transition-colors duration-200 ${
                              activeTab === tab.id ? 'bg-orange-50 text-orange-600 font-semibold' : 'text-gray-700'
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Desktop Tabs */}
                <div className="hidden md:block p-4">
                  <nav className="grid grid-cols-3 gap-4 mb-4">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-6 px-6 rounded-xl font-bold text-base transition-all duration-300 text-center ${
                          activeTab === tab.id
                            ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg transform scale-105'
                            : 'text-gray-700 hover:text-gray-900 hover:bg-white/70 bg-white/50'
                        }`}
                      >
                        <div className="flex flex-col items-center space-y-2">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span className="leading-tight">{tab.label}</span>
                        </div>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Enhanced Tab Content */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10">
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500 to-pink-500 text-white mb-4">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Tour Overview
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        {currentContent.overview}
                      </h2>
                    </div>

                    {/* Main Description */}
                    <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-8">
                      <p className="text-gray-800 leading-relaxed text-lg md:text-xl mb-6">
                        {language === 'en'
                          ? "Guests will explore Byzantine and Ottoman heritage, experience historic bazaars, enjoy scenic views from the Bosphorus and Çamlıca Hill, and discover modern vibrant neighborhood Kadıköy - all with barrier-free access wherever possible."
                          : "Misafirlerimiz Bizans ve Osmanlı mirasını keşfedecek, tarihi çarşıları deneyimleyecek, Boğaz ve Çamlıca Tepesi'nden manzaraların tadını çıkaracak ve modern canlı mahalle Kadıköy'ü keşfedecekler - mümkün olan her yerde engelsiz erişimle."
                        }
                      </p>

                      {/* Accessibility Features List */}
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <span className="text-orange-500 font-bold text-lg">*</span>
                          <p className="text-gray-700 leading-relaxed">
                            {language === 'en'
                              ? "Accommodation in accessible rooms with low beds, wide doors and grab bars in the bathroom."
                              : "Alçak yataklar, geniş kapılar ve banyoda tutunma barları olan erişilebilir odalarda konaklama."
                            }
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-orange-500 font-bold text-lg">*</span>
                          <p className="text-gray-700 leading-relaxed">
                            {language === 'en'
                              ? "Transportation by vehicles with lifts and ramps."
                              : "Asansörlü ve rampalı araçlarla ulaşım."
                            }
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-orange-500 font-bold text-lg">*</span>
                          <p className="text-gray-700 leading-relaxed">
                            {language === 'en'
                              ? "Accessibility checks have been made in each location in advance, ramps and alternative entrances have been planned."
                              : "Her lokasyonda önceden erişilebilirlik kontrolleri yapılmış, rampalar ve alternatif girişler planlanmış."
                            }
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-orange-500 font-bold text-lg">*</span>
                          <p className="text-gray-700 leading-relaxed">
                            {language === 'en'
                              ? "Sign language interpreter support for the hearing impaired."
                              : "İşitme engelliler için işaret dili tercüman desteği."
                            }
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-orange-500 font-bold text-lg">*</span>
                          <p className="text-gray-700 leading-relaxed">
                            {language === 'en'
                              ? "Support staff available throughout the tour to assist as needed."
                              : "Tur boyunca gerektiğinde yardım etmek için destek personeli mevcuttur."
                            }
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-orange-500 font-bold text-lg">*</span>
                          <p className="text-gray-700 leading-relaxed">
                            {language === 'en'
                              ? "Frequent scheduled rest breaks."
                              : "Sık planlanan dinlenme molaları."
                            }
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Accessibility Section */}
                    <div className="mt-12">
                      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        {language === 'en' ? 'Accessibility Information' : 'Erişilebilirlik Bilgileri'}
                      </h3>

                      <div className="space-y-6">
                        {/* Hippodrome */}
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {language === 'en' ? 'Hippodrome' : 'Hipodrom'}
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Wheelchair Users' : 'Tekerlekli Sandalye Kullanıcıları'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'Wide and flat, open square' : 'Geniş ve düz, açık meydan'}</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Hearing Impaired' : 'İşitme Engelliler'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'Visually rich, sign language translator' : 'Görsel açıdan zengin, işaret dili tercümanı'}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Topkapi Palace */}
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {language === 'en' ? 'Topkapi Palace' : 'Topkapı Sarayı'}
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Wheelchair Users' : 'Tekerlekli Sandalye Kullanıcıları'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'Large courtyards mostly flat. Some sections are accessible via ramps. Gardens are suitable for relaxation.' : 'Büyük avlular çoğunlukla düz. Bazı bölümler rampalarla erişilebilir. Bahçeler dinlenmek için uygundur.'}</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Hearing Impaired' : 'İşitme Engelliler'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'Visual architecture and artifacts. Sign language translator' : 'Görsel mimari ve eserler. İşaret dili tercümanı'}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Hagia Sophia */}
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {language === 'en' ? 'Hagia Sophia' : 'Ayasofya'}
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Wheelchair Users' : 'Tekerlekli Sandalye Kullanıcıları'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'There are wide entrance doors and ramps. Ground floor fully accessible; upper gallery not accessible. Large, open space suitable for wheelchairs.' : 'Geniş giriş kapıları ve rampalar var. Zemin kat tamamen erişilebilir; üst galeri erişilebilir değil. Tekerlekli sandalyeler için uygun geniş, açık alan.'}</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Hearing Impaired' : 'İşitme Engelliler'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'Stunning visuals, main experience is architectural and visual. Sign language translator.' : 'Muhteşem görseller, ana deneyim mimari ve görseldir. İşaret dili tercümanı.'}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Grand Bazaar */}
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {language === 'en' ? 'Grand Bazaar' : 'Kapalıçarşı'}
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Wheelchair Users' : 'Tekerlekli Sandalye Kullanıcıları'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'There are straight main roads.' : 'Düz ana yollar vardır.'}</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Hearing Impaired' : 'İşitme Engelliler'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'Sign language guide/translator' : 'İşaret dili rehberi/tercümanı'}</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Visually Impaired' : 'Görme Engelliler'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'Guided "touch shopping".' : 'Rehberli "dokunarak alışveriş".'}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Spice Market */}
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {language === 'en' ? 'Spice Market' : 'Mısır Çarşısı'}
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Wheelchair Users' : 'Tekerlekli Sandalye Kullanıcıları'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'Wheelchair-accessible main roads.' : 'Tekerlekli sandalye erişilebilir ana yollar.'}</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Hearing Impaired' : 'İşitme Engelliler'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'Market is a sensory, visual experience (spices, colors, goods). Seller shouting is not essential to enjoy. Sign language guide/translator.' : 'Çarşı duyusal, görsel bir deneyimdir (baharatlar, renkler, mallar). Satıcı bağırması keyif almak için gerekli değildir. İşaret dili rehberi/tercümanı.'}</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Visually Impaired' : 'Görme Engelliler'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'Introducing spices by smell.' : 'Baharatları koku ile tanıtma.'}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Basilica Cistern */}
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {language === 'en' ? 'Basilica Cistern' : 'Yerebatan Sarnıcı'}
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Wheelchair Users' : 'Tekerlekli Sandalye Kullanıcıları'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'There is lift and ramped entrance.' : 'Asansör ve rampalı giriş vardır.'}</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Hearing Impaired' : 'İşitme Engelliler'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'Strong lighting and dramatic visuals. Sign language guide / translator' : 'Güçlü aydınlatma ve dramatik görseller. İşaret dili rehberi / tercümanı'}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bosphorus Cruise */}
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {language === 'en' ? 'Bosphorus Cruise' : 'Boğaz Turu'}
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Wheelchair Users' : 'Tekerlekli Sandalye Kullanıcıları'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'Public ferries and many private boats ramp accessible.' : 'Halk vapurları ve birçok özel tekne rampa erişilebilir.'}</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Hearing Impaired' : 'İşitme Engelliler'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'Sign language support.' : 'İşaret dili desteği.'}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Dolmabahce Palace */}
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {language === 'en' ? 'Dolmabahce Palace' : 'Dolmabahçe Sarayı'}
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Wheelchair Users' : 'Tekerlekli Sandalye Kullanıcıları'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'Lift at the entrance gate to the main hall. No interior lift.' : 'Giriş kapısından ana salona asansör. İç asansör yok.'}</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Hearing Impaired' : 'İşitme Engelliler'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'Sign language translator.' : 'İşaret dili tercümanı.'}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Çamlıca Hill */}
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {language === 'en' ? 'Çamlıca Hill' : 'Çamlıca Tepesi'}
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Wheelchair Users' : 'Tekerlekli Sandalye Kullanıcıları'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'Accessible terraces and ramps. There is accessible restaurant on the hill.' : 'Erişilebilir teraslar ve rampalar. Tepede erişilebilir restoran vardır.'}</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Hearing Impaired' : 'İşitme Engelliler'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'Panoramic views, visual experience.' : 'Panoramik manzaralar, görsel deneyim.'}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Kadıköy Town */}
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {language === 'en' ? 'Kadıköy Town' : 'Kadıköy'}
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Wheelchair Users' : 'Tekerlekli Sandalye Kullanıcıları'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'Seaside promenade is flat and accessible. Many cafes are barrier-free.' : 'Sahil promenadı düz ve erişilebilir. Birçok kafe engelsizdir.'}</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{language === 'en' ? 'Hearing Impaired' : 'İşitme Engelliler'}</p>
                                <p className="text-gray-700 text-sm">{language === 'en' ? 'Shopping, markets and cafes are visually based. Sign language translator.' : 'Alışveriş, pazarlar ve kafeler görsel tabanlıdır. İşaret dili tercümanı.'}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              )}

              {activeTab === 'itinerary' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {currentContent.itinerary}
                  </h2>
                  {itinerary.length > 0 ? (
                    <div className="space-y-6">
                      {itinerary.map((item, index) => (
                        <div key={index} className="flex">
                          <div className="flex-shrink-0 w-20 text-center">
                            <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                              {item.time}
                            </div>
                          </div>
                          <div className="ml-6 flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {language === 'en' ? item.titleEn : item.title}
                            </h3>
                            <p className="text-gray-600 mb-2">
                              {language === 'en' ? item.descriptionEn : item.description}
                            </p>
                            <span className="text-sm text-gray-500">
                              {item.duration} {currentContent.minutes}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">
                      {language === 'en' ? 'Itinerary information coming soon.' : 'Program bilgileri yakında eklenecek.'}
                    </p>
                  )}
                </div>
              )}




              {activeTab === 'inclusions' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {currentContent.inclusions}
                  </h2>

                  <div className="space-y-8">
                    {/* Price Includes Section */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {currentContent.priceIncludes}
                      </h3>
                      <div className="space-y-3">
                        {(language === 'en' ? tour.featuresEn : tour.features)?.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="text-gray-700">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price Excludes Section */}
                    <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {currentContent.priceExcludes}
                      </h3>
                      <div className="space-y-3">
                        {(language === 'en' ? tour.excludesEn : tour.excludes)?.map((exclude, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </div>
                            <p className="text-gray-700">{exclude}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Additional Services Section */}
                    {(tour.additionalServices || tour.additionalServicesEn) && (
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                          </svg>
                          {currentContent.additionalServices}
                        </h3>
                        <div className="space-y-3">
                          {(language === 'en' ? tour.additionalServicesEn : tour.additionalServices)?.map((service, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                              </div>
                              <p className="text-gray-700">{service}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'extraServices' && (
                <div>
                  {/* Header Section */}
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {language === 'en' ? 'OUR OPTIONAL SERVICES' : 'OPSİYONEL HİZMETLERİMİZ'}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                      {language === 'en'
                        ? 'In addition to our standard comfort services for all our guests, you can also take advantage of our optional additional services. You can easily add these services to your tour as needed, allowing you to completely customize your trip.'
                        : 'Tüm misafirlerimiz için standart konfor hizmetlerimize ek olarak, opsiyonel ek hizmetlerimizden de yararlanabilirsiniz. Bu hizmetleri ihtiyacınıza göre kolayca turunuza ekleyebilir, seyahatinizi tamamen kişiselleştirebilirsiniz.'
                      }
                    </p>
                  </div>

                  {tour.extraServices && tour.extraServices.length > 0 ? (
                    <div className="space-y-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        {language === 'en' ? 'Our Optional Services:' : 'Opsiyonel Hizmetlerimiz:'}
                      </h3>

                      {tour.extraServices.map((service, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                          {/* Service Header */}
                          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                                  </svg>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900">
                                  {language === 'en' ? service.titleEn : service.title}
                                </h4>
                              </div>

                              {service.hasSelectButton && (
                                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                                  {language === 'en' ? 'Select' : 'Seç'}
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Service Content */}
                          <div className="p-6">
                            <p className="text-gray-700 leading-relaxed mb-6 text-base">
                              {language === 'en' ? service.descriptionEn : service.description}
                            </p>

                            {/* Service Features */}
                            {service.features && service.features.length > 0 && (
                              <div className="space-y-3">
                                {(language === 'en' ? service.featuresEn : service.features).map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-start space-x-3">
                                    <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                      </svg>
                                    </div>
                                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Price Section */}
                            {service.price && service.price !== 'İletişime geçin' && service.price !== 'Contact us' && (
                              <div className="mt-6 pt-4 border-t border-gray-200">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-gray-600">
                                    {language === 'en' ? 'Starting from' : 'Başlangıç fiyatı'}
                                  </span>
                                  <span className="font-bold text-blue-600 text-lg">
                                    {service.price} {language === 'en' ? service.currencyEn : service.currency}
                                  </span>
                                </div>
                              </div>
                            )}

                            {/* Contact for Price */}
                            {(service.price === 'İletişime geçin' || service.price === 'Contact us') && (
                              <div className="mt-6 pt-4 border-t border-gray-200">
                                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4">
                                  <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-orange-700 font-medium">
                                      {language === 'en' ? 'Contact us for pricing and availability' : 'Fiyat ve müsaitlik için iletişime geçin'}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                        </svg>
                      </div>
                      <p className="text-gray-500 text-lg">
                        {language === 'en' ? 'No extra services available for this tour' : 'Bu tur için ekstra hizmet bulunmamaktadır'}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {currentContent.reviews}
                  </h2>
                  {reviews.length > 0 ? (
                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <div className="flex items-start space-x-4">
                            <img
                              src={review.avatar}
                              alt={review.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-gray-900">{review.name}</h4>
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <svg
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                      }`}
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ))}
                                  <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                                </div>
                              </div>
                              <p className="text-gray-700">
                                {language === 'en' ? review.commentEn : review.comment}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">
                      {currentContent.noReviews}
                    </p>
                  )}
                </div>
              )}

              {activeTab === 'gallery' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {currentContent.gallery}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tour.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                        onClick={() => setSelectedImage(index)}
                      >
                        <img
                          src={image}
                          alt={`${title} - ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

            {/* Enhanced Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sticky top-8">
                <div className="space-y-8">
                  {/* Enhanced Price Section */}
                  <div className="text-center bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-6">
                    <span className="text-sm text-gray-600 block mb-2">Starting from</span>
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
                      {tour.price} {language === 'en' ? tour.currencyEn : tour.currency}
                    </div>
                    <p className="text-gray-600 font-medium">{language === 'en' ? 'per person' : 'kişi başı'}</p>
                    <div className="flex items-center justify-center mt-4 text-yellow-500">
                      {'★'.repeat(5)}
                      <span className="text-gray-600 ml-2 text-sm">(4.9 rating)</span>
                    </div>
                  </div>

                  {/* Enhanced Tour Info */}
                  <div className="space-y-4">
                    <div className="bg-white rounded-2xl p-4 shadow-md">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium">{currentContent.duration}</span>
                        </div>
                        <span className="font-bold text-gray-900 text-lg">{duration}</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow-md">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium">{currentContent.accessibility}</span>
                        </div>
                        <span className="font-bold text-green-600 text-lg">♿ {accessibility}</span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="space-y-4">
                    <Link
                      to="/reservation"
                      className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-5 px-6 rounded-2xl font-bold text-lg text-center transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl block group"
                    >
                      <div className="flex items-center justify-center space-x-3">
                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{currentContent.bookNow}</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>

                    {/* Ask a Question Button */}
                    <button
                      onClick={() => setShowQuestionForm(!showQuestionForm)}
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-4 px-6 rounded-2xl font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                    >
                      <div className="flex items-center justify-center space-x-3">
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{language === 'en' ? 'Ask a Question' : 'Soru Sor'}</span>
                      </div>
                    </button>

                    <Link
                      to={language === 'tr' ? "/turlar" : "/tours"}
                      className="w-full bg-white hover:bg-gray-50 text-gray-800 py-4 px-6 rounded-2xl font-semibold text-center transition-all duration-300 border-2 border-gray-200 hover:border-orange-300 block group"
                    >
                      <div className="flex items-center justify-center space-x-3">
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>{currentContent.backToTours}</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Question Form */}
              {showQuestionForm && (
                <div className="mt-6 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    {language === 'en' ? 'Ask a Question' : 'Soru Sor'}
                  </h3>
                  <form className="space-y-4" onSubmit={(e) => {
                    e.preventDefault();
                    // Form submission logic here
                    alert(language === 'en' ? 'Question submitted successfully!' : 'Sorunuz başarıyla gönderildi!');
                    setQuestionForm({ name: '', email: '', phone: '', question: '' });
                    setShowQuestionForm(false);
                  }}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'en' ? 'Full Name' : 'Ad Soyad'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={questionForm.name}
                        onChange={(e) => setQuestionForm({...questionForm, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                        placeholder={language === 'en' ? 'Enter your full name' : 'Adınızı ve soyadınızı girin'}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'en' ? 'Email Address' : 'E-posta Adresi'} *
                      </label>
                      <input
                        type="email"
                        required
                        value={questionForm.email}
                        onChange={(e) => setQuestionForm({...questionForm, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                        placeholder={language === 'en' ? 'Enter your email address' : 'E-posta adresinizi girin'}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'en' ? 'Phone Number' : 'Telefon Numarası'}
                      </label>
                      <input
                        type="tel"
                        value={questionForm.phone}
                        onChange={(e) => setQuestionForm({...questionForm, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                        placeholder={language === 'en' ? 'Enter your phone number' : 'Telefon numaranızı girin'}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'en' ? 'Your Question' : 'Sorunuz'} *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={questionForm.question}
                        onChange={(e) => setQuestionForm({...questionForm, question: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 resize-none"
                        placeholder={language === 'en' ? 'Please write your question about this tour...' : 'Bu tur hakkındaki sorunuzu yazın...'}
                      />
                    </div>

                    <div className="flex space-x-3">
                      <button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        {language === 'en' ? 'Send Question' : 'Soruyu Gönder'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowQuestionForm(false)}
                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-6 rounded-xl font-semibold transition-all duration-300"
                      >
                        {language === 'en' ? 'Cancel' : 'İptal'}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TourDetailPage
