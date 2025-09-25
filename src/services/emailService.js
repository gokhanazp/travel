// EmailJS Service Configuration
import emailjs from '@emailjs/browser'

// EmailJS Configuration
// Environment variables'dan alınacak
const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_pibawings',
  TEMPLATE_ID_RESERVATION: import.meta.env.VITE_EMAILJS_TEMPLATE_RESERVATION || 'template_reservation',
  TEMPLATE_ID_CONTACT: import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT || 'template_contact',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY_HERE'
}

// Geliştirme ortamında konfigürasyon kontrolü
if (import.meta.env.DEV) {
  console.log('EmailJS Konfigürasyonu:', {
    SERVICE_ID: EMAILJS_CONFIG.SERVICE_ID,
    TEMPLATE_ID_RESERVATION: EMAILJS_CONFIG.TEMPLATE_ID_RESERVATION,
    TEMPLATE_ID_CONTACT: EMAILJS_CONFIG.TEMPLATE_ID_CONTACT,
    PUBLIC_KEY: EMAILJS_CONFIG.PUBLIC_KEY ? '***' + EMAILJS_CONFIG.PUBLIC_KEY.slice(-4) : 'NOT_SET'
  })
}

// EmailJS'i initialize et
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)

/**
 * Rezervasyon maili gönder
 * @param {Object} reservationData - Rezervasyon form verileri
 * @returns {Promise} - EmailJS response
 */
export const sendReservationEmail = async (reservationData) => {
  try {
    // Geliştirme ortamında EmailJS konfigürasyonu yoksa simülasyon yap
    if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE' || !EMAILJS_CONFIG.PUBLIC_KEY) {
      console.log('🔧 EmailJS konfigürasyonu bulunamadı. Simülasyon modu aktif.')
      console.log('📧 Rezervasyon Mail Simülasyonu:')
      console.log('=====================================')
      console.log('Müşteri:', `${reservationData.firstName} ${reservationData.lastName}`)
      console.log('Email:', reservationData.email)
      console.log('Telefon:', reservationData.phone)
      console.log('Tur:', reservationData.tourInfo?.name || reservationData.selectedTour)
      console.log('Tarih:', reservationData.tourDate)
      console.log('Katılımcı:', reservationData.participantCount)
      console.log('Özel İhtiyaçlar:', reservationData.assistanceNeeded || 'Yok')
      console.log('Mesaj:', reservationData.specialRequests || 'Yok')
      console.log('=====================================')

      // Simülasyon gecikmesi
      await new Promise(resolve => setTimeout(resolve, 1500))

      return {
        success: true,
        message: '✅ Mail simülasyonu başarılı! (Gerçek mail gönderilmedi - EmailJS konfigürasyonu gerekli)',
        simulation: true
      }
    }

    // Template için veri hazırla - Basit parametreler
    const templateParams = {
      // Temel bilgiler (EmailJS default template için)
      from_name: `${reservationData.firstName} ${reservationData.lastName}`,
      from_email: reservationData.email,
      to_name: 'Piba Wings Travel',
      message: `
Yeni Rezervasyon Talebi:

Müşteri: ${reservationData.firstName} ${reservationData.lastName}
Email: ${reservationData.email}
Telefon: ${reservationData.phone}
Tur: ${reservationData.tourInfo?.name || reservationData.selectedTour}
Tarih: ${reservationData.tourDate}
Katılımcı: ${reservationData.participantCount}
Özel İhtiyaçlar: ${reservationData.assistanceNeeded || 'Yok'}
Mesaj: ${reservationData.specialRequests || 'Yok'}
      `,

      // Detaylı bilgiler (özel template için)
      customer_name: `${reservationData.firstName} ${reservationData.lastName}`,
      customer_email: reservationData.email,
      customer_phone: reservationData.phone,
      tour_name: reservationData.tourInfo?.name || reservationData.selectedTour,
      tour_date: reservationData.tourDate,
      participants: reservationData.participantCount,
      accessibility_needs: reservationData.assistanceNeeded || 'Belirtilmedi',
      special_requests: reservationData.specialRequests || 'Yok',
      emergency_contact: reservationData.emergencyContact || 'Belirtilmedi',
      emergency_phone: reservationData.emergencyPhone || 'Belirtilmedi',
      submission_date: new Date().toLocaleDateString('tr-TR'),
      submission_time: new Date().toLocaleTimeString('tr-TR'),
      company_name: 'Piba Wings Travel',
      company_email: 'info@pibawingstravel.com',
      company_phone: '+90 212 123 45 67',
      company_whatsapp: '+90 532 123 45 67'
    }

    console.log('📧 Rezervasyon maili gönderiliyor...')
    console.log('🔧 EmailJS Config:', {
      SERVICE_ID: EMAILJS_CONFIG.SERVICE_ID,
      TEMPLATE_ID: EMAILJS_CONFIG.TEMPLATE_ID_RESERVATION,
      PUBLIC_KEY: EMAILJS_CONFIG.PUBLIC_KEY ? '***' + EMAILJS_CONFIG.PUBLIC_KEY.slice(-4) : 'NOT_SET'
    })
    console.log('📝 Template Parameters:', templateParams)

    // EmailJS ile mail gönder
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_RESERVATION,
      templateParams
    )

    console.log('✅ EmailJS Response:', response)

    console.log('Rezervasyon maili başarıyla gönderildi:', response)
    return {
      success: true,
      message: 'Rezervasyon maili başarıyla gönderildi!',
      response
    }

  } catch (error) {
    console.error('❌ Rezervasyon maili gönderilirken hata:', error)
    console.error('❌ Hata detayları:', {
      name: error.name,
      message: error.message,
      status: error.status,
      text: error.text
    })

    // EmailJS spesifik hata mesajları
    let errorMessage = 'Mail gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'

    if (error.status === 400) {
      errorMessage = 'Template parametreleri hatalı. Lütfen formu kontrol edin.'
    } else if (error.status === 401) {
      errorMessage = 'EmailJS kimlik doğrulama hatası. Public Key kontrol edilmeli.'
    } else if (error.status === 404) {
      errorMessage = 'Template veya Service bulunamadı. Konfigürasyon kontrol edilmeli.'
    } else if (error.status === 429) {
      errorMessage = 'Çok fazla mail gönderim denemesi. Lütfen biraz bekleyin.'
    }

    return {
      success: false,
      message: errorMessage,
      error: {
        name: error.name,
        message: error.message,
        status: error.status,
        text: error.text
      }
    }
  }
}

