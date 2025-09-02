import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'

const AboutPage = () => {
  const { t, language } = useLanguage()

  const content = {
    en: {
      title: 'About Piba Wings Travel',
      subtitle: 'Your Trusted Partner for Accessible Travel Experiences',
      mission: 'Our Mission',
      missionText: 'At Piba Wings Travel, we believe that everyone deserves to explore the world without barriers. We specialize in creating accessible travel experiences that cater to travelers with diverse needs, ensuring comfort, safety, and unforgettable memories for all.',
      vision: 'Our Vision',
      visionText: 'To become the leading accessible travel company, breaking down barriers and opening up the world to everyone, regardless of their physical abilities or special needs.',
      values: 'Our Values',
      valuesList: [
        'Accessibility First - Every tour is designed with accessibility in mind',
        'Safety & Comfort - Your well-being is our top priority',
        'Professional Service - Expert guides and dedicated support team',
        'Inclusive Experience - Creating memories for everyone',
        'Quality Assurance - High standards in all our services'
      ],
      team: 'Our Expert Team',
      teamText: 'Our team consists of experienced travel professionals, accessibility experts, and certified guides who are passionate about creating inclusive travel experiences.',
      contact: 'Get in Touch',
      contactText: 'Ready to start your accessible adventure? Contact us today to learn more about our tours and services.'
    },
    tr: {
      title: 'Piba Wings Travel Hakkında',
      subtitle: 'Erişilebilir Seyahat Deneyimleri İçin Güvenilir Ortağınız',
      mission: 'Misyonumuz',
      missionText: 'Piba Wings Travel olarak, herkesin dünyayı engelsiz keşfetmeye hakkı olduğuna inanıyoruz. Farklı ihtiyaçları olan gezginler için erişilebilir seyahat deneyimleri yaratma konusunda uzmanlaşarak, herkes için konfor, güvenlik ve unutulmaz anılar sağlıyoruz.',
      vision: 'Vizyonumuz',
      visionText: 'Engelleri kaldıran ve fiziksel yetenekleri veya özel ihtiyaçları ne olursa olsun herkese dünyayı açan, lider erişilebilir seyahat şirketi olmak.',
      values: 'Değerlerimiz',
      valuesList: [
        'Önce Erişilebilirlik - Her tur erişilebilirlik göz önünde bulundurularak tasarlanır',
        'Güvenlik ve Konfor - Refahınız en büyük önceliğimizdir',
        'Profesyonel Hizmet - Uzman rehberler ve özel destek ekibi',
        'Kapsayıcı Deneyim - Herkes için anılar yaratmak',
        'Kalite Güvencesi - Tüm hizmetlerimizde yüksek standartlar'
      ],
      team: 'Uzman Ekibimiz',
      teamText: 'Ekibimiz, kapsayıcı seyahat deneyimleri yaratma konusunda tutkulu, deneyimli seyahat profesyonelleri, erişilebilirlik uzmanları ve sertifikalı rehberlerden oluşur.',
      contact: 'İletişime Geçin',
      contactText: 'Erişilebilir maceranıza başlamaya hazır mısınız? Turlarımız ve hizmetlerimiz hakkında daha fazla bilgi almak için bugün bizimle iletişime geçin.'
    }
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {currentContent.title}
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <svg className="w-8 h-8 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {currentContent.mission}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {currentContent.missionText}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <svg className="w-8 h-8 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {currentContent.vision}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {currentContent.visionText}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <svg className="w-8 h-8 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {currentContent.values}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentContent.valuesList.map((value, index) => (
              <div key={index} className="flex items-start bg-orange-50 p-4 rounded-lg">
                <svg className="w-6 h-6 mr-3 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <svg className="w-8 h-8 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {currentContent.team}
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg text-center max-w-4xl mx-auto">
            {currentContent.teamText}
          </p>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {currentContent.contact}
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            {currentContent.contactText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905551234567"
              className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📞 +90 555 123 45 67
            </a>
            <a
              href="mailto:info@pibawingstravel.com"
              className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ✉️ info@pibawingstravel.com
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default AboutPage
