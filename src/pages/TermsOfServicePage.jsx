import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import { Link } from 'react-router-dom'

const TermsOfServicePage = () => {
  const { language } = useLanguage()

  const sections = [
    {
      id: 1,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: 'blue',
      title: language === 'en' ? '1. Booking & Arrangement' : '1. Rezervasyon ve Düzenleme',
      content: language === 'en'
        ? 'By confirming a reservation, the client acknowledges that they have read, understood, and accepted these Terms of Service, along with the Payment & Cancellation Policy.'
        : 'Bir rezervasyonu onaylayarak müşteri, bu Hizmet Şartlarını ve Ödeme & İptal Politikasını okuduğunu, anladığını ve kabul ettiğini beyan eder.',
    },
    {
      id: 2,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: 'green',
      title: language === 'en' ? '2. Services' : '2. Hizmetler',
      content: language === 'en'
        ? null
        : null,
      list: language === 'en'
        ? [
            'Piba Wings Mobility provides customized accessible travel services, including accessible tours, accessible transportation, and tailored experiences.',
            'All services are arranged based on the client\'s specific needs and preferences.',
          ]
        : [
            'Piba Wings Mobility; erişilebilir turlar, erişilebilir ulaşım ve kişiye özel deneyimler dahil olmak üzere özelleştirilmiş erişilebilir seyahat hizmetleri sunmaktadır.',
            'Tüm hizmetler müşterinin özel ihtiyaçlarına ve tercihlerine göre düzenlenir.',
          ],
    },
    {
      id: 3,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'orange',
      title: language === 'en' ? '3. Payments' : '3. Ödemeler',
      content: language === 'en'
        ? 'All payments and booking conditions are subject to our Payment & Cancellation Policy, which forms an integral part of these Terms.'
        : 'Tüm ödemeler ve rezervasyon koşulları, bu Hizmet Şartlarının ayrılmaz bir parçasını oluşturan Ödeme & İptal Politikamıza tabidir.',
    },
    {
      id: 4,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      color: 'purple',
      title: language === 'en' ? '4. Changes to Itinerary' : '4. Güzergah Değişiklikleri',
      content: language === 'en'
        ? 'While every effort is made to follow the planned itinerary, adjustments may be necessary due to operational requirements, traffic conditions, weather, or other unforeseen circumstances. We always aim to provide the best possible alternative arrangements.'
        : 'Planlanan güzergahı takip etmek için her türlü çaba gösterilse de operasyonel gereklilikler, trafik koşulları, hava durumu veya öngörülemeyen diğer koşullar nedeniyle değişiklikler gerekebilir. Her zaman mümkün olan en iyi alternatif düzenlemeleri sunmayı hedefliyoruz.',
    },
    {
      id: 5,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'teal',
      title: language === 'en' ? '5. Third-Party Services' : '5. Üçüncü Taraf Hizmetleri',
      content: language === 'en'
        ? 'Certain services, including hotels, transportation providers, restaurants, and other suppliers, are operated by third parties. Piba Wings Mobility acts as an intermediary and cannot be held responsible for any acts, omissions, delays, or service issues related to these providers.'
        : 'Oteller, ulaşım sağlayıcılar, restoranlar ve diğer tedarikçiler dahil olmak üzere belirli hizmetler üçüncü taraflarca işletilmektedir. Piba Wings Mobility aracı olarak hareket etmekte olup bu sağlayıcılarla ilgili herhangi bir eylem, ihmal, gecikme veya hizmet sorunuyla ilgili olarak sorumlu tutulamaz.',
    },
    {
      id: 6,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'pink',
      title: language === 'en' ? '6. Health & Accessibility' : '6. Sağlık ve Erişilebilirlik',
      content: language === 'en'
        ? 'Clients are responsible for informing us in advance about any medical conditions, mobility requirements, or special needs. As we specialize in accessible and personalized travel experiences, this information allows us to provide the most suitable and safe travel arrangements.'
        : 'Müşteriler, herhangi bir tıbbi durum, hareket gereksinimi veya özel ihtiyaç hakkında önceden bilgi vermekten sorumludur. Erişilebilir ve kişiselleştirilmiş seyahat deneyimlerinde uzmanlaştığımız için bu bilgiler en uygun ve güvenli seyahat düzenlemelerini sunmamıza olanak tanır.',
    },
    {
      id: 7,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-1.964-1.333-2.732 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      color: 'red',
      title: language === 'en' ? '7. Liability' : '7. Sorumluluk',
      content: language === 'en'
        ? 'Piba Wings Mobility cannot be held liable for any loss, injury, delay, or damage arising from circumstances beyond our control, including but not limited to force majeure events, transportation delays, or third-party service issues.'
        : 'Piba Wings Mobility, mücbir sebep olayları, ulaşım gecikmeleri veya üçüncü taraf hizmet sorunları dahil ancak bunlarla sınırlı olmamak üzere kontrolümüz dışındaki koşullardan kaynaklanan herhangi bir kayıp, yaralanma, gecikme veya hasardan sorumlu tutulamaz.',
    },
  ]

  const colorMap = {
    blue: { bg: 'bg-blue-100', icon: 'text-blue-600', border: 'border-blue-200' },
    green: { bg: 'bg-green-100', icon: 'text-green-600', border: 'border-green-200' },
    purple: { bg: 'bg-purple-100', icon: 'text-purple-600', border: 'border-purple-200' },
    orange: { bg: 'bg-orange-100', icon: 'text-orange-600', border: 'border-orange-200' },
    teal: { bg: 'bg-teal-100', icon: 'text-teal-600', border: 'border-teal-200' },
    red: { bg: 'bg-red-100', icon: 'text-red-600', border: 'border-red-200' },
    pink: { bg: 'bg-pink-100', icon: 'text-pink-600', border: 'border-pink-200' },
    indigo: { bg: 'bg-indigo-100', icon: 'text-indigo-600', border: 'border-indigo-200' },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 mx-auto">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {language === 'en' ? 'Terms of Service' : 'Hizmet Şartları'}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {language === 'en'
              ? 'These terms apply to all services provided by Piba Wings Travel Agency, operating under the brand Piba Wings Mobility.'
              : 'Bu şartlar, Piba Wings Mobility markası altında faaliyet gösteren Piba Wings Travel Acentesi tarafından sağlanan tüm hizmetler için geçerlidir.'}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 text-gray-300 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {language === 'en' ? 'Last updated: 2025' : 'Son güncelleme: 2025'}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section) => {
            const colors = colorMap[section.color]
            return (
              <div key={section.id} className={`bg-white rounded-2xl shadow-sm border ${colors.border} overflow-hidden`}>
                <div className="p-8">
                  <div className="flex items-start gap-5">
                    <div className={`flex-shrink-0 w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center ${colors.icon}`}>
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
                      {section.content && (
                        <p className="text-gray-600 leading-relaxed">{section.content}</p>
                      )}
                      {section.list && (
                        <ul className="space-y-2">
                          {section.list.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-600">
                              <svg className={`w-5 h-5 ${colors.icon} flex-shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Acceptance Notice */}
        <div className="mt-8 bg-gradient-to-r from-gray-800 to-slate-900 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                {language === 'en' ? '8. Acceptance' : '8. Kabul'}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                {language === 'en'
                  ? 'By using our services and completing a booking, the client agrees to these Terms of Service.'
                  : 'Hizmetlerimizi kullanarak ve bir rezervasyonu tamamlayarak müşteri bu Hizmet Şartlarını kabul etmiş olur.'}
              </p>
              <p className="text-gray-400 text-sm">
                {language === 'en'
                  ? 'For detailed payment, cancellation, and refund conditions, please refer to our Payment & Cancellation Policy.'
                  : 'Ayrıntılı ödeme, iptal ve iade koşulları için lütfen Ödeme & İptal Politikamıza bakın.'}
              </p>
            </div>
          </div>
        </div>

        {/* Related links */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
            to={language === 'en' ? '/payment-policy' : '/odeme-politikasi'}
            className="flex items-center justify-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 hover:border-orange-400 hover:text-orange-600 transition-all text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            {language === 'en' ? 'Payment & Cancellation Policy' : 'Ödeme & İptal Politikası'}
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TermsOfServicePage
