import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'

const PinarSiverekPage = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'ABOUT PINAR SİVEREK / FOUNDER',
      content: `Pınar Siverek, founder of Piba Wings Travel, is a professional tour guide with over 24 years of experience in the tourism industry. For years, she has connected guests from around the world with the historical, cultural, and natural wonders of Turkey, experiencing that tourism is not only about travel but also a cultural bridge and a space of freedom.

Throughout her career, Pınar Siverek, who has organized hundreds of tours and guided thousands of travelers, realized that a significant segment of society was being deprived of the right to travel: individuals with disabilities. The inaccessibility of museums, historical sites, historical sites, and even major tourist attractions makes it difficult for individuals with disabilities to travel and restricts their freedom to explore the world.

These observations paved a new path for Pınar Siverek's career. She decided to use her 24 years of tourism knowledge and professional guiding experience to add value to the lives of individuals with disabilities. With this vision, she founded Piba Wings Travel Agency, a pioneer in accessible tourism in Turkey.

Pınar Siverek's greatest motivation is ensuring that individuals with disabilities and the elderly can travel freely, visit museums and historical sites, experience new places, and experience different cultures, just like everyone else. Under her leadership, Piba Wings Travel:

- Provides transportation and accommodation solutions tailored to the needs of individuals with disabilities.
- Provides special arrangements for access to museums and historical sites.
- Provides confidence with complementary services such as companionship and medical support.
- Acts with a socially responsible approach that believes in every individual's right to explore the world.

Pınar Siverek's vision is clear: "To eliminate travel barriers and make Turkey and the world accessible to everyone." In line with this vision, Piba Wings Travel is not just a tourism company; it is also an initiative that supports the active participation of individuals with disabilities in social life.

Today, Pınar Siverek continues to offer safe and independent holidays to individuals with disabilities, leveraging her knowledge and years of experience. Under her leadership, Piba Wings Travel has evolved into a brand that aims to overcome barriers and make travel accessible to everyone.

Together, we carry the luggage of your dreams.`
    },
    tr: {
      title: 'PINAR SİVEREK HAKKINDA / KURUCU',
      content: `Piba Wings Travel'ın kurucusu Pınar Siverek, turizm sektöründe 24 yılı aşkın deneyime sahip profesyonel bir tur rehberidir. Yıllarca dünyanın dört bir yanından gelen misafirleri Türkiye'nin tarihi, kültürel ve doğal güzellikleriyle buluşturmuş, turizmin sadece seyahat değil, aynı zamanda kültürel bir köprü ve özgürlük alanı olduğunu deneyimlemiştir.

Kariyeri boyunca yüzlerce tur organize eden ve binlerce gezgine rehberlik eden Pınar Siverek, toplumun önemli bir kesiminin seyahat hakkından mahrum bırakıldığını fark etti: engelli bireyler. Müzelerin, tarihi mekanların, tarihi alanların ve hatta büyük turistik cazibe merkezlerinin erişilebilir olmaması, engelli bireylerin seyahat etmesini zorlaştırıyor ve dünyayı keşfetme özgürlüklerini kısıtlıyordu.

Bu gözlemler Pınar Siverek'in kariyerinde yeni bir yol açtı. 24 yıllık turizm bilgisini ve profesyonel rehberlik deneyimini engelli bireylerin hayatlarına değer katmak için kullanmaya karar verdi. Bu vizyonla, Türkiye'de erişilebilir turizmin öncüsü olan Piba Wings Travel Acentesi'ni kurdu.

Pınar Siverek'in en büyük motivasyonu, engelli bireylerin ve yaşlıların herkes gibi özgürce seyahat edebilmelerini, müzeleri ve tarihi mekanları ziyaret edebilmelerini, yeni yerler deneyimleyebilmelerini ve farklı kültürleri yaşayabilmelerini sağlamaktır. Onun liderliğinde Piba Wings Travel:

- Engelli bireylerin ihtiyaçlarına uygun ulaşım ve konaklama çözümleri sağlar.
- Müzelere ve tarihi mekanlara erişim için özel düzenlemeler yapar.
- Refakatçilik ve tıbbi destek gibi tamamlayıcı hizmetlerle güven verir.
- Her bireyin dünyayı keşfetme hakkına inanan sosyal sorumlu bir yaklaşımla hareket eder.

Pınar Siverek'in vizyonu nettir: "Seyahat engellerini ortadan kaldırmak ve Türkiye'yi ve dünyayı herkes için erişilebilir kılmak." Bu vizyon doğrultusunda Piba Wings Travel sadece bir turizm şirketi değil; aynı zamanda engelli bireylerin sosyal hayata aktif katılımını destekleyen bir girişimdir.

Bugün Pınar Siverek, bilgisini ve yıllarca süren deneyimini kullanarak engelli bireylere güvenli ve bağımsız tatiller sunmaya devam ediyor. Onun liderliğinde Piba Wings Travel, engelleri aşmayı ve seyahati herkes için erişilebilir kılmayı hedefleyen bir markaya dönüştü.

Birlikte, hayallerinizin bavulunu taşıyoruz.`
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                {language === 'en' ? 'Founder & Visionary' : 'Kurucu & Vizyoner'}
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              {currentContent.title}
            </h1>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6">
              {currentContent.content.split('\n\n').map((paragraph, index) => {
                // Check if paragraph contains bullet points
                if (paragraph.includes('- ')) {
                  const lines = paragraph.split('\n')
                  const beforeBullets = lines.filter(line => !line.trim().startsWith('- '))
                  const bullets = lines.filter(line => line.trim().startsWith('- '))
                  
                  return (
                    <div key={index}>
                      {beforeBullets.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-lg leading-8 mb-4">
                          {line}
                        </p>
                      ))}
                      <ul className="space-y-3 ml-6">
                        {bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="text-lg leading-8 flex items-start">
                            <span className="text-blue-500 mr-3 mt-1">•</span>
                            <span>{bullet.replace('- ', '')}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                }
                
                return (
                  <p key={index} className="text-lg leading-8">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-12 text-center">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-100">
              <svg className="w-8 h-8 text-blue-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
              <p className="text-xl italic text-gray-700 font-medium">
                {language === 'en' 
                  ? '"Together, we carry the luggage of your dreams."'
                  : '"Birlikte, hayallerinizin bavulunu taşıyoruz."'
                }
              </p>
              <p className="text-sm text-gray-500 mt-4 font-semibold">
                - Pınar Siverek
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PinarSiverekPage
