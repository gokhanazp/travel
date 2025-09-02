import { useLanguage } from '../contexts/LanguageContext'

const TourItinerary = ({ tour }) => {
  const { language } = useLanguage()

  if (!tour || !tour.itinerary) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">
          {language === 'en' ? 'Itinerary not available' : 'Program bilgisi mevcut değil'}
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-piba-navy mb-4">
          {language === 'en' ? 'Tour Itinerary' : 'Tur Programı'}
        </h2>
        <p className="text-xl text-gray-600">
          {language === 'en' 
            ? 'Detailed schedule of your tour experience' 
            : 'Tur deneyiminizin detaylı programı'
          }
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-piba-yellow via-piba-orange to-piba-navy"></div>

        {/* Itinerary items */}
        <div className="space-y-8">
          {tour.itinerary.map((item, index) => (
            <div key={index} className="relative flex items-start">
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-piba-orange to-piba-yellow rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">{item.time}</span>
                </div>
              </div>

              {/* Content */}
              <div className="ml-8 flex-1">
                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-piba-navy mb-2 md:mb-0">
                      {language === 'en' ? item.titleEn : item.title}
                    </h3>
                    <div className="flex items-center text-piba-orange font-semibold">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {item.duration} {language === 'en' ? 'minutes' : 'dakika'}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {language === 'en' ? item.descriptionEn : item.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-6 flex items-center">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-piba-yellow to-piba-orange h-2 rounded-full transition-all duration-500"
                        style={{ width: `${((index + 1) / tour.itinerary.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="ml-4 text-sm font-medium text-gray-500">
                      {index + 1} / {tour.itinerary.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="mt-16 bg-gradient-to-r from-piba-navy to-piba-dark-navy rounded-3xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">
          {language === 'en' ? 'Tour Summary' : 'Tur Özeti'}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-3xl font-bold text-piba-yellow mb-2">
              {tour.itinerary.length}
            </div>
            <p className="text-gray-200">
              {language === 'en' ? 'Stops' : 'Durak'}
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold text-piba-yellow mb-2">
              {tour.itinerary.reduce((total, item) => total + item.duration, 0)}
            </div>
            <p className="text-gray-200">
              {language === 'en' ? 'Total Minutes' : 'Toplam Dakika'}
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold text-piba-yellow mb-2">
              {language === 'en' ? tour.durationEn : tour.duration}
            </div>
            <p className="text-gray-200">
              {language === 'en' ? 'Duration' : 'Süre'}
            </p>
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className="mt-12 bg-yellow-50 border-l-4 border-piba-yellow rounded-lg p-6">
        <div className="flex items-start">
          <svg className="w-6 h-6 text-piba-orange mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <h4 className="font-bold text-piba-navy mb-2">
              {language === 'en' ? 'Important Notes' : 'Önemli Notlar'}
            </h4>
            <ul className="text-gray-700 space-y-1">
              <li>
                {language === 'en' 
                  ? '• Times may vary depending on group needs and accessibility requirements'
                  : '• Saatler grup ihtiyaçlarına ve erişilebilirlik gereksinimlerine göre değişebilir'
                }
              </li>
              <li>
                {language === 'en'
                  ? '• Rest breaks can be added as needed'
                  : '• Gerektiğinde dinlenme molaları eklenebilir'
                }
              </li>
              <li>
                {language === 'en'
                  ? '• Weather conditions may affect outdoor activities'
                  : '• Hava koşulları açık hava etkinliklerini etkileyebilir'
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourItinerary
