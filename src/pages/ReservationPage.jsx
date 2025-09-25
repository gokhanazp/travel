import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import { toursData } from '../data/toursData'

const ReservationPage = () => {
  const { t, language } = useLanguage()
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tour: '',
    date: '',
    participants: 1,
    message: '',
    selectedServices: {} // Seçilen optional services: { serviceIndex: { selected: true, quantity: 1 } }
  })

  // Seçilen tura göre optional services'i al
  const selectedTour = toursData.find(tour => tour.id === formData.tour)

  // Sabit optional services listesi
  const availableServices = [
    {
      title: "Refakatçi Desteği (Her 5-6 kişi için)",
      titleEn: "Companion Support (For every 5-6 people)",
      price: "50",
      currency: "€"
    },
    {
      title: "Özel Yemek Menüsü (Diyabet)",
      titleEn: "Special Meal Menu (Diabetes)",
      price: "25",
      currency: "€"
    },
    {
      title: "Fotoğraf & Video Paketi",
      titleEn: "Photo & Video Package",
      price: "75",
      currency: "€"
    },
    {
      title: "Tıbbi Destek",
      titleEn: "Medical Support",
      price: "100",
      currency: "€"
    },
    {
      title: "Tekerlekli Sandalye ve Ekipman Kiralama",
      titleEn: "Wheelchair and Equipment Rental",
      price: "30",
      currency: "€"
    }
  ]

  // URL parametrelerinden tur ID'sini al ve otomatik seç
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tourId = urlParams.get('tour')
    if (tourId) {
      setFormData(prev => ({ ...prev, tour: tourId }))
    }
  }, [location.search])

  // Optional service seçimi için handler
  const handleServiceToggle = (serviceIndex) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: {
        ...prev.selectedServices,
        [serviceIndex]: prev.selectedServices[serviceIndex]?.selected
          ? { ...prev.selectedServices[serviceIndex], selected: false }
          : { selected: true, quantity: 1 }
      }
    }))
  }

  // Service quantity değiştirme handler'ı
  const handleServiceQuantityChange = (serviceIndex, quantity) => {
    if (quantity < 1) return

    setFormData(prev => ({
      ...prev,
      selectedServices: {
        ...prev.selectedServices,
        [serviceIndex]: {
          ...prev.selectedServices[serviceIndex],
          quantity: parseInt(quantity)
        }
      }
    }))
  }

  // Seçilen servislerin toplam fiyatını hesapla
  const calculateServicesTotal = () => {
    return Object.entries(formData.selectedServices).reduce((total, [index, service]) => {
      if (service.selected) {
        const serviceData = availableServices[parseInt(index)]
        const price = parseFloat(serviceData.price) || 0
        return total + (price * service.quantity)
      }
      return total
    }, 0)
  }

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
      optionalServicesTitle: 'Optional Services',
      optionalServicesSubtitle: 'Enhance your tour experience with our additional services',
      selectService: 'Select Service',
      selectedServices: 'Selected Services',
      tours: [
        { id: 'PBWAI0021', name: 'Accessible Istanbul Tour (4N/5D)', price: '€450', code: 'PBWAI0021' },
        { id: 'PBWAI0020', name: 'Accessible Istanbul Tour (3N/4D)', price: '€350', code: 'PBWAI0020' },
        { id: 'PBWAI0019', name: 'Accessible Istanbul One Day', price: '€120', code: 'PBWAI0019' }
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
      optionalServicesTitle: 'Opsiyonel Hizmetler',
      optionalServicesSubtitle: 'Ek hizmetlerimizle tur deneyiminizi zenginleştirin',
      selectService: 'Hizmeti Seç',
      selectedServices: 'Seçilen Hizmetler',
      tours: [
        { id: 'PBWAI0021', name: 'Erişilebilir İstanbul Turu (4G/5G)', price: '€450', code: 'PBWAI0021' },
        { id: 'PBWAI0020', name: 'Erişilebilir İstanbul Turu (3G/4G)', price: '€350', code: 'PBWAI0020' },
        { id: 'PBWAI0019', name: 'Erişilebilir İstanbul Tek Gün', price: '€120', code: 'PBWAI0019' }
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

    // Seçilen servislerin detaylarını ekle
    const selectedServiceDetails = Object.entries(formData.selectedServices)
      .filter(([index, service]) => service.selected)
      .map(([index, service]) => ({
        ...availableServices[parseInt(index)],
        quantity: service.quantity,
        totalPrice: (parseFloat(availableServices[parseInt(index)].price) || 0) * service.quantity,
        index: parseInt(index)
      }))

    const submissionData = {
      ...formData,
      selectedServiceDetails,
      servicesTotal: calculateServicesTotal(),
      tourDetails: selectedTour
    }

    console.log('Form submitted:', submissionData)
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
                        {tour.name} - {tour.price} ({tour.code})
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

              {/* Optional Services - Her zaman göster */}
              {(
                <div className="border-t pt-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {currentContent.optionalServicesTitle}
                    </h3>
                    <p className="text-gray-600">
                      {currentContent.optionalServicesSubtitle}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {availableServices.map((service, index) => {
                      const isSelected = formData.selectedServices[index]?.selected || false
                      const quantity = formData.selectedServices[index]?.quantity || 1

                      return (
                        <div
                          key={index}
                          className={`border rounded-lg p-4 transition-all duration-300 ${
                            isSelected
                              ? 'border-orange-500 bg-orange-50 shadow-md'
                              : 'border-gray-200 hover:border-orange-300 hover:shadow-sm'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center flex-1">
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => handleServiceToggle(index)}
                                className="mr-3 h-5 w-5 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                              />
                              <h4 className="font-semibold text-gray-900 text-base">
                                {language === 'en' ? service.titleEn : service.title}
                              </h4>
                            </div>


                            {/* Quantity Selector - Sadece seçili servislerde göster */}
                            {isSelected && (
                              <div className="flex items-center space-x-2 ml-4">
                                <label className="text-sm font-medium text-gray-700">
                                  {language === 'en' ? 'Qty:' : 'Adet:'}
                                </label>
                                <div className="flex items-center border border-gray-300 rounded">
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      handleServiceQuantityChange(index, quantity - 1)
                                    }}
                                    className="px-2 py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                                    disabled={quantity <= 1}
                                  >
                                    -
                                  </button>
                                  <input
                                    type="number"
                                    min="1"
                                    max="10"
                                    value={quantity}
                                    onChange={(e) => {
                                      e.stopPropagation()
                                      handleServiceQuantityChange(index, e.target.value)
                                    }}
                                    className="w-12 px-1 py-1 text-center border-0 focus:ring-0 text-sm"
                                  />
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      handleServiceQuantityChange(index, quantity + 1)
                                    }}
                                    className="px-2 py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                                    disabled={quantity >= 10}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            )}

                            {/* Price */}
                            <div className="ml-6 text-right">
                              <div className="font-bold text-xl text-gray-900 mb-1">
                                {service.price} {service.currency}
                              </div>
                              {isSelected && quantity > 1 && (
                                <div className="text-sm text-gray-600">
                                  {quantity} x {service.price} = {(parseFloat(service.price) || 0) * quantity} {service.currency}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Selected Services Summary */}
                  {Object.values(formData.selectedServices).some(service => service.selected) && (
                    <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl shadow-sm">
                      <h4 className="font-bold text-green-800 mb-4 text-lg">
                        {currentContent.selectedServices}:
                      </h4>
                      <div className="space-y-3">
                        {Object.entries(formData.selectedServices).map(([index, service]) => {
                          if (!service.selected) return null
                          const serviceData = availableServices[parseInt(index)]
                          const totalPrice = `${(parseFloat(serviceData.price) || 0) * service.quantity} ${serviceData.currency}`

                          return (
                            <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                              <div className="flex items-center">
                                <svg className="w-4 h-4 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <div>
                                  <div className="font-medium text-gray-900">
                                    {language === 'en' ? serviceData.titleEn : serviceData.title}
                                  </div>
                                  <div className="text-sm text-gray-600">
                                    {language === 'en' ? 'Quantity' : 'Miktar'}: {service.quantity}
                                  </div>
                                </div>
                              </div>
                              <div className="font-bold text-green-700">
                                {totalPrice}
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      {/* Total Services Price */}
                      {calculateServicesTotal() > 0 && (
                        <div className="mt-4 pt-4 border-t border-green-200">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-green-800 text-lg">
                              {language === 'en' ? 'Services Total:' : 'Hizmetler Toplamı:'}
                            </span>
                            <span className="font-bold text-green-800 text-xl">
                              {calculateServicesTotal()} {availableServices[0]?.currency || '€'}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

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
