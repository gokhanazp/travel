import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'

const PrivacyPolicyPage = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Payment & Cancellation Policy',
      paymentTerms: 'Payment Terms',
      paymentTermsList: [
        '30% deposit of the total tour price is required at the time of booking to confirm the reservation.',
        'The remaining 70% balance must be paid no later than 10 days before the tour starts.',
        'Reservations will be confirmed only after the deposit is received.'
      ],
      cancellationPolicy: 'Cancellation & Refund Policy',
      cancellationList: [
        'Cancellations made 15 days before the tour start date: Full refund of the amount paid.',
        'Cancellations made 14 to 7 days before tour start date: 30% cancellation fee of the total tour price will apply.',
        'Cancellations made 6 to 3 days before the tour start day: 50% cancellation fee of the total tour price will apply.',
        'Cancellations made less than 72 hours before the tour start date: No refund will be provided.'
      ],
      depositPayment: 'Deposit Payment Options',
      depositOptions: [
        'Bank Transfer (IBAN details will be provided)',
        'Secure Payment Link (Sent by email)'
      ],
      forceMajeure: 'Force Majeure',
      forceMajeureText: 'In cases of force majeure such as natural disasters, government restrictions, or other unavoidable events, refund conditions will be evaluated in accordance with supplier policies.',
      acceptance: 'Acceptance',
      acceptanceText: 'By confirming the booking and making the payment, the client acknowledges that they have read, understood, and accepted the payment and cancellation terms stated above.'
    },
    tr: {
      title: 'Ödeme & İptal Politikası',
      paymentTerms: 'Ödeme Koşulları',
      paymentTermsList: [
        'Rezervasyonu onaylamak için rezervasyon sırasında toplam tur fiyatının %30\'u depozito olarak gereklidir.',
        'Kalan %70 bakiye, tur başlamadan en geç 10 gün önce ödenmelidir.',
        'Rezervasyonlar yalnızca depozito alındıktan sonra onaylanacaktır.'
      ],
      cancellationPolicy: 'İptal & İade Politikası',
      cancellationList: [
        'Tur başlangıç tarihinden 15 gün önce yapılan iptaller: Ödenen tutarın tam iadesi.',
        'Tur başlangıç tarihinden 14 ila 7 gün önce yapılan iptaller: Toplam tur fiyatının %30\'u iptal ücreti olarak uygulanacaktır.',
        'Tur başlangıç gününden 6 ila 3 gün önce yapılan iptaller: Toplam tur fiyatının %50\'si iptal ücreti olarak uygulanacaktır.',
        'Tur başlangıç tarihinden 72 saatten az önce yapılan iptaller: İade yapılmayacaktır.'
      ],
      depositPayment: 'Depozito Ödeme Seçenekleri',
      depositOptions: [
        'Banka Havalesi (IBAN bilgileri sağlanacaktır)',
        'Güvenli Ödeme Linki (E-posta ile gönderilir)'
      ],
      forceMajeure: 'Mücbir Sebepler',
      forceMajeureText: 'Doğal afetler, hükümet kısıtlamaları veya diğer kaçınılmaz olaylar gibi mücbir sebep durumlarında, iade koşulları tedarikçi politikalarına uygun olarak değerlendirilecektir.',
      acceptance: 'Kabul',
      acceptanceText: 'Rezervasyonu onaylayarak ve ödemeyi yaparak, müşteri yukarıda belirtilen ödeme ve iptal koşullarını okuduğunu, anladığını ve kabul ettiğini beyan eder.'
    }
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10">
          {/* Payment Terms */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{currentContent.paymentTerms}</h2>
            </div>
            <ul className="space-y-3">
              {currentContent.paymentTermsList.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Cancellation Policy */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{currentContent.cancellationPolicy}</h2>
            </div>
            <ul className="space-y-3">
              {currentContent.cancellationList.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Deposit Payment Options */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{currentContent.depositPayment}</h2>
            </div>
            <ul className="space-y-3">
              {currentContent.depositOptions.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Force Majeure */}
          <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-1.964-1.333-2.732 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-yellow-900 mb-2">{currentContent.forceMajeure}</h3>
                <p className="text-yellow-800 leading-relaxed">{currentContent.forceMajeureText}</p>
              </div>
            </div>
          </section>

          {/* Acceptance */}
          <section className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-green-900 mb-2">{currentContent.acceptance}</h3>
                <p className="text-green-800 leading-relaxed">{currentContent.acceptanceText}</p>
              </div>
            </div>
          </section>

          {/* Contact Info */}
          <section className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {language === 'en' ? 'Questions about our policies?' : 'Politikalarımız hakkında sorularınız mı var?'}
              </h3>
              <p className="text-gray-700 mb-4">
                {language === 'en' 
                  ? 'Feel free to contact us for any clarifications.' 
                  : 'Herhangi bir açıklama için bizimle iletişime geçmekten çekinmeyin.'}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:+905325433673" className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +90 532 543 36 73
                </a>
                <a href="mailto:info@pibawingstravel.com" className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg border-2 border-orange-500 hover:bg-orange-50 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@pibawingstravel.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PrivacyPolicyPage
