import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const TestimonialsSection = () => {
  const { t } = useLanguage()
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Tour participant testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 34,
      disability: "Wheelchair user",
      tourName: "Sultanahmet Historical Peninsula Tour",
      rating: 5,
      date: "March 15, 2024",
      comment: "It was the most organized and thoughtful tour experience I've ever participated in. Our guide Mr. Mehmet had planned every detail in advance and perfectly met my needs. Entering Hagia Sophia through the special entrance and being able to tour comfortably with my wheelchair was wonderful.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      tourImage: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      highlights: ["Special ramp access", "Audio guidance", "Rest breaks"]
    },
    {
      id: 2,
      name: "Michael Davis",
      age: 28,
      disability: "Visually impaired",
      tourName: "Bosphorus Tour",
      rating: 5,
      date: "March 22, 2024",
      comment: "As a visually impaired person, I never thought I could 'see' the Istanbul Bosphorus in such detail. Our guide described every view so beautifully that I felt as if I was seeing it with my own eyes. The boat was safe and accessible.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      tourImage: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      highlights: ["Detailed audio narration", "Safe boat", "Tactile map"]
    },
    {
      id: 3,
      name: "Emma Wilson",
      age: 42,
      disability: "Hearing impaired",
      tourName: "Galata and Beyoğlu Tour",
      rating: 5,
      date: "April 8, 2024",
      comment: "Thanks to our guide who knew sign language, I fully experienced the tour. While watching the Istanbul view from Galata Tower, I understood the city's history much better thanks to our guide's explanations. I will definitely join again!",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      tourImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      highlights: ["Sign language guide", "Written materials", "Visual presentations"]
    },
    {
      id: 4,
      name: "James Miller",
      age: 55,
      disability: "Mobility difficulties",
      tourName: "Grand Bazaar and Eminönü Tour",
      rating: 4,
      date: "April 12, 2024",
      comment: "I used to avoid bazaar tours due to my mobility difficulties. But thanks to this tour, I discovered the beauties of the Grand Bazaar. I was able to tour without getting tired thanks to frequent rest breaks and alternative routes. Thank you so much!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      tourImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      highlights: ["Frequent rest breaks", "Alternative routes", "Comfortable pace"]
    },
    {
      id: 5,
      name: "Lisa Anderson",
      age: 38,
      disability: "Mild intellectual disability",
      tourName: "Sultanahmet Tour",
      rating: 5,
      date: "April 20, 2024",
      comment: "Our guide was very patient and understanding. He explained everything in a simple and understandable way. The time I spent at Topkapi Palace was unforgettable. I felt very special. I will recommend it to my family too.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      tourImage: "https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      highlights: ["Patient guidance", "Simple explanations", "Special attention"]
    }
  ]

  // Otomatik geçiş
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, testimonials.length])

  const currentTestimonial = testimonials[activeTestimonial]

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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/75 to-pink-900/80 backdrop-blur-sm"></div>
      
      {/* Dekoratif Elementler */}
      <div className="absolute top-16 right-20 text-orange-300 opacity-20">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      
      <div className="absolute bottom-20 left-16 text-pink-300 opacity-15">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Başlık */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {t('guestComments')}
          </span>
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
            {t('ourGuests')}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> {t('whatTheySay')}</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Engelli dostu turlarımıza katılan misafirlerimizin gerçek deneyimleri ve samimi yorumları
          </p>
        </div>

        {/* Ana Yorum Kartı */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              
              {/* Sol Taraf - Yorum */}
              <div className="p-12">
                {/* Yıldızlar */}
                <div className="flex items-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                  <span className="ml-3 text-gray-600 font-medium">
                    {currentTestimonial.rating}/5
                  </span>
                </div>

                {/* Yorum Metni */}
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 italic">
                  "{currentTestimonial.comment}"
                </blockquote>

                {/* Öne Çıkan Özellikler */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-900 mb-3">Öne Çıkan Özellikler:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentTestimonial.highlights.map((highlight, index) => (
                      <span 
                        key={index}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        ✓ {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Misafir Bilgileri */}
                <div className="flex items-center">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-blue-100"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{currentTestimonial.name}</h4>
                    <p className="text-blue-600 font-medium">{currentTestimonial.age} yaşında</p>
                    <p className="text-gray-600 text-sm">{currentTestimonial.disability}</p>
                    <p className="text-gray-500 text-xs">{currentTestimonial.date}</p>
                  </div>
                </div>
              </div>

              {/* Sağ Taraf - Tur Görseli */}
              <div className="relative">
                <img
                  src={currentTestimonial.tourImage}
                  alt={currentTestimonial.tourName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{currentTestimonial.tourName}</h3>
                  <p className="text-blue-200">Katıldığı Tur</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigasyon */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <button
            onClick={() => {
              setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
              setIsAutoPlaying(false)
            }}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTestimonial(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
              setIsAutoPlaying(false)
            }}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Alt Küçük Yorumlar */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg transition-all duration-300 cursor-pointer ${
                index === activeTestimonial ? 'ring-2 ring-yellow-400 transform scale-105' : 'hover:shadow-xl'
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm line-clamp-3">
                "{testimonial.comment.substring(0, 120)}..."
              </p>
            </div>
          ))}
        </div>

        {/* İstatistikler */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm rounded-3xl p-8">
          <div className="text-center text-white">
            <div className="text-3xl font-bold text-yellow-400 mb-2">4.9/5</div>
            <div className="text-blue-100">Ortalama Puan</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
            <div className="text-blue-100">Mutlu Misafir</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold text-orange-400 mb-2">1,200+</div>
            <div className="text-blue-100">Pozitif Yorum</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold text-pink-400 mb-2">98%</div>
            <div className="text-blue-100">Tavsiye Oranı</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
