import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

// Assets klasöründeki görselleri import ediyoruz
import tool1 from '../assets/40967285-7162-45c6-b24c-7ccac9126504-min.jpeg'
import tool2 from '../assets/491dbc1a-2ddd-4a3c-a8db-c47bd2ac388f-min.jpeg'
import tool3 from '../assets/491dbc1a-2ddd-4a3c-a8db-c47bd2ac388f-min.jpg'
import tool4 from '../assets/b36f1069-f66f-432d-b302-1a22021bdb58-min.jpeg'
import tool5 from '../assets/c3394750-8887-43b0-aee6-13fdfe28f056-min.jpeg'
import tool6 from '../assets/e1ff3bb4-5e16-46a5-8cfc-1b416b5b7b11-min.jpeg'
import tool7 from '../assets/f027d74a-61bb-48a8-89d6-f974d9e4bc5d-min.jpeg'

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
      image: tool2,
      vehicleModel: 'Mercedes Sprinter',
      subtitle: language === 'en' ? '(Premium Service)' : '(Premium Hizmet)',
      category: language === 'en' ? 'Luxury Transport' : 'Lüks Ulaşım',
      title: language === 'en' ? 'Luxury Accessible Transport Vehicle' : 'Lüks Erişilebilir Ulaşım Aracı',
      description: language === 'en'
        ? 'Premium Mercedes Sprinter with advanced accessibility features and luxury comfort for group transportation.'
        : 'Gelişmiş erişilebilirlik özellikleri ve lüks konfor ile grup ulaşımı için premium Mercedes Sprinter.',
      features: language === 'en'
        ? ['Multiple wheelchair positions', 'Climate control system', 'Premium interior design', 'Professional driver service']
        : ['Çoklu tekerlekli sandalye pozisyonu', 'İklim kontrol sistemi', 'Premium iç tasarım', 'Profesyonel şoför hizmeti'],
      specifications: {
        brand: 'Mercedes Sprinter',
        year: '2023',
        licenseClass: 'D1',
        capacity: language === 'en' ? '8 Passengers + 2 Wheelchair + 1 Driver' : '8 Yolcu + 2 Tekerlekli Sandalye + 1 Şoför',
        engine: language === 'en' ? 'Diesel' : 'Dizel',
        transmission: language === 'en' ? 'Automatic' : 'Otomatik',
        seats: language === 'en' ? '11 Person' : '11 Kişilik',
        accessibility: language === 'en' ? 'Lift & Ramp' : 'Lift & Rampa'
      }
    },
    {
      id: 3,
      image: tool3,
      vehicleModel: 'Ford Transit Custom',
      subtitle: language === 'en' ? '(City Tours)' : '(Şehir Turları)',
      category: language === 'en' ? 'City Vehicle' : 'Şehir Aracı',
      title: language === 'en' ? 'Compact Accessible City Vehicle' : 'Kompakt Erişilebilir Şehir Aracı',
      description: language === 'en'
        ? 'Ideal Ford Transit Custom for city tours with easy access and maneuverability in narrow streets.'
        : 'Dar sokaklarda kolay erişim ve manevra kabiliyeti ile şehir turları için ideal Ford Transit Custom.',
      features: language === 'en'
        ? ['Easy city navigation', 'Quick boarding system', 'Fuel efficient', 'Perfect for historical sites']
        : ['Kolay şehir navigasyonu', 'Hızlı binme sistemi', 'Yakıt tasarruflu', 'Tarihi mekanlar için mükemmel'],
      specifications: {
        brand: 'Ford Transit Custom',
        year: '2022',
        licenseClass: 'B',
        capacity: language === 'en' ? '4 Passengers + 1 Wheelchair + 1 Driver' : '4 Yolcu + 1 Tekerlekli Sandalye + 1 Şoför',
        engine: language === 'en' ? 'Diesel' : 'Dizel',
        transmission: language === 'en' ? 'Manual' : 'Manuel',
        seats: language === 'en' ? '6 Person' : '6 Kişilik',
        accessibility: language === 'en' ? 'Ramp' : 'Rampa'
      }
    },
    {
      id: 4,
      image: tool4,
      vehicleModel: 'Volkswagen Crafter',
      subtitle: language === 'en' ? '(Group Transport)' : '(Grup Ulaşımı)',
      category: language === 'en' ? 'High Capacity' : 'Yüksek Kapasite',
      title: language === 'en' ? 'High Capacity Accessible Vehicle' : 'Yüksek Kapasiteli Erişilebilir Araç',
      description: language === 'en'
        ? 'Spacious Volkswagen Crafter designed for large groups with multiple accessibility options.'
        : 'Çoklu erişilebilirlik seçenekleri ile büyük gruplar için tasarlanmış geniş Volkswagen Crafter.',
      features: language === 'en'
        ? ['Large group capacity', 'Multiple access points', 'Advanced safety systems', 'Long distance comfort']
        : ['Büyük grup kapasitesi', 'Çoklu erişim noktaları', 'Gelişmiş güvenlik sistemleri', 'Uzun mesafe konforu'],
      specifications: {
        brand: 'Volkswagen Crafter',
        year: '2023',
        licenseClass: 'D1',
        capacity: language === 'en' ? '12 Passengers + 3 Wheelchair + 1 Driver' : '12 Yolcu + 3 Tekerlekli Sandalye + 1 Şoför',
        engine: language === 'en' ? 'Diesel' : 'Dizel',
        transmission: language === 'en' ? 'Automatic' : 'Otomatik',
        seats: language === 'en' ? '16 Person' : '16 Kişilik',
        accessibility: language === 'en' ? 'Lift & Multiple Ramps' : 'Lift & Çoklu Rampa'
      }
    },
    {
      id: 5,
      image: tool5,
      vehicleModel: 'Renault Master',
      subtitle: language === 'en' ? '(Multi-Purpose)' : '(Çok Amaçlı)',
      category: language === 'en' ? 'Versatile' : 'Çok Yönlü',
      title: language === 'en' ? 'Versatile Accessibility Vehicle' : 'Çok Amaçlı Erişilebilirlik Aracı',
      description: language === 'en'
        ? 'Flexible Renault Master with customizable interior for various accessibility needs and tour types.'
        : 'Çeşitli erişilebilirlik ihtiyaçları ve tur türleri için özelleştirilebilir iç mekan ile esnek Renault Master.',
      features: language === 'en'
        ? ['Flexible seating arrangement', 'Multi-purpose design', 'Easy maintenance', 'Reliable performance']
        : ['Esnek oturma düzeni', 'Çok amaçlı tasarım', 'Kolay bakım', 'Güvenilir performans'],
      specifications: {
        brand: 'Renault Master',
        year: '2022',
        licenseClass: 'B',
        capacity: language === 'en' ? '6 Passengers + 2 Wheelchair + 1 Driver' : '6 Yolcu + 2 Tekerlekli Sandalye + 1 Şoför',
        engine: language === 'en' ? 'Diesel' : 'Dizel',
        transmission: language === 'en' ? 'Manual' : 'Manuel',
        seats: language === 'en' ? '9 Person' : '9 Kişilik',
        accessibility: language === 'en' ? 'Ramp & Lift' : 'Rampa & Lift'
      }
    },
    {
      id: 6,
      image: tool6,
      vehicleModel: 'Iveco Daily',
      subtitle: language === 'en' ? '(Professional)' : '(Profesyonel)',
      category: language === 'en' ? 'Commercial' : 'Ticari',
      title: language === 'en' ? 'Professional Accessible Transport' : 'Profesyonel Erişilebilir Ulaşım',
      description: language === 'en'
        ? 'Robust Iveco Daily built for professional accessibility services with enhanced durability.'
        : 'Gelişmiş dayanıklılık ile profesyonel erişilebilirlik hizmetleri için inşa edilmiş sağlam Iveco Daily.',
      features: language === 'en'
        ? ['Heavy-duty construction', 'Professional grade equipment', 'Enhanced durability', 'Commercial reliability']
        : ['Ağır hizmet yapısı', 'Profesyonel kalite ekipman', 'Gelişmiş dayanıklılık', 'Ticari güvenilirlik'],
      specifications: {
        brand: 'Iveco Daily',
        year: '2023',
        licenseClass: 'D1',
        capacity: language === 'en' ? '10 Passengers + 2 Wheelchair + 1 Driver' : '10 Yolcu + 2 Tekerlekli Sandalye + 1 Şoför',
        engine: language === 'en' ? 'Diesel' : 'Dizel',
        transmission: language === 'en' ? 'Manual' : 'Manuel',
        seats: language === 'en' ? '13 Person' : '13 Kişilik',
        accessibility: language === 'en' ? 'Professional Lift' : 'Profesyonel Lift'
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
