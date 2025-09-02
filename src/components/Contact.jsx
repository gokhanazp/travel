import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Contact = () => {
  const { t, language } = useLanguage()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tour: '',
    participants: '',
    specialNeeds: '',
    preferredDate: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const tours = language === 'en' ? [
    'Blue Mosque',
    'Hagia Sophia',
    'Basilica Cistern',
    'Topkapi Palace',
    'Combined Tour (All Sites)',
    'Custom Tour Request'
  ] : [
    'Sultanahmet Camii',
    'Ayasofya',
    'Yerebatan Sarnıcı',
    'Topkapı Sarayı',
    'Kombine Tur (Tüm Mekanlar)',
    'Özel Tur Talebi'
  ]

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
      // Burada gerçek bir email servisi entegrasyonu yapılabilir
      // Şimdilik simüle ediyoruz
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Form verilerini konsola yazdır (geliştirme amaçlı)
      console.log('Form Data:', formData)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        tour: '',
        participants: '',
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

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-piba-navy mb-6 animate-fade-in-up">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h3 className="text-3xl font-bold text-piba-navy mb-8 flex items-center">
              <span className="w-3 h-3 bg-piba-orange rounded-full mr-4"></span>
              {t('reservationForm')}
            </h3>

            {submitStatus === 'success' && (
              <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 text-green-700 rounded-xl" role="alert">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✅</span>
                  <div>
                    <strong>Teşekkürler!</strong> Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 text-red-700 rounded-xl" role="alert">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">❌</span>
                  <div>
                    <strong>Hata!</strong> Mesaj gönderilirken bir sorun oluştu. Lütfen tekrar deneyin.
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
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
                  aria-describedby="name-help"
                />
                <p id="name-help" className="mt-2 text-sm text-gray-500">
                  {language === 'en' ? 'Enter your full name' : 'Tam adınızı ve soyadınızı yazın'}
                </p>
              </div>

              {/* Email */}
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
                  aria-describedby="email-help"
                />
                <p id="email-help" className="mt-2 text-sm text-gray-500">
                  {language === 'en' ? 'Email address we can reach you' : 'Size ulaşabileceğimiz e-posta adresi'}
                </p>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="form-label">
                  Telefon Numarası
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  aria-describedby="phone-help"
                />
                <p id="phone-help" className="mt-1 text-sm text-gray-500">
                  Acil durumlarda ulaşabileceğimiz numara
                </p>
              </div>

              {/* Tour Selection */}
              <div>
                <label htmlFor="tour" className="form-label">
                  Hangi Turu İstiyorsunuz? *
                </label>
                <select
                  id="tour"
                  name="tour"
                  value={formData.tour}
                  onChange={handleChange}
                  required
                  className="form-input"
                  aria-describedby="tour-help"
                >
                  <option value="">Tur seçin...</option>
                  {tours.map((tour, index) => (
                    <option key={index} value={tour}>
                      {tour}
                    </option>
                  ))}
                </select>
                <p id="tour-help" className="mt-1 text-sm text-gray-500">
                  Katılmak istediğiniz turu seçin
                </p>
              </div>

              {/* Participants */}
              <div>
                <label htmlFor="participants" className="form-label">
                  Katılımcı Sayısı *
                </label>
                <input
                  type="number"
                  id="participants"
                  name="participants"
                  value={formData.participants}
                  onChange={handleChange}
                  required
                  min="1"
                  max="20"
                  className="form-input"
                  aria-describedby="participants-help"
                />
                <p id="participants-help" className="mt-1 text-sm text-gray-500">
                  Kaç kişi katılacak?
                </p>
              </div>

              {/* Preferred Date */}
              <div>
                <label htmlFor="preferredDate" className="form-label">
                  Tercih Edilen Tarih
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="form-input"
                  aria-describedby="date-help"
                />
                <p id="date-help" className="mt-1 text-sm text-gray-500">
                  Hangi tarihte tur yapmak istiyorsunuz?
                </p>
              </div>

              {/* Special Needs */}
              <div>
                <label htmlFor="specialNeeds" className="form-label">
                  Özel İhtiyaçlar
                </label>
                <textarea
                  id="specialNeeds"
                  name="specialNeeds"
                  value={formData.specialNeeds}
                  onChange={handleChange}
                  rows="3"
                  className="form-input"
                  aria-describedby="needs-help"
                  placeholder="Tekerlekli sandalye, işitme cihazı, görme engeli desteği vb."
                ></textarea>
                <p id="needs-help" className="mt-1 text-sm text-gray-500">
                  Özel ihtiyaçlarınızı belirtin ki size en iyi hizmeti verelim
                </p>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="form-label">
                  Ek Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="form-input"
                  aria-describedby="message-help"
                  placeholder="Sorularınız veya ek bilgiler..."
                ></textarea>
                <p id="message-help" className="mt-1 text-sm text-gray-500">
                  Bize iletmek istediğiniz başka bir şey var mı?
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full bg-gradient-to-r from-piba-navy to-piba-dark-navy hover:from-piba-dark-navy hover:to-piba-navy text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-piba-navy/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden text-lg"
              >
                <span className="relative z-10">
                  {isSubmitting ? t('sending') : t('sendReservation')}
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

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-piba-navy mb-6">
                İletişim Bilgileri
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-piba-orange rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-piba-navy">Telefon</h4>
                    <p className="text-gray-600">+90 212 XXX XX XX</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-piba-orange rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-piba-navy">E-posta</h4>
                    <p className="text-gray-600">info@pibawings.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-piba-orange rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-piba-navy">Adres</h4>
                    <p className="text-gray-600">İstanbul, Türkiye</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-piba-orange rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-piba-navy">Çalışma Saatleri</h4>
                    <p className="text-gray-600">Pazartesi - Pazar: 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-piba-navy to-piba-dark-navy rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Acil Durum İletişim
              </h3>
              <p className="mb-4">
                Tur sırasında herhangi bir acil durumda 24/7 ulaşabileceğiniz numaramız:
              </p>
              <div className="text-2xl font-bold text-piba-yellow">
                +90 5XX XXX XX XX
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
