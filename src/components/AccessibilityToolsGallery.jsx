import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

// Assets klasöründeki görselleri import ediyoruz
import tool1 from '../assets/40967285-7162-45c6-b24c-7ccac9126504-min.jpeg'

// Araç fotoğrafları - public/vehicle klasöründen
const vehiclePhoto1 = '/vehicle/001304e4-b441-4f7b-833a-aa53fcbd0435.jpeg'
const vehiclePhoto2 = '/vehicle/01c2abf7-cd6f-434e-acd2-6cc83fa1fd2f.jpeg'
const vehiclePhoto3 = '/vehicle/14e32ccd-f29a-4fc4-8b38-f27369e1b377.jpeg'
const vehiclePhoto4 = '/vehicle/1a57dd88-208b-4d73-8452-ba6946168bb7.jpeg'
const vehiclePhoto5 = '/vehicle/270d59d4-64bb-4d72-8d8e-883ab7f6bccb.jpeg'
const vehiclePhoto6 = '/vehicle/2e0f6b3e-3449-4ae9-ae70-e8583b2273cd.jpeg'
const vehiclePhoto7 = '/vehicle/360d8844-44c2-4be5-a9fb-fa4842abe856.jpeg'
const vehiclePhoto8 = '/vehicle/3733875a-c63b-492e-bf25-fb82df052729.jpeg'
const vehiclePhoto9 = '/vehicle/3d6c12a2-7b67-4d60-ab8c-e001a450b6fa.jpeg'
const vehiclePhoto10 = '/vehicle/41c95afe-f97f-48b5-bdec-b5c4952af604.jpeg'
const vehiclePhoto11 = '/vehicle/4a811c12-feed-47a1-a6e7-7fffd77e1c19.jpeg'
const vehiclePhoto12 = '/vehicle/4c7716bf-da47-4d96-95fb-76d18d562160.jpeg'
const vehiclePhoto13 = '/vehicle/4d93b0d0-6911-45d2-9c7a-07f6cba3dbfb.jpeg'
const vehiclePhoto14 = '/vehicle/58d08101-ff16-4f05-b02c-927e57f79a41.jpeg'
const vehiclePhoto15 = '/vehicle/5e9f0b29-73e7-4462-aee2-ddc63e167f9f.jpeg'
const vehiclePhoto16 = '/vehicle/5f0e1d2c-5a22-48e5-89c0-1f1ee456cb55.jpeg'
const vehiclePhoto17 = '/vehicle/622d8d88-08cc-4319-abff-e2a9107d312f.jpeg'
const vehiclePhoto18 = '/vehicle/6944ed62-9c8e-4a32-a5e0-02d862b50b5e.jpeg'
const vehiclePhoto19 = '/vehicle/74e60a12-51e3-4181-97e7-5be7c7cd3789.jpeg'
const vehiclePhoto20 = '/vehicle/7f95cc27-5b84-416c-a0cf-56885a80fd18.jpeg'
const vehiclePhoto21 = '/vehicle/83f3904f-352a-49a5-8cf8-d89666c34c8a.jpeg'
const vehiclePhoto22 = '/vehicle/a250df96-f5c7-48d2-88ca-92e6e1ff670d.jpeg'
const vehiclePhoto23 = '/vehicle/a5677e61-b4b4-401b-afb6-37cf716d993d.jpeg'
const vehiclePhoto24 = '/vehicle/a87fe4fe-d788-4297-9ffa-5d2c5f94c178.jpeg'
const vehiclePhoto25 = '/vehicle/aabc3220-7afd-4799-9b09-22bb481995d2.jpeg'
const vehiclePhoto26 = '/vehicle/ae172298-4358-463b-814c-0761b97dad5c.jpeg'
const vehiclePhoto27 = '/vehicle/af0a5d69-a5e5-43c2-8ae0-e29348145874.jpeg'
const vehiclePhoto28 = '/vehicle/c09094ff-398c-4437-80af-1bb8cae65695.jpeg'
const vehiclePhoto29 = '/vehicle/c471a826-63f1-4687-a33c-35a6678fa297.jpeg'
const vehiclePhoto30 = '/vehicle/cdd78f63-05cd-4df3-891c-bf9d55b12dbc.jpeg'
const vehiclePhoto31 = '/vehicle/cee1b59c-85c6-494a-af8c-c1ec1afa033f.jpeg'
const vehiclePhoto32 = '/vehicle/d19a82ec-29c3-4b80-b1ff-4d8ba015185f.jpeg'
const vehiclePhoto33 = '/vehicle/dc2ee2b5-e4d4-4131-bf8d-543848725389.jpeg'

