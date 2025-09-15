import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import PhotoGallery from '../components/PhotoGallery'
import TestimonialsSection from '../components/TestimonialsSection'
import AccessibilityToolsGallery from '../components/AccessibilityToolsGallery'

const HomePage = () => {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Havezic Style with Masonry Gallery */}
      <section
        id="home"
        className="relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://demo2.wpopal.com/havezic/wp-content/uploads/2024/07/h1_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
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
        <div className="relative z-10 min-h-full flex items-center pt-4">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="block mb-2 relative animate-float-up">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 animate-subtle-glow">
                      "{t('heroSlogan')}"
                    </span>
                    {/* Decorative elements */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-orange-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s'}}></div>
                    <div className="absolute -top-1 -right-3 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-bounce" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute -bottom-2 left-1/4 w-2 h-2 bg-red-400 rounded-full opacity-70 animate-bounce" style={{animationDelay: '1s'}}></div>
                    <div className="absolute -bottom-1 right-1/3 w-2 h-2 bg-orange-300 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1.5s'}}></div>
                  </span>
                  <span className="block text-gray-800 relative">
                    pibawingsmobility.com
                    {/* Subtle underline animation */}
                    <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-pulse" style={{width: '60%'}}></div>
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
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
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                  <Link
                    to="/tours"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t('exploreTours')}
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-900 font-semibold rounded-full border-2 border-gray-300 hover:bg-white hover:border-orange-500 hover:text-orange-600 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {t('contactUs')}
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">500+</div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">
                      {t('happyTravelers')}
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">15+</div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">
                      {t('destinations')}
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">4.9</div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">
                      {t('customerRating')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Pinterest Style Masonry Gallery */}
              <div className="relative">
                {/* Masonry Grid - Pinterest Style */}
                <div className="columns-2 gap-4 space-y-4">
                  {/* Image 1 - Tall - İstanbul Gezisi */}
                  <div className="relative group break-inside-avoid">
                    <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src="https://gezilinki.com/wp-content/uploads/2021/12/2-9.jpg"
                        alt="İstanbul Erişilebilir Gezisi"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-bold text-lg">Istanbul Tour</h3>
                        <p className="text-sm opacity-90">{t('accessibleTour')}</p>
                      </div>
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
                      <div className="absolute bottom-3 left-3 text-white">
                        <h4 className="font-semibold">Accessible Tourism</h4>
                      </div>
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
                        src="https://cdn.listelist.com/wp-content/uploads/2020/07/Ayasofya-tarihi-e1594293139823.jpg"
                        alt="Hagia Sophia Visit"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 text-white">
                        <h4 className="font-semibold">Hagia Sophia</h4>
                      </div>
                    </div>
                  </div>

                  {/* Image 5 - Tall - Topkapı Palace */}
                  <div className="relative group break-inside-avoid">
                    <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src="https://istanbultarihi.ist/assets/uploads/files/cilt-8/topkapi-sarayi/3-topkapi-sarayi-gulhane-tarafindan.jpg"
                        alt="Topkapı Palace"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 text-white">
                        <h4 className="font-semibold">Topkapı Palace</h4>
                      </div>
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
                      <div className="absolute bottom-3 left-3 text-white">
                        <h4 className="font-semibold">Accessible Services</h4>
                      </div>
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

      {/* Popular Tours Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('speciallySelected')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('toursSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tour Card 1 - Accessible Istanbul Tour */}
            <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Accessible Istanbul Tour"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {t('accessibleTour')}
                  </span>
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {t('mostPopular')}
                  </span>
                  <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    4N/5D
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 mr-2">
                      {'★'.repeat(5)}
                    </div>
                    <span className="text-sm font-medium">4.9 (120 {t('reviews')})</span>
                  </div>
                  <div className="text-xs bg-black/30 px-2 py-1 rounded">
                    Tour Code: PBWAI0021
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Accessible Istanbul Tour</h3>
                    <p className="text-sm text-gray-500">(With Wheelchair & Accessible Van)</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-500">€450</div>
                    <div className="text-sm text-gray-500">per person</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  Specially designed 4 nights 5 days tour for people with physical disabilities to discover Istanbul comfortably. All routes are wheelchair accessible with professional English-speaking guide and accessible accommodation.
                </p>

                {/* Tour Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Tour Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Blue Mosque</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Topkapı Palace</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Hagia Sophia</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Bosphorus Tour</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Grand Bazaar</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Dolmabahçe</span>
                  </div>
                </div>

                {/* Tour Details */}
                <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t('duration')}: 4N/5D
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Private Guide
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-2 2m8-2l2 2m-2-2v6a2 2 0 01-2 2H10a2 2 0 01-2-2v-6" />
                    </svg>
                    {t('includes')}: Hotel + {t('lunch')}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Accessible Van
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-2 px-4 rounded-full hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 text-sm">
                    {t('bookNow')}
                  </button>
                  <Link
                    to="/tour/accessible-istanbul-4n5d"
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:border-orange-500 hover:text-orange-600 transition-all duration-300 text-sm text-center"
                  >
                    {t('details')}
                  </Link>
                </div>
              </div>
            </div>

            {/* Tour Card 2 - Accessible Istanbul Tour (3N/4D) */}
            <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Accessible Istanbul Tour 3N/4D"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {t('accessibleTour')}
                  </span>
                  <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {t('boatTour')}
                  </span>
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    3N/4D
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 mr-2">
                      {'★'.repeat(4)}{'☆'}
                    </div>
                    <span className="text-sm font-medium">4.8 (95 {t('reviews')})</span>
                  </div>
                  <div className="text-xs bg-black/30 px-2 py-1 rounded">
                    Tour Code: PBWAI0020
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Accessible Istanbul Tour</h3>
                    <p className="text-sm text-gray-500">(With Wheelchair)</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-500">€350</div>
                    <div className="text-sm text-gray-500">per person</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  Special 3 nights 4 days tour program designed for wheelchair users to discover Istanbul's rich historical and cultural heritage. All points are designed for disabled access with carefully selected disabled-friendly guides.
                </p>

                {/* Tour Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Tour Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Blue Mosque</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Hagia Sophia</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Topkapı Palace</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Basilica Cistern</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Grand Bazaar</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Bosphorus Cruise</span>
                  </div>
                </div>

                {/* Tour Details */}
                <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t('duration')}: 3N/4D
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Private Guide
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-2 2m8-2l2 2m-2-2v6a2 2 0 01-2 2H10a2 2 0 01-2-2v-6" />
                    </svg>
                    {t('includes')}: Hotel + {t('lunch')}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Wheelchair Van
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-2 px-4 rounded-full hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 text-sm">
                    {t('bookNow')}
                  </button>
                  <Link
                    to="/tour/accessible-istanbul-3n4d"
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:border-orange-500 hover:text-orange-600 transition-all duration-300 text-sm text-center"
                  >
                    {t('details')}
                  </Link>
                </div>
              </div>
            </div>

            {/* Tour Card 3 - Accessible Istanbul One Day */}
            <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://itpweb.s3.eu-west-1.amazonaws.com/istnew%2Ftopkapi_palace1.jpg"
                  alt="Accessible Istanbul One Day Tour"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {t('accessibleTour')}
                  </span>
                  <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    One Day
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 mr-2">
                      {'★'.repeat(5)}
                    </div>
                    <span className="text-sm font-medium">4.9 (87 {t('reviews')})</span>
                  </div>
                  <div className="text-xs bg-black/30 px-2 py-1 rounded">
                    Tour Code: PBWAI0019
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Accessible Istanbul One Day</h3>
                    <p className="text-sm text-gray-500">(With Wheelchair)</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-500">€120</div>
                    <div className="text-sm text-gray-500">per person</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  Specially designed one-day wheelchair accessible tour to discover Istanbul's historical and cultural beauties. Visit Hagia Sophia, Topkapi Palace, Grand Bazaar and Hippodrome with specially arranged routes and disabled-friendly services for an unforgettable experience.
                </p>

                {/* Tour Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Places to Visit:</h4>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Hagia Sophia</span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Topkapı Palace</span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Blue Mosque</span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Hippodrome</span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Grand Bazaar</span>
                  </div>
                </div>

                {/* Tour Details */}
                <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t('duration')}: 8 {t('hours')}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Start: 09:00
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-2 2m8-2l2 2m-2-2v6a2 2 0 01-2 2H10a2 2 0 01-2-2v-6" />
                    </svg>
                    {t('includes')}: {t('lunch')}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Wheelchair Accessible
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-2 px-4 rounded-full hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 text-sm">
                    {t('bookNow')}
                  </button>
                  <Link
                    to="/tour/accessible-istanbul-one-day"
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:border-orange-500 hover:text-orange-600 transition-all duration-300 text-sm text-center"
                  >
                    {t('details')}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* View All Tours Button */}
          <div className="text-center mt-12">
            <Link
              to="/tours"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t('viewAllTours')}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

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

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl border border-orange-100 hover:shadow-lg transition-all duration-300">
              <div className="text-5xl font-bold text-orange-500 mb-2">1,200+</div>
              <div className="text-gray-600 font-semibold">{t('happyCustomers')}</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="text-5xl font-bold text-blue-500 mb-2">8</div>
              <div className="text-gray-600 font-semibold">{t('yearsExperience')}</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="text-5xl font-bold text-green-500 mb-2">98%</div>
              <div className="text-gray-600 font-semibold">{t('customerScore')}</div>
            </div>
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

      {/* Accessibility Tools Gallery Section */}
      <AccessibilityToolsGallery />

      {/* Photo Gallery Section */}
      <PhotoGallery />

      {/* Testimonials Section */}
      <TestimonialsSection />

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