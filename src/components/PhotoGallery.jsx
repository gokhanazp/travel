import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const PhotoGallery = () => {
  const { t } = useLanguage()
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  // Tour participant photos - Real Accessible Tourism Experiences
  const participantPhotos = [
    {
      id: 1,
      image: "https://gezilinki.com/wp-content/uploads/2021/12/2-9.jpg",
      tourName: "Blue Mosque Tour",
      participantName: "Sarah Johnson",
      date: "March 15, 2024",
      category: "historical",
      description: "Wheelchair accessible tour at Blue Mosque",
      likes: 24,
      accessibility: "Wheelchair user"
    },
    {
      id: 2,
      image: "https://denilyatour.com/wp-content/uploads/2024/03/cropped-yaaslu.webp",
      tourName: "Accessible City Tour",
      participantName: "Michael Davis",
      date: "March 22, 2024",
      category: "cultural",
      description: "Professional accessible tourism experience",
      likes: 31,
      accessibility: "Wheelchair user"
    },
    {
      id: 3,
      image: "https://antalya3tcom.teimg.com/crop/1280x720/antalya3t-com/uploads/2024/12/engelli-1.jpg",
      tourName: "Accessible Tourism Experience",
      participantName: "Emma Wilson",
      date: "April 8, 2024",
      category: "cultural",
      description: "Enjoying accessible tourism with family support",
      likes: 18,
      accessibility: "Wheelchair user"
    },
    {
      id: 4,
      image: "https://doksad.com/wp-content/uploads/2015/01/1.png",
      tourName: "Accessible Transportation",
      participantName: "James Miller",
      date: "April 12, 2024",
      category: "bosphorus",
      description: "Accessible vehicle transportation service",
      likes: 27,
      accessibility: "Wheelchair user"
    },
    {
      id: 5,
      image: "https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2021/31/engelli_dostu_sehirler_dunyadaki_engelli_dostu_9_sehir_1628082972_4048.jpg",
      tourName: "Accessible City Experience",
      participantName: "Lisa Anderson",
      date: "April 20, 2024",
      category: "cultural",
      description: "Exploring accessible city infrastructure",
      likes: 35,
      accessibility: "Wheelchair user"
    },
    {
      id: 6,
      image: "https://gezilinki.com/wp-content/uploads/2021/12/2-9.jpg",
      tourName: "Historical Sites Tour",
      participantName: "David Brown",
      date: "April 25, 2024",
      category: "historical",
      description: "Accessible historical tour experience",
      likes: 42,
      accessibility: "Wheelchair user"
    }
  ]

  const filters = [
    {
      id: 'all',
      label: 'All',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    },
    {
      id: 'historical',
      label: 'Historical Sites',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    },
    {
      id: 'bosphorus',
      label: 'Bosphorus Tours',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
      </svg>
    },
    {
      id: 'cultural',
      label: 'Cultural Tours',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2M9 12h6m-6 4h6" />
      </svg>
    }
  ]

  const filteredPhotos = activeFilter === 'all' 
    ? participantPhotos 
    : participantPhotos.filter(photo => photo.category === activeFilter)

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://demo2.wpopal.com/havezic/wp-content/uploads/2024/07/h1_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Hero ile Uyumlu Overlay */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
      
      {/* Dekoratif Elementler */}
      <div className="absolute top-20 left-16 text-orange-300 opacity-25">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      
      <div className="absolute bottom-24 right-20 text-pink-300 opacity-20">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Başlık */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-orange-100 to-pink-100 text-orange-800 mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {t('photoGallery')}
          </span>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t('tourParticipants')}
            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent"> {t('ourGuests')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('photoGallerySubtitle')}
          </p>
        </div>

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

        {/* Foto Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                  alt={photo.description}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover İçerik */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-bold mb-1">{photo.participantName}</h4>
                  <p className="text-sm text-blue-200">{photo.tourName}</p>
                </div>
                
                {/* Beğeni */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <span className="text-red-500">❤️</span>
                  <span className="text-sm font-medium text-gray-900">{photo.likes}</span>
                </div>
                
                {/* Erişilebilirlik Badge */}
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  ♿ {photo.accessibility}
                </div>
              </div>

              {/* Alt Bilgiler */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{photo.description}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="flex items-center space-x-1">
                    <span>📅</span>
                    <span>{photo.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span>🏷️</span>
                    <span>{photo.tourName}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
                alt={selectedPhoto.description}
                className="w-full h-96 object-cover rounded-t-3xl"
              />
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedPhoto.participantName}</h3>
                  <div className="flex items-center space-x-2 text-red-500">
                    <span>❤️</span>
                    <span className="font-medium">{selectedPhoto.likes}</span>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 mb-4">{selectedPhoto.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Tur:</span> {selectedPhoto.tourName}
                  </div>
                  <div>
                    <span className="font-medium">Tarih:</span> {selectedPhoto.date}
                  </div>
                  <div>
                    <span className="font-medium">Erişilebilirlik:</span> {selectedPhoto.accessibility}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default PhotoGallery
