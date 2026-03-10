import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import { toursData } from '../data/toursData'
import { sendReservationEmail } from '../services/emailService'

const PlanYourTripPage = () => {
  const { t, language } = useLanguage()

  useEffect(() => {
    document.title = language === 'en' 
      ? "Plan Your Accessible Trip to Turkey | Piba Wings Mobility" 
      : "Size Özel Erişilebilir Yolculuk Planlayın | Piba Wings Mobility";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'en'
        ? "Custom-design your perfect accessible holiday in Turkey. Tell us your needs and we'll create a tailor-made journey for you."
        : "Türkiye'de size özel mükemmel erişilebilir tatilinizi tasarlayın. İhtiyaçlarınızı belirtin, size özel bir yolculuk oluşturalım.");
    }
  }, [language]);
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    tour: 'plan-your-tour',
    date: '',
    participants: 1,
    airportTransfer: 'No',
    message: '',
    selectedServices: {}
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Seçilen tura göre optional services'i al
  const selectedTour = toursData.find(tour => tour.id === formData.tour)

  const availableServices = [
    {
      title: "Refakatçi Desteği",
      titleEn: "Companion Assistance Service",
      price: "120",
      currency: "$"
    },
    {
      title: "Tıbbi Destek",
      titleEn: "Medical Support",
      price: "250",
      currency: "$"
    },
    {
      title: "Tekerlekli Sandalye Kiralama (Manuel)",
      titleEn: "Wheelchair Rental (Manual)",
      price: "40",
      currency: "$"
    },
    {
      title: "Tekerlekli Sandalye Kiralama (Akülü)",
      titleEn: "Wheelchair Rental (Electric Wheelchair)",
      price: "70",
      currency: "$"
    },
    {
      title: "Fotoğraf & Video Paketi",
      titleEn: "Photo & Video Package",
      price: "100",
      currency: "$"
    },
    {
      title: "Özel Yemek Menüsü (Diyabet Dostu)",
      titleEn: "Special Dietary Menu (Diabetic Friendly)",
      price: "30",
      currency: "$"
    }
  ]

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tourId = urlParams.get('tour')
    if (tourId) {
      setFormData(prev => ({ ...prev, tour: tourId }))
    }
  }, [location.search])

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
      title: 'Start Planning Your Trip',
      subtitle: 'Tell us your needs and interests- we design the perfect accessible journey just for you.',
      nameLabel: 'Full Name',
      namePlaceholder: 'Your full name',
      emailLabel: 'Email',
      emailPlaceholder: 'example@email.com',
      phoneLabel: 'Phone',
      phonePlaceholder: 'e.g. +1 234 567 8900',
      countryLabel: 'Country',
      countryPlaceholder: 'Your country',
      participantsLabel: 'Number of Participants',
      participantsOption: 'person',
      tourLabel: 'Select Tour',
      tourPlaceholder: 'Choose a tour',
      dateLabel: 'Estimated Travel Date',
      airportTransferLabel: 'Airport Transfer Needed?',
      no: 'No Transfer Needed',
      ist: 'Istanbul Airport (IST)',
      saw: 'Sabiha Gökçen Airport (SAW)',
      messageLabel: 'Your Interests & Requirements',
      messagePlaceholder: 'Tell us about the places you want to see, your accessibility needs, and any other special requests...',
      submitButton: 'Start My Trip Planning',
      submitNote: '* We will get back to you with a customized proposal within 24-48 hours.',
      contactTitle: 'Direct Contact',
      contactSubtitle: 'Need immediate help? Reach out to us directly',
      successMessage: 'Your planning request has been received! We will contact you shortly.',
      optionalServicesTitle: 'Additional Services to Consider',
      optionalServicesSubtitle: 'Let us know which services you might need during your journey',
      selectService: 'Select Service',
      selectedServices: 'Services Interested In',
      tours: toursData.map(t => ({ id: t.id, name: t.titleEn.replace('<br/>', ' '), code: t.id }))
    },
    tr: {
      title: 'Yolculuğunuzu Planlamaya Başlayın',
      subtitle: 'İhtiyaçlarınızı ve ilgi alanlarınızı bize bildirin; size özel mükemmel erişilebilir yolculuğu tasarlayalım.',
      nameLabel: 'Ad Soyad',
      namePlaceholder: 'Adınız ve soyadınız',
      emailLabel: 'E-posta',
      emailPlaceholder: 'ornek@email.com',
      phoneLabel: 'Telefon',
      phonePlaceholder: 'Örn: +90 555 123 45 67',
      countryLabel: 'Ülke',
      countryPlaceholder: 'Bulunduğunuz ülke',
      participantsLabel: 'Katılımcı Sayısı',
      participantsOption: 'kişi',
      tourLabel: 'Tur Seçin',
      tourPlaceholder: 'Tur seçiniz',
      dateLabel: 'Tahmini Seyahat Tarihi',
      airportTransferLabel: 'Havaalanı Transferi Gerekiyor mu?',
      no: 'Transfer İstemiyorum',
      ist: 'İstanbul Havalimanı (IST)',
      saw: 'Sabiha Gökçen Havalimanı (SAW)',
      messageLabel: 'İlgi Alanlarınız ve Gereksinimleriniz',
      messagePlaceholder: 'Görmek istediğiniz yerler, erişilebilirlik ihtiyaçlarınız ve diğer özel isteklerinizden bahsedin...',
      submitButton: 'Seyahat Planlamamı Başlat',
      submitNote: '* 24-48 saat içinde size özel bir teklifle dönüş yapacağız.',
      contactTitle: 'Doğrudan İletişim',
      contactSubtitle: 'Acil yardıma mı ihtiyacınız var? Bize doğrudan ulaşın',
      successMessage: 'Planlama talebiniz alındı! En kısa sürede sizinle iletişime geçeceğiz.',
      optionalServicesTitle: 'Düşünülebilecek Ek Hizmetler',
      optionalServicesSubtitle: 'Yolculuğunuz sırasında hangi hizmetlere ihtiyaç duyabileceğinizi bize bildirin',
      selectService: 'Hizmet Seç',
      selectedServices: 'İlgi Duyulan Hizmetler',
      tours: toursData.map(t => ({ id: t.id, name: (t.title || t.titleEn).replace('<br/>', ' '), code: t.id }))
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const selectedServiceDetails = Object.entries(formData.selectedServices)
        .filter(([index, service]) => service.selected)
        .map(([index, service]) => ({
          ...availableServices[parseInt(index)],
          quantity: service.quantity,
          totalPrice: (parseFloat(availableServices[parseInt(index)].price) || 0) * service.quantity,
          index: parseInt(index)
        }))

      const emailData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        selectedTour: toursData.find(t => t.id === formData.tour)?.titleEn || formData.tour,
        tourDate: formData.date,
        participantCount: formData.participants,
        airportTransfer: formData.airportTransfer,
        message: formData.message,
        services: selectedServiceDetails,
        servicesTotal: calculateServicesTotal(),
        submittedAt: new Date().toISOString()
      }

      console.log('📧 Plan Your Trip Data:', emailData)

      // Mevcut email servisini kullan
      const result = await sendReservationEmail({
        ...emailData,
        // emailService'in beklediği formatla uyum sağla
        firstName: formData.name.split(' ')[0] || '',
        lastName: formData.name.split(' ').slice(1).join(' ') || '',
        participants: formData.participants,
        specialRequests: `Country: ${formData.country}\nAirport Transfer: ${formData.airportTransfer}\n\n${formData.message}`,
        assistanceNeeded: 'Plan Your Accessible Trip Form'
      })

      if (result.success) {
        setSubmitStatus('success')
        setFormData({
            name: '',
            email: '',
            phone: '',
            country: '',
            tour: 'plan-your-tour',
            date: '',
            participants: 1,
            airportTransfer: 'No',
            message: '',
            selectedServices: {}
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('❌ Error submitting planning form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {currentContent.title}
            </h1>
            <p className="text-xl text-gray-600">
              {currentContent.subtitle}
            </p>
          </div>

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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder={currentContent.phonePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                    {currentContent.countryLabel} *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder={currentContent.countryPlaceholder}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  >
                    {[1,2,3,4,5,6,7,8,9,10, '10+'].map(num => (
                      <option key={num} value={num}>{num} {currentContent.participantsOption}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="tour" className="block text-sm font-medium text-gray-700 mb-2">
                    {currentContent.tourLabel}
                  </label>
                  <select
                    id="tour"
                    name="tour"
                    value={formData.tour}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  >
                    {currentContent.tours.map(tour => (
                      <option key={tour.id} value={tour.id}>
                        {tour.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="airportTransfer" className="block text-sm font-medium text-gray-700 mb-2">
                    {currentContent.airportTransferLabel}
                  </label>
                  <select
                    id="airportTransfer"
                    name="airportTransfer"
                    value={formData.airportTransfer}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="No">{currentContent.no}</option>
                    <option value="Istanbul Airport (IST)">{currentContent.ist}</option>
                    <option value="Sabiha Gökçen Airport (SAW)">{currentContent.saw}</option>
                  </select>
                </div>
              </div>

              {/* Message */}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  placeholder={currentContent.messagePlaceholder}
                />
              </div>

              {/* Optional Services */}
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
                    return (
                      <div
                        key={index}
                        onClick={() => handleServiceToggle(index)}
                        className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                          isSelected ? 'border-orange-500 bg-orange-50' : 'border-gray-200 hover:border-orange-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              checked={isSelected}
                              readOnly
                              className="h-5 w-5 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                            />
                            <h4 className="font-semibold text-gray-900 ml-3">
                              {language === 'en' ? service.titleEn : service.title}
                            </h4>
                          </div>
                          <div className="font-bold text-gray-900">
                            {service.currency}{service.price}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-12 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:transform-none flex items-center justify-center mx-auto"
                >
                  {isSubmitting ? (language === 'en' ? 'Sending...' : 'Gönderiliyor...') : currentContent.submitButton}
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  {currentContent.submitNote}
                </p>

                {submitStatus === 'success' && (
                  <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg font-semibold">
                    {currentContent.successMessage}
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-lg font-semibold">
                    {language === 'en' ? 'An error occurred. Please try again.' : 'Bir hata oluştu. Lütfen tekrar deneyin.'}
                  </div>
                )}
              </div>
            </form>
          </div>

          <div className="mt-12 bg-orange-50 rounded-xl p-8 text-center text-gray-900">
            <h3 className="text-2xl font-bold mb-4">{currentContent.contactTitle}</h3>
            <p className="text-gray-600 mb-6">{currentContent.contactSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+905325433673" className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors">📞 +90 532 543 36 73</a>
                <a href="mailto:info@pibawingstravel.com" className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">✉️ info@pibawingstravel.com</a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default PlanYourTripPage
