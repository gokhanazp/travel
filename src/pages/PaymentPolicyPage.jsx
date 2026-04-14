import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import { Link } from 'react-router-dom'

const PaymentPolicyPage = () => {
  const { language } = useLanguage()

  const cancellationRows = language === 'en'
    ? [
        { period: '14+ days before tour', charge: 'Only non-refundable deposit', color: 'green' },
        { period: '7–14 days before tour', charge: 'Up to 50% of total tour price', color: 'yellow' },
        { period: '72 hours – 7 days before tour', charge: 'Up to 75% of total tour price', color: 'orange' },
        { period: 'Less than 72 hours / No-show', charge: '100% of total tour price — No refund', color: 'red' },
      ]
    : [
        { period: 'Turdan 14+ gün önce', charge: 'Yalnızca iade edilmez depozito', color: 'green' },
        { period: 'Turdan 7–14 gün önce', charge: 'Toplam tur fiyatının %50\'sine kadar', color: 'yellow' },
        { period: 'Turdan 72 saat – 7 gün önce', charge: 'Toplam tur fiyatının %75\'ine kadar', color: 'orange' },
        { period: '72 saatten az / Gelmeme', charge: 'Toplam tur fiyatının %100\'ü — İade yok', color: 'red' },
      ]

  const rowColorMap = {
    green: 'bg-green-50 border-green-200 text-green-800',
    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    orange: 'bg-orange-50 border-orange-200 text-orange-800',
    red: 'bg-red-50 border-red-200 text-red-800',
  }
  const dotColorMap = {
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500',
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-red-800 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 mx-auto">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {language === 'en' ? 'Payment & Cancellation Policy' : 'Ödeme & İptal Politikası'}
          </h1>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto">
            {language === 'en'
              ? 'Transparent payment terms and fair cancellation conditions for your peace of mind.'
              : 'Gönül rahatlığınız için şeffaf ödeme koşulları ve adil iptal şartları.'}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 text-orange-100 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {language === 'en' ? 'Last updated: 2025' : 'Son güncelleme: 2025'}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">

        {/* ── Payment Terms ── */}
        <section className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 px-8 py-5 border-b border-orange-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              {language === 'en' ? 'Payment Terms' : 'Ödeme Koşulları'}
            </h2>
          </div>
          <div className="p-8 space-y-5">

            {/* Deposit highlight */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-orange-50 border border-orange-200 rounded-xl p-5 text-center">
                <div className="text-4xl font-extrabold text-orange-600 mb-1">30%</div>
                <div className="text-sm font-semibold text-orange-800">
                  {language === 'en' ? 'Deposit at Booking' : 'Rezervasyonda Depozito'}
                </div>
                <p className="text-xs text-orange-600 mt-2">
                  {language === 'en' ? 'Non-refundable' : 'İade edilmez'}
                </p>
              </div>
              <div className="flex-1 bg-amber-50 border border-amber-200 rounded-xl p-5 text-center">
                <div className="text-4xl font-extrabold text-amber-600 mb-1">70%</div>
                <div className="text-sm font-semibold text-amber-800">
                  {language === 'en' ? 'Balance Due' : 'Kalan Bakiye'}
                </div>
                <p className="text-xs text-amber-600 mt-2">
                  {language === 'en' ? '14 days before tour' : 'Turdan 14 gün önce'}
                </p>
              </div>
            </div>

            <ul className="space-y-3 text-gray-600">
              {(language === 'en' ? [
                'To confirm your reservation, a 30% deposit of the total tour price is required at the time of booking. This deposit allows us to begin securing and organizing your personalized travel services, including accommodations, transportation, and tailored arrangements.',
                'The remaining 70% balance must be paid no later than 14 days before the tour start date.',
                'If the remaining balance is not received by the due date, the booking will be treated as a cancellation by the client and the applicable cancellation policy will apply. In such cases, the deposit will be retained.',
                'All payments are made in USD unless otherwise stated. Any bank transfer fees or transaction charges are the responsibility of the client.',
                'Reservations will be confirmed only after the deposit is received.',
              ] : [
                'Rezervasyonunuzu onaylamak için toplam tur fiyatının %30\'u depozito olarak rezervasyon sırasında gereklidir. Bu depozito, konaklama, ulaşım ve kişiye özel düzenlemeler dahil olmak üzere kişiselleştirilmiş seyahat hizmetlerinizi güvence altına almaya başlamamıza olanak tanır.',
                'Kalan %70 bakiye tur başlangıç tarihinden en geç 14 gün önce ödenmelidir.',
                'Kalan bakiye son ödeme tarihine kadar alınmazsa rezervasyon müşteri tarafından iptal olarak değerlendirilir ve geçerli iptal politikası uygulanır. Bu durumlarda depozito iade edilmez.',
                'Aksi belirtilmedikçe tüm ödemeler USD cinsinden yapılır. Herhangi bir banka havalesi ücreti veya işlem masrafı müşterinin sorumluluğundadır.',
                'Rezervasyonlar yalnızca depozito alındıktan sonra onaylanır.',
              ]).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Cancellation Table ── */}
        <section className="bg-white rounded-2xl shadow-sm border border-red-100 overflow-hidden">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 px-8 py-5 border-b border-red-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {language === 'en' ? 'Cancellation & Refund Policy' : 'İptal & İade Politikası'}
              </h2>
              <p className="text-sm text-gray-500 mt-0.5">
                {language === 'en'
                  ? 'We understand that travel plans can change. The deposit is always non-refundable.'
                  : 'Seyahat planlarının değişebileceğini anlıyoruz. Depozito her durumda iade edilmez.'}
              </p>
            </div>
          </div>
          <div className="p-8">
            {/* Table */}
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="px-5 py-4 text-left font-semibold">
                      {language === 'en' ? 'Cancellation Period' : 'İptal Dönemi'}
                    </th>
                    <th className="px-5 py-4 text-left font-semibold">
                      {language === 'en' ? 'Charge Applied' : 'Uygulanan Ücret'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cancellationRows.map((row, i) => (
                    <tr key={i} className={`border-t border-gray-100 ${rowColorMap[row.color]}`}>
                      <td className="px-5 py-4 font-medium flex items-center gap-2">
                        <span className={`inline-block w-2.5 h-2.5 rounded-full ${dotColorMap[row.color]} flex-shrink-0`} />
                        {row.period}
                      </td>
                      <td className="px-5 py-4 font-semibold">{row.charge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-5 text-sm text-gray-500 flex items-start gap-2">
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {language === 'en'
                ? 'Any applicable refunds will be processed within 7–14 business days, depending on banking procedures and supplier timelines.'
                : 'Geçerli iadeler, bankacılık prosedürleri ve tedarikçi zaman çizelgelerine bağlı olarak 7–14 iş günü içinde işleme alınır.'}
            </p>
          </div>
        </section>

        {/* ── Payment Options ── */}
        <section className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-5 border-b border-blue-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              {language === 'en' ? 'Deposit Payment Options' : 'Depozito Ödeme Seçenekleri'}
            </h2>
          </div>
          <div className="p-8 grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 bg-blue-50 border border-blue-200 rounded-xl p-5">
              <div className="w-11 h-11 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-blue-900">
                  {language === 'en' ? 'Bank Transfer' : 'Banka Havalesi'}
                </div>
                <div className="text-sm text-blue-600 mt-0.5">
                  {language === 'en' ? 'IBAN details will be provided' : 'IBAN bilgileri sağlanacaktır'}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="w-11 h-11 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-green-900">
                  {language === 'en' ? 'Secure Payment Link' : 'Güvenli Ödeme Linki'}
                </div>
                <div className="text-sm text-green-600 mt-0.5">
                  {language === 'en' ? 'Sent by email' : 'E-posta ile gönderilir'}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Force Majeure ── */}
        <section className="bg-yellow-50 border border-yellow-300 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-yellow-200 rounded-xl flex items-center justify-center text-yellow-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-1.964-1.333-2.732 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">
                {language === 'en' ? 'Force Majeure' : 'Mücbir Sebepler'}
              </h3>
              <p className="text-yellow-800 leading-relaxed">
                {language === 'en'
                  ? 'In cases of force majeure such as natural disasters, government restrictions, or other unavoidable events, refund conditions will be evaluated in accordance with supplier policies.'
                  : 'Doğal afetler, hükümet kısıtlamaları veya diğer kaçınılmaz olaylar gibi mücbir sebep durumlarında iade koşulları tedarikçi politikalarına uygun olarak değerlendirilecektir.'}
              </p>
            </div>
          </div>
        </section>

        {/* ── Acceptance ── */}
        <section className="bg-gradient-to-r from-orange-600 to-red-700 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {language === 'en' ? 'Acceptance' : 'Kabul'}
              </h3>
              <p className="text-orange-100 leading-relaxed">
                {language === 'en'
                  ? 'By confirming the booking and making the payment, the client acknowledges that they have read, understood, and accepted the payment and cancellation terms stated above.'
                  : 'Rezervasyonu onaylayarak ve ödemeyi yaparak müşteri, yukarıda belirtilen ödeme ve iptal koşullarını okuduğunu, anladığını ve kabul ettiğini beyan eder.'}
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {language === 'en' ? 'Questions about our Payment Policy?' : 'Ödeme Politikamız hakkında sorularınız mı var?'}
          </h3>
          <p className="text-gray-600 mb-6">
            {language === 'en'
              ? 'Feel free to contact us for any clarifications.'
              : 'Herhangi bir açıklama için bizimle iletişime geçmekten çekinmeyin.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+905325433673"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +90 532 543 36 73
            </a>
            <a
              href="mailto:info@pibawingstravel.com"
              className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-xl border-2 border-orange-500 hover:bg-orange-50 transition-colors gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@pibawingstravel.com
            </a>
          </div>
        </section>

        {/* Related links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={language === 'en' ? '/privacy-policy' : '/gizlilik-politikasi'}
            className="flex items-center justify-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-all text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            {language === 'en' ? 'Privacy Policy' : 'Gizlilik Politikası'}
          </Link>
          <Link
            to={language === 'en' ? '/terms-of-service' : '/hizmet-sartlari'}
            className="flex items-center justify-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 hover:border-gray-600 hover:text-gray-900 transition-all text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {language === 'en' ? 'Terms of Service' : 'Hizmet Şartları'}
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PaymentPolicyPage
