import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const TourReservation = ({ tour }) => {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    participants: 1,
    specialNeeds: '',
    preferredDate: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simüle edilmiş API çağrısı
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Reservation Data:', {
        tour: tour.title,
        ...formData
      })
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        participants: 1,
        specialNeeds: '',
        preferredDate: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const totalPrice = tour.price * formData.participants

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-piba-navy mb-4">
          {language === 'en' ? 'Book This Tour' : 'Bu Turu Rezerve Et'}
        </h2>
        <p className="text-xl text-gray-600">
          {language === 'en' 
            ? 'Reserve your spot for an unforgettable experience' 
            : 'Unutulmaz bir deneyim için yerinizi ayırtın'
          }
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Reservation Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h3 className="text-2xl font-bold text-piba-navy mb-8 flex items-center">
              <span className="w-3 h-3 bg-piba-orange rounded-full mr-4"></span>
              {language === 'en' ? 'Reservation Details' : 'Rezervasyon Detayları'}
            </h3>
            
            {submitStatus === 'success' && (
              <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 text-green-700 rounded-xl">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✅</span>
                  <div>
                    <strong>
                      {language === 'en' ? 'Thank you!' : 'Teşekkürler!'}
                    </strong>{' '}
                    {language === 'en' 
                      ? 'Your reservation request has been sent successfully. We will contact you soon.'
                      : 'Rezervasyon talebiniz başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
                    }
                  </div>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 text-red-700 rounded-xl">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">❌</span>
                  <div>
                    <strong>
                      {language === 'en' ? 'Error!' : 'Hata!'}
                    </strong>{' '}
                    {language === 'en'
                      ? 'There was a problem sending your reservation. Please try again.'
                      : 'Rezervasyon gönderilirken bir sorun oluştu. Lütfen tekrar deneyin.'
                    }
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="form-label text-lg font-semibold text-piba-navy">
                    {t('fullName')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input group-hover:border-piba-orange transition-colors duration-300 text-lg"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="form-label text-lg font-semibold text-piba-navy">
                    {t('email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input group-hover:border-piba-orange transition-colors duration-300 text-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="phone" className="form-label text-lg font-semibold text-piba-navy">
                    {t('phoneNumber')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input group-hover:border-piba-orange transition-colors duration-300 text-lg"
                  />
                </div>

                <div className="group">
                  <label htmlFor="participants" className="form-label text-lg font-semibold text-piba-navy">
                    {t('participants')} *
                  </label>
                  <select
                    id="participants"
                    name="participants"
                    value={formData.participants}
                    onChange={handleChange}
                    required
                    className="form-input group-hover:border-piba-orange transition-colors duration-300 text-lg"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num} {language === 'en' ? 'person' : 'kişi'}{num > 1 ? (language === 'en' ? 's' : '') : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="group">
                <label htmlFor="preferredDate" className="form-label text-lg font-semibold text-piba-navy">
                  {t('preferredDate')} *
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="form-input group-hover:border-piba-orange transition-colors duration-300 text-lg"
                />
              </div>

              <div className="group">
                <label htmlFor="specialNeeds" className="form-label text-lg font-semibold text-piba-navy">
                  {t('specialNeedsForm')}
                </label>
                <textarea
                  id="specialNeeds"
                  name="specialNeeds"
                  value={formData.specialNeeds}
                  onChange={handleChange}
                  rows="4"
                  className="form-input group-hover:border-piba-orange transition-colors duration-300 text-lg"
                  placeholder={language === 'en' 
                    ? 'Please describe any special accessibility needs, medical conditions, or other requirements...'
                    : 'Özel erişilebilirlik ihtiyaçları, tıbbi durumlar veya diğer gereksinimlerinizi açıklayın...'
                  }
                ></textarea>
              </div>

              <div className="group">
                <label htmlFor="message" className="form-label text-lg font-semibold text-piba-navy">
                  {t('additionalMessage')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="form-input group-hover:border-piba-orange transition-colors duration-300 text-lg"
                  placeholder={language === 'en' 
                    ? 'Any questions or additional information...'
                    : 'Sorularınız veya ek bilgiler...'
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full bg-gradient-to-r from-piba-navy to-piba-dark-navy hover:from-piba-dark-navy hover:to-piba-navy text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-piba-navy/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden text-lg"
              >
                <span className="relative z-10">
                  {isSubmitting 
                    ? (language === 'en' ? 'Processing...' : 'İşleniyor...')
                    : (language === 'en' ? 'Confirm Reservation' : 'Rezervasyonu Onayla')
                  }
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-piba-yellow to-piba-orange opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                {isSubmitting && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Booking Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-piba-navy to-piba-dark-navy rounded-3xl p-8 text-white sticky top-32">
            <h3 className="text-2xl font-bold mb-6">
              {language === 'en' ? 'Booking Summary' : 'Rezervasyon Özeti'}
            </h3>
            
            {/* Tour Info */}
            <div className="mb-6">
              <img
                src={tour.mainImage}
                alt={language === 'en' ? tour.titleEn : tour.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-piba-yellow">
                {language === 'en' ? tour.titleEn : tour.title}
              </h4>
            </div>

            {/* Pricing */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span>{language === 'en' ? 'Price per person' : 'Kişi başı fiyat'}</span>
                <span className="font-bold">{tour.price} {tour.currency}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span>{language === 'en' ? 'Participants' : 'Katılımcı sayısı'}</span>
                <span className="font-bold">{formData.participants}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-t border-white/20">
                <span className="text-xl font-bold">{language === 'en' ? 'Total' : 'Toplam'}</span>
                <span className="text-2xl font-bold text-piba-yellow">{totalPrice} {tour.currency}</span>
              </div>
            </div>

            {/* Tour Details */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-piba-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {language === 'en' ? 'Duration' : 'Süre'}: {language === 'en' ? tour.durationEn : tour.duration}
              </div>
              
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-piba-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {language === 'en' ? tour.accessibilityEn : tour.accessibility}
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-gray-300 mb-2">
                {language === 'en' ? 'Questions? Contact us:' : 'Sorularınız mı var? Bize ulaşın:'}
              </p>
              <p className="text-piba-yellow font-semibold">+90 555 123 45 67</p>
              <p className="text-piba-yellow font-semibold">info@pibawings.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourReservation
