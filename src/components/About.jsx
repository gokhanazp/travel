import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-piba-navy mb-6 animate-fade-in-up">
            {t('aboutTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {t('aboutSubtitle')}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h3 className="text-3xl font-bold text-piba-navy mb-8 flex items-center">
              <span className="w-3 h-3 bg-piba-orange rounded-full mr-4"></span>
              {t('ourMission')}
            </h3>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              {t('missionText')}
            </p>

            <h3 className="text-3xl font-bold text-piba-navy mb-8 flex items-center">
              <span className="w-3 h-3 bg-piba-orange rounded-full mr-4"></span>
              {t('whyChooseUs')}
            </h3>

            <div className="space-y-6">
              <div className="group flex items-start p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-piba-orange to-piba-yellow rounded-full flex items-center justify-center mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-piba-navy mb-2 text-lg">{t('expertTeam')}</h4>
                  <p className="text-gray-600 leading-relaxed">{t('expertTeamDesc')}</p>
                </div>
              </div>

              <div className="group flex items-start p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-piba-orange to-piba-yellow rounded-full flex items-center justify-center mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-piba-navy mb-2 text-lg">{t('accessibleVehiclesTitle')}</h4>
                  <p className="text-gray-600 leading-relaxed">{t('accessibleVehiclesDescLong')}</p>
                </div>
              </div>

              <div className="group flex items-start p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-piba-orange to-piba-yellow rounded-full flex items-center justify-center mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-piba-navy mb-2 text-lg">{t('personalizedService')}</h4>
                  <p className="text-gray-600 leading-relaxed">{t('personalizedServiceDesc')}</p>
                </div>
              </div>

              <div className="group flex items-start p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-piba-orange to-piba-yellow rounded-full flex items-center justify-center mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-piba-navy mb-2 text-lg">{t('safetyFirst')}</h4>
                  <p className="text-gray-600 leading-relaxed">{t('safetyFirstDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats/Features */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-piba-yellow to-piba-orange opacity-10 rounded-full -translate-y-16 translate-x-16"></div>

              <h3 className="text-3xl font-bold text-piba-navy mb-10 text-center">
                Hizmet Özelliklerimiz
              </h3>

              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="text-center group">
                  <div className="text-5xl font-bold bg-gradient-to-r from-piba-orange to-piba-yellow bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <p className="text-gray-600 font-semibold">Erişilebilir Rotalar</p>
                </div>

                <div className="text-center group">
                  <div className="text-5xl font-bold bg-gradient-to-r from-piba-orange to-piba-yellow bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <p className="text-gray-600 font-semibold">Destek Hizmeti</p>
                </div>

                <div className="text-center group">
                  <div className="text-5xl font-bold bg-gradient-to-r from-piba-orange to-piba-yellow bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">5+</div>
                  <p className="text-gray-600 font-semibold">Yıllık Deneyim</p>
                </div>

                <div className="text-center group">
                  <div className="text-5xl font-bold bg-gradient-to-r from-piba-orange to-piba-yellow bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <p className="text-gray-600 font-semibold">Mutlu Misafir</p>
                </div>
              </div>

              <div className="relative p-8 bg-gradient-to-r from-piba-navy to-piba-dark-navy rounded-2xl text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-piba-yellow to-piba-orange opacity-10"></div>
                <p className="text-white font-bold text-xl relative z-10 leading-relaxed">
                  "Herkesin güzel anılar biriktirme hakkı vardır"
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-piba-yellow to-piba-orange"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
