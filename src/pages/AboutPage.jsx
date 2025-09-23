import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'

const AboutPage = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'ABOUT US',
      content: `As Piba Wings Mobility, we are Turkey's first and leading travel agency, offering specially designed tours and a professional team to make life easier for people with disabilities, the elderly, people with limited mobility, and those with hearing impairments, increasing their freedom to travel and ensuring a safe and comfortable holiday.

Our agency's founder, Pınar Siverek, aims to contribute to the recognition and development of this topic in Turkey and internationally. She has dedicated her 24 years of experience and knowledge in the tourism sector to ensuring the lives and accessibility of individuals with disabilities. ISTTA (Istanbul Tourism Association) is actively involved in promoting greater visibility for individuals with disabilities in tourism, making museums and historical sites accessible to individuals with disabilities, and ensuring their freedom to travel safely and enjoy their holidays.

At Piba Wings Mobility, our primary mission is to contribute to the quality of life of individuals with disabilities, the elderly, and people with limited mobility by enabling them to enjoy their holidays independently or with minimal dependence on others.
Piba Wings Mobility aims to be a global leader in this field with its disability-friendly services.

To this end, we are meticulous about working with the best and most reliable hotels and restaurants, as well as experienced professional tour guides. We know this is the key to our success.

At Piba Wings Mobility, we believe that accessible tourism will grow in the coming years and that individuals with disabilities will be seen more frequently in historical sites and museums. To this end, we strive to create more fulfilling and peaceful holiday opportunities for our guests with disabilities. Our mission is to eliminate travel barriers and make the world accessible to everyone, regardless of physical limitations.`
    },
    tr: {
      title: 'HAKKIMIZDA',
      content: `Piba Wings Mobility olarak, Türkiye'nin ilk ve önde gelen seyahat acentesi olarak, engelli bireyler, yaşlılar, hareket kabiliyeti kısıtlı kişiler ve işitme engelliler için özel olarak tasarlanmış turlar ve profesyonel bir ekip sunarak hayatlarını kolaylaştırmak, seyahat özgürlüklerini artırmak ve güvenli, konforlu bir tatil geçirmelerini sağlamaktayız.

Ajansımızın kurucusu Pınar Siverek, bu konunun Türkiye'de ve uluslararası arenada tanınması ve geliştirilmesine katkıda bulunmayı hedeflemektedir. Turizm sektöründeki 24 yıllık deneyim ve bilgisini engelli bireylerin yaşamlarını ve erişilebilirliklerini sağlamaya adamıştır. ISTTA (İstanbul Turizm Derneği) engelli bireylerin turizmde daha fazla görünür olmasını sağlamak, müzeleri ve tarihi mekanları engelli bireyler için erişilebilir hale getirmek ve güvenli seyahat özgürlüklerini sağlayarak tatillerinin keyfini çıkarmalarını sağlamak konusunda aktif olarak yer almaktadır.

Piba Wings Mobility'de birincil misyonumuz, engelli bireyler, yaşlılar ve hareket kabiliyeti kısıtlı kişilerin bağımsız olarak veya başkalarına minimum bağımlılıkla tatillerinin keyfini çıkarmalarını sağlayarak yaşam kalitelerine katkıda bulunmaktır.
Piba Wings Mobility, engelli dostu hizmetleriyle bu alanda küresel bir lider olmayı hedeflemektedir.

Bu amaçla, en iyi ve en güvenilir oteller ve restoranlar ile deneyimli profesyonel tur rehberleri ile çalışma konusunda titiziz. Bunun başarımızın anahtarı olduğunu biliyoruz.

Piba Wings Mobility olarak, erişilebilir turizmin önümüzdeki yıllarda büyüyeceğine ve engelli bireylerin tarihi mekanlar ve müzelerde daha sık görüleceğine inanıyoruz. Bu amaçla, engelli misafirlerimiz için daha tatmin edici ve huzurlu tatil fırsatları yaratmaya çalışıyoruz. Misyonumuz seyahat engellerini ortadan kaldırmak ve fiziksel sınırlamalar ne olursa olsun dünyayı herkes için erişilebilir kılmaktır.`
    }
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      <Header />

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden">
        {/* Dekoratif elementler */}
        <div className="absolute top-10 left-10 text-blue-200 opacity-30">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>

        <div className="absolute bottom-10 right-10 text-orange-200 opacity-20">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 opacity-10">
          <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Title */}
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 mb-6">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                {language === 'en' ? 'Our Story' : 'Hikayemiz'}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              {currentContent.title}
            </h1>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6">
              {currentContent.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-8">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
