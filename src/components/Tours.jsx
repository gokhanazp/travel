import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { toursData } from '../data/toursData'

const Tours = () => {
  const { t } = useLanguage()

  // Ana sayfada sadece ilk 4 turu göster
  const tours = toursData.slice(0, 4).map(tour => ({
    id: tour.id,
    slug: tour.slug,
    title: tour.title,
    titleEn: tour.titleEn,
    description: tour.shortDescription,
    descriptionEn: tour.shortDescriptionEn,
    features: tour.features,
    featuresEn: tour.featuresEn,
    duration: tour.duration,
    durationEn: tour.durationEn,
    accessibility: tour.accessibility,
    accessibilityEn: tour.accessibilityEn,
    image: tour.mainImage,
    highlights: tour.highlights,
    highlightsEn: tour.highlightsEn
  }))



  const getAccessibilityColor = (level, language) => {
    const levels = {
      tr: {
        "Tam erişilebilir": "bg-green-100 text-green-800",
        "Çoğunlukla erişilebilir": "bg-yellow-100 text-yellow-800",
        "Kısmi erişilebilir": "bg-orange-100 text-orange-800"
      },
      en: {
        "Fully accessible": "bg-green-100 text-green-800",
        "Mostly accessible": "bg-yellow-100 text-yellow-800",
        "Partially accessible": "bg-orange-100 text-orange-800"
      }
    }
    return levels[language]?.[level] || "bg-gray-100 text-gray-800"
  }

  const { language } = useLanguage()

  return (
    <section id="tours" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-piba-navy mb-6 animate-fade-in-up">
            {t('toursTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {t('toursSubtitle')}
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {tours.map((tour, index) => (
            <div
              key={tour.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up"
              style={{animationDelay: `${0.4 + index * 0.2}s`}}
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.image}
                  alt={language === 'en' ? tour.titleEn : tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${getAccessibilityColor(language === 'en' ? tour.accessibilityEn : tour.accessibility, language)}`}>
                    {language === 'en' ? tour.accessibilityEn : tour.accessibility}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {language === 'en' ? tour.titleEn : tour.title}
                  </h3>
                  <p className="text-piba-yellow font-medium">
                    {t('duration')}: {language === 'en' ? tour.durationEn : tour.duration}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  {language === 'en' ? tour.descriptionEn : tour.description}
                </p>

                {/* Highlights */}
                <div className="mb-8">
                  <h4 className="font-bold text-piba-navy mb-4 text-lg flex items-center">
                    <span className="w-2 h-2 bg-piba-orange rounded-full mr-3"></span>
                    {t('highlights')}:
                  </h4>
                  <ul className="space-y-3">
                    {(language === 'en' ? tour.highlightsEn : tour.highlights).map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <span className="w-5 h-5 bg-gradient-to-r from-piba-yellow to-piba-orange rounded-full mr-3 mt-0.5 flex-shrink-0 flex items-center justify-center">
                          <span className="text-white text-xs">★</span>
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Accessibility Features */}
                <div className="mb-8">
                  <h4 className="font-bold text-piba-navy mb-4 text-lg flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {t('accessibilityFeatures')}:
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {(language === 'en' ? tour.featuresEn : tour.features).map((feature, idx) => (
                      <div key={idx} className="flex items-start text-gray-600">
                        <span className="text-green-500 mr-3 mt-0.5 text-lg">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <Link
                    to={`/tour/${tour.slug}`}
                    className="group relative flex-1 bg-gradient-to-r from-piba-orange to-piba-yellow hover:from-piba-yellow hover:to-piba-orange text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-piba-orange/50 text-center block overflow-hidden"
                  >
                    <span className="relative z-10">
                      {t('viewDetails') || (language === 'en' ? 'View Details' : 'Detayları Gör')}
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </Link>

                  <Link
                    to={`/tour/${tour.slug}#reservation`}
                    className="group relative flex-1 bg-gradient-to-r from-piba-navy to-piba-dark-navy hover:from-piba-dark-navy hover:to-piba-navy text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-piba-navy/50 text-center block overflow-hidden"
                  >
                    <span className="relative z-10">{t('reserveTour')}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-piba-yellow to-piba-orange opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 bg-gradient-to-r from-piba-navy to-piba-dark-navy rounded-3xl p-12 text-white animate-fade-in-up" style={{animationDelay: '1s'}}>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">
              {t('specialNeeds')}
            </h3>
            <p className="text-gray-200 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              {t('specialNeedsText')}
            </p>
            <a
              href="#contact"
              className="group bg-gradient-to-r from-piba-yellow to-piba-orange hover:from-piba-orange hover:to-piba-yellow text-piba-navy font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-piba-yellow/50 inline-block"
              role="button"
            >
              <span className="group-hover:animate-pulse">{t('customTourRequest')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tours
