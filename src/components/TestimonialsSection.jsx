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
      highlights: ["Patient guidance", "Simple explanations", "Special attention"]
    }
  ]

  const goTo = (index) => {
    setActiveTestimonial((index + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  // Otomatik geçiş
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 6000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, testimonials.length])

  const current = testimonials[activeTestimonial]

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Başlık */}
        <div className="text-center mb-14 lg:mb-20">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-piba-orange mb-4">
            {t('guestComments')}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-piba-navy leading-tight">
            {t('ourGuests')} <span className="text-piba-orange">{t('whatTheySay')}</span>
          </h2>
          <div className="mt-5 mx-auto h-1 w-20 rounded-full bg-piba-orange" />
        </div>

        {/* Yorum + Oklar */}
        <div className="relative flex items-center justify-center">

          {/* Sol Ok */}
          <button
            onClick={() => goTo(activeTestimonial - 1)}
            aria-label="Previous review"
            className="hidden sm:flex flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 items-center justify-center rounded-full text-piba-navy border border-gray-200 hover:bg-piba-navy hover:text-white hover:border-piba-navy transition-all duration-300 mr-4 lg:mr-8"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Yorum İçeriği */}
          <div className="flex-1 max-w-2xl text-center">
            {/* Tırnak işareti */}
            <svg className="w-12 h-12 mx-auto mb-6 text-piba-orange/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>

            {/* Yıldızlar */}
            <div className="flex items-center justify-center gap-1 mb-6" aria-label={`${current.rating} out of 5`}>
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < current.rating ? 'text-piba-orange' : 'text-gray-200'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.05 9.801c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              ))}
            </div>

            {/* Yorum metni */}
            <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light mb-8">
              {current.comment}
            </blockquote>

            {/* Misafir bilgileri */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-piba-orange/40"
              />
              <div className="text-left">
                <h4 className="text-lg font-bold text-piba-navy">{current.name}</h4>
                <p className="text-sm text-piba-orange font-medium">{current.tourName}</p>
                <p className="text-xs text-gray-400">{current.date}</p>
              </div>
            </div>
          </div>

          {/* Sağ Ok */}
          <button
            onClick={() => goTo(activeTestimonial + 1)}
            aria-label="Next review"
            className="hidden sm:flex flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 items-center justify-center rounded-full text-piba-navy border border-gray-200 hover:bg-piba-navy hover:text-white hover:border-piba-navy transition-all duration-300 ml-4 lg:ml-8"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobil oklar + Dots */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={() => goTo(activeTestimonial - 1)}
            aria-label="Previous review"
            className="sm:hidden w-11 h-11 flex items-center justify-center rounded-full text-piba-navy border border-gray-200 hover:bg-piba-navy hover:text-white transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2.5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Go to review ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'w-8 bg-piba-orange'
                    : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(activeTestimonial + 1)}
            aria-label="Next review"
            className="sm:hidden w-11 h-11 flex items-center justify-center rounded-full text-piba-navy border border-gray-200 hover:bg-piba-navy hover:text-white transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}

export default TestimonialsSection
