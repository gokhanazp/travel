import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import { toursData } from '../data/toursData'

const TourDetailPage = () => {
  const { slug } = useParams()
  const { language } = useLanguage()
  const [tour, setTour] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    const foundTour = toursData.find(t => t.slug === slug)
    setTour(foundTour)
    if (foundTour) {
      setSelectedImage(0)
    }
  }, [slug])

  if (!tour) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Tour Not Found' : 'Tur Bulunamadı'}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {language === 'en' 
                ? 'The tour you are looking for does not exist.' 
                : 'Aradığınız tur mevcut değil.'}
            </p>
            <Link
              to="/"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {language === 'en' ? 'Back to Home' : 'Ana Sayfaya Dön'}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const content = {
    en: {
      overview: 'Overview',
      itinerary: 'Itinerary',
      reviews: 'Reviews',
      gallery: 'Gallery',
      duration: 'Duration',
      accessibility: 'Accessibility',
      price: 'Price',
      features: 'Features',
      highlights: 'Highlights',
      bookNow: 'Book Now',
      backToTours: 'Back to Tours',
      participantPhotos: 'Participant Photos',
      readMore: 'Read More',
      readLess: 'Read Less',
      minutes: 'minutes',
      rating: 'Rating',
      noReviews: 'No reviews yet'
    },
    tr: {
      overview: 'Genel Bakış',
      itinerary: 'Program',
      reviews: 'Yorumlar',
      gallery: 'Galeri',
      duration: 'Süre',
      accessibility: 'Erişilebilirlik',
      price: 'Fiyat',
      features: 'Özellikler',
      highlights: 'Öne Çıkanlar',
      bookNow: 'Rezervasyon Yap',
      backToTours: 'Turlara Dön',
      participantPhotos: 'Katılımcı Fotoğrafları',
      readMore: 'Devamını Oku',
      readLess: 'Daha Az Göster',
      minutes: 'dakika',
      rating: 'Puan',
      noReviews: 'Henüz yorum yok'
    }
  }

  const currentContent = content[language]
  const title = language === 'en' ? tour.titleEn : tour.title
  const description = language === 'en' ? tour.longDescriptionEn : tour.longDescription
  const features = language === 'en' ? tour.featuresEn : tour.features
  const highlights = language === 'en' ? tour.highlightsEn : tour.highlights
  const duration = language === 'en' ? tour.durationEn : tour.duration
  const accessibility = language === 'en' ? tour.accessibilityEn : tour.accessibility
  const itinerary = tour.itinerary || []
  const reviews = tour.reviews || []

  const tabs = [
    { id: 'overview', label: currentContent.overview },
    { id: 'itinerary', label: currentContent.itinerary },
    { id: 'reviews', label: currentContent.reviews },
    { id: 'gallery', label: currentContent.gallery }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="relative h-96 overflow-hidden">
          <img
            src={tour.mainImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto px-4">
                {language === 'en' ? tour.shortDescriptionEn : tour.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Navigation Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'border-orange-500 text-orange-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {currentContent.overview}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {description}
                    </p>
                  </div>

                  {highlights && highlights.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {currentContent.highlights}
                      </h3>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center bg-orange-50 p-3 rounded-lg">
                            <svg className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {features && features.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {currentContent.features}
                      </h3>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {features.map((feature, index) => (
                          <li key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                            <svg className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'itinerary' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {currentContent.itinerary}
                  </h2>
                  {itinerary.length > 0 ? (
                    <div className="space-y-6">
                      {itinerary.map((item, index) => (
                        <div key={index} className="flex">
                          <div className="flex-shrink-0 w-20 text-center">
                            <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                              {item.time}
                            </div>
                          </div>
                          <div className="ml-6 flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {language === 'en' ? item.titleEn : item.title}
                            </h3>
                            <p className="text-gray-600 mb-2">
                              {language === 'en' ? item.descriptionEn : item.description}
                            </p>
                            <span className="text-sm text-gray-500">
                              {item.duration} {currentContent.minutes}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">
                      {language === 'en' ? 'Itinerary information coming soon.' : 'Program bilgileri yakında eklenecek.'}
                    </p>
                  )}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {currentContent.reviews}
                  </h2>
                  {reviews.length > 0 ? (
                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <div className="flex items-start space-x-4">
                            <img
                              src={review.avatar}
                              alt={review.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-gray-900">{review.name}</h4>
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <svg
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                      }`}
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ))}
                                  <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                                </div>
                              </div>
                              <p className="text-gray-700">
                                {language === 'en' ? review.commentEn : review.comment}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">
                      {currentContent.noReviews}
                    </p>
                  )}
                </div>
              )}

              {activeTab === 'gallery' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {currentContent.gallery}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tour.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                        onClick={() => setSelectedImage(index)}
                      >
                        <img
                          src={image}
                          alt={`${title} - ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <div className="space-y-6">
                {/* Price */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {tour.price} {language === 'en' ? tour.currencyEn : tour.currency}
                  </div>
                  <p className="text-gray-500">{language === 'en' ? 'per person' : 'kişi başı'}</p>
                </div>

                {/* Tour Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">{currentContent.duration}</span>
                    <span className="font-semibold text-gray-900">{duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">{currentContent.accessibility}</span>
                    <span className="font-semibold text-gray-900">{accessibility}</span>
                  </div>
                </div>

                {/* Book Now Button */}
                <Link
                  to="/reservation"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 px-6 rounded-xl font-bold text-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl block"
                >
                  {currentContent.bookNow}
                </Link>

                {/* Back to Tours */}
                <Link
                  to="/#tours"
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 block"
                >
                  {currentContent.backToTours}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default TourDetailPage
