import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
// import PhotoGallery from '../components/PhotoGallery' // Temporarily disabled - will be enabled when our own photos are ready
// import TestimonialsSection from '../components/TestimonialsSection' // Guest Comments temporarily disabled

// import { toursData } from '../data/toursData' // Tours removed from homepage

// Import vehicle images from assets
import vehicle1 from '../assets/491dbc1a-2ddd-4a3c-a8db-c47bd2ac388f-min.jpeg'
import vehicle2 from '../assets/40967285-7162-45c6-b24c-7ccac9126504-min.jpeg'
import vehicle3 from '../assets/b36f1069-f66f-432d-b302-1a22021bdb58-min.jpeg'
import vehicle4 from '../assets/c3394750-8887-43b0-aee6-13fdfe28f056-min.jpeg'
import vehicle5 from '../assets/e1ff3bb4-5e16-46a5-8cfc-1b416b5b7b11-min.jpeg'
import vehicle6 from '../assets/491dbc1a-2ddd-4a3c-a8db-c47bd2ac388f-min.jpg'

// Vehicle Slider Component
const VehicleSlider = () => {
  const { language } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  // Vehicle data with assets images
  const vehicles = [
    {
      id: 1,
      image: vehicle1,
      title: language === 'en' ? 'Accessible Transport Vehicle' : 'Erişilebilir Ulaşım Aracı',
      model: 'Fiat Doblo XL',
      features: [
        language === 'en' ? 'Wheelchair Accessible' : 'Tekerlekli Sandalye Erişilebilir',
        language === 'en' ? 'Lift System' : 'Lift Sistemi',
        language === 'en' ? 'Air Conditioning' : 'Klima Sistemi'
      ]
    },
    {
      id: 2,
      image: vehicle2,
      title: language === 'en' ? 'Comfort Transport Vehicle' : 'Konfor Ulaşım Aracı',
      model: 'Mercedes Sprinter',
      features: [
        language === 'en' ? 'Spacious Interior' : 'Geniş İç Mekan',
        language === 'en' ? 'Premium Comfort' : 'Premium Konfor',
        language === 'en' ? 'Safety Systems' : 'Güvenlik Sistemleri'
      ]
    },
    {
      id: 3,
      image: vehicle3,
      title: language === 'en' ? 'Special Needs Vehicle' : 'Özel İhtiyaç Aracı',
      model: 'Ford Transit',
      features: [
        language === 'en' ? 'Medical Equipment Ready' : 'Tıbbi Ekipman Hazır',
        language === 'en' ? 'Emergency Systems' : 'Acil Durum Sistemleri',
        language === 'en' ? 'Professional Service' : 'Profesyonel Hizmet'
      ]
    },
    {
      id: 4,
      image: vehicle4,
      title: language === 'en' ? 'Premium Accessible Vehicle' : 'Premium Erişilebilir Araç',
      model: 'Volkswagen Crafter',
      features: [
        language === 'en' ? 'Luxury Interior' : 'Lüks İç Mekan',
        language === 'en' ? 'Advanced Safety' : 'Gelişmiş Güvenlik',
        language === 'en' ? 'Climate Control' : 'İklim Kontrolü'
      ]
    },
    {
      id: 5,
      image: vehicle5,
      title: language === 'en' ? 'Multi-Purpose Vehicle' : 'Çok Amaçlı Araç',
      model: 'Iveco Daily',
      features: [
        language === 'en' ? 'Flexible Configuration' : 'Esnek Konfigürasyon',
        language === 'en' ? 'High Capacity' : 'Yüksek Kapasite',
        language === 'en' ? 'Reliable Performance' : 'Güvenilir Performans'
      ]
    },
    {
      id: 6,
      image: vehicle6,
      title: language === 'en' ? 'Executive Transport' : 'Yönetici Ulaşımı',
      model: 'Mercedes V-Class',
      features: [
        language === 'en' ? 'Executive Comfort' : 'Yönetici Konforu',
        language === 'en' ? 'Premium Materials' : 'Premium Malzemeler',
        language === 'en' ? 'Advanced Technology' : 'İleri Teknoloji'
      ]
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % vehicles.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + vehicles.length) % vehicles.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-orange-600"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-orange-600"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slider Container */}
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-3xl">
                {/* Vehicle Image */}
                <div className="relative">
                  <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.title}
                      className="w-full h-64 md:h-80 object-cover"
                    />

                    {/* Accessibility Badge */}
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {language === 'en' ? 'Accessible' : 'Erişilebilir'}
                    </div>
                  </div>
                </div>

                {/* Vehicle Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {vehicle.title}
                    </h3>
                    <p className="text-xl text-orange-600 font-semibold">
                      {vehicle.model}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {vehicle.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Link
                      to="/vehicles"
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      {language === 'en' ? 'View All Vehicles' : 'Tüm Araçları Görüntüle'}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {vehicles.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-orange-600 w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const HomePage = () => {
  const { t, language } = useLanguage()

  // Tours content removed - tours no longer displayed on homepage
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Havezic Style with Masonry Gallery */}
      <section
        id="home"
        className="relative overflow-hidden min-h-screen"
        style={{
          backgroundImage: 'url(https://demo2.wpopal.com/havezic/wp-content/uploads/2024/07/h1_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          marginTop: '-1rem'
        }}
      >
        {/* Light Overlay for readability */}
        <div className="absolute inset-0 bg-white/20"></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 text-orange-400/30 animate-pulse">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>

        <div className="absolute bottom-32 right-16 text-blue-400/20 animate-bounce">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 min-h-screen flex items-center py-8 sm:py-12 lg:py-0">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              {/* Left Content */}
              <div className="text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center px-6 py-3 bg-orange-500/20 backdrop-blur-sm rounded-full border border-orange-500/30 mb-8">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></span>
                  <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
                    {t('accessibleTravel')}
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  <span className="block mb-1 sm:mb-2 relative animate-float-up">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 animate-subtle-glow">
                      "{t('heroSlogan')}"
                    </span>
                    {/* Decorative elements - Hidden on mobile */}
                    <div className="hidden sm:block absolute -top-2 -left-2 w-4 h-4 bg-orange-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s'}}></div>
                    <div className="hidden sm:block absolute -top-1 -right-3 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-bounce" style={{animationDelay: '0.5s'}}></div>
                    <div className="hidden sm:block absolute -bottom-2 left-1/4 w-2 h-2 bg-red-400 rounded-full opacity-70 animate-bounce" style={{animationDelay: '1s'}}></div>
                    <div className="hidden sm:block absolute -bottom-1 right-1/3 w-2 h-2 bg-orange-300 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1.5s'}}></div>
                  </span>
                  <span className="block text-gray-800 relative text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                    PibaWings Mobility
                    {/* Subtle underline animation */}
                    <div className="absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 sm:h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-pulse" style={{width: '60%'}}></div>
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  {t('heroSubtitle')}
                </p>

                {/* Brand Tagline */}
                <div className="mb-8 animate-slide-in-up" style={{animationDelay: '0.5s'}}>
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 mr-3 animate-scale-in" style={{animationDelay: '0.7s'}}></div>
                    <span className="text-sm text-gray-500 font-medium uppercase tracking-widest animate-fade-in" style={{animationDelay: '0.9s'}}>
                      Accessible Tourism Solutions
                    </span>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 ml-3 animate-scale-in" style={{animationDelay: '1.1s'}}></div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
                  <Link
                    to={language === 'tr' ? "/turlar" : "/tours"}
                    className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t('exploreTours')}
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white/90 backdrop-blur-sm text-gray-900 font-semibold rounded-full border-2 border-gray-300 hover:bg-white hover:border-orange-500 hover:text-orange-600 transition-all duration-300 text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {t('contactUs')}
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  <div className="text-center lg:text-left">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 mb-1 sm:mb-2">500+</div>
                    <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">
                      {t('happyTravelers')}
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 mb-1 sm:mb-2">15+</div>
                    <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">
                      {t('destinations')}
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 mb-1 sm:mb-2">4.9</div>
                    <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">
                      {t('customerRating')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Responsive Gallery */}
              <div className="relative">
                {/* Mobile: Simple Grid, Desktop: Masonry */}
                <div className="block lg:hidden">
                  {/* Mobile Grid - 2 columns */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="relative group">
                        <div className="relative h-32 sm:h-40 rounded-2xl overflow-hidden shadow-xl">
                          <img
                            src="https://gezilinki.com/wp-content/uploads/2021/12/2-9.jpg"
                            alt="İstanbul Erişilebilir Gezisi"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                      </div>
                      <div className="relative group">
                        <div className="relative h-24 sm:h-32 rounded-2xl overflow-hidden shadow-xl">
                          <img
                            src="/pibawings3.jpeg"
                            alt="Piba Wings Travel"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                      </div>
                      <div className="relative group">
                        <div className="relative h-28 sm:h-36 rounded-2xl overflow-hidden shadow-xl">
                          <img
                            src="https://www.bencatur.com/wp-content/uploads/2021/02/950205793_1588435982.jpg"
                            alt="Accessible Tourism Services"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="relative group">
                        <div className="relative h-24 sm:h-32 rounded-2xl overflow-hidden shadow-xl">
                          <img
                            src="https://yasadikca.com/wp-content/uploads/2007/12/Engelli-Turizmi-Yasadikca.jpg"
                            alt="Engelli Turizmi"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                      </div>
                      <div className="relative group">
                        <div className="relative h-36 sm:h-44 rounded-2xl overflow-hidden shadow-xl">
                          <img
                            src="/pibawings2.jpeg"
                            alt="Piba Wings Travel Services"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                      </div>
                      <div className="relative group">
                        <div className="relative h-20 sm:h-28 rounded-2xl overflow-hidden shadow-xl">
                          <img
                            src="https://www.turizmguncel.com/img/-/sites/press/turizmguncel/uploads_arsiv/contents/6724/10155013082011.jpg"
                            alt="Accessible Tourism Services"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop: Masonry Grid */}
                <div className="hidden lg:block columns-2 gap-4 space-y-4">
                  {/* Image 1 - Tall - İstanbul Gezisi */}
                  <div className="relative group break-inside-avoid">
                    <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src="https://gezilinki.com/wp-content/uploads/2021/12/2-9.jpg"
                        alt="İstanbul Erişilebilir Gezisi"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                  </div>

                  {/* Image 2 - Medium - Engelli Turizmi */}
                  <div className="relative group break-inside-avoid">
                    <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src="https://yasadikca.com/wp-content/uploads/2007/12/Engelli-Turizmi-Yasadikca.jpg"
                        alt="Engelli Turizmi"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>

                  {/* Image 3 - Short - Erişilebilir Turizm */}
                  <div className="relative group break-inside-avoid">
                    <div className="relative h-32 rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src="https://www.turizmguncel.com/img/-/sites/press/turizmguncel/uploads_arsiv/contents/6724/10155013082011.jpg"
                        alt="Accessible Tourism Services"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>

                  {/* Image 4 - Medium - Ayasofya */}
                  <div className="relative group break-inside-avoid">
                    <div className="relative h-56 rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src="/pibawings3.jpeg"
                        alt="Piba Wings Travel"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>

                  {/* Image 5 - Tall - Topkapı Palace */}
                  <div className="relative group break-inside-avoid">
                    <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src="/pibawings2.jpeg"
                        alt="Piba Wings Travel Services"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>

                  {/* Image 6 - Short - Accessible Tourism */}
                  <div className="relative group break-inside-avoid">
                    <div className="relative h-40 rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src="https://www.bencatur.com/wp-content/uploads/2021/02/950205793_1588435982.jpg"
                        alt="Accessible Tourism Services"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <div className="text-orange-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full p-4 shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tours Section - Removed from homepage */}



      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span dangerouslySetInnerHTML={{ __html: t('whyChooseUsTitle') }} />
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('whyChooseUsSubtitle')}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Full Accessibility */}
            <div className="group text-center p-8 bg-gray-50 rounded-3xl hover:bg-orange-50 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('fullAccessibility')}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{t('fullAccessibilityDesc')}</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('wheelchairRamps')}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('accessibleToilets')}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('audioGuides')}
                </div>
              </div>
            </div>

            {/* Expert Guides */}
            <div className="group text-center p-8 bg-gray-50 rounded-3xl hover:bg-orange-50 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('expertGuides')}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{t('expertGuidesDesc')}</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('certifiedGuides')}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('multiLanguage')}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('localExpertise')}
                </div>
              </div>
            </div>

            {/* Special Vehicles */}
            <div className="group text-center p-8 bg-gray-50 rounded-3xl hover:bg-orange-50 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('specialVehicles')}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{t('specialVehiclesDesc')}</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('wheelchairVans')}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('comfortableSeating')}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('airConditioning')}
                </div>
              </div>
            </div>

            {/* Personalized Service */}
            <div className="group text-center p-8 bg-gray-50 rounded-3xl hover:bg-orange-50 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('personalizedService')}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{t('personalizedServiceDesc')}</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('customItinerary')}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('flexibleTiming')}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('specialNeeds')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden">
        {/* Decorative SVG Elements */}
        <div className="absolute top-10 left-10 text-blue-200 opacity-30">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>

        <div className="absolute bottom-10 right-10 text-orange-200 opacity-20">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 opacity-10">
          <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 mb-6">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                {t('ourVehicles')}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span dangerouslySetInnerHTML={{ __html: t('vehicleFeaturesTitle') }} />
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('vehicleFeaturesSubtitle')}
            </p>
          </div>

          {/* Vehicle Features Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Vehicle Image */}
            <div className="relative">
              {/* TSE Badge */}
              <div className="absolute -top-4 -left-4 z-20">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-8 rounded-2xl shadow-lg transform -rotate-3">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider">TSE</div>
                    <div className="text-xs opacity-90">Standards</div>
                    <div className="text-xs opacity-90">Compliant</div>
                  </div>
                </div>
              </div>

              {/* Vehicle Image */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="https://www.hncotomotiv.com/resimler/268-.jpg"
                  alt="Accessible Vehicle"
                  className="w-full h-auto object-contain"
                />

                {/* Wheelchair Icon Overlay */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7a4 4 0 108 0 4 4 0 00-8 0zM6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Side - Features */}
            <div className="space-y-3">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{t('tseCompliant')}</h3>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{t('disabilityFriendly')}</h3>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{t('fastReliableService')}</h3>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{t('turkeyFirstCompany')}</h3>
                </div>
              </div>

              {/* Description Box */}
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-4 rounded-2xl border border-blue-100">
                <p className="text-gray-700 leading-relaxed">
                  {t('comfortDescription')}
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  to="/vehicles"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  {t('viewDetailsRent')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vehicles Slider Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-orange-500/10 backdrop-blur-sm rounded-full border border-orange-500/20 mb-6">
              <svg className="w-5 h-5 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
                {language === 'en' ? 'Our Fleet' : 'Araç Filomuz'}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'en' ? (
                <>Our <span className="text-orange-600">Vehicles</span></>
              ) : (
                <><span className="text-orange-600">Araçlarımız</span></>
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {language === 'en'
                ? 'Specially equipped vehicles designed for comfort, safety and accessibility for all our guests.'
                : 'Tüm misafirlerimiz için konfor, güvenlik ve erişilebilirlik düşünülerek tasarlanmış özel donanımlı araçlarımız.'
              }
            </p>
          </div>

          <VehicleSlider />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-orange-500/10 backdrop-blur-sm rounded-full border border-orange-500/20 mb-6">
              <svg className="w-5 h-5 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
                {t('aboutUsHome')}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span dangerouslySetInnerHTML={{ __html: t('aboutUsHomeTitle') }} />
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('aboutUsHomeSubtitle')}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Main Description */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('aboutUsDescription')}
                </p>
              </div>

              {/* Mission Box */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {t('ourMission')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('missionText')}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 text-center">
                  <div className="text-2xl font-bold text-orange-500 mb-1">24+</div>
                  <div className="text-sm text-gray-600">{t('experienceYears')}</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 text-center">
                  <div className="text-2xl font-bold text-blue-500 mb-1">1000+</div>
                  <div className="text-sm text-gray-600">{t('happyGuests')}</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 text-center">
                  <div className="text-2xl font-bold text-green-500 mb-1">100%</div>
                  <div className="text-sm text-gray-600">{t('accessibleTours')}</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 text-center">
                  <div className="text-2xl font-bold text-purple-500 mb-1">★★★★★</div>
                  <div className="text-sm text-gray-600">{t('professionalTeam')}</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t('learnMore')}
                </Link>
              </div>
            </div>

            {/* Right Side - Images */}
            <div className="relative">
              {/* Accessibility Badge */}
              <div className="absolute -top-4 -right-4 z-20">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-8 rounded-2xl shadow-lg transform rotate-3">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider">
                      {language === 'en' ? 'Accessible' : 'Erişilebilir'}
                    </div>
                    <div className="text-xs opacity-90">
                      {language === 'en' ? 'Tourism' : 'Turizm'}
                    </div>
                    <div className="text-xs opacity-90">
                      {language === 'en' ? 'Specialist' : 'Uzmanı'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                  alt="Accessible Tourism"
                  className="w-full h-auto object-cover"
                />

                {/* Overlay with accessibility icons */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center justify-center space-x-6">
                    {/* Wheelchair Icon */}
                    <div className="text-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 2a4 4 0 100 8 4 4 0 000-8zM8 11a6 6 0 016 6H2a6 6 0 016-6z"/>
                        </svg>
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        {language === 'en' ? 'Wheelchair' : 'Tekerlekli'}
                      </div>
                      <div className="text-xs text-gray-600">
                        {language === 'en' ? 'Accessible' : 'Sandalye'}
                      </div>
                    </div>

                    {/* Guide Icon */}
                    <div className="text-center">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        {language === 'en' ? 'Professional' : 'Profesyonel'}
                      </div>
                      <div className="text-xs text-gray-600">
                        {language === 'en' ? 'Guide' : 'Rehber'}
                      </div>
                    </div>

                    {/* Safety Icon */}
                    <div className="text-center">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        {language === 'en' ? 'Safe &' : 'Güvenli &'}
                      </div>
                      <div className="text-xs text-gray-600">
                        {language === 'en' ? 'Secure' : 'Emniyetli'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pınar Siverek Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 mb-6">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                {language === 'en' ? 'Founder & Visionary' : 'Kurucu & Vizyoner'}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'en' ? (
                <>Who is <span className="text-blue-600">Pınar Siverek</span>?</>
              ) : (
                <><span className="text-blue-600">Pınar Siverek</span> Kim?</>
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {language === 'en'
                ? 'Meet the visionary behind accessible tourism in Turkey - 24 years of experience, thousands of dreams fulfilled.'
                : 'Türkiye\'de erişilebilir turizmin öncüsü ile tanışın - 24 yıllık deneyim, binlerce gerçekleşen hayal.'
              }
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Photo */}
            <div className="relative">
              {/* Main Photo Container */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-6">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616c9c0e8e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Pınar Siverek"
                    className="w-full h-96 object-cover rounded-2xl"
                  />

                  {/* Professional Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-4 rounded-2xl shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold">24</div>
                      <div className="text-xs uppercase tracking-wider">
                        {language === 'en' ? 'Years' : 'Yıl'}
                      </div>
                      <div className="text-xs opacity-90">
                        {language === 'en' ? 'Experience' : 'Deneyim'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">
                      {language === 'en' ? 'Licensed' : 'Lisanslı'}
                    </div>
                    <div className="text-xs text-gray-600">
                      {language === 'en' ? 'Tour Guide' : 'Turist Rehberi'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* Name and Title */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Pınar SİVEREK
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-1">
                  {language === 'en' ? 'Founder & CEO' : 'Kurucu & CEO'}
                </p>
                <p className="text-lg text-gray-600">
                  Piba Wings Travel Agency
                </p>
              </div>

              {/* Description */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {language === 'en'
                    ? 'For 24 years, I\'ve been a professional tour guide, accompanying thousands of travelers to their dreams. I\'ve seen that traveling isn\'t just a vacation; it\'s about freedom, happiness, and enjoying life. However, the challenges faced by people with disabilities and the elderly in traveling have always captured my attention.'
                    : '24 yıldır profesyonel turist rehberi olarak binlerce gezgini hayallerine eşlik ettim. Seyahat etmenin sadece bir tatil olmadığını; özgürlük, mutluluk ve hayatın tadını çıkarma olduğunu gördüm. Ancak engelli ve yaşlı bireylerin seyahatte yaşadığı zorluklar hep dikkatimi çekti.'
                  }
                </p>
              </div>

              {/* Mission Statement */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900">
                  {language === 'en' ? 'Our Mission' : 'Misyonumuz'}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'en'
                    ? 'As Piba Wings Travel, our vision is to be a pioneer in accessible tourism not only in Turkey but globally. Because we believe: "Every journey should be possible for everyone."'
                    : 'Piba Wings Travel olarak vizyonumuz sadece Türkiye\'de değil, küresel olarak da erişilebilir turizmin öncüsü olmak. Çünkü inanıyoruz ki: "Her yolculuk herkes için mümkün olmalı."'
                  }
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  to="/pinar-siverek"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {language === 'en' ? 'Read Full Story' : 'Tam Hikayeyi Oku'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section - Temporarily disabled */}
      {/* <PhotoGallery /> */}

      {/* Testimonials Section - Guest Comments temporarily disabled */}
      {/* <TestimonialsSection /> */}

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('questions')}
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            {t('contactTeam')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {t('contactUs')}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage