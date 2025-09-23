import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'

const PinarSiverekPage = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'WHO IS PINAR SİVEREK?',
      content: `Hello, I'm Pınar Siverek. For 24 years, I've been a professional tour guide, accompanying thousands of travelers to their dreams. During these journeys, I've seen that traveling isn't just a vacation; it's also about freedom, happiness, and enjoying life. However, throughout my career, one thing has always captured my attention: the challenges faced by people with disabilities and the elderly in traveling.

Unfortunately, people with disabilities and the elderly face numerous obstacles in achieving this freedom. Museums, historical sites, and most historical and touristic destinations are not designed to meet the needs of people with disabilities. I've repeatedly seen many people who long to see a place but are denied it due to their physical limitations. In those moments, my feeling is this: "Freedom to travel is everyone's right."

It was with this belief that I founded Piba Wings Travel Mobility. Our goal is for people with disabilities, just like everyone else, to be able to visit museums, explore historical sites, and enjoy a barrier-free holiday.

Our mission is clear: to eliminate travel barriers and make the world accessible to everyone. In line with this mission, we:

*Provide barrier-free access on our tours,
*Develop accessible solutions for museums and historical sites,
*Provide companionship and medical support when needed,
*Even the smallest detail is important to ensure that every guest feels safe, free, and valued.

As Piba Wings Travel, our vision is to be a pioneer of accessible tourism not only in Turkey but also globally. Because we believe: "Every journey should be possible for everyone."

As Piba Wings Travel Agency, we would be happy to be your traveling companion.

Pınar SİVEREK
Founder & CEO
Piba Wings Travel Agency`
    },
    tr: {
      title: 'PINAR SİVEREK KİMDİR?',
      content: `Merhaba, ben Pınar Siverek. 24 yıldır profesyonel tur rehberi olarak binlerce gezgini hayallerine eşlik ettim. Bu yolculuklar sırasında gördüm ki seyahat etmek sadece tatil değil; aynı zamanda özgürlük, mutluluk ve hayatın tadını çıkarmakla ilgili. Ancak kariyerim boyunca dikkatimi her zaman çeken bir şey oldu: engelli ve yaşlı insanların seyahatte karşılaştıkları zorluklar.

Ne yazık ki engelli ve yaşlı insanlar bu özgürlüğe ulaşmada sayısız engelle karşılaşıyor. Müzeler, tarihi mekanlar ve çoğu tarihi ve turistik destinasyon engelli insanların ihtiyaçlarını karşılayacak şekilde tasarlanmamış. Bir yeri görmeyi çok isteyen ama fiziksel sınırlamaları nedeniyle bundan mahrum kalan birçok insanı defalarca gördüm. O anlarda hissettiğim şu: "Seyahat özgürlüğü herkesin hakkıdır."

İşte bu inançla Piba Wings Travel Mobility'yi kurdum. Amacımız engelli insanların da herkes gibi müzeleri ziyaret edebilmeleri, tarihi mekanları keşfedebilmeleri ve engelsiz bir tatil geçirebilmeleri.

Misyonumuz net: seyahat engellerini ortadan kaldırmak ve dünyayı herkes için erişilebilir kılmak. Bu misyon doğrultusunda:

*Turlarımızda engelsiz erişim sağlıyoruz,
*Müzeler ve tarihi mekanlar için erişilebilir çözümler geliştiriyoruz,
*Gerektiğinde refakatçilik ve tıbbi destek sağlıyoruz,
*Her misafirimizin kendini güvende, özgür ve değerli hissetmesi için en küçük detay bile önemli.

Piba Wings Travel olarak vizyonumuz sadece Türkiye'de değil, küresel olarak da erişilebilir turizmin öncüsü olmak. Çünkü inanıyoruz ki: "Her yolculuk herkes için mümkün olmalı."

Piba Wings Travel Acentesi olarak seyahat arkadaşınız olmaktan mutluluk duyarız.

Pınar SİVEREK
Kurucu & CEO
Piba Wings Travel Acentesi`
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section with Photo */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 mb-8">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                {language === 'en' ? 'Founder & Visionary' : 'Kurucu & Vizyoner'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
              {currentContent.title}
            </h1>

            {/* Photo and Info Section */}
            <div className="flex flex-col items-center space-y-8 mb-16">
              {/* Professional Photo */}
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Pınar Siverek - Founder & CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-200/30 animate-pulse"></div>
              </div>

              {/* Name and Title - Vertical Layout */}
              <div className="text-center space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Pınar SİVEREK
                </h2>
                <div className="space-y-2">
                  <p className="text-xl text-blue-600 font-semibold">
                    {language === 'en' ? 'Founder & CEO' : 'Kurucu & CEO'}
                  </p>
                  <p className="text-lg text-gray-600">
                    Piba Wings Travel Agency
                  </p>
                </div>

                {/* Professional Stats */}
                <div className="flex flex-wrap justify-center gap-6 mt-6">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-blue-100">
                    <div className="text-2xl font-bold text-blue-600">24+</div>
                    <div className="text-sm text-gray-600">{language === 'en' ? 'Years Experience' : 'Yıl Deneyim'}</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-orange-100">
                    <div className="text-2xl font-bold text-orange-600">1000+</div>
                    <div className="text-sm text-gray-600">{language === 'en' ? 'Happy Travelers' : 'Mutlu Gezgin'}</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-green-100">
                    <div className="text-2xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-gray-600">{language === 'en' ? 'Accessible Tours' : 'Erişilebilir Tur'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50">
              <div className="text-gray-700 leading-relaxed space-y-8">
                {currentContent.content.split('\n\n').map((paragraph, index) => {
                  // Check if paragraph contains bullet points (both - and *)
                  if (paragraph.includes('- ') || paragraph.includes('*')) {
                    const lines = paragraph.split('\n')
                    const beforeBullets = lines.filter(line => !line.trim().startsWith('- ') && !line.trim().startsWith('*'))
                    const bullets = lines.filter(line => line.trim().startsWith('- ') || line.trim().startsWith('*'))

                    return (
                      <div key={index} className="space-y-6">
                        {beforeBullets.map((line, lineIndex) => (
                          <p key={lineIndex} className="text-lg leading-8 text-gray-700">
                            {line}
                          </p>
                        ))}
                        <div className="bg-blue-50/50 rounded-2xl p-6 border-l-4 border-blue-400">
                          <ul className="space-y-4">
                            {bullets.map((bullet, bulletIndex) => (
                              <li key={bulletIndex} className="text-lg leading-8 flex items-start">
                                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <span className="text-gray-700">{bullet.replace('- ', '').replace('*', '')}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )
                  }

                  // Skip signature lines (they'll be in the quote section)
                  if (paragraph.includes('Pınar SİVEREK') || paragraph.includes('Kurucu & CEO') || paragraph.includes('Founder & CEO')) {
                    return null
                  }

                  return (
                    <p key={index} className="text-lg leading-8 text-gray-700 first-letter:text-4xl first-letter:font-bold first-letter:text-blue-600 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-16 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl">
                <svg className="w-12 h-12 text-blue-400 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <p className="text-2xl md:text-3xl italic text-gray-800 font-medium leading-relaxed mb-8">
                  {language === 'en'
                    ? '"Every journey should be possible for everyone."'
                    : '"Her yolculuk herkes için mümkün olmalı."'
                  }
                </p>

                {/* Signature */}
                <div className="border-t border-gray-200/50 pt-6">
                  <p className="text-lg font-bold text-gray-800 mb-2">
                    Pınar SİVEREK
                  </p>
                  <p className="text-blue-600 font-semibold">
                    {language === 'en' ? 'Founder & CEO' : 'Kurucu & CEO'}
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Piba Wings Travel Agency
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en'
                  ? 'Ready to Start Your Accessible Journey?'
                  : 'Erişilebilir Yolculuğunuza Başlamaya Hazır mısınız?'
                }
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {language === 'en'
                  ? 'Let us be your travel companion and make your dreams come true.'
                  : 'Seyahat arkadaşınız olalım ve hayallerinizi gerçekleştirelim.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {language === 'en' ? 'Contact Us' : 'İletişime Geçin'}
                </a>
                <a
                  href="/tours"
                  className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-blue-600 font-semibold rounded-full border-2 border-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {language === 'en' ? 'View Tours' : 'Turları Görüntüle'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PinarSiverekPage
