import { useLanguage } from '../contexts/LanguageContext'

const TourReviews = ({ tour }) => {
  const { language } = useLanguage()

  if (!tour || !tour.reviews) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">
          {language === 'en' ? 'No reviews available' : 'Henüz yorum bulunmuyor'}
        </p>
      </div>
    )
  }

  const averageRating = tour.reviews.reduce((sum, review) => sum + review.rating, 0) / tour.reviews.length
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: tour.reviews.filter(review => review.rating === rating).length,
    percentage: (tour.reviews.filter(review => review.rating === rating).length / tour.reviews.length) * 100
  }))

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return language === 'en' 
      ? date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.602-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-piba-navy mb-4">
          {language === 'en' ? 'Customer Reviews' : 'Müşteri Yorumları'}
        </h2>
        <p className="text-xl text-gray-600">
          {language === 'en' 
            ? 'What our guests say about this tour' 
            : 'Misafirlerimiz bu tur hakkında ne diyor'
          }
        </p>
      </div>

      {/* Rating Summary */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Overall Rating */}
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
          <div className="text-6xl font-bold text-piba-navy mb-4">
            {averageRating.toFixed(1)}
          </div>
          <div className="flex justify-center mb-4">
            {renderStars(Math.round(averageRating))}
          </div>
          <p className="text-gray-600 text-lg">
            {language === 'en' 
              ? `Based on ${tour.reviews.length} reviews`
              : `${tour.reviews.length} yoruma dayalı`
            }
          </p>
        </div>

        {/* Rating Distribution */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-piba-navy mb-6">
            {language === 'en' ? 'Rating Distribution' : 'Puan Dağılımı'}
          </h3>
          <div className="space-y-4">
            {ratingDistribution.map(({ rating, count, percentage }) => (
              <div key={rating} className="flex items-center">
                <span className="w-8 text-sm font-medium text-gray-600">{rating}</span>
                <div className="flex mx-2">
                  {renderStars(rating)}
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-piba-yellow to-piba-orange h-2 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
                <span className="w-12 text-sm text-gray-600 text-right">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-piba-navy mb-8">
          {language === 'en' ? 'Recent Reviews' : 'Son Yorumlar'}
        </h3>
        
        {tour.reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start space-x-4">
              {/* Avatar */}
              <img
                src={review.avatar}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              
              {/* Review Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-piba-navy">{review.name}</h4>
                    <p className="text-gray-500">{formatDate(review.date)}</p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    {renderStars(review.rating)}
                    <span className="ml-2 text-sm font-medium text-gray-600">
                      {review.rating}/5
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  {language === 'en' ? review.commentEn : review.comment}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Review Stats */}
      <div className="mt-16 bg-gradient-to-r from-piba-navy to-piba-dark-navy rounded-3xl p-8 text-white">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">
            {language === 'en' ? 'Review Highlights' : 'Yorum Öne Çıkanları'}
          </h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-piba-yellow mb-2">
              {Math.round(averageRating * 20)}%
            </div>
            <p className="text-gray-200">
              {language === 'en' ? 'Satisfaction Rate' : 'Memnuniyet Oranı'}
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-piba-yellow mb-2">
              {tour.reviews.filter(r => r.rating >= 4).length}
            </div>
            <p className="text-gray-200">
              {language === 'en' ? '4+ Star Reviews' : '4+ Yıldız Yorum'}
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-piba-yellow mb-2">
              {tour.reviews.filter(r => r.rating === 5).length}
            </div>
            <p className="text-gray-200">
              {language === 'en' ? '5 Star Reviews' : '5 Yıldız Yorum'}
            </p>
          </div>
        </div>
      </div>

      {/* Leave a Review CTA */}
      <div className="mt-12 bg-gradient-to-r from-piba-yellow to-piba-orange rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          {language === 'en' ? 'Share Your Experience' : 'Deneyiminizi Paylaşın'}
        </h3>
        <p className="text-white mb-6">
          {language === 'en'
            ? 'Have you taken this tour? We\'d love to hear about your experience!'
            : 'Bu tura katıldınız mı? Deneyiminizi duymak isteriz!'
          }
        </p>
        <button className="bg-white text-piba-navy font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200">
          {language === 'en' ? 'Write a Review' : 'Yorum Yazın'}
        </button>
      </div>
    </div>
  )
}

export default TourReviews
