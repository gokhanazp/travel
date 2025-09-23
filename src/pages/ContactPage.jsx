import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'

const ContactPage = () => {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    accessibility: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const content = {
    en: {
      title: 'Contact Us',
      subtitle: 'Get in touch with our expert team for your accessible travel needs',
      contactInfo: 'Contact Information',
      office: 'Our Office',
      officeAddress: 'Ataköy 7-8-9-10. Kısım Çobançeşme\nE5 Yanyol Caddesi A No: 22/1 217\nBakırköy – İSTANBUL',
      phone: 'Phone',
      email: 'Email',
      hours: 'Business Hours',
      hoursText: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed',
      formTitle: 'Send Us a Message',
      formSubtitle: 'Tell us about your travel plans and accessibility needs',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone Number',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      accessibilityLabel: 'Special Accessibility Needs',
      accessibilityPlaceholder: 'Please describe any special accessibility requirements...',
      sendButton: 'Send Message',
      requiredField: 'This field is required',
      emergencyContact: 'Emergency Contact',
      emergencyText: 'For urgent travel assistance, please call our 24/7 emergency line:'
    },
    tr: {
      title: 'İletişim',
      subtitle: 'Erişilebilir seyahat ihtiyaçlarınız için uzman ekibimizle iletişime geçin',
      contactInfo: 'İletişim Bilgileri',
      office: 'Ofisimiz',
      officeAddress: 'Ataköy 7-8-9-10. Kısım Çobançeşme\nE5 Yanyol Caddesi A No: 22/1 217\nBakırköy – İSTANBUL',
      phone: 'Telefon',
      email: 'E-posta',
      hours: 'Çalışma Saatleri',
      hoursText: 'Pazartesi - Cuma: 09:00 - 18:00\nCumartesi: 10:00 - 16:00\nPazar: Kapalı',
      formTitle: 'Bize Mesaj Gönderin',
      formSubtitle: 'Seyahat planlarınızı ve erişilebilirlik ihtiyaçlarınızı bize anlatın',
      nameLabel: 'Ad Soyad',
      emailLabel: 'E-posta Adresi',
      phoneLabel: 'Telefon Numarası',
      subjectLabel: 'Konu',
      messageLabel: 'Mesaj',
      accessibilityLabel: 'Özel Erişilebilirlik İhtiyaçları',
      accessibilityPlaceholder: 'Lütfen özel erişilebilirlik gereksinimlerinizi açıklayın...',
      sendButton: 'Mesaj Gönder',
      requiredField: 'Bu alan zorunludur',
      emergencyContact: 'Acil Durum İletişim',
      emergencyText: 'Acil seyahat yardımı için lütfen 7/24 acil durum hattımızı arayın:'
    }
  }

  const currentContent = content[language]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Form verilerini hazırla
      const contactData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        type: 'contact_form'
      }

      // API'ye gönder
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          accessibilityNeeds: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {currentContent.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {currentContent.contactInfo}
              </h2>
              
              <div className="space-y-6">
                {/* Office */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8v-4a1 1 0 011-1h2a1 1 0 011 1v4m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{currentContent.office}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{currentContent.officeAddress}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{currentContent.phone}</h3>
                    <div className="text-orange-600">
                      <div className="font-medium">Pınar SİVEREK</div>
                      <a href="tel:+905325433673" className="hover:text-orange-700">
                        📱 +90 532 543 36 73
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{currentContent.email}</h3>
                    <a href="mailto:info@pibawingstravel.com" className="text-orange-600 hover:text-orange-700 font-medium">
                      info@pibawingstravel.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{currentContent.hours}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{currentContent.hoursText}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-red-800 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                {currentContent.emergencyContact}
              </h3>
              <p className="text-red-700 mb-3">{currentContent.emergencyText}</p>
              <a href="tel:+905325433673" className="text-red-800 font-bold text-lg">
                📞 +90 532 543 36 73
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentContent.formTitle}
            </h2>
            <p className="text-gray-600 mb-8">
              {currentContent.formSubtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.nameLabel} *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.emailLabel} *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.phoneLabel}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.subjectLabel} *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.accessibilityLabel}
                </label>
                <textarea
                  name="accessibility"
                  rows={3}
                  value={formData.accessibility}
                  onChange={handleInputChange}
                  placeholder={currentContent.accessibilityPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.messageLabel} *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-green-800 font-medium">
                      {language === 'en'
                        ? 'Message sent successfully! We will get back to you soon.'
                        : 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.'}
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-red-800 font-medium">
                      {language === 'en'
                        ? 'There was an error sending your message. Please try again or contact us directly.'
                        : 'Mesajınız gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya doğrudan bizimle iletişime geçin.'}
                    </p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transform hover:scale-105'
                } text-white`}
              >
                {isSubmitting
                  ? (language === 'en' ? 'Sending...' : 'Gönderiliyor...')
                  : currentContent.sendButton}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default ContactPage
