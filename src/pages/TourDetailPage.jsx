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
  const [selectedLocation, setSelectedLocation] = useState(null)

  // Accessibility locations data
  const accessibilityLocations = [
    {
      id: 'hippodrome',
      nameEn: 'Hippodrome',
      nameTr: 'Hipodrom',
      image: '/accessibility/hippodrome.jpg',
      wheelchairEn: 'Wide and flat, open square',
      wheelchairTr: 'Geniş ve düz, açık meydan',
      hearingEn: 'Visually rich, sign language translator',
      hearingTr: 'Görsel açıdan zengin, işaret dili tercümanı'
    },
    {
      id: 'blue-mosque',
      nameEn: 'Blue Mosque',
      nameTr: 'Sultanahmet Camii',
      image: 'https://theistanbulinsider.com/wp-content/uploads/2020/03/blue-mosque-aerial.jpg',
      wheelchairEn: 'Entrance ramp and flat courtyard accessible. Inside, carpet flooring may slightly hinder movement.',
      wheelchairTr: 'Giriş rampası ve düz avlu erişilebilir. İçeride halı zemin hareketi biraz engelleyebilir.',
      hearingEn: 'Visual design (domes, tiles, calligraphy), Sign language translator.',
      hearingTr: 'Görsel tasarım (kubbeler, çiniler, hat sanatı), İşaret dili tercümanı.'
    },
    {
      id: 'topkapi-palace',
      nameEn: 'Topkapi Palace',
      nameTr: 'Topkapı Sarayı',
      image: 'https://galatagreenlandhotel.com/wp-content/uploads/2025/07/Topkapi-Palace-istanbul.jpg',
      wheelchairEn: 'Large courtyards mostly flat. Some sections are accessible via ramps. Gardens are suitable for relaxation.',
      wheelchairTr: 'Büyük avlular çoğunlukla düz. Bazı bölümler rampalarla erişilebilir. Bahçeler dinlenmek için uygundur.',
      hearingEn: 'Visual architecture and artifacts. Sign language translator',
      hearingTr: 'Görsel mimari ve eserler. İşaret dili tercümanı'
    },
    {
      id: 'hagia-sophia',
      nameEn: 'Hagia Sophia',
      nameTr: 'Ayasofya',
      image: 'https://cdn-imgix.headout.com/media/images/db8d8e671a6ca9af5cffcc208f8a7846-11984-Istanbul-HistorianGuidedTourofHagiaSophia-10.jpg?auto=format&w=702.4499999999999&h=401.4&q=90&ar=7%3A4&crop=faces&fit=crop',
      wheelchairEn: 'There are wide entrance doors and ramps. Ground floor fully accessible; upper gallery not accessible. Large, open space suitable for wheelchairs.',
      wheelchairTr: 'Geniş giriş kapıları ve rampalar var. Zemin kat tamamen erişilebilir; üst galeri erişilebilir değil. Tekerlekli sandalyeler için uygun geniş, açık alan.',
      hearingEn: 'Stunning visuals, main experience is architectural and visual. Sign language translator.',
      hearingTr: 'Muhteşem görseller, ana deneyim mimari ve görseldir. İşaret dili tercümanı.'
    },
    {
      id: 'grand-bazaar',
      nameEn: 'Grand Bazaar',
      nameTr: 'Kapalıçarşı',
      image: 'https://istanbulapartmentsforsale.com/wp-content/uploads/2020/04/grand-bazaar2.jpg',
      wheelchairEn: 'There are straight main roads.',
      wheelchairTr: 'Düz ana yollar vardır.',
      hearingEn: 'Sign language guide/translator',
      hearingTr: 'İşaret dili rehberi/tercümanı',
      visuallyImpairedEn: 'Guided "touch shopping".',
      visuallyImpairedTr: 'Rehberli "dokunarak alışveriş".'
    },
    {
      id: 'spice-market',
      nameEn: 'Spice Market',
      nameTr: 'Mısır Çarşısı',
      image: '/accessibility/spice-market.jpg',
      wheelchairEn: 'Wheelchair-accessible main roads.',
      wheelchairTr: 'Tekerlekli sandalye erişilebilir ana yollar.',
      hearingEn: 'Market is a sensory, visual experience (spices, colors, goods). Seller shouting is not essential to enjoy. Sign language guide/translator.',
      hearingTr: 'Çarşı duyusal, görsel bir deneyimdir (baharatlar, renkler, mallar). Satıcı bağırması keyif almak için gerekli değildir. İşaret dili rehberi/tercümanı.',
      visuallyImpairedEn: 'Introducing spices by smell.',
      visuallyImpairedTr: 'Baharatları koku ile tanıtma.'
    },
    {
      id: 'basilica-cistern',
      nameEn: 'Basilica Cistern',
      nameTr: 'Yerebatan Sarnıcı',
      image: '/accessibility/basilica-cistern.jpg',
      wheelchairEn: 'There is lift and ramped entrance.',
      wheelchairTr: 'Asansör ve rampalı giriş vardır.',
      hearingEn: 'Strong lighting and dramatic visuals. Sign language guide / translator',
      hearingTr: 'Güçlü aydınlatma ve dramatik görseller. İşaret dili rehberi / tercümanı'
    },
    {
      id: 'bosphorus-cruise',
      nameEn: 'Bosphorus Cruise',
      nameTr: 'Boğaz Turu',
      image: '/accessibility/bosphorus-cruise.jpg',
      wheelchairEn: 'Public ferries and many private boats ramp accessible.',
      wheelchairTr: 'Halk vapurları ve birçok özel tekne rampa erişilebilir.',
      hearingEn: 'Sign language support.',
      hearingTr: 'İşaret dili desteği.'
    },
    {
      id: 'dolmabahce-palace',
      nameEn: 'Dolmabahce Palace',
      nameTr: 'Dolmabahçe Sarayı',
      image: '/accessibility/dolmabahce-palace.jpg',
      wheelchairEn: 'Lift at the entrance gate to the main hall. No interior lift.',
      wheelchairTr: 'Giriş kapısından ana salona asansör. İç asansör yok.',
      hearingEn: 'Sign language translator.',
      hearingTr: 'İşaret dili tercümanı.'
    },
    {
      id: 'camlica-hill',
      nameEn: 'Çamlıca Hill',
      nameTr: 'Çamlıca Tepesi',
      image: '/accessibility/camlica-hill.jpg',
      wheelchairEn: 'Accessible terraces and ramps. There is accessible restaurant on the hill.',
      wheelchairTr: 'Erişilebilir teraslar ve rampalar. Tepede erişilebilir restoran vardır.',
      hearingEn: 'Panoramic views, visual experience.',
      hearingTr: 'Panoramik manzaralar, görsel deneyim.'
    },
    {
      id: 'kadikoy',
      nameEn: 'Kadıköy Town',
      nameTr: 'Kadıköy',
      image: '/accessibility/kadikoy.jpg',
      wheelchairEn: 'Seaside promenade is flat and accessible. Many cafes are barrier-free.',
      wheelchairTr: 'Sahil promenadı düz ve erişilebilir. Birçok kafe engelsizdir.',
      hearingEn: 'Shopping, markets and cafes are visually based. Sign language translator.',
      hearingTr: 'Alışveriş, pazarlar ve kafeler görsel tabanlıdır. İşaret dili tercümanı.'
    }
  ]

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
    { id: 'extraServices', label: currentContent.extraServices },
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
                  <nav className="flex flex-wrap justify-center gap-4 mb-4">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-4 px-8 rounded-xl font-bold text-base transition-all duration-300 whitespace-nowrap ${
                          activeTab === tab.id
                            ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg transform scale-105'
                            : 'text-gray-700 hover:text-gray-900 hover:bg-white/70 bg-white/50'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          {tab.id === 'overview' && (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          )}
                          {tab.id === 'itinerary' && (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          )}
                          {tab.id === 'extraServices' && (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                            </svg>
                          )}
                          {tab.id === 'gallery' && (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          )}
                          <span>{tab.label}</span>
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
                        {tour?.id === 'PBWAI0019'
                          ? (language === 'en'
                              ? "A short and relaxed tour scheduled between 9.00 – 17.00 am. A route combining culture, history and shopping. Accessibility support. The tour includes important and popular touristic places such as Blue Mosque, Hagia Sophia, Topkapi Palace, Grand Bazaar and Hippodrome, and is organized in a way that disabled and elderly people can easily navigate. Access to historical places is provided with a guide and specially arranged routes, while a comfortable tour experience is offered with disabled-friendly services."
                              : "9.00-17.00 saatleri arasında planlanmış kısa ve rahat bir tur. Kültür, tarih ve alışverişi birleştiren bir rota. Erişilebilirlik desteği. Sultanahmet Camii, Ayasofya, Topkapı Sarayı, Kapalıçarşı ve Hipodrom gibi önemli ve popüler turistik yerleri içeren tur, engelli ve yaşlı kişilerin kolayca gezebileceği şekilde organize edilmiştir. Tarihi yerlere rehber eşliğinde ve özel düzenlenmiş rotalarla erişim sağlanırken, engelli dostu hizmetlerle konforlu bir tur deneyimi sunulmaktadır."
                            )
                          : (language === 'en'
                              ? "Guests will explore Byzantine and Ottoman heritage, experience historic bazaars, enjoy scenic views from the Bosphorus and Çamlıca Hill, and discover modern vibrant neighborhood Kadıköy - all with barrier-free access wherever possible."
                              : "Misafirlerimiz Bizans ve Osmanlı mirasını keşfedecek, tarihi çarşıları deneyimleyecek, Boğaz ve Çamlıca Tepesi'nden manzaraların tadını çıkaracak ve modern canlı mahalle Kadıköy'ü keşfedecekler - mümkün olan her yerde engelsiz erişimle."
                            )
                        }
                      </p>

                      {/* Accessibility Features List */}
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <span className="text-orange-500 font-bold text-lg">*</span>
                          <p className="text-gray-700 leading-relaxed">
                            {tour?.id === 'PBWAI0019'
                              ? (language === 'en'
                                  ? "Duration: 8 hours"
                                  : "Süre: 8 saat"
                                )
                              : (language === 'en'
                                  ? "Accommodation in accessible rooms with low beds, wide doors and grab bars in the bathroom."
                                  : "Alçak yataklar, geniş kapılar ve banyoda tutunma barları olan erişilebilir odalarda konaklama."
                                )
                            }
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-orange-500 font-bold text-lg">*</span>
                          <p className="text-gray-700 leading-relaxed">
                            {tour?.id === 'PBWAI0019'
                              ? (language === 'en'
                                  ? "Tour Date: (Topkapı Palace closed on Tuesdays, Grand Bazaar closed on Sundays)"
                                  : "Tur Tarihi: (Topkapı Sarayı Salı günleri kapalı, Kapalıçarşı Pazar günleri kapalı)"
                                )
                              : (language === 'en'
                                  ? "Transportation by vehicles with lifts and ramps."
                                  : "Asansörlü ve rampalı araçlarla ulaşım."
                                )
                            }
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-orange-500 font-bold text-lg">*</span>
                          <p className="text-gray-700 leading-relaxed">
                            {tour?.id === 'PBWAI0019'
                              ? (language === 'en'
                                  ? "Starting Time: 9.00"
                                  : "Başlangıç Saati: 9.00"
                                )
                              : (language === 'en'
                                  ? "Accessibility checks have been made in each location in advance, ramps and alternative entrances have been planned."
                                  : "Her lokasyonda önceden erişilebilirlik kontrolleri yapılmış, rampalar ve alternatif girişler planlanmış."
                                )
                            }
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-orange-500 font-bold text-lg">*</span>
                          <p className="text-gray-700 leading-relaxed">
                            {tour?.id === 'PBWAI0019'
                              ? (language === 'en'
                                  ? "Suitable for which type of disability: • Hearing Impaired • Wheelchair users • Elderly people"
                                  : "Hangi engellilik türü için uygun: • İşitme Engelliler • Tekerlekli Sandalye Kullanıcıları • Yaşlı İnsanlar"
                                )
                              : (language === 'en'
                                  ? "Sign language interpreter support for the hearing impaired."
                                  : "İşitme engelliler için işaret dili tercüman desteği."
                                )
                            }
                          </p>
                        </div>
                        {tour?.id !== 'PBWAI0019' && (
                          <>
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
                          </>
                        )}
                      </div>
                    </div>

                    {/* Accessibility Section */}
                    <div className="mt-12">
                      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        {language === 'en' ? 'Accessibility Information' : 'Erişilebilirlik Bilgileri'}
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {accessibilityLocations.map((location) => (
                          <button
                            key={location.id}
                            onClick={() => setSelectedLocation(location)}
                            className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg hover:border-orange-300 transition-all duration-300 text-left group"
                          >
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-gray-900 text-base group-hover:text-orange-600 transition-colors duration-300">
                                  {language === 'en' ? location.nameEn : location.nameTr}
                                </h4>
                                <p className="text-sm text-gray-600 mt-2 font-medium">
                                  {language === 'en' ? 'Click for details' : 'Detaylar için tıklayın'}
                                </p>
                              </div>
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </button>
                        ))}
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
                            <p
                              className="text-gray-600 mb-2"
                              dangerouslySetInnerHTML={{
                                __html: language === 'en' ? item.descriptionEn : item.description
                              }}
                            ></p>
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

                  {/* Inclusions/Exclusions Section */}
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                      {language === 'en' ? 'Inclusions/Exclusions' : 'Dahil Olan/Olmayan'}
                    </h3>

                    <div className="space-y-8">
                      {/* Price Includes Section */}
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {language === 'en' ? 'Price Includes' : 'Fiyata Dahil'}
                        </h4>
                        <div className="space-y-3">
                          {(language === 'en' ? tour.featuresEn : tour.features)?.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-gray-700 leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Price Excludes Section */}
                      <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <svg className="w-6 h-6 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          {language === 'en' ? 'Price Excludes' : 'Fiyata Dahil Değil'}
                        </h4>
                        <div className="space-y-3">
                          {tour.excludes && tour.excludes.length > 0 ? (
                            (language === 'en' ? tour.excludesEn || tour.excludes : tour.excludes).map((exclude, index) => (
                              <div key={index} className="flex items-start space-x-3">
                                <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </div>
                                <span className="text-gray-700 leading-relaxed">{exclude}</span>
                              </div>
                            )) : (
                            <div className="space-y-3">
                              <div className="flex items-start space-x-3">
                                <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </div>
                                <span className="text-gray-700 leading-relaxed">
                                  {language === 'en' ? 'Personal expenses' : 'Kişisel harcamalar'}
                                </span>
                              </div>
                              <div className="flex items-start space-x-3">
                                <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </div>
                                <span className="text-gray-700 leading-relaxed">
                                  {language === 'en' ? 'Gratuities' : 'Bahşişler'}
                                </span>
                              </div>
                              <div className="flex items-start space-x-3">
                                <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </div>
                                <span className="text-gray-700 leading-relaxed">
                                  {language === 'en' ? 'Optional activities not mentioned in the itinerary' : 'Programda belirtilmeyen opsiyonel aktiviteler'}
                                </span>
                              </div>
                            </div>
                        </div>
                      </div>

                      {/* Additional Info for PBWAI0019 */}
                      {tour?.id === 'PBWAI0019' && (
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                          <p className="text-gray-800 leading-relaxed">
                            {language === 'en'
                              ? "We can provide all type of walkers, scooters, electric or manuel wheelchair and assistance staff to accompany with an additional cost to support you throughout the tour."
                              : "Her türlü yürüteç, scooter, elektrikli veya manuel tekerlekli sandalye ve tur boyunca size destek olmak için eşlik edecek yardımcı personeli ek ücret karşılığında sağlayabiliriz."
                            }
                          </p>
                        </div>
                      )}
                    </div>
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

      {/* Accessibility Location Modal */}
      {selectedLocation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedLocation.image}
                alt={language === 'en' ? selectedLocation.nameEn : selectedLocation.nameTr}
                className="w-full h-64 object-cover rounded-t-2xl"
                onError={(e) => {
                  e.target.src = '/placeholder-accessibility.jpg'
                }}
              />
              <button
                onClick={() => setSelectedLocation(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {language === 'en' ? selectedLocation.nameEn : selectedLocation.nameTr}
              </h3>

              <div className="space-y-6">
                {/* Wheelchair Users */}
                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">
                        {language === 'en' ? 'Wheelchair Users' : 'Tekerlekli Sandalye Kullanıcıları'}
                      </h4>
                      <p className="text-green-700 leading-relaxed">
                        {language === 'en' ? selectedLocation.wheelchairEn : selectedLocation.wheelchairTr}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hearing Impaired */}
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">
                        {language === 'en' ? 'Hearing Impaired' : 'İşitme Engelliler'}
                      </h4>
                      <p className="text-blue-700 leading-relaxed">
                        {language === 'en' ? selectedLocation.hearingEn : selectedLocation.hearingTr}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visually Impaired (if available) */}
                {(selectedLocation.visuallyImpairedEn || selectedLocation.visuallyImpairedTr) && (
                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-2">
                          {language === 'en' ? 'Visually Impaired' : 'Görme Engelliler'}
                        </h4>
                        <p className="text-purple-700 leading-relaxed">
                          {language === 'en' ? selectedLocation.visuallyImpairedEn : selectedLocation.visuallyImpairedTr}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Close Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {language === 'en' ? 'Close' : 'Kapat'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TourDetailPage
