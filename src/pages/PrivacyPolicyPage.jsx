import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import { Link } from 'react-router-dom'

const PrivacyPolicyPage = () => {
  const { language } = useLanguage()

  const sections = [
    {
      id: 1,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'blue',
      title: language === 'en' ? '1. Information We Collect' : '1. Topladığımız Bilgiler',
      content: language === 'en'
        ? 'We may collect personal information such as your name, contact details, travel preferences, and any information necessary to organize your tour, including accessibility or medical requirements provided voluntarily.'
        : 'İsminiz, iletişim bilgileriniz, seyahat tercihleriniz ve turunu düzenlemek için gerekli bilgiler (gönüllü olarak sağlanan erişilebilirlik veya tıbbi gereksinimler dahil) gibi kişisel bilgilerinizi toplayabiliriz.',
    },
    {
      id: 2,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: 'green',
      title: language === 'en' ? '2. How We Use Your Information' : '2. Bilgilerinizi Nasıl Kullanıyoruz',
      content: null,
      list: language === 'en'
        ? [
            'Arrange and manage your travel services',
            'Communicate with you regarding your booking',
            'Improve our services and customer experience',
          ]
        : [
            'Seyahat hizmetlerinizi düzenlemek ve yönetmek',
            'Rezervasyonunuzla ilgili sizinle iletişim kurmak',
            'Hizmetlerimizi ve müşteri deneyimimizi geliştirmek',
          ],
      note: language === 'en'
        ? 'We do not share your personal data for marketing purposes.'
        : 'Kişisel verilerinizi pazarlama amacıyla paylaşmıyoruz.',
    },
    {
      id: 3,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
      color: 'purple',
      title: language === 'en' ? '3. Sharing of Information' : '3. Bilgilerin Paylaşımı',
      content: language === 'en'
        ? 'Your information may be shared only when necessary with trusted third parties such as hotels, transportation providers, or service partners, solely for the purpose of delivering your requested services.'
        : 'Bilgileriniz yalnızca talep ettiğiniz hizmetleri sunmak amacıyla oteller, ulaşım sağlayıcılar veya hizmet ortakları gibi güvenilir üçüncü taraflarla gerektiğinde paylaşılabilir.',
    },
    {
      id: 4,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: 'orange',
      title: language === 'en' ? '4. Data Protection' : '4. Veri Koruması',
      content: language === 'en'
        ? 'We take appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse.'
        : 'Kişisel verilerinizi yetkisiz erişime, kayba veya kötüye kullanıma karşı korumak için uygun teknik ve organizasyonel önlemler alıyoruz.',
    },
    {
      id: 5,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'teal',
      title: language === 'en' ? '5. Your Rights' : '5. Haklarınız',
      content: language === 'en'
        ? 'You have the right to request access to your personal data, request corrections, or ask for deletion of your information, subject to applicable legal requirements.'
        : 'Yürürlükteki yasal gerekliliklere tabi olmak üzere kişisel verilerinize erişim talep etme, düzeltme talep etme veya bilgilerinizin silinmesini isteme hakkına sahipsiniz.',
    },
    {
      id: 6,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'red',
      title: language === 'en' ? '6. Data Retention' : '6. Veri Saklama',
      content: language === 'en'
        ? 'Your personal data is retained only for as long as necessary to fulfill the purposes outlined above or to comply with legal obligations.'
        : 'Kişisel verileriniz yalnızca yukarıda belirtilen amaçları yerine getirmek veya yasal yükümlülüklere uymak için gerekli olan süre boyunca saklanır.',
    },
    {
      id: 7,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'indigo',
      title: language === 'en' ? '7. Contact' : '7. İletişim',
      content: language === 'en'
        ? 'If you have any questions regarding this Privacy Policy or your personal data, you may contact us through our website or via the contact details provided.'
        : 'Bu Gizlilik Politikası veya kişisel verileriniz hakkında herhangi bir sorunuz varsa web sitemiz aracılığıyla veya sağlanan iletişim bilgileri üzerinden bizimle iletişime geçebilirsiniz.',
    },
  ]

  const colorMap = {
    blue: { bg: 'bg-blue-100', icon: 'text-blue-600', border: 'border-blue-200', badge: 'bg-blue-600' },
    green: { bg: 'bg-green-100', icon: 'text-green-600', border: 'border-green-200', badge: 'bg-green-600' },
    purple: { bg: 'bg-purple-100', icon: 'text-purple-600', border: 'border-purple-200', badge: 'bg-purple-600' },
    orange: { bg: 'bg-orange-100', icon: 'text-orange-600', border: 'border-orange-200', badge: 'bg-orange-600' },
    teal: { bg: 'bg-teal-100', icon: 'text-teal-600', border: 'border-teal-200', badge: 'bg-teal-600' },
    red: { bg: 'bg-red-100', icon: 'text-red-600', border: 'border-red-200', badge: 'bg-red-600' },
    indigo: { bg: 'bg-indigo-100', icon: 'text-indigo-600', border: 'border-indigo-200', badge: 'bg-indigo-600' },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 mx-auto">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {language === 'en' ? 'Privacy Policy' : 'Gizlilik Politikası'}
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            {language === 'en'
              ? 'How Piba Wings Travel collects, uses, and protects your personal information.'
              : 'Piba Wings Travel\'ın kişisel bilgilerinizi nasıl topladığı, kullandığı ve koruduğu.'}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 text-blue-100 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {language === 'en' ? 'Last updated: 2025' : 'Son güncelleme: 2025'}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <p className="text-gray-600 text-lg leading-relaxed">
            {language === 'en'
              ? 'This Privacy Policy explains how Piba Wings Travel, operating under the brand Piba Wings Mobility, collects, uses, and protects your personal information.'
              : 'Bu Gizlilik Politikası, Piba Wings Mobility markası altında faaliyet gösteren Piba Wings Travel\'ın kişisel bilgilerinizi nasıl topladığını, kullandığını ve koruduğunu açıklamaktadır.'}
          </p>
        </div>

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
                        <ul className="space-y-2 mb-4">
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
                      {section.note && (
                        <p className={`text-sm font-medium ${colors.icon} mt-3 italic`}>
                          ✦ {section.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Acceptance Notice */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                {language === 'en' ? 'Acceptance' : 'Kabul'}
              </h3>
              <p className="text-blue-800 leading-relaxed">
                {language === 'en'
                  ? 'By using our services, you agree to the terms of this Privacy Policy.'
                  : 'Hizmetlerimizi kullanarak bu Gizlilik Politikası\'nın şartlarını kabul etmiş olursunuz.'}
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {language === 'en' ? 'Questions about our Privacy Policy?' : 'Gizlilik Politikamız hakkında sorularınız mı var?'}
          </h3>
          <p className="text-gray-600 mb-6">
            {language === 'en'
              ? 'Feel free to contact us for any clarifications.'
              : 'Herhangi bir açıklama için bizimle iletişime geçmekten çekinmeyin.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+905325433673"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +90 532 543 36 73
            </a>
            <a
              href="mailto:info@pibawingstravel.com"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-colors gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@pibawingstravel.com
            </a>
          </div>
        </div>

        {/* Related links */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={language === 'en' ? '/terms-of-service' : '/hizmet-sartlari'}
            className="flex items-center justify-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-all text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {language === 'en' ? 'Terms of Service' : 'Hizmet Şartları'}
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

export default PrivacyPolicyPage
