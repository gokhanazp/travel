import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import { activitiesData } from '../data/activitiesData'

const ActivityCard = ({ activity, language }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
      {/* Card Header */}
      <div className={`bg-gradient-to-r ${activity.color} p-6 relative overflow-hidden`}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-white" />
          <div className="absolute -left-4 -bottom-4 w-16 h-16 rounded-full bg-white" />
        </div>
        <div className="relative flex items-start justify-between">
          <div>
            <span className="text-4xl mb-3 block">{activity.icon}</span>
            <h3 className="text-white font-bold text-xl leading-tight">
              {activity.titleEn}
            </h3>
          </div>
          {/* Duration badge */}
          <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap ml-3 flex-shrink-0 border border-white/30">
            ⏱ {activity.duration}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Short description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          {activity.shortDescEn}
        </p>

        {/* Includes */}
        <div className="mb-5">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-between w-full text-left group/btn"
          >
            <span className="text-sm font-semibold text-gray-800">
              What's Included
            </span>
            <svg
              className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Divider */}
          <div className="h-px bg-gray-100 mt-2 mb-3" />

          {/* Includes list */}
          <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-96' : 'max-h-0'}`}>
            <ul className="space-y-2 pb-2">
              {activity.includesEn.map((item, i) => (
                <li key={i} className="flex items-start text-sm text-gray-600">
                  <svg className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Collapsed preview — show first 2 items */}
          {!expanded && (
            <ul className="space-y-1.5">
              {activity.includesEn.slice(0, 2).map((item, i) => (
                <li key={i} className="flex items-start text-sm text-gray-500">
                  <svg className="w-4 h-4 text-emerald-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
              {activity.includesEn.length > 2 && (
                <li className="text-xs text-gray-400 pl-6">
                  +{activity.includesEn.length - 2} more included
                </li>
              )}
            </ul>
          )}
        </div>

        {/* Accessibility note */}
        <div className={`${activity.bgLight} ${activity.borderColor} border rounded-lg px-4 py-3 mb-5`}>
          <p className="text-xs text-gray-600 flex items-start">
            <span className="mr-2 flex-shrink-0">♿</span>
            {activity.accessibilityNote}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <Link
            to={`/reservation?activity=${activity.id}`}
            className={`w-full bg-gradient-to-r ${activity.color} text-white font-semibold py-3 px-6 rounded-xl text-sm text-center block transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]`}
          >
            Add to My Trip →
          </Link>
        </div>
      </div>
    </div>
  )
}

const OptionalActivitiesPage = () => {
  const { language } = useLanguage()

  useEffect(() => {
    document.title = 'Optional Experiences | Piba Wings Mobility – Accessible Activities in Istanbul'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content',
        'Enrich your accessible trip with unique Istanbul experiences: Turkish Hammam, Cooking Class, Museum Tour, Bosphorus Dinner Cruise, Shopping, and Coffee Workshop.'
      )
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-block bg-orange-500/20 text-orange-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-orange-500/30">
            Optional Experiences
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Enrich Your Journey
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Beyond the tour — discover unique Istanbul experiences designed for comfort, accessibility, and authentic cultural connection.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#activities"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30"
            >
              Explore Experiences
            </a>
            <Link
              to="/reservation"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full border border-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              Plan My Trip
            </Link>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section id="activities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            6 Unique Experiences
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Each activity is carefully arranged with accessibility in mind. Add any experience to your reservation and we'll handle the rest.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activitiesData.map(activity => (
            <ActivityCard key={activity.id} activity={activity} language={language} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Choose an Experience', desc: 'Browse our activities and click "Add to My Trip" on any that interest you.' },
              { step: '02', title: 'Tell Us Your Needs', desc: 'In the reservation form, describe your accessibility requirements and preferences.' },
              { step: '03', title: 'We Handle Everything', desc: 'Our team arranges all accessibility details and confirms your personalized program.' }
            ].map(item => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-500 font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to plan your accessible trip?
          </h2>
          <p className="text-orange-100 mb-8 text-lg">
            Combine any of these experiences with our tours for a fully personalized journey.
          </p>
          <Link
            to="/reservation"
            className="inline-block bg-white text-orange-600 font-bold px-10 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Plan My Trip
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default OptionalActivitiesPage
