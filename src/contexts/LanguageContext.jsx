import React, { createContext, useContext, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

const translations = {
  en: {
    // Header
    home: 'Home',
    about: 'About',
    pinarSiverek: 'Pınar Siverek',
    tours: 'Tours',
    vehicles: 'Vehicles',
    gallery: 'Gallery',
    accessibility: 'Accessibility',
    destinations: 'Destinations',
    contact: 'Contact',
    phone: 'Phone',
    bookNow: 'Book Now',
    
    // Hero Section
    accessibleTravel: 'Accessible Travel Experience',
    discoverWorld: 'Discover The World With Us',
    heroSubtitle: 'Experience barrier-free travel with our specially designed accessible tours and destinations. Safe, comfortable, and unforgettable journeys for everyone.',
    heroSlogan: 'Free Your Soul',
    // Alternative slogans (for future use)
    sloganOptions: [
      'Free Your Soul',
      'No Barriers to Free Souls',
      'Leave Barriers Behind',
      'Accessible Holidays, Unique Memories'
    ],
    exploreTours: 'Explore Tours',
    
    // Stats
    happyTravelers: 'Happy Travelers',
    customerRating: 'Average Rating',
    
    // Tours Section
    speciallySelected: 'Specially Selected For You',
    toursSubtitle: 'Discover our most popular destinations and create unforgettable memories',
    accessibleTour: 'Accessible Tour',
    reviews: 'reviews',
    duration: 'Duration',
    groupSize: 'Group Size',
    getDetails: 'Get Details',
    popularDestinations: 'Popular Destinations',
    popularToursTitle: 'Our Popular <span class="text-orange-500">Tours</span>',
    popularToursSubtitle: 'Discover the most beautiful places of Istanbul with accessible vehicles and special guidance services. Each tour is specially designed for barrier-free travel experience.',
    accessibilityFeatures: 'Accessibility Features',
    highlights: 'Highlights',
    more: 'more',
    viewAllTours: 'View All Tours',
    viewDetails: 'View Details',
    reserveTour: 'Reserve Tour',

    // Accessibility Features
    wheelchairRamps: 'Wheelchair Ramps',
    accessibleToilets: 'Accessible Toilets',
    audioGuides: 'Audio Guide Systems',

    // Guide Features
    certifiedGuides: 'Certified Professional Guides',
    multiLanguage: 'Multi-Language Support',
    localExpertise: 'Local Expertise & Knowledge',

    // Vehicle Features
    wheelchairVans: 'Wheelchair Accessible Vehicles',
    comfortableSeating: 'Comfortable Seating',
    airConditioning: 'Climate Control System',

    // Service Features
    customItinerary: 'Custom Itinerary Planning',
    flexibleTiming: 'Flexible Schedule',
    specialNeeds: 'Special Needs Assistance',
    
    // Tour Details
    aboutTour: 'About This Tour',
    included: 'Included',
    notIncluded: 'Not Included',
    makeReservation: 'Make Reservation',
    
    // Common
    price: 'Price',
    rating: 'Rating',
    quickInfo: 'Quick Info',
    contactUs: 'Contact Us',
    questions: 'Have questions?',
    contactTeam: 'Contact our expert team',
    
    // Why Choose Us
    whyChooseUs: 'Why Choose Us',
    whyChooseUsTitle: 'Turkey\'s <span class="text-orange-500">First & Only</span><br/>Accessible Tours Agency',
    whyChooseUsSubtitle: 'WE ARE HERE TO INCREASE YOUR TRAVEL FREEDOM! We offer safe and comfortable travel opportunities with our tours and equipment specially designed for disabled individuals.',
    happyCustomers: 'Happy Guests',
    yearsExperience: 'Years Experience',
    customerScore: 'Recommendation Rate',
    
    // Features
    fullAccessibility: 'Special Tours for Disabled & Elderly',
    fullAccessibilityDesc: 'Tours specially designed for disabled and elderly individuals with complete accessibility solutions',
    expertGuides: 'Reliable & Professional Service',
    expertGuidesDesc: 'Turkey\'s most experienced team in accessible tourism with certified professional guides',
    specialVehicles: 'Specially Designed Equipment',
    specialVehiclesDesc: 'Modern vehicle fleet and equipment specially designed for disabled individuals',
    personalizedService: 'Safe & Comfortable Travel',
    personalizedServiceDesc: 'We provide safe and comfortable travel opportunities with our professional approach',
    
    // Feature Lists
    accessibilityFeaturesList: ['Wheelchair accessible venues', 'Barrier-free transportation', 'Special assistance services', 'Accessible accommodation'],
    expertGuidesFeaturesList: ['8+ years experience', 'Professional certification', 'Specialized training', 'Emergency response'],
    specialVehiclesFeaturesList: ['Hydraulic lift systems', 'Safety equipment', 'Climate control', 'Professional drivers'],
    personalizedServiceFeaturesList: ['Individual planning', 'Flexible itinerary', 'Medical support', '24/7 assistance'],
    
    // Breadcrumb
    homePage: 'Home',
    tourNotFound: 'Tour not found',
    backToHome: 'Back to home',
    
    // Reservation
    reservationText: 'Click the button below to make a reservation.',
    goToReservation: 'Go to Reservation Page',

    // Photo Gallery
    photoGallery: 'Photo Gallery',
    tourParticipants: 'Tour Participants',
    ourGuests: 'Our Guests',
    photoGallerySubtitle: 'Happy moments and unforgettable experiences of our guests who participated in our accessible tours',

    // Testimonials
    guestComments: 'Guest Comments',
    whatTheySay: 'What They Say?',

    // Vehicle Fleet Gallery
    ourFleet: 'Our Fleet',
    accessibleVehicleFleet: 'Accessible Vehicle Fleet',
    vehicleFleetSubtitle: 'Modern and specially equipped vehicles designed to provide safe, comfortable and accessible transportation for all our guests.',
    viewDetailsRent: 'View Details & Rent →',
    vehicleDescription: 'Vehicle Description',
    keyFeatures: 'Key Features',
    technicalSpecifications: 'Technical Specifications',
    passengerCapacity: 'Passenger Capacity',
    wheelchairSpaces: 'Wheelchair Spaces',
    climateControl: 'Climate Control',
    bookThisVehicle: 'Book This Vehicle',
    contactForInfo: 'Contact for Info',

    // Vehicle Features Section
    ourVehicles: 'Our Vehicles',
    vehicleFeaturesTitle: 'Our <span class="text-orange-500">Specialized</span> Vehicle Fleet',
    vehicleFeaturesSubtitle: 'Modern and specially equipped vehicles designed to provide safe, comfortable and accessible transportation for all our guests.',
    tseCompliant: 'TSE Standard Compliant Modifications',
    disabilityFriendly: 'Disability-Friendly Special Solutions',
    fastReliableService: 'Fast, Reliable & Professional Service',
    turkeyFirstCompany: 'Turkey\'s First Disability Vehicle Conversion Company',
    comfortDescription: 'We increase your travel freedom! We offer specially designed accessible vehicle solutions for disabled individuals, providing safe and comfortable transportation.',

    // About Us Section
    aboutUsHome: 'About Us',
    aboutUsHomeTitle: 'Turkey\'s <span class="text-orange-500">First & Leading</span><br/>Accessible Travel Agency',
    aboutUsHomeSubtitle: 'Specially designed for people with disabilities, elderly, and those with limited mobility',
    aboutUsDescription: 'As Piba Wings Mobility, we are Turkey\'s first and leading travel agency, offering specially designed tours and professional team to make life easier for people with disabilities, the elderly, people with limited mobility, and those with hearing impairments.',
    ourMission: 'Our Mission',
    missionText: 'To eliminate travel barriers and make the world accessible to everyone, regardless of physical limitations. We believe accessible tourism will grow and individuals with disabilities will be seen more frequently in historical sites and museums.',
    whyChooseUsShort: 'Why Choose Us?',
    experienceYears: '24+ Years Experience',
    happyGuests: '1000+ Happy Guests',
    accessibleTours: '100% Accessible Tours',
    professionalTeam: 'Professional Team',
    learnMore: 'Learn More About Us',

    // Contact - using existing keys from above
  },
  tr: {
    // Header
    home: 'Ana Sayfa',
    about: 'Hakkımızda',
    pinarSiverek: 'Pınar Siverek',
    tours: 'Turlar',
    vehicles: 'Araçlarımız',
    gallery: 'Galeri',
    accessibility: 'Erişilebilirlik',
    destinations: 'Destinasyonlar',
    contact: 'İletişim',
    phone: 'Telefon',
    bookNow: 'Hemen Rezerve Et',
    
    // Hero Section
    accessibleTravel: 'Erişilebilir Seyahat Deneyimi',
    discoverWorld: 'Dünyayı Bizimle Keşfedin',
    heroSubtitle: 'Özel olarak tasarlanmış erişilebilir turlarımız ve destinasyonlarımızla engelsiz seyahat deneyimi yaşayın. Herkes için güvenli, konforlu ve unutulmaz yolculuklar.',
    heroSlogan: 'Ruhunuzu Özgür Bırakın',
    // Alternative slogans (for future use)
    sloganOptions: [
      'Ruhunuzu Özgür Bırakın',
      'Özgür Ruhlar İçin Engel Yok',
      'Engelleri Geride Bırakın',
      'Engelsiz Tatiller, Eşsiz Anılar'
    ],
    exploreTours: 'Turları Keşfet',
    
    // Stats
    happyTravelers: 'Mutlu Gezgin',
    customerRating: 'Ortalama Puan',
    
    // Tours Section
    speciallySelected: 'Sizin İçin Özel Seçilmiş',
    toursSubtitle: 'En popüler destinasyonlarımızı keşfedin ve unutulmaz anılar biriktirin',
    accessibleTour: 'Engelsiz Tur',
    reviews: 'değerlendirme',
    duration: 'Süre',
    groupSize: 'Grup Büyüklüğü',
    getDetails: 'Detaylı Bilgi Al',
    popularDestinations: 'Popüler Destinasyonlar',
    popularToursTitle: 'Popüler <span class="text-orange-500">Turlarımız</span>',
    popularToursSubtitle: 'Erişilebilir araçlar ve özel rehberlik hizmetleriyle İstanbul\'un en güzel yerlerini keşfedin. Her tur, engelsiz seyahat deneyimi için özel olarak tasarlanmıştır.',
    accessibilityFeatures: 'Erişilebilirlik Özellikleri',
    highlights: 'Öne Çıkan Özellikler',
    more: 'daha',
    viewAllTours: 'Tüm Turları Görüntüle',
    viewDetails: 'Detayları Gör',
    reserveTour: 'Tur Rezervasyonu',

    // Accessibility Features
    wheelchairRamps: 'Tekerlekli Sandalye Rampaları',
    accessibleToilets: 'Engelsiz Tuvaletler',
    audioGuides: 'Sesli Rehber Sistemleri',

    // Guide Features
    certifiedGuides: 'Sertifikalı Profesyonel Rehberler',
    multiLanguage: 'Çoklu Dil Desteği',
    localExpertise: 'Yerel Uzmanlık ve Bilgi',

    // Vehicle Features
    wheelchairVans: 'Tekerlekli Sandalye Erişimli Araçlar',
    comfortableSeating: 'Konforlu Oturma Düzeni',
    airConditioning: 'İklim Kontrol Sistemi',

    // Service Features
    customItinerary: 'Özel Program Planlama',
    flexibleTiming: 'Esnek Zaman Planlaması',
    specialNeeds: 'Özel İhtiyaç Desteği',
    
    // Tour Details
    aboutTour: 'Bu Tur Hakkında',
    included: 'Dahil Olanlar',
    notIncluded: 'Dahil Olmayanlar',
    makeReservation: 'Rezervasyon Yap',
    
    // Common
    price: 'Fiyat',
    rating: 'Puan',
    quickInfo: 'Hızlı Bilgi',
    contactUs: 'İletişime Geçin',
    questions: 'Sorularınız mı var?',
    contactTeam: 'Uzman ekibimizle iletişime geçin',
    
    // Why Choose Us
    whyChooseUs: 'Neden Bizi Seçmelisiniz',
    whyChooseUsTitle: 'Türkiye\'nin <span class="text-orange-500">İlk ve Tek</span><br/>Engelli Turlar Acentası',
    whyChooseUsSubtitle: 'SEYAHAT ÖZGÜRLÜĞÜNÜZÜ ARTIRMAK İÇİN BURADAYIZ! Engelli bireyler için özel olarak tasarlanmış turlarımız ve ekipmanlarımızla güvenli ve konforlu seyahat imkanı sunuyoruz.',
    happyCustomers: 'Mutlu Misafir',
    yearsExperience: 'Yıl Deneyim',
    customerScore: 'Tavsiye Oranı',
    
    // Features
    fullAccessibility: 'Engelli ve Yaşlı Bireylere Özel Turlar',
    fullAccessibilityDesc: 'Engelli ve yaşlı bireylere özel olarak tasarlanmış, tam erişilebilirlik çözümlü turlar',
    expertGuides: 'Güvenilir ve Profesyonel Hizmet',
    expertGuidesDesc: 'Sertifikalı profesyonel rehberlerle erişilebilir turizm konusunda Türkiye\'nin en deneyimli ekibi',
    specialVehicles: 'Özel Tasarım Ekipmanlar',
    specialVehiclesDesc: 'Engelli bireyler için özel olarak tasarlanmış modern araç filosu ve ekipmanlar',
    personalizedService: 'Güvenli ve Konforlu Seyahat',
    personalizedServiceDesc: 'Profesyonel yaklaşımımızla güvenli ve konforlu seyahat imkanları sunuyoruz',
    
    // Feature Lists
    accessibilityFeaturesList: ['Tekerlekli sandalye erişimli mekanlar', 'Engelsiz ulaşım', 'Özel yardım hizmetleri', 'Erişilebilir konaklama'],
    expertGuidesFeaturesList: ['8+ yıl deneyim', 'Profesyonel sertifikasyon', 'Özel eğitim', 'Acil durum müdahalesi'],
    specialVehiclesFeaturesList: ['Hidrolik kaldırım sistemleri', 'Güvenlik ekipmanları', 'İklim kontrolü', 'Profesyonel şoförler'],
    personalizedServiceFeaturesList: ['Bireysel planlama', 'Esnek program', 'Tıbbi destek', '24/7 yardım'],
    
    // Breadcrumb
    homePage: 'Ana Sayfa',
    tourNotFound: 'Tur bulunamadı',
    backToHome: 'Ana sayfaya dön',
    
    // Reservation
    reservationText: 'Rezervasyon yapmak için aşağıdaki butona tıklayın.',
    goToReservation: 'Rezervasyon Sayfasına Git',

    // Photo Gallery
    photoGallery: 'Fotoğraf Galerisi',
    tourParticipants: 'Tura Katılan',
    ourGuests: 'Misafirlerimiz',
    photoGallerySubtitle: 'Erişilebilir turlarımıza katılan misafirlerimizin mutlu anları ve unutulmaz deneyimleri',

    // Testimonials
    guestComments: 'Misafir Yorumları',
    whatTheySay: 'Ne Diyor?',

    // Vehicle Fleet Gallery
    ourFleet: 'Araç Filomuz',
    accessibleVehicleFleet: 'Erişilebilir Araç Filomuz',
    vehicleFleetSubtitle: 'Tüm misafirlerimiz için güvenli, konforlu ve erişilebilir ulaşım sağlamak üzere tasarlanmış modern ve özel donanımlı araçlarımız.',
    viewDetailsRent: 'Detayları Gör & Kirala →',
    vehicleDescription: 'Araç Açıklaması',
    keyFeatures: 'Temel Özellikler',
    technicalSpecifications: 'Teknik Özellikler',
    passengerCapacity: 'Yolcu Kapasitesi',
    wheelchairSpaces: 'Tekerlekli Sandalye Yeri',
    climateControl: 'İklim Kontrolü',
    bookThisVehicle: 'Bu Aracı Rezerve Et',
    contactForInfo: 'Bilgi İçin İletişim',

    // Vehicle Features Section
    ourVehicles: 'Araçlarımız',
    vehicleFeaturesTitle: '<span class="text-orange-500">Özel Donanımlı</span> Araç Filomuz',
    vehicleFeaturesSubtitle: 'Tüm misafirlerimiz için güvenli, konforlu ve erişilebilir ulaşım sağlamak üzere tasarlanmış modern ve özel donanımlı araçlarımız.',
    tseCompliant: 'TSE standartlarına uygun modifikasyonlar',
    disabilityFriendly: 'Engelli bireylere özel yenilikçi çözümler',
    fastReliableService: 'Hızlı, güvenilir ve profesyonel hizmet',
    turkeyFirstCompany: 'Türkiye\'nin öncü engelli araç dönüşüm firması',
    comfortDescription: 'Seyahat özgürlüğünüzü artırmak için buradayız! Engelli bireyler için özel olarak tasarlanmış araç çözümlerimizle güvenli ve konforlu bir yolculuk sunuyoruz.',

    // About Us Section
    aboutUsHome: 'Hakkımızda',
    aboutUsHomeTitle: 'Türkiye\'nin <span class="text-orange-500">İlk ve Önde Gelen</span><br/>Erişilebilir Seyahat Acentesi',
    aboutUsHomeSubtitle: 'Engelli bireyler, yaşlılar ve hareket kabiliyeti kısıtlı kişiler için özel olarak tasarlandı',
    aboutUsDescription: 'Piba Wings Mobility olarak, Türkiye\'nin ilk ve önde gelen seyahat acentesi olarak, engelli bireyler, yaşlılar, hareket kabiliyeti kısıtlı kişiler ve işitme engelliler için özel olarak tasarlanmış turlar ve profesyonel bir ekip sunuyoruz.',
    ourMission: 'Misyonumuz',
    missionText: 'Seyahat engellerini ortadan kaldırmak ve fiziksel sınırlamalar ne olursa olsun dünyayı herkes için erişilebilir kılmak. Erişilebilir turizmin büyüyeceğine ve engelli bireylerin tarihi mekanlar ve müzelerde daha sık görüleceğine inanıyoruz.',
    whyChooseUsShort: 'Neden Bizi Seçmelisiniz?',
    experienceYears: '24+ Yıl Deneyim',
    happyGuests: '1000+ Mutlu Misafir',
    accessibleTours: '%100 Erişilebilir Turlar',
    professionalTeam: 'Profesyonel Ekip',
    learnMore: 'Hakkımızda Daha Fazla Bilgi',

    // Contact - using existing keys from above
  }
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')

  const changeLanguage = (lang) => {
    setLanguage(lang)

    // URL mapping for language switching
    const currentPath = window.location.pathname
    let newPath = currentPath

    if (lang === 'tr') {
      // Switch to Turkish URLs
      if (currentPath === '/tours') newPath = '/turlar'
      else if (currentPath === '/vehicles') newPath = '/araclarimiz'
      else if (currentPath === '/about') newPath = '/hakkimizda'
      else if (currentPath === '/contact') newPath = '/iletisim'
      else if (currentPath === '/gallery') newPath = '/galeri'
      else if (currentPath.startsWith('/tour/')) newPath = currentPath.replace('/tour/', '/tur/')
      else if (currentPath.startsWith('/tours/')) newPath = currentPath.replace('/tours/', '/turlar/')
    } else {
      // Switch to English URLs
      if (currentPath === '/turlar') newPath = '/tours'
      else if (currentPath === '/araclarimiz') newPath = '/vehicles'
      else if (currentPath === '/hakkimizda') newPath = '/about'
      else if (currentPath === '/iletisim') newPath = '/contact'
      else if (currentPath === '/galeri') newPath = '/gallery'
      else if (currentPath.startsWith('/tur/')) newPath = currentPath.replace('/tur/', '/tour/')
      else if (currentPath.startsWith('/turlar/')) newPath = currentPath.replace('/turlar/', '/tours/')
    }

    // Navigate to new URL if it changed
    if (newPath !== currentPath) {
      window.history.pushState({}, '', newPath)
      // Trigger a popstate event to update React Router
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
