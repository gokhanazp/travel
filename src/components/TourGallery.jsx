import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const TourGallery = ({ tour }) => {
  const { language } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeSection, setActiveSection] = useState('tour')

  if (!tour) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">
          {language === 'en' ? 'Gallery not available' : 'Galeri mevcut değil'}
        </p>
      </div>
    )
  }

  const sections = [
    { 
      id: 'tour', 
      label: language === 'en' ? 'Tour Photos' : 'Tur Fotoğrafları',
      images: tour.gallery || []
    },
    { 
      id: 'participants', 
      label: language === 'en' ? 'Participant Photos' : 'Katılımcı Fotoğrafları',
      images: tour.participantPhotos || []
    }
  ]

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const currentSection = sections.find(s => s.id === activeSection)

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-piba-navy mb-4">
          {language === 'en' ? 'Photo Gallery' : 'Fotoğraf Galerisi'}
        </h2>
        <p className="text-xl text-gray-600">
          {language === 'en' 
            ? 'Explore beautiful moments from our tours' 
            : 'Turlarımızdan güzel anları keşfedin'
          }
        </p>
      </div>

      {/* Section Tabs */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-100 rounded-full p-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-piba-orange to-piba-yellow text-white shadow-lg'
                  : 'text-gray-600 hover:text-piba-navy'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      {currentSection && currentSection.images.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentSection.images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image}
                alt={`${currentSection.label} ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📷</div>
          <p className="text-gray-500 text-lg">
            {language === 'en' 
              ? 'No photos available in this section' 
              : 'Bu bölümde fotoğraf bulunmuyor'
            }
          </p>
        </div>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-piba-yellow transition-colors duration-200 z-10"
              aria-label={language === 'en' ? 'Close' : 'Kapat'}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Background click to close */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={closeLightbox}
          ></div>
        </div>
      )}

      {/* Gallery Stats */}
      <div className="mt-16 bg-gradient-to-r from-piba-navy to-piba-dark-navy rounded-3xl p-8 text-white">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">
            {language === 'en' ? 'Gallery Statistics' : 'Galeri İstatistikleri'}
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-piba-yellow mb-2">
              {tour.gallery?.length || 0}
            </div>
            <p className="text-gray-200">
              {language === 'en' ? 'Tour Photos' : 'Tur Fotoğrafları'}
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-piba-yellow mb-2">
              {tour.participantPhotos?.length || 0}
            </div>
            <p className="text-gray-200">
              {language === 'en' ? 'Participant Photos' : 'Katılımcı Fotoğrafları'}
            </p>
          </div>
        </div>
      </div>

      {/* Photo Sharing Info */}
      <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-start">
          <svg className="w-6 h-6 text-blue-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
          <div>
            <h4 className="font-bold text-blue-900 mb-2">
              {language === 'en' ? 'Share Your Photos' : 'Fotoğraflarınızı Paylaşın'}
            </h4>
            <p className="text-blue-800">
              {language === 'en'
                ? 'After your tour, we\'d love to feature your photos in our gallery! Send them to us via email or social media.'
                : 'Turunuzdan sonra fotoğraflarınızı galerimizde sergilemek isteriz! E-posta veya sosyal medya üzerinden bize gönderin.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourGallery
