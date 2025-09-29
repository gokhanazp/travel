import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

// Assets klasöründeki görselleri import ediyoruz
import tool1 from '../assets/40967285-7162-45c6-b24c-7ccac9126504-min.jpeg'

// Araç fotoğraflarını import ediyoruz
import vehiclePhoto1 from '../assets/piba-arac/0ab9f16b-6b19-4d8f-91a6-007942b92c92.jpeg'
import vehiclePhoto2 from '../assets/piba-arac/0b1f30e5-0a58-496f-a206-f487c89a2d11.jpeg'
import vehiclePhoto3 from '../assets/piba-arac/1411e8c4-9a53-468d-8850-3d5303fcc2e2.jpeg'
import vehiclePhoto4 from '../assets/piba-arac/19f4e62b-60da-4391-a86e-6da65a806238.jpeg'
import vehiclePhoto5 from '../assets/piba-arac/1af082ac-6567-43ca-a283-bb901dd418de.jpeg'
import vehiclePhoto6 from '../assets/piba-arac/1ca166f3-7d12-4f76-aba2-4408d0079144.jpeg'
import vehiclePhoto7 from '../assets/piba-arac/2c9e5e6a-00d6-4a46-afbb-8ee4e5d31faf.jpeg'
import vehiclePhoto8 from '../assets/piba-arac/3095ccb0-7912-4f4e-b057-c8e8aae84414.jpeg'
import vehiclePhoto9 from '../assets/piba-arac/35eacd61-4fb1-4c33-9ac8-e6703bec9b50.jpeg'
import vehiclePhoto10 from '../assets/piba-arac/3a3a3063-0834-46d4-a42c-7af0718efe71.jpeg'
import vehiclePhoto11 from '../assets/piba-arac/3db50969-48c6-428e-89f6-13999b30e9b4.jpeg'
import vehiclePhoto12 from '../assets/piba-arac/5c28e09d-1d0b-4f0f-a961-a657ad9d99db.jpeg'
import vehiclePhoto13 from '../assets/piba-arac/6b70498b-3c78-4695-860d-4c3227100269.jpeg'
import vehiclePhoto14 from '../assets/piba-arac/6f645a54-6459-4075-a723-6bfd1bf61627.jpeg'
import vehiclePhoto15 from '../assets/piba-arac/7286a4b2-5e9b-41a9-8f83-08d3d9fce6cb.jpeg'
import vehiclePhoto16 from '../assets/piba-arac/741d2e70-9a19-4d22-a826-a326e8a0fe4f.jpeg'
import vehiclePhoto17 from '../assets/piba-arac/859c8bcf-79f4-47f9-a28e-489912dc4ec5.jpeg'
import vehiclePhoto18 from '../assets/piba-arac/87d52466-ab36-4f3b-a077-f89fa4e7b3a3.jpeg'
import vehiclePhoto19 from '../assets/piba-arac/8a529163-dbee-425a-aebb-2b78b9dc4ae1.jpeg'
import vehiclePhoto20 from '../assets/piba-arac/98629769-fcad-4546-ad24-9a1558b94388.jpeg'
import vehiclePhoto21 from '../assets/piba-arac/9b255c7a-16c9-415a-aa32-028080d2d22d.jpeg'
import vehiclePhoto22 from '../assets/piba-arac/a1658912-1362-4448-bb03-c22a62d78990.jpeg'
import vehiclePhoto23 from '../assets/piba-arac/a608b3b1-70fa-47e2-bc42-97644a973004.jpeg'
import vehiclePhoto24 from '../assets/piba-arac/a6432e30-dbde-41f6-aa55-dbaddf09eaa6.jpeg'
import vehiclePhoto25 from '../assets/piba-arac/aa8ba518-ac6d-4970-9b82-aec860b11586.jpeg'
import vehiclePhoto26 from '../assets/piba-arac/aec6575e-65b3-4331-8f64-3a58c3eb1e28.jpeg'
import vehiclePhoto27 from '../assets/piba-arac/b43e64f1-a7c9-4592-8481-0981272dfe87.jpeg'
import vehiclePhoto28 from '../assets/piba-arac/b5fe57d3-5ab7-4b42-80f3-c3efeaa11c83.jpeg'
import vehiclePhoto29 from '../assets/piba-arac/b9498f81-ae74-4440-b859-d064f4741d02.jpeg'
import vehiclePhoto30 from '../assets/piba-arac/ba55b324-bd2a-44f7-aa8e-29c3007f306c.jpeg'
import vehiclePhoto31 from '../assets/piba-arac/c8f90be5-12c5-4e6d-9c73-028c87000258.jpeg'
import vehiclePhoto32 from '../assets/piba-arac/f96106bd-1289-4b8e-8818-0ed893512143.jpeg'
import vehiclePhoto33 from '../assets/piba-arac/fb97858f-0a09-45a3-91a0-f74c25ce25d0.jpeg'

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
              {/* Fotoğraf */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-2">{photo.title}</h3>
                    <p className="text-white/90 text-sm line-clamp-2">{photo.description}</p>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>

              {/* Fotoğraf Bilgisi */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-1">{photo.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{photo.description}</p>
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

              {/* Main Image */}
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Photo Info */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-gray-900">{selectedPhoto.title}</h3>
                  <div className="text-sm text-gray-500">
                    {currentPhotoIndex + 1} / {vehiclePhotos.length}
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-6">{selectedPhoto.description}</p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 8a2 2 0 100-4 2 2 0 000 4zm0 0v4a2 2 0 002 2h6a2 2 0 002-2v-4" />
                    </svg>
                    {language === 'en' ? 'Book This Vehicle' : 'Bu Aracı Rezerve Et'}
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-xl font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {language === 'en' ? 'Contact for Info' : 'Bilgi İçin İletişim'}
                  </button>
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
