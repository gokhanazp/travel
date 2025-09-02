import React, { useState } from 'react'

const TourDetail = ({ tour, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedImage, setSelectedImage] = useState(0)

  if (!tour) return null

  const images = [
    tour.image,
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=600&h=400&fit=crop"
  ]

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Header */}
          <div className="relative">
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 shadow-lg"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Ana Görsel */}
            <div className="relative h-96 overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={tour.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Başlık Overlay */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">{tour.category}</span>
                  <span className="bg-green-500 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <span>♿</span>
                    <span>Erişilebilir</span>
                  </span>
                </div>
                <h1 className="text-4xl font-bold mb-2">{tour.name}</h1>
                <p className="text-xl text-blue-200">{tour.shortDesc}</p>
              </div>
            </div>

            {/* Küçük Görseller */}
            <div className="absolute bottom-4 left-8 flex space-x-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index ? 'border-white scale-110' : 'border-white/50 hover:border-white/80'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* İçerik */}
          <div className="p-8">
            
            {/* Üst Bilgiler */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 p-6 bg-gray-50 rounded-2xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{tour.rating}</div>
                <div className="text-sm text-gray-600">★★★★★</div>
                <div className="text-xs text-gray-500">{tour.reviews} değerlendirme</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">{tour.duration}</div>
                <div className="text-sm text-gray-600">Süre</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">{tour.groupSize}</div>
                <div className="text-sm text-gray-600">Grup Boyutu</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">{tour.difficulty}</div>
                <div className="text-sm text-gray-600">Zorluk</div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-8 bg-gray-100 rounded-2xl p-1">
              {[
                { id: 'overview', label: 'Genel Bakış', icon: '📋' },
                { id: 'accessibility', label: 'Erişilebilirlik', icon: '♿' },
                { id: 'included', label: 'Dahil Olanlar', icon: '✅' },
                { id: 'highlights', label: 'Öne Çıkanlar', icon: '⭐' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-white text-blue-600 shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab İçerikleri */}
            <div className="mb-8">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Tur Hakkında</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{tour.description}</p>
                  </div>
                </div>
              )}

              {activeTab === 'accessibility' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Erişilebilirlik Özellikleri</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(tour.accessibility).map(([key, value]) => (
                      <div key={key} className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600">
                            {key === 'wheelchair' && '♿'}
                            {key === 'audio' && '🔊'}
                            {key === 'braille' && '👆'}
                            {key === 'restroom' && '🚻'}
                            {key === 'parking' && '🅿️'}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 capitalize mb-1">
                            {key === 'wheelchair' && 'Tekerlekli Sandalye'}
                            {key === 'audio' && 'Ses Sistemi'}
                            {key === 'braille' && 'Braille Destek'}
                            {key === 'restroom' && 'Tuvalet'}
                            {key === 'parking' && 'Park Yeri'}
                          </h4>
                          <p className="text-gray-600">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'included' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Tur Fiyatına Dahil Olanlar</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tour.included.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'highlights' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Öne Çıkan Özellikler</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tour.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-xl">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-yellow-600">⭐</span>
                        </div>
                        <span className="text-gray-700 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Alt CTA */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">{tour.price}</div>
                  <div className="text-sm text-gray-500 line-through">{tour.originalPrice}</div>
                  <div className="text-sm text-gray-600">Kişi başı fiyat</div>
                </div>
                <div className="flex space-x-4">
                  <button className="bg-white border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-2xl hover:bg-blue-50 transition-all duration-300 font-semibold">
                    Favorilere Ekle
                  </button>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                    Hemen Rezervasyon Yap
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourDetail
