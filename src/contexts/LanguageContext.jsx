import React, { createContext, useContext, useState, useEffect } from 'react'

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
    planYourTrip: 'Plan Your Trip',
    gallery: 'Gallery',
    accessibility: 'Accessibility',
    destinations: 'Destinations',
    contact: 'Contact',
    phone: 'Phone',
    bookNow: 'Book Now',
    
    // Hero Section
    accessibleTravel: 'Accessible Travel Experience',
    discoverWorld: 'Discover The World With Us',
    heroSubtitle: 'Specially designed accessible and small-group tours for comfortable, worry-free journeys.',
    heroSlogan: 'Free Your Soul',
    // Alternative slogans (for future use)
    sloganOptions: [
      'Free Your Soul',
      'No Barriers to Free Souls',
      'Leave Barriers Behind',
      'Accessible Holidays, Unique Memories'
    ],
    exploreTours: 'Explore Tours',
    viewTours: 'View Tours',
    
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
    mostPopular: 'Most Popular',
    priceFrom: 'Price from',

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
    contactUs: 'Get In Touch',
    questions: 'Let’s plan Your Trip Together',
    contactTeam: 'Talk To Our Expert',
    
    // Why Choose Us
    whyChooseUs: 'Why Choose Us',
    whyChooseUsTitle: 'Turkey\'s <span class="text-orange-500">First & Leading</span><br/>Accessible Travel Agency',
    whyChooseUsSubtitle: 'We are here to enhance your travel freedom! We provide safe and comfortable travel experiences with our tours and equipment, specially designed for individuals with disabilities.',
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
    turkeyFirstCompany: 'Turkey\'s First & Leading Accessible Travel Agency',
    comfortDescription: 'We increase your travel freedom! We offer specially designed accessible vehicle solutions for disabled individuals, providing safe and comfortable transportation.',

    ourVehiclesTitle: 'Our <span class="text-orange-500">Vehicles</span>',
    ourVehiclesSubtitle: 'We offer a fleet of modern, specially-equipped vehicles to ensure safe, comfortable, and accessible transportation for all our guests.',
    viewAllVehicles: 'View All Vehicles',

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

    // About Page
    about_title: 'Travel Without Barriers',
    about_subtitle: 'Turkey’s first and leading accessible travel agency',
    about_desc_1: 'As Piba Wings Mobility, we are dedicated to breaking down barriers and making travel a reality for everyone. We specialize in creating custom tour experiences for individuals with disabilities, seniors, and those with limited mobility.',
    about_desc_2: 'Our mission is to provide safe, comfortable, and enriching travel experiences. From fully accessible vehicles to meticulously planned itineraries and professional, caring guides, we handle every detail to ensure a worry-free journey.',
    about_desc_3: 'We believe that the joy of discovery should be accessible to all. Join us to explore the rich history and vibrant culture of Turkey without limits.',
    about_meet_founder: 'Meet Our Founder',
    why_choose_us_1: '24 Years Experience',
    why_choose_us_2: 'Licensed Guides',
    why_choose_us_3: 'Fully Accessible Vehicles',
    why_choose_us_4: 'Personalized Service',
    why_choose_us_5: 'Multilingual Support',
    why_choose_us_6: '1000+ Happy Guests',
    about_cta: 'Ready to Explore İstanbul without barriers?',

    // Contact - using existing keys from above

    // Tours Page
    toursPageTitle: '“Accessible & Private Tours” Planned With Care',
    whatAllToursInclude: 'What All Tours Include',
    featureHotels: 'Accessible Hotels',
    featureVehicles: 'Wheelchair-accessible vehicles',
    featureRestaurants: 'Accessible Restaurants',
    featureGuides: 'Experienced licensed guides',
    featurePacing: 'Flexible pacing & private groups',
    featureAssistance: 'Assistance whenever needed',

    // Footer
    footerDescription: 'We offer specially designed tours and professional services for individuals with disabilities to experience safe, comfortable and unforgettable travel experiences.',
    footerQuickLinks: 'Quick Links',
    footerHome: 'Home',
    footerOurTours: 'Our Tours',
    footerAccessibility: 'Accessibility',
    footerReservation: 'Reservation',
    footerFollowUs: 'Follow Us',
    footerSocialMedia: 'Follow our social media accounts for current tours and special offers.',
    footerSpecialOffers: 'Special Offers',
    footerNewsletter: 'Stay informed about our accessible tours',
    footerYourEmail: 'Your email address',
    footerCopyright: '© 2024 pibawingsmobility.com. All rights reserved.',
    footerPrivacyPolicy: 'Privacy Policy',
    footerTermsOfService: 'Terms of Service',
    footerGDRP: 'GDPR',
  },
  tr: {
    // Header
    home: 'Ana Sayfa',
    about: 'Hakkımızda',
    pinarSiverek: 'Pınar Siverek',
    tours: 'Turlar',
    vehicles: 'Araçlarımız',
    planYourTrip: 'Seyahatinizi Planlayın',
    gallery: 'Galeri',
    accessibility: 'Erişilebilirlik',
    destinations: 'Destinasyonlar',
    contact: 'İletişim',
    phone: 'Telefon',
    bookNow: 'Hemen Rezerve Et',
    
    // Hero Section
    accessibleTravel: 'Erişilebilir Seyahat Deneyimi',
    discoverWorld: 'Dünyayı Bizimle Keşfedin',
    heroSubtitle: 'Konforlu ve endişesiz yolculuklar için özel olarak tasarlanmış erişilebilir ve küçük grup turları.',
    heroSlogan: 'Ruhunuzu Özgür Bırakın',
    // Alternative slogans (for future use)
    sloganOptions: [
      'Ruhunuzu Özgür Bırakın',
      'Özgür Ruhlar İçin Engel Yok',
      'Engelleri Geride Bırakın',
      'Engelsiz Tatiller, Eşsiz Anılar'
    ],
    exploreTours: 'Turları Keşfet',
    viewTours: 'Turları Görüntüle',
    
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
    mostPopular: 'En Popüler',
    priceFrom: 'Fiyat',

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
    contactUs: 'Bize Ulaşın',
    questions: 'Gelin Seyahatinizi Birlikte Planlayalım',
    contactTeam: 'Uzmanımızla Görüşün',
    
    // Why Choose Us
    whyChooseUs: 'Neden Bizi Seçmelisiniz',
    whyChooseUsTitle: 'Türkiye\'nin <span class="text-orange-500">İlk ve Önde Gelen</span><br/>Erişilebilir Seyahat Acentesi',
    whyChooseUsSubtitle: 'Seyahat özgürlüğünüzü artırmak için buradayız! Engelli bireyler için özel olarak tasarlanmış turlarımız ve ekipmanlarımızla güvenli ve konforlu seyahat deneyimleri sunuyoruz.',
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
    turkeyFirstCompany: 'Türkiye\'nin İlk ve Önde Gelen Erişilebilir Seyahat Acentesi',
    comfortDescription: 'Seyahat özgürlüğünüzü artırmak için buradayız! Engelli bireyler için özel olarak tasarlanmış araç çözümlerimizle güvenli ve konforlu bir yolculuk sunuyoruz.',

    ourVehiclesTitle: 'Araç <span class="text-orange-500">Filomuz</span>',
    ourVehiclesSubtitle: 'Tüm misafirlerimiz için güvenli, konforlu ve erişilebilir ulaşım sağlamak üzere tasarlanmış modern ve özel donanımlı araç filomuzla hizmetinizdeyiz.',
    viewAllVehicles: 'Tüm Araçları Görüntüle',

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

    // About Page
    about_title: 'Engelsiz Seyahat',
    about_subtitle: 'Türkiye’nin ilk ve lider erişilebilir seyahat acentesi',
    about_desc_1: 'Piba Wings Mobility olarak, engelleri kaldırmaya ve seyahati herkes için bir gerçeğe dönüştürmeye adadık. Engelli bireyler, yaşlılar ve hareket kabiliyeti kısıtlı olanlar için özel tur deneyimleri yaratmada uzmanız.',
    about_desc_2: 'Misyonumuz güvenli, konforlu ve zenginleştirici seyahat deneyimleri sunmaktır. Tam erişilebilir araçlardan titizlikle planlanmış güzergahlara ve profesyonel, ilgili rehberlere kadar, endişesiz bir yolculuk sağlamak için her ayrıntıyı biz hallediyoruz.',
    about_desc_3: 'Keşfetmenin keyfinin herkese açık olması gerektiğine inanıyoruz. Türkiye\'nin zengin tarihini ve canlı kültürünü sınırsızca keşfetmek için bize katılın.',
    about_meet_founder: 'Kurucumuzla Tanışın',
    why_choose_us_1: '24 Yıllık Deneyim',
    why_choose_us_2: 'Lisanslı Rehberler',
    why_choose_us_3: 'Tam Erişilebilir Araçlar',
    why_choose_us_4: 'Kişiselleştirilmiş Hizmet',
    why_choose_us_5: 'Çok Dilli Destek',
    why_choose_us_6: '1000+ Mutlu Misafir',
    about_cta: 'İstanbul\'u engelsiz keşfetmeye hazır mısınız?',

    // Contact - using existing keys from above

    // Tours Page
    toursPageTitle: 'Özenle Planlanmış “Erişilebilir & Özel Turlar”',
    whatAllToursInclude: 'Tüm Turlara Neler Dahil',
    featureHotels: 'Erişilebilir Oteller',
    featureVehicles: 'Tekerlekli sandalye erişimli araçlar',
    featureRestaurants: 'Erişilebilir Restoranlar',
    featureGuides: 'Deneyimli lisanslı rehberler',
    featurePacing: 'Esnek tempo ve özel gruplar',
    featureAssistance: 'İhtiyaç duyulduğunda yardım',

    // Footer
    footerDescription: 'Engelli bireylerin güvenli, konforlu ve unutulmaz seyahat deneyimleri yaşamaları için özel olarak tasarlanmış turlar ve profesyonel hizmetler sunuyoruz.',
    footerQuickLinks: 'Hızlı Bağlantılar',
    footerHome: 'Ana Sayfa',
    footerOurTours: 'Turlarımız',
    footerAccessibility: 'Erişilebilirlik',
    footerReservation: 'Rezervasyon',
    footerFollowUs: 'Bizi Takip Edin',
    footerSocialMedia: 'Güncel turlar ve özel teklifler için sosyal medya hesaplarımızı takip edin.',
    footerSpecialOffers: 'Özel Teklifler',
    footerNewsletter: 'Erişilebilir turlarımızdan haberdar olun',
    footerYourEmail: 'E-posta adresiniz',
    footerCopyright: '© 2024 pibawingsmobility.com. Tüm hakları saklıdır.',
    footerPrivacyPolicy: 'Gizlilik Politikası',
    footerTermsOfService: 'Hizmet Şartları',
    footerGDRP: 'KVKK',
  }
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Initialize from localStorage if available
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pibawings_language')
      return saved || 'en'
    }
    return 'en'
  })

  // Detect language from URL on mount and URL changes
  useEffect(() => {
    const detectLanguageFromURL = () => {
      // Safety check for window object (SSR compatibility)
      if (typeof window === 'undefined') return

      const path = window.location.pathname
      const turkishPaths = ['/turlar', '/araclarimiz', '/hakkimizda', '/iletisim', '/galeri']
      const isTurkishPath = turkishPaths.includes(path) ||
                           path.startsWith('/tur/') ||
                           path.startsWith('/turlar/')

      if (isTurkishPath && language !== 'tr') {
        setLanguage('tr')
      } else if (!isTurkishPath && language !== 'en') {
        setLanguage('en')
      }
    }

    // Detect on mount with delay for hydration
    const timer = setTimeout(() => {
      detectLanguageFromURL()
    }, 100)

    // Listen for URL changes
    const handlePopState = () => {
      detectLanguageFromURL()
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', handlePopState)
    }

    return () => {
      clearTimeout(timer)
      if (typeof window !== 'undefined') {
        window.removeEventListener('popstate', handlePopState)
      }
    }
  }, []) // Removed `language` dependency to prevent overriding manual selection

  const changeLanguage = (lang) => {
    console.log('LanguageContext - changeLanguage called with:', lang)
    setLanguage(lang)

    // Force re-render by updating localStorage (for debugging)
    if (typeof window !== 'undefined') {
      localStorage.setItem('pibawings_language', lang)
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
