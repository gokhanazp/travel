import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'

const AboutPage = () => {
  const { t, language } = useLanguage()

  const content = {
    en: {
      title: 'About Piba Wings Travel',
      subtitle: 'Travel is a Right, Not a Privilege',
      intro: 'As Piba Wings Travel, we believe that travel should be a right, not a privilege. We are a specialized travel agency dedicated to creating accessible, inclusive and inspiring journeys for disabled and mobility-impaired individuals. Whether you explore a vibrant city, enjoy nature, or dream of a beach getaway, we ensure every moment is comfortable, safe and barrier-free.',
      mission: 'Our Mission',
      missionText: 'To eliminate travel barriers and make the world accessible to everyone, regardless of physical limitations. We strive to provide seamless travel experiences through careful planning, adaptable transportation and inclusive accommodation options.',
      whoWeAre: 'Who We Are',
      whoWeAreText: 'Founded with passion and purpose, Piba Wings Travel brings together travel professionals, accessibility advocates and people who value equal opportunity. We work hand in hand with our local partners to ensure that every tour and service meets the highest accessibility standards.',
      whyPibaWings: 'Why Piba Wings?',
      whyPibaWingsText: 'Because travel freedom is the highest level of independence. Our goal is to give you wings; to help you fly, explore and connect with the world on your own terms.',
      services: 'Our Services',
      servicesText: 'As Piba Wings Travel, we specialize in designing accessible and seamless travel experiences for mobility-impaired individuals. Our services are carefully designed to provide comfort, safety and enjoyment at every step of the journey.',
      servicesList: [
        'Accessible Tours - Travel programs specially designed for wheelchair users and other mobility needs',
        'Adapted Transportation - Vehicles equipped with ramps, elevators and space for mobility aids',
        'Disability-Friendly Accommodation - Carefully selected hotels and accommodations that meet international accessibility standards',
        'Travel Companions and Guides - Guides and companions to assist you during your journey when needed',
        'Personalized Routes - Travel plans personalized according to your needs'
      ]
    },
    tr: {
      title: 'Piba Wings Travel Hakkında',
      subtitle: 'Seyahat Bir Ayrıcalık Değil, Bir Haktır',
      intro: 'Piba Wings Travel olarak, seyahatin bir ayrıcalık değil, bir hak olması gerektiğine inanıyoruz. Engelli ve hareket kabiliyeti kısıtlı bireyler için erişilebilir, kapsayıcı ve ilham verici yolculuklar yaratmaya adanmış uzman bir seyahat acentesiyiz. İster canlı bir şehri keşfedin, ister doğanın tadını çıkarın, ister bir sahil kaçamağı hayal edin, her anın konforlu, güvenli ve engelsiz olmasını sağlıyoruz.',
      mission: 'Misyonumuz',
      missionText: 'Seyahat engellerini ortadan kaldırmak ve fiziksel kısıtlamalar ne olursa olsun dünyayı herkes için erişilebilir kılmak. Özenli planlama, uyarlanabilir ulaşım ve kapsayıcı konaklama seçenekleriyle kusursuz seyahat deneyimleri sunmaya çalışıyoruz.',
      whoWeAre: 'Biz Kimiz',
      whoWeAreText: 'Tutku ve amaçla kurulan Piba Wings Travel, seyahat profesyonellerini, erişilebilirlik savunucularını ve fırsat eşitliğine önem veren kişileri bir araya getiriyor. Her tur ve hizmetin en yüksek erişilebilirlik standartlarını karşılamasını sağlamak için yerel ortaklarımızla el ele çalışıyoruz.',
      whyPibaWings: 'Neden Piba Wings?',
      whyPibaWingsText: 'Çünkü seyahat özgürlüğü, bağımsızlığın en üst düzeyidir. Amacımız size kanatlar vermek; kendi şartlarınızla uçmanıza, keşfetmenize ve dünyayla bağlantı kurmanıza yardımcı olmaktır.',
      services: 'Hizmetlerimiz',
      servicesText: 'Piba Wings Travel olarak, hareket kabiliyeti kısıtlı bireyler için erişilebilir ve sorunsuz seyahat deneyimleri tasarlama konusunda uzmanız. Hizmetlerimiz, yolculuğun her adımında konfor, güvenlik ve keyif sağlamak için özenle tasarlanmıştır.',
      servicesList: [
        'Erişilebilir Turlar - Tekerlekli sandalye kullananlar ve diğer hareketlilik ihtiyaçları için özel olarak tasarlanmış seyahat programları',
        'Uyarlanmış Ulaşım - Rampa, asansör ve hareketlilik yardımcıları için alanla donatılmış araçlar',
        'Engelli Dostu Konaklama - Uluslararası erişilebilirlik standartlarını karşılayan, özenle seçilmiş oteller ve konaklama yerleri',
        'Seyahat Arkadaşları ve Rehberler - Gerektiğinde yolculuk sırasında size yardımcı olacak rehberler ve refakatçiler',
        'Kişiye Özel Rotalar - İhtiyaçlarınıza göre kişiselleştirilmiş seyahat planları'
      ]
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
          <p className="text-xl text-orange-100 max-w-3xl mx-auto font-semibold">
            {currentContent.subtitle}
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16">
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed text-center max-w-5xl mx-auto">
            {currentContent.intro}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
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

          {/* Who We Are */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <svg className="w-8 h-8 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {currentContent.whoWeAre}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {currentContent.whoWeAreText}
            </p>
          </div>
        </div>

        {/* Why Piba Wings */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl shadow-lg p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <svg className="w-8 h-8 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            {currentContent.whyPibaWings}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            {currentContent.whyPibaWingsText}
          </p>
        </div>

        {/* Services */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <svg className="w-8 h-8 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
            </svg>
            {currentContent.services}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-8">
            {currentContent.servicesText}
          </p>

          <div className="grid gap-6">
            {currentContent.servicesList.map((service, index) => (
              <div key={index} className="flex items-start bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    {service.split(' - ')[0]}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.split(' - ')[1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPage
