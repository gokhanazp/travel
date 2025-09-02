import React, { createContext, useContext, useState } from 'react'

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
    tours: 'Tours',
    destinations: 'Destinations',
    contact: 'Contact',
    phone: 'Phone',
    bookNow: 'Book Now',
    
    // Hero Section
    accessibleTravel: 'Accessible Travel Experience',
    discoverWorld: 'Discover The World With Us',
    heroSubtitle: 'Experience barrier-free travel with our specially designed accessible tours and destinations. Safe, comfortable, and unforgettable journeys for everyone.',
    exploreTours: 'Explore Tours',
    
    // Stats
    happyTravelers: 'Happy Travelers',
    customerRating: 'Average Rating',
    destinations: 'Destinations',
    
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
    
    // Tour Details
    aboutTour: 'About This Tour',
    included: 'Included',
    notIncluded: 'Not Included',
    accessibility: 'Accessibility Features',
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
    whyChooseUsTitle: 'Why Choose <span class="text-orange-500">Us</span>?',
    whyChooseUsSubtitle: 'With our expert staff and special services in the field of accessible tourism, we offer unforgettable and safe travel experiences to every passenger.',
    happyCustomers: 'Happy Guests',
    yearsExperience: 'Years Experience',
    customerScore: 'Recommendation Rate',
    
    // Features
    fullAccessibility: 'Full Accessibility',
    fullAccessibilityDesc: 'All vehicles and venues are specially designed for barrier-free access',
    expertGuides: 'Expert Guide Team',
    expertGuidesDesc: 'Professional guides trained and experienced in accessible tourism',
    specialVehicles: 'Special Design Vehicles',
    specialVehiclesDesc: 'Special vehicle fleet with wheelchair access and safety equipment',
    personalizedService: 'Personalized Service',
    personalizedServiceDesc: 'Individual solutions planned according to each guest\'s special needs',
    
    // Feature Lists
    accessibilityFeaturesList: ['Ramp systems', 'Accessible toilets', 'Special lift systems', 'Audio guidance'],
    expertGuidesFeaturesList: ['Certified guides', 'Multi-language support', 'First aid training', 'Empathy training'],
    specialVehiclesFeaturesList: ['Hydraulic lift', 'Safety belts', 'Air conditioning', '24/7 technical support'],
    personalizedServiceFeaturesList: ['Special menu options', 'Flexible schedule', 'One-on-one support', 'Family-friendly service'],
    
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

    // Contact
    contactUs: 'Contact Us',
    questions: 'Have Questions?',
    contactTeam: 'Our expert team is ready to help you plan your accessible travel experience.'
  },
  tr: {
    // Header
    home: 'Ana Sayfa',
    about: 'Hakkımızda',
    tours: 'Turlar',
    destinations: 'Destinasyonlar',
    contact: 'İletişim',
    phone: 'Telefon',
    bookNow: 'Hemen Rezerve Et',
    
    // Hero Section
    accessibleTravel: 'Erişilebilir Seyahat Deneyimi',
    discoverWorld: 'Dünyayı Bizimle Keşfedin',
    heroSubtitle: 'Özel olarak tasarlanmış erişilebilir turlarımız ve destinasyonlarımızla engelsiz seyahat deneyimi yaşayın. Herkes için güvenli, konforlu ve unutulmaz yolculuklar.',
    exploreTours: 'Turları Keşfet',
    
    // Stats
    happyTravelers: 'Mutlu Gezgin',
    customerRating: 'Ortalama Puan',
    destinations: 'Destinasyon',
    
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
    
    // Tour Details
    aboutTour: 'Bu Tur Hakkında',
    included: 'Dahil Olanlar',
    notIncluded: 'Dahil Olmayanlar',
    accessibility: 'Erişilebilirlik Özellikleri',
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
    whyChooseUsTitle: 'Neden <span class="text-orange-500">Bizi</span> Seçmelisiniz?',
    whyChooseUsSubtitle: 'Erişilebilir turizm alanında uzman kadromuz ve özel hizmetlerimizle, her yolcuya unutulmaz ve güvenli seyahat deneyimi sunuyoruz.',
    happyCustomers: 'Mutlu Misafir',
    yearsExperience: 'Yıl Deneyim',
    customerScore: 'Tavsiye Oranı',
    
    // Features
    fullAccessibility: 'Tam Erişilebilirlik',
    fullAccessibilityDesc: 'Tüm araçlar ve mekanlar engelsiz erişim için özel olarak tasarlanmıştır',
    expertGuides: 'Uzman Rehber Kadrosu',
    expertGuidesDesc: 'Erişilebilir turizm konusunda eğitimli ve deneyimli profesyonel rehberler',
    specialVehicles: 'Özel Tasarım Araçlar',
    specialVehiclesDesc: 'Tekerlekli sandalye erişimi olan, güvenlik donanımlı özel araç filosu',
    personalizedService: 'Kişiselleştirilmiş Hizmet',
    personalizedServiceDesc: 'Her misafirimizin özel ihtiyaçlarına göre planlanmış bireysel çözümler',
    
    // Feature Lists
    accessibilityFeaturesList: ['Rampa sistemleri', 'Engelsiz tuvaletler', 'Özel kaldırım sistemleri', 'Sesli rehberlik'],
    expertGuidesFeaturesList: ['Sertifikalı rehberler', 'Çoklu dil desteği', 'İlk yardım eğitimi', 'Empati eğitimi'],
    specialVehiclesFeaturesList: ['Hidrolik kaldırım', 'Güvenlik kemerleri', 'Klima sistemi', '24/7 teknik destek'],
    personalizedServiceFeaturesList: ['Özel menü seçenekleri', 'Esnek program', 'Birebir destek', 'Aile dostu hizmet'],
    
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

    // Contact
    contactUs: 'İletişim',
    questions: 'Sorularınız mı Var?',
    contactTeam: 'Uzman ekibimiz erişilebilir seyahat deneyiminizi planlamanıza yardımcı olmaya hazır.'
  }
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')

  const changeLanguage = (lang) => {
    setLanguage(lang)
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