/**
 * İletişim formu maili gönder
 * @param {Object} contactData - İletişim form verileri
 * @returns {Promise} - EmailJS response
 */
export const sendContactEmail = async (contactData) => {
  try {
    const templateParams = {
      from_name: contactData.name,
      from_email: contactData.email,
      phone: contactData.phone,
      subject: contactData.subject || 'İletişim Formu',
      message: contactData.message,
      submission_date: new Date().toLocaleDateString('tr-TR'),
      submission_time: new Date().toLocaleTimeString('tr-TR'),
      
      // Şirket bilgileri
      company_name: 'Piba Wings Travel',
      company_email: 'info@pibawingstravel.com'
    }

    console.log('İletişim maili gönderiliyor...', templateParams)

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_CONTACT,
      templateParams
    )

    console.log('İletişim maili başarıyla gönderildi:', response)
    return {
      success: true,
      message: 'Mesajınız başarıyla gönderildi!',
      response
    }

  } catch (error) {
    console.error('İletişim maili gönderilirken hata:', error)
    return {
      success: false,
      message: 'Mail gönderilirken bir hata oluştu. Lütfen tekrar deneyin.',
      error
    }
  }
}

/**
 * EmailJS konfigürasyonunu güncelle (geliştirme amaçlı)
 * @param {Object} config - Yeni konfigürasyon
 */
export const updateEmailJSConfig = (config) => {
  Object.assign(EMAILJS_CONFIG, config)
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
  console.log('EmailJS konfigürasyonu güncellendi:', EMAILJS_CONFIG)
}

// Test amaçlı - geliştirme ortamında kullanılacak
export const testEmailService = async () => {
  const testData = {
    firstName: 'Test',
    lastName: 'Kullanıcı',
    email: 'test@example.com',
    phone: '+90 532 123 45 67',
    selectedTour: 'Test Turu',
    preferredDate: '2024-01-15',
    participants: 2,
    accessibilityNeeds: 'Tekerlekli sandalye erişimi',
    message: 'Bu bir test mesajıdır.'
  }

  console.log('EmailJS test başlatılıyor...')
  const result = await sendReservationEmail(testData)
  console.log('Test sonucu:', result)
  return result
}

export default {
  sendReservationEmail,
  sendContactEmail,
  updateEmailJSConfig,
  testEmailService
}
