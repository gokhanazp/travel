import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'

const GalleryPage = () => {
  const { language, t } = useLanguage()

  useEffect(() => {
    document.title = language === 'en' 
      ? "Accessible Tour Gallery | Piba Wings Mobility - Visual Journey" 
      : "Erişilebilir Tur Galerisi | Piba Wings Mobility - Görsel Yolculuk";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'en'
        ? "Explore our gallery of accessible tourism experiences in Istanbul and Turkey. Real photos from our tekerlekli sandalye dostu (wheelchair friendly) tours."
        : "İstanbul ve Türkiye'deki erişilebilir turizm deneyimlerimizin galerisini keşfedin. Tekerlekli sandalye dostu turlarımızdan gerçek fotoğraflar.");
    }
  }, [language]);
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  // Galeri fotoğrafları - Gerçek erişilebilir turizm deneyimleri
  const galleryPhotos = [
    {
      id: 1,
      image: "/782e9523-f8d9-40e7-9cf4-6dc96406cc12.jpeg",
      title: language === 'en' ? 'Blue Mosque Accessible Tour' : 'Sultanahmet Camii Erişilebilir Turu',
      category: 'historical',
      location: language === 'en' ? 'Sultanahmet, Istanbul' : 'Sultanahmet, İstanbul',
      date: '2024-03-15',
      description: language === 'en' 
        ? 'Wheelchair accessible tour experience at the magnificent Blue Mosque'
        : 'Muhteşem Sultanahmet Camii\'nde tekerlekli sandalye erişilebilir tur deneyimi'
    },
    {
      id: 2,
      image: "https://denilyatour.com/wp-content/uploads/2024/03/cropped-yaaslu.webp",
      title: language === 'en' ? 'Accessible City Discovery' : 'Erişilebilir Şehir Keşfi',
      category: 'cultural',
      location: language === 'en' ? 'Historic Peninsula' : 'Tarihi Yarımada',
      date: '2024-03-22',
      description: language === 'en'
        ? 'Professional accessible tourism experience in Istanbul\'s cultural heart'
        : 'İstanbul\'un kültürel kalbinde profesyonel erişilebilir turizm deneyimi'
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800",
      title: language === 'en' ? 'Hagia Sophia Accessible Visit' : 'Ayasofya Erişilebilir Ziyareti',
      category: 'historical',
      location: language === 'en' ? 'Sultanahmet, Istanbul' : 'Sultanahmet, İstanbul',
      date: '2024-04-05',
      description: language === 'en'
        ? 'Barrier-free exploration of the iconic Hagia Sophia'
        : 'İkonik Ayasofya\'nın engelsiz keşfi'
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800",
      title: language === 'en' ? 'Accessible Bosphorus Cruise' : 'Erişilebilir Boğaz Turu',
      category: 'nature',
      location: language === 'en' ? 'Bosphorus, Istanbul' : 'Boğaziçi, İstanbul',
      date: '2024-04-12',
      description: language === 'en'
        ? 'Wheelchair accessible boat tour along the beautiful Bosphorus'
        : 'Güzel Boğaziçi boyunca tekerlekli sandalye erişilebilir tekne turu'
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
      title: language === 'en' ? 'Grand Bazaar Accessible Tour' : 'Kapalıçarşı Erişilebilir Turu',
      category: 'cultural',
      location: language === 'en' ? 'Grand Bazaar, Istanbul' : 'Kapalıçarşı, İstanbul',
      date: '2024-04-18',
      description: language === 'en'
        ? 'Accessible shopping and cultural experience in the historic Grand Bazaar'
        : 'Tarihi Kapalıçarşı\'da erişilebilir alışveriş ve kültür deneyimi'
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800",
      title: language === 'en' ? 'Topkapi Palace Accessible Visit' : 'Topkapı Sarayı Erişilebilir Ziyareti',
      category: 'historical',
      location: language === 'en' ? 'Sultanahmet, Istanbul' : 'Sultanahmet, İstanbul',
      date: '2024-04-25',
      description: language === 'en'
        ? 'Barrier-free exploration of Ottoman imperial history'
        : 'Osmanlı imparatorluk tarihinin engelsiz keşfi'
    }
  ]

  // Filtre kategorileri
  const filters = [
    {
      id: 'all',
      label: language === 'en' ? 'All Photos' : 'Tüm Fotoğraflar',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    },
    {
      id: 'historical',
      label: language === 'en' ? 'Historical Sites' : 'Tarihi Mekanlar',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    },
    {
      id: 'cultural',
      label: language === 'en' ? 'Cultural Tours' : 'Kültür Turları',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2M9 12h6m-6 4h6" />
      </svg>
    },
    {
      id: 'nature',
      label: language === 'en' ? 'Nature & Scenic' : 'Doğa & Manzara',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    }
  ]

  // Filtrelenmiş fotoğraflar
  const filteredPhotos = activeFilter === 'all' 
    ? galleryPhotos 
    : galleryPhotos.filter(photo => photo.category === activeFilter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Arka plan */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://demo2.wpopal.com/havezic/wp-content/uploads/2024/07/h1_bg.png)',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
        
        {/* Dekoratif elementler */}
        <div className="absolute top-20 left-16 text-orange-300 opacity-25">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-orange-100 to-pink-100 text-orange-800 mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {language === 'en' ? 'Photo Gallery' : 'Fotoğraf Galerisi'}
          </span>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {language === 'en' ? 'Our ' : 'Bizim '}
            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              {language === 'en' ? 'Accessible' : 'Erişilebilir'}
            </span>
            <br />
            {language === 'en' ? 'Tour Gallery' : 'Tur Galerimiz'}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Discover the beauty of Istanbul through our accessible tourism experiences. Every photo tells a story of inclusion and wonder.'
              : 'İstanbul\'un güzelliğini erişilebilir turizm deneyimlerimiz aracılığıyla keşfedin. Her fotoğraf, kapsayıcılık ve hayranlık hikayesi anlatır.'
            }
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filtreler */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg transform scale-105'
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
                }`}
              >
                {filter.icon}
                <span>{filter.label}</span>
              </button>
            ))}
          </div>

          {/* Fotoğraf Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhotos.map((photo) => (
              <div 
                key={photo.id} 
                className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              >
                {/* Fotoğraf */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1">{photo.title}</h3>
                      <p className="text-white/90 text-sm">{photo.location}</p>
                    </div>
                  </div>
                  
                  {/* Erişilebilirlik Badge */}
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    ♿ {language === 'en' ? 'Accessible' : 'Erişilebilir'}
                  </div>
                </div>

                {/* Alt Bilgiler */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{photo.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{photo.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <span>📍</span>
                      <span>{photo.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span>📅</span>
                      <span>{photo.date}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fotoğraf Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-96 object-cover rounded-t-3xl"
              />
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedPhoto.title}</h3>
                <p className="text-lg text-gray-700 mb-6">{selectedPhoto.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">{language === 'en' ? 'Location:' : 'Konum:'}</span> {selectedPhoto.location}
                  </div>
                  <div>
                    <span className="font-medium">{language === 'en' ? 'Date:' : 'Tarih:'}</span> {selectedPhoto.date}
                  </div>
                  <div>
                    <span className="font-medium">{language === 'en' ? 'Category:' : 'Kategori:'}</span> {
                      filters.find(f => f.id === selectedPhoto.category)?.label
                    }
                  </div>
                  <div>
                    <span className="font-medium">{language === 'en' ? 'Accessibility:' : 'Erişilebilirlik:'}</span> ♿ {language === 'en' ? 'Fully Accessible' : 'Tamamen Erişilebilir'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default GalleryPage