const AccessibilityToolsGallery = () => {
  const { t, language } = useLanguage()
  const [selectedTool, setSelectedTool] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

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

  // Araç fotoğrafları galerisi
  const vehiclePhotos = [
    {
      id: 1,
      image: vehiclePhoto1,
      title: language === 'en' ? 'Accessible Vehicle Interior' : 'Erişilebilir Araç İç Mekanı',
      description: language === 'en' ? 'Spacious interior designed for wheelchair accessibility' : 'Tekerlekli sandalye erişilebilirliği için tasarlanmış geniş iç mekan'
    },
    {
      id: 2,
      image: vehiclePhoto2,
      title: language === 'en' ? 'Vehicle Lift System' : 'Araç Lift Sistemi',
      description: language === 'en' ? 'Advanced lift system for easy boarding' : 'Kolay biniş için gelişmiş lift sistemi'
    },
    {
      id: 3,
      image: vehiclePhoto3,
      title: language === 'en' ? 'Comfort Seating' : 'Konfor Koltukları',
      description: language === 'en' ? 'Ergonomic seating for maximum comfort' : 'Maksimum konfor için ergonomik koltuklar'
    },
    {
      id: 4,
      image: vehiclePhoto4,
      title: language === 'en' ? 'Safety Features' : 'Güvenlik Özellikleri',
      description: language === 'en' ? 'Advanced safety systems and equipment' : 'Gelişmiş güvenlik sistemleri ve ekipmanları'
    },
    {
      id: 5,
      image: vehiclePhoto5,
      title: language === 'en' ? 'Wheelchair Accessibility' : 'Tekerlekli Sandalye Erişilebilirliği',
      description: language === 'en' ? 'Specially designed for wheelchair users' : 'Tekerlekli sandalye kullanıcıları için özel tasarım'
    },
    {
      id: 6,
      image: vehiclePhoto6,
      title: language === 'en' ? 'Vehicle Exterior' : 'Araç Dış Görünüm',
      description: language === 'en' ? 'Modern and professional vehicle design' : 'Modern ve profesyonel araç tasarımı'
    },
    {
      id: 7,
      image: vehiclePhoto7,
      title: language === 'en' ? 'Interior Layout' : 'İç Mekan Düzeni',
      description: language === 'en' ? 'Optimized layout for accessibility and comfort' : 'Erişilebilirlik ve konfor için optimize edilmiş düzen'
    },
    {
      id: 8,
      image: vehiclePhoto8,
      title: language === 'en' ? 'Medical Equipment Storage' : 'Tıbbi Ekipman Depolama',
      description: language === 'en' ? 'Dedicated storage for medical equipment' : 'Tıbbi ekipman için özel depolama alanı'
    },
    {
      id: 9,
      image: vehiclePhoto9,
      title: language === 'en' ? 'Driver Cabin' : 'Sürücü Kabini',
      description: language === 'en' ? 'Professional driver cabin with modern controls' : 'Modern kontrollerle profesyonel sürücü kabini'
    },
    {
      id: 10,
      image: vehiclePhoto10,
      title: language === 'en' ? 'Accessibility Ramp' : 'Erişilebilirlik Rampası',
      description: language === 'en' ? 'Easy-to-use accessibility ramp system' : 'Kullanımı kolay erişilebilirlik rampa sistemi'
    },
    {
      id: 11,
      image: vehiclePhoto11,
      title: language === 'en' ? 'Interior Comfort' : 'İç Mekan Konforu',
      description: language === 'en' ? 'Comfortable interior with climate control' : 'Klima kontrolü ile konforlu iç mekan'
    },
    {
      id: 12,
      image: vehiclePhoto12,
      title: language === 'en' ? 'Vehicle Technology' : 'Araç Teknolojisi',
      description: language === 'en' ? 'Advanced technology for safety and comfort' : 'Güvenlik ve konfor için gelişmiş teknoloji'
    },
    {
      id: 13,
      image: vehiclePhoto13,
      title: language === 'en' ? 'Passenger Area' : 'Yolcu Alanı',
      description: language === 'en' ? 'Spacious passenger area with accessibility features' : 'Erişilebilirlik özellikleri ile geniş yolcu alanı'
    },
    {
      id: 14,
      image: vehiclePhoto14,
      title: language === 'en' ? 'Vehicle Fleet' : 'Araç Filosu',
      description: language === 'en' ? 'Our professional vehicle fleet' : 'Profesyonel araç filomuz'
    },
    {
      id: 15,
      image: vehiclePhoto15,
      title: language === 'en' ? 'Mobility Solutions' : 'Mobilite Çözümleri',
      description: language === 'en' ? 'Comprehensive mobility solutions for all needs' : 'Tüm ihtiyaçlar için kapsamlı mobilite çözümleri'
    },
    {
      id: 16,
      image: vehiclePhoto16,
      title: language === 'en' ? 'Professional Service' : 'Profesyonel Hizmet',
      description: language === 'en' ? 'Professional service with trained staff' : 'Eğitimli personel ile profesyonel hizmet'
    },
    {
      id: 17,
      image: vehiclePhoto17,
      title: language === 'en' ? 'Vehicle Maintenance' : 'Araç Bakımı',
      description: language === 'en' ? 'Regular maintenance for optimal performance' : 'Optimal performans için düzenli bakım'
    },
    {
      id: 18,
      image: vehiclePhoto18,
      title: language === 'en' ? 'Safety Standards' : 'Güvenlik Standartları',
      description: language === 'en' ? 'Meeting highest safety standards' : 'En yüksek güvenlik standartlarını karşılama'
    },
    {
      id: 19,
      image: vehiclePhoto19,
      title: language === 'en' ? 'Comfort Features' : 'Konfor Özellikleri',
      description: language === 'en' ? 'Premium comfort features for all passengers' : 'Tüm yolcular için premium konfor özellikleri'
    },
    {
      id: 20,
      image: vehiclePhoto20,
      title: language === 'en' ? 'Accessibility Design' : 'Erişilebilirlik Tasarımı',
      description: language === 'en' ? 'Thoughtful design for accessibility needs' : 'Erişilebilirlik ihtiyaçları için düşünceli tasarım'
    },
    {
      id: 21,
      image: vehiclePhoto21,
      title: language === 'en' ? 'Vehicle Interior' : 'Araç İç Mekanı',
      description: language === 'en' ? 'Well-designed interior for comfort and functionality' : 'Konfor ve işlevsellik için iyi tasarlanmış iç mekan'
    },
    {
      id: 22,
      image: vehiclePhoto22,
      title: language === 'en' ? 'Transport Solutions' : 'Ulaşım Çözümleri',
      description: language === 'en' ? 'Comprehensive transport solutions' : 'Kapsamlı ulaşım çözümleri'
    },
    {
      id: 23,
      image: vehiclePhoto23,
      title: language === 'en' ? 'Vehicle Equipment' : 'Araç Ekipmanları',
      description: language === 'en' ? 'Specialized equipment for accessibility' : 'Erişilebilirlik için özel ekipmanlar'
    },
    {
      id: 24,
      image: vehiclePhoto24,
      title: language === 'en' ? 'Modern Fleet' : 'Modern Filo',
      description: language === 'en' ? 'Modern and well-maintained vehicle fleet' : 'Modern ve iyi bakımlı araç filosu'
    },
    {
      id: 25,
      image: vehiclePhoto25,
      title: language === 'en' ? 'Service Quality' : 'Hizmet Kalitesi',
      description: language === 'en' ? 'High-quality service with attention to detail' : 'Detaylara özen gösteren yüksek kaliteli hizmet'
    },
    {
      id: 26,
      image: vehiclePhoto26,
      title: language === 'en' ? 'Vehicle Features' : 'Araç Özellikleri',
      description: language === 'en' ? 'Advanced features for enhanced experience' : 'Gelişmiş deneyim için ileri özellikler'
    },
    {
      id: 27,
      image: vehiclePhoto27,
      title: language === 'en' ? 'Passenger Comfort' : 'Yolcu Konforu',
      description: language === 'en' ? 'Maximum comfort for all passengers' : 'Tüm yolcular için maksimum konfor'
    },
    {
      id: 28,
      image: vehiclePhoto28,
      title: language === 'en' ? 'Professional Standards' : 'Profesyonel Standartlar',
      description: language === 'en' ? 'Meeting professional industry standards' : 'Profesyonel endüstri standartlarını karşılama'
    },
    {
      id: 29,
      image: vehiclePhoto29,
      title: language === 'en' ? 'Vehicle Design' : 'Araç Tasarımı',
      description: language === 'en' ? 'Thoughtful design for accessibility and comfort' : 'Erişilebilirlik ve konfor için düşünceli tasarım'
    },
    {
      id: 30,
      image: vehiclePhoto30,
      title: language === 'en' ? 'Fleet Management' : 'Filo Yönetimi',
      description: language === 'en' ? 'Professional fleet management and maintenance' : 'Profesyonel filo yönetimi ve bakımı'
    },
    {
      id: 31,
      image: vehiclePhoto31,
      title: language === 'en' ? 'Service Excellence' : 'Hizmet Mükemmelliği',
      description: language === 'en' ? 'Excellence in accessibility transport services' : 'Erişilebilir ulaşım hizmetlerinde mükemmellik'
    },
    {
      id: 32,
      image: vehiclePhoto32,
      title: language === 'en' ? 'Vehicle Innovation' : 'Araç İnovasyonu',
      description: language === 'en' ? 'Innovative solutions for accessibility challenges' : 'Erişilebilirlik zorlukları için yenilikçi çözümler'
    },
    {
      id: 33,
      image: vehiclePhoto33,
      title: language === 'en' ? 'Quality Assurance' : 'Kalite Güvencesi',
      description: language === 'en' ? 'Quality assurance in all our services' : 'Tüm hizmetlerimizde kalite güvencesi'
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

      {/* Araç Fotoğrafları Galerisi */}
      <div className="mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-orange-500/10 backdrop-blur-sm rounded-full border border-orange-500/20 mb-6">
              <svg className="w-5 h-5 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
                {language === 'en' ? 'Photo Gallery' : 'Fotoğraf Galerisi'}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'en' ? (
                <>Our <span className="text-orange-600">Vehicle Gallery</span></>
              ) : (
                <><span className="text-orange-600">Araç</span> Galerimiz</>
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {language === 'en'
                ? 'Explore our comprehensive collection of accessible vehicles and their features through our detailed photo gallery.'
                : 'Detaylı fotoğraf galerimiz aracılığıyla erişilebilir araçlarımızın kapsamlı koleksiyonunu ve özelliklerini keşfedin.'
              }
            </p>
          </div>

          {/* Fotoğraf Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {vehiclePhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => {
                setSelectedPhoto(photo)
                setCurrentPhotoIndex(photo.id - 1)
              }}
            >
              {/* Fotoğraf - Tam kart */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Hover Overlay - Sadece zoom efekti */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>


            </div>
          ))}
          </div>
        </div>
      </div>

      {/* Fotoğraf Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 shadow-lg"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => {
                  const prevIndex = currentPhotoIndex > 0 ? currentPhotoIndex - 1 : vehiclePhotos.length - 1
                  setCurrentPhotoIndex(prevIndex)
                  setSelectedPhoto(vehiclePhotos[prevIndex])
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 shadow-lg"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => {
                  const nextIndex = currentPhotoIndex < vehiclePhotos.length - 1 ? currentPhotoIndex + 1 : 0
                  setCurrentPhotoIndex(nextIndex)
                  setSelectedPhoto(vehiclePhotos[nextIndex])
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 shadow-lg"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Main Image - Tam ekran */}
              <div className="relative h-[80vh] md:h-[85vh]">
                <img
                  src={selectedPhoto.image}
                  alt="Vehicle Photo"
                  className="w-full h-full object-contain bg-gray-100"
                />

                {/* Fotoğraf sayacı - sağ alt köşe */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {currentPhotoIndex + 1} / {vehiclePhotos.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default AccessibilityToolsGallery
