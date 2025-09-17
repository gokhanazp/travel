import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

// Assets klasöründeki görselleri import ediyoruz
import tool1 from '../assets/40967285-7162-45c6-b24c-7ccac9126504-min.jpeg'

const AccessibilityToolsGallery = () => {
  const { t, language } = useLanguage()
  const [selectedTool, setSelectedTool] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Araçlarımız verisi - Gerçek araç modelleri
  const accessibilityTools = [
    {
      id: 1,
      image: tool1,
      vehicleModel: 'Fiat Doblo XL',
      subtitle: language === 'en' ? '(With or Without Driver Rental)' : '(Sürücülü Veya Sürücüsüz Kiralama)',
      category: language === 'en' ? 'Ambulance' : 'Ambulans',
      title: language === 'en' ? 'Fully Equipped Ramped and Lift High Ceiling Vehicle' : 'Tam Donanımlı Rampalı Ve Lifli Yüksek Tavan Aracımız',
      description: language === 'en'
        ? 'Specially designed Fiat Doblo Cargo 1.3 Multijet Maxi for safe, comfortable and practical transportation of disabled and elderly individuals. Available with ramp or lift options according to your needs.'
        : 'Engelli ve yaşlı bireylerin güvenli, konforlu ve pratik bir şekilde taşınabilmesi için özel olarak tasarlanmış Fiat Doblo Cargo 1.3 Multijet Maxi modelimiz, ihtiyacınıza uygun rampalı veya liftli seçenekleriyle sizlere sunulmaktadır.',
      features: language === 'en'
        ? ['Ramp or lift system option suitable for wheelchair users', 'Spacious interior, comfortable and safe transportation', 'Manual transmission and diesel engine for economical fuel consumption', 'Solid and durable structure, long-lasting use']
        : ['Rampalı veya liftli sistem seçeneği ile tekerlekli sandalye kullanıcılarına uygun', 'Geniş iç hacim, konforlu ve güvenli taşıma imkanı', 'Manuel vites ve dizel motor ile ekonomik yakıt tüketimi', 'Sağlam ve dayanıklı yapı, uzun ömürlü kullanım'],
      specifications: {
        brand: 'Fiat Doblo XL',
        year: '2022',
        licenseClass: 'B',
        capacity: language === 'en' ? '2 Passengers, 1 Wheelchair Passenger + 1 Driver' : '2 Yolcu, 1 Tekerlekli Sandalye Yolcusu + 1 Şoför',
        engine: language === 'en' ? 'Diesel' : 'Dizel',
        transmission: language === 'en' ? 'Manual' : 'Manuel',
        seats: language === 'en' ? '4 Person' : '4 Kişilik',
        accessibility: language === 'en' ? 'Ramped & Lift' : 'Rampalı & Lifli'
      }
    },
    {
      id: 2,
      image: 'https://hncotomotiv.com/wp-content/uploads/custom.jpg',
      vehicleModel: 'Ford Transit Custom',
      subtitle: language === 'en' ? '(With or Without Driver Rental)' : '(Sürücülü Veya Sürücüsüz Kiralama)',
      category: language === 'en' ? 'City Transport' : 'Şehir Ulaşımı',
      title: language === 'en' ? 'Ramped and Lift Accessible Vehicle' : 'Rampalı ve Lifli Erişilebilir Araç',
      description: language === 'en'
        ? 'Ford Transit Custom offers comfortable and safe transportation for individuals with mobility restrictions and their companions with ramp or lift options. This vehicle has a capacity of 8 companions + 1 wheelchair passenger + 1 driver. Its spacious interior allows passengers to travel comfortably, while special access systems facilitate boarding and alighting. Its diesel engine and manual transmission provide fuel savings, while its solid structure offers long-lasting use.'
        : 'Ford Transit Custom, rampalı veya liftli seçenekleri ile hareket kabiliyeti kısıtlı bireyler ve refakatçileri için konforlu ve güvenli taşımacılık sunar. Bu araç, 8 refakatçi + 1 tekerlekli sandalye yolcusu + 1 şoför kapasitesine sahiptir. Geniş iç hacmi, yolcuların rahat bir şekilde seyahat etmesini sağlarken, özel erişim sistemleri ile araca biniş ve inişleri kolaylaştırır. Dizel motoru ve manuel vitesi, yakıt tasarrufu sağlarken, sağlam yapısı ile uzun ömürlü kullanım sunar.',
      features: language === 'en'
        ? ['Ramp or lift system options suitable for wheelchair users', 'Spacious interior, comfortable and safe transportation', 'Manual transmission and diesel engine for economical fuel consumption', 'Solid and durable structure, long-lasting use features']
        : ['Rampalı veya liftli sistem seçenekleri ile tekerlekli sandalye kullanıcılarına uygun', 'Geniş iç hacim, konforlu ve güvenli taşıma imkanı', 'Manuel vites ve dizel motor ile ekonomik yakıt tüketimi', 'Sağlam ve dayanıklı yapı, uzun ömürlü kullanım özellikleri'],
      specifications: {
        brand: 'Ford Transit Custom',
        year: '2015',
        licenseClass: 'B',
        capacity: language === 'en' ? '8 Passengers, 1 Wheelchair + 1 Driver' : '8 Yolcu, 1 Tekerlekli Sandalye + 1 Şoför',
        engine: language === 'en' ? 'Diesel' : 'Dizel',
        transmission: language === 'en' ? 'Manual' : 'Manuel',
        seats: language === 'en' ? '10 Person' : '10 Kişilik',
        accessibility: language === 'en' ? 'Ramped & Lift' : 'Rampalı & Lifli'
      }
    },
    {
      id: 3,
      image: 'https://hncotomotiv.com/wp-content/uploads/vito.jpg',
      vehicleModel: 'Mercedes Vito',
      subtitle: language === 'en' ? '(Comfort & Accessibility)' : '(Konfor & Erişilebilirlik)',
      category: language === 'en' ? 'Premium Comfort' : 'Premium Konfor',
      title: language === 'en' ? 'Swivel Seat Mechanism Accessible Vehicle' : 'Döner Koltuk Mekanizmalı Erişilebilir Araç',
      description: language === 'en'
        ? 'Mercedes Vito offers comfortable and safe transportation for individuals with mobility restrictions and their companions with swivel seat mechanism and automatic transmission option. This vehicle has a capacity of 5 companions + 1 swivel seat passenger + 1 driver. Its spacious interior allows passengers to travel comfortably, while the swivel seat mechanism facilitates mobility within the vehicle. Automatic transmission and diesel engine increase driving comfort, while its solid structure offers long-lasting use.'
        : 'Mercedes Vito, döner koltuk mekanizması ve otomatik vites seçeneği ile hareket kabiliyeti kısıtlı bireyler ve refakatçileri için konforlu ve güvenli taşımacılık sunar. Bu araç, 5 refakatçi + 1 döner koltuklu yolcu + 1 şoför kapasitesine sahiptir. Geniş iç hacmi, yolcuların rahat bir şekilde seyahat etmesini sağlarken, döner koltuk mekanizması ile araç içi hareketliliği kolaylaştırır. Otomatik vites ve dizel motoru, sürüş konforunu artırırken, sağlam yapısı ile uzun ömürlü kullanım sunar.',
      features: language === 'en'
        ? ['Swivel seat mechanism for easy sitting and getting off', 'Spacious interior, comfortable and safe transportation area', 'Automatic transmission and diesel engine for comfortable and economical driving', 'Solid and durable structure, long-lasting use']
        : ['Döner koltuk mekanizması ile kolay oturma ve inme imkanı', 'Geniş iç hacim, konforlu ve güvenli taşıma alanı', 'Otomatik vites ve dizel motor ile rahat ve ekonomik sürüş', 'Sağlam ve dayanıklı yapı, uzun ömürlü kullanım'],
      specifications: {
        brand: 'Mercedes Vito',
        year: '2017',
        licenseClass: 'B',
        capacity: language === 'en' ? '5 Passengers, 1 Wheelchair + 1 Driver' : '5 Yolcu, 1 Tekerlekli Sandalye + 1 Şoför',
        engine: language === 'en' ? 'Diesel' : 'Dizel',
        transmission: language === 'en' ? 'Automatic' : 'Otomatik',
        seats: language === 'en' ? '7 Person' : '7 Kişilik',
        accessibility: language === 'en' ? 'Swivel Seat Mechanism & Vebasto' : 'Döner Koltuk Mekanizması & Vebasto'
      }
    }
  ]

  // Responsive slider fonksiyonları
  const [itemsPerSlide, setItemsPerSlide] = useState(3)

  // Responsive items per slide
  React.useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1) // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2) // Tablet: 2 items
      } else {
        setItemsPerSlide(3) // Desktop: 3 items
      }
    }

    updateItemsPerSlide()
    window.addEventListener('resize', updateItemsPerSlide)
    return () => window.removeEventListener('resize', updateItemsPerSlide)
  }, [])

  const totalSlides = Math.ceil(accessibilityTools.length / itemsPerSlide)

  // Reset slide when items per slide changes
  React.useEffect(() => {
    setCurrentSlide(0)
  }, [itemsPerSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Touch/Swipe desteği
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) nextSlide()
    if (isRightSwipe) prevSlide()
  }

  // Otomatik slider (isteğe bağlı)
  React.useEffect(() => {
    const interval = setInterval(nextSlide, 6000) // 6 saniyede bir değişir
    return () => clearInterval(interval)
  }, [])

  return (
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Başlık */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 mb-6">
            <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              {language === 'en' ? 'Our Fleet' : 'Araç Filomuz'}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'en' ? 'Our Accessible' : 'Erişilebilir'}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">
              {language === 'en' ? 'Vehicle Fleet' : 'Araç Filomuz'}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Modern and specially equipped vehicles designed to provide safe, comfortable and accessible transportation for all our guests.'
              : 'Tüm misafirlerimiz için güvenli, konforlu ve erişilebilir ulaşım sağlamak üzere tasarlanmış modern ve özel donanımlı araçlarımız.'
            }
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons - Only show if more than one slide */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-blue-600"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-blue-600"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Slider Content */}
          <div
            className="overflow-hidden rounded-3xl"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {accessibilityTools
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((tool) => (
                        <div key={tool.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                          {/* Vehicle Card */}
                          <div className="relative h-48 sm:h-56 overflow-hidden">
                            <img
                              src={tool.image}
                              alt={tool.vehicleModel}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                            {/* Vehicle Model Badge */}
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                    </svg>
                                  </div>
                                  <div>
                                    <h3 className="text-white font-bold text-lg">{tool.vehicleModel}</h3>
                                    <p className="text-white/80 text-xs">{tool.subtitle}</p>
                                  </div>
                                </div>
                                <div className="px-2 py-1 bg-orange-500/80 backdrop-blur-sm rounded-full">
                                  <span className="text-white text-xs font-medium">{tool.category}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Card Content */}
                          <div className="p-6">
                            {/* Description */}
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                              {tool.title}
                            </p>

                            {/* Features List - Show first 4 */}
                            <div className="space-y-2 mb-6">
                              {tool.features.slice(0, 4).map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-2 h-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                                    </svg>
                                  </div>
                                  <span className="text-gray-700 text-xs font-medium">{feature}</span>
                                </div>
                              ))}
                            </div>

                            {/* Action Button */}
                            <button
                              onClick={() => setSelectedTool(tool)}
                              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold text-sm hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                              {language === 'en' ? 'View Details & Rent →' : 'Detayları Gör & Kirala →'}
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator - Only show if more than one slide */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal - Araç Detayları */}
      {selectedTool && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedTool.image}
                alt={selectedTool.vehicleModel}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Kapatma Butonu */}
              <button
                onClick={() => setSelectedTool(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Vehicle Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">{selectedTool.vehicleModel}</h3>
                      <p className="text-white/80 text-sm">{selectedTool.subtitle}</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-orange-500/80 backdrop-blur-sm rounded-full">
                    <span className="text-white text-sm font-medium">{selectedTool.category}</span>
                  </div>
                </div>
                <p className="text-lg text-white/90 max-w-3xl">
                  {selectedTool.title}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Description */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'en' ? 'Vehicle Description' : 'Araç Açıklaması'}
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {selectedTool.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === 'en' ? 'Key Features' : 'Temel Özellikler'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedTool.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-800 font-medium text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-8 p-6 bg-gray-50 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  {language === 'en' ? 'Technical Specifications' : 'Teknik Özellikler'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                    <div className="text-sm text-gray-600 mb-1">{language === 'en' ? 'Brand/Model' : 'Marka/Model'}</div>
                    <div className="font-bold text-gray-900">{selectedTool.specifications.brand}</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                    <div className="text-sm text-gray-600 mb-1">{language === 'en' ? 'Year' : 'Yıl'}</div>
                    <div className="font-bold text-gray-900">{selectedTool.specifications.year}</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                    <div className="text-sm text-gray-600 mb-1">{language === 'en' ? 'License Class' : 'Ehliyet Sınıfı'}</div>
                    <div className="font-bold text-gray-900">{selectedTool.specifications.licenseClass}</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                    <div className="text-sm text-gray-600 mb-1">{language === 'en' ? 'Engine' : 'Motor'}</div>
                    <div className="font-bold text-gray-900">{selectedTool.specifications.engine}</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                    <div className="text-sm text-gray-600 mb-1">{language === 'en' ? 'Transmission' : 'Vites'}</div>
                    <div className="font-bold text-gray-900">{selectedTool.specifications.transmission}</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-500">
                    <div className="text-sm text-gray-600 mb-1">{language === 'en' ? 'Seats' : 'Koltuk'}</div>
                    <div className="font-bold text-gray-900">{selectedTool.specifications.seats}</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-pink-500">
                    <div className="text-sm text-gray-600 mb-1">{language === 'en' ? 'Accessibility' : 'Erişilebilirlik'}</div>
                    <div className="font-bold text-gray-900">{selectedTool.specifications.accessibility}</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500 md:col-span-2 lg:col-span-1">
                    <div className="text-sm text-gray-600 mb-1">{language === 'en' ? 'Capacity' : 'Kapasite'}</div>
                    <div className="font-bold text-gray-900 text-sm">{selectedTool.specifications.capacity}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 8a2 2 0 100-4 2 2 0 000 4zm0 0v4a2 2 0 002 2h6a2 2 0 002-2v-4" />
                  </svg>
                  {language === 'en' ? 'Book This Vehicle' : 'Bu Aracı Rezerve Et'}
                </button>
                <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {language === 'en' ? 'Contact for Info' : 'Bilgi İçin İletişim'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default AccessibilityToolsGallery
