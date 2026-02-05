import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { toursData } from '../data/toursData';
import pinarSiverekImg from '../assets/pinar-siverek.jpeg';



import vehicle_0 from '../assets/piba-arac/0ab9f16b-6b19-4d8f-91a6-007942b92c92.jpeg';
import vehicle_1 from '../assets/piba-arac/0b1f30e5-0a58-496f-a206-f487c89a2d11.jpeg';
import vehicle_2 from '../assets/piba-arac/1af082ac-6567-43ca-a283-bb901dd418de.jpeg';
import vehicle_3 from '../assets/piba-arac/1ca166f3-7d12-4f76-aba2-4408d0079144.jpeg';
import vehicle_4 from '../assets/piba-arac/2c9e5e6a-00d6-4a46-afbb-8ee4e5d31faf.jpeg';
import vehicle_5 from '../assets/piba-arac/3a3a3063-0834-46d4-a42c-7af0718efe71.jpeg';
import vehicle_6 from '../assets/piba-arac/3db50969-48c6-428e-89f6-13999b30e9b4.jpeg';
import vehicle_7 from '../assets/piba-arac/5c28e09d-1d0b-4f0f-a961-a657ad9d99db.jpeg';
import vehicle_8 from '../assets/piba-arac/6b70498b-3c78-4695-860d-4c3227100269.jpeg';
import vehicle_9 from '../assets/piba-arac/6f645a54-6459-4075-a723-6bfd1bf61627.jpeg';

