import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'

const ReservationPage = () => {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tour: '',
    date: '',
    participants: 1,
    message: ''
  })

  const content = {
    en: {
      title: 'Make a Reservation',
      subtitle: 'Book your accessible tour experience',
      nameLabel: 'Full Name',
      namePlaceholder: 'Your full name',
      emailLabel: 'Email',
      emailPlaceholder: 'example@email.com',
      phoneLabel: 'Phone',
      phonePlaceholder: '0555 123 45 67',
      participantsLabel: 'Number of Participants',
      participantsOption: 'person',
      tourLabel: 'Select Tour',
      tourPlaceholder: 'Choose a tour',
      dateLabel: 'Date',
      messageLabel: 'Special Requests and Notes',
      messagePlaceholder: 'Your special needs, accessibility requirements or questions...',
      submitButton: 'Send Reservation Request',
      submitNote: '* Your reservation request will be reviewed within 24 hours.',
      contactTitle: 'Contact Us Immediately',
      contactSubtitle: 'You can contact us directly for urgent matters',
      successMessage: 'Your reservation request has been received! We will get back to you as soon as possible.',
      tours: [
        { id: 'sultanahmet', name: 'Sultanahmet Historical Peninsula', price: '$45' },
        { id: 'bosphorus', name: 'Bosphorus Tour', price: '$38' },
        { id: 'galata', name: 'Galata and Beyoğlu', price: '$32' }
      ]
    },
    tr: {
      title: 'Rezervasyon Yap',
      subtitle: 'Engelli dostu turlarımız için rezervasyon yapın',
      nameLabel: 'Ad Soyad',
      namePlaceholder: 'Adınız ve soyadınız',
      emailLabel: 'E-posta',
      emailPlaceholder: 'ornek@email.com',
      phoneLabel: 'Telefon',
      phonePlaceholder: '0555 123 45 67',
      participantsLabel: 'Katılımcı Sayısı',
      participantsOption: 'kişi',
      tourLabel: 'Tur Seçin',
      tourPlaceholder: 'Tur seçiniz',
      dateLabel: 'Tarih',
      messageLabel: 'Özel İstekler ve Notlar',
      messagePlaceholder: 'Özel ihtiyaçlarınız, erişilebilirlik gereksinimleri veya sorularınız...',
      submitButton: 'Rezervasyon Talebini Gönder',
      submitNote: '* Rezervasyon talebiniz 24 saat içinde değerlendirilecektir.',
      contactTitle: 'Hemen İletişime Geçin',
      contactSubtitle: 'Acil durumlar için doğrudan bizimle iletişime geçebilirsiniz',
      successMessage: 'Rezervasyon talebiniz alındı! En kısa sürede size dönüş yapacağız.',
      tours: [
        { id: 'sultanahmet', name: 'Sultanahmet Tarihi Yarımada', price: '₺450' },
        { id: 'bosphorus', name: 'Boğaz Turu', price: '₺380' },
        { id: 'galata', name: 'Galata ve Beyoğlu', price: '₺320' }
      ]
    }
  }

  const currentContent = content[language]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert(currentContent.successMessage)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {currentContent.title}
            </h1>
            <p className="text-xl text-gray-600">
              {currentContent.subtitle}
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {currentContent.nameLabel} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder={currentContent.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {currentContent.emailLabel} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder={currentContent.emailPlaceholder}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {currentContent.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder={currentContent.phonePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="participants" className="block text-sm font-medium text-gray-700 mb-2">
                    {currentContent.participantsLabel}
                  </label>
                  <select
                    id="participants"
                    name="participants"
                    value={formData.participants}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num} {currentContent.participantsOption}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tour Selection */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="tour" className="block text-sm font-medium text-gray-700 mb-2">
                    {currentContent.tourLabel} *
                  </label>
                  <select
                    id="tour"
                    name="tour"
                    required
                    value={formData.tour}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">{currentContent.tourPlaceholder}</option>
                    {currentContent.tours.map(tour => (
                      <option key={tour.id} value={tour.id}>
                        {tour.name} - {tour.price}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    {currentContent.dateLabel} *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder={currentContent.messagePlaceholder}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {currentContent.submitButton}
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  {currentContent.submitNote}
                </p>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-12 bg-orange-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {currentContent.contactTitle}
            </h3>
            <p className="text-gray-600 mb-6">
              {currentContent.contactSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905325433673"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                📞 +90 532 543 36 73
              </a>
              <a
                href="mailto:info@pibawingstravel.com"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                ✉️ info@pibawingstravel.com
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default ReservationPage
