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
    <div className="min-h-screen bg-white">
      <Header />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Title */}
        <div className="text-center mb-12">
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

      <Footer />
    </div>
  )
}

export default AboutPage