// Vehicle Slider Component
const VehicleSlider = () => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);

  const vehicles = [
    { id: 1, image: vehicle_0, name: 'Accessible Minivan' },
    { id: 2, image: vehicle_1, name: 'Spacious Interior' },
    { id: 3, image: vehicle_2, name: 'Wheelchair Lift' },
    { id: 4, image: vehicle_3, name: 'Comfortable Seating' },
    { id: 5, image: vehicle_4, name: 'Modern Design' },
    { id: 6, image: vehicle_5, name: 'Safety Features' },
    { id: 7, image: vehicle_6, name: 'Reliable Transport' },
    { id: 8, image: vehicle_7, name: 'Group Travel Ready' },
    { id: 9, image: vehicle_8, name: 'Easy Boarding' },
  ];
  
  const ITEMS_PER_PAGE = 3;
  const pageCount = Math.ceil(vehicles.length / ITEMS_PER_PAGE);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  const currentVehicles = vehicles.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage * ITEMS_PER_PAGE) + ITEMS_PER_PAGE
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" dangerouslySetInnerHTML={{ __html: t('ourVehiclesTitle') }} />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('ourVehiclesSubtitle')}
          </p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[320px]">
            {currentVehicles.map((vehicle) => (
              <div key={vehicle.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate-fade-in">
                <div className="h-64 bg-gray-100 p-4">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-gray-800">{vehicle.name}</h3>
                </div>
              </div>
            ))}
          </div>
          
          {pageCount > 1 && (
            <div className="flex justify-center items-center mt-12 space-x-6">
               <button
                onClick={prevPage}
                className="w-12 h-12 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-orange-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              
              <div className="flex items-center space-x-2">
                {Array.from({ length: pageCount }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentPage ? 'bg-orange-500 w-6' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextPage}
                className="w-12 h-12 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-orange-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          )}
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/vehicles"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t('viewAllVehicles')}
          </Link>
        </div>
      </div>
    </section>
  );
};

// Tour Slider Component
const TourSlider = () => {
  const { t, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // We only want to show the main tours, let's filter them.
  const featuredTours = toursData.filter(tour => ['PBWAI0021', 'PBWAI0019', 'PBWAI0020'].includes(tour.id));

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredTours.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredTours.length) % featuredTours.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  if (featuredTours.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" dangerouslySetInnerHTML={{ __html: t('popularToursTitle') }} />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('popularToursSubtitle')}
          </p>
        </div>
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-orange-600 -translate-x-1/2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-orange-600 translate-x-1/2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredTours.map((tour) => (
                <div key={tour.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center bg-white shadow-xl rounded-3xl overflow-hidden">
                    {/* Tour Image */}
                    <div className="relative h-80 lg:h-96">
                      <img
                        src={tour.image}
                        alt={language === 'en' ? tour.titleEn : tour.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                       <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        {t('accessibleTour')}
                      </div>
                    </div>

                    {/* Tour Info */}
                    <div className="p-8 lg:p-12 space-y-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                          {language === 'en' ? tour.titleEn : tour.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {language === 'en' ? tour.shortDescriptionEn : tour.shortDescription}
                        </p>
                      </div>

                      {/* Quick Info */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                          <span className="font-medium text-gray-700">{t('duration')}: {language === 'en' ? tour.durationEn : tour.duration}</span>
                        </div>
                         <div className="flex items-center space-x-2">
                           <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.28-1.25-.743-1.674M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg>
                          <span className="font-medium text-gray-700">{t('groupSize')}: {language === 'en' ? tour.groupSizeEn : tour.groupSize}</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Link
                          to={`/tour/${tour.slug}`}
                          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          {t('viewDetails')}
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
            {featuredTours.map((_, index) => (
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
      </div>
    </section>
  );
};

const HomePage = () => {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
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
        <div className="absolute inset-0 bg-white/20"></div>
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
        <div className="relative z-10 min-h-screen flex items-center py-8 sm:py-12 lg:py-0">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-6 py-3 bg-orange-500/20 backdrop-blur-sm rounded-full border border-orange-500/30 mb-8">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></span>
                  <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
                    {t('accessibleTravel')}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  <span className="block mb-1 sm:mb-2 relative animate-float-up">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 animate-subtle-glow">
                      "{t('heroSlogan')}"
                    </span>
                    <div className="hidden sm:block absolute -top-2 -left-2 w-4 h-4 bg-orange-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s'}}></div>
                    <div className="hidden sm:block absolute -top-1 -right-3 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-bounce" style={{animationDelay: '0.5s'}}></div>
                    <div className="hidden sm:block absolute -bottom-2 left-1/4 w-2 h-2 bg-red-400 rounded-full opacity-70 animate-bounce" style={{animationDelay: '1s'}}></div>
                    <div className="hidden sm:block absolute -bottom-1 right-1/3 w-2 h-2 bg-orange-300 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1.5s'}}></div>
                  </span>
                  <span className="block text-gray-800 relative text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                    PibaWings Mobility
                    <div className="absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 sm:h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-pulse" style={{width: '60%'}}></div>
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  {t('heroSubtitle')}
                </p>
                <div className="mb-8 animate-slide-in-up" style={{animationDelay: '0.5s'}}>
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 mr-3 animate-scale-in" style={{animationDelay: '0.7s'}}></div>
                    <span className="text-sm text-gray-500 font-medium uppercase tracking-widest animate-fade-in" style={{animationDelay: '0.9s'}}>
                      Accessible Tourism Solutions
                    </span>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 ml-3 animate-scale-in" style={{animationDelay: '1.1s'}}></div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
                  <Link
                    to={language === 'tr' ? "/turlar" : "/tours"}
                    className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t('viewTours')}
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
              <div className="relative">
                <div className="block lg:hidden">
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
                <div className="hidden lg:block columns-2 gap-4 space-y-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      <TourSlider />

      {/* Pınar Siverek Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 mb-6">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                {language === 'en' ? 'Founder & Visionary' : 'Kurucu & Vizyoner'}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-6">
                <div className="relative">
                  <img
                    src={pinarSiverekImg}
                    alt="Pınar Siverek"
                    className="w-full h-[550px] object-contain object-center rounded-2xl"
                  />
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
            <div className="space-y-8">
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
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {language === 'en'
                    ? 'For 24 years, I\'ve been a professional tour guide, accompanying thousands of travelers to their dreams. I\'ve seen that traveling isn\'t just a vacation; it\'s about freedom, happiness, and enjoying life. However, the challenges faced by people with disabilities and the elderly in traveling have always captured my attention.'
                    : '24 yıldır profesyonel turist rehberi olarak binlerce gezgini hayallerine eşlik ettim. Seyahat etmenin sadece bir tatil olmadığını; özgürlük, mutluluk ve hayatın tadını çıkarma olduğunu gördüm. Ancak engelli ve yaşlı bireylerin seyahatte yaşadığı zorluklar hep dikkatimi çekti.'
                  }
                </p>
              </div>
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


      <VehicleSlider />

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
