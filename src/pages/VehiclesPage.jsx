import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AccessibilityToolsGallery from '../components/AccessibilityToolsGallery'
import { useLanguage } from '../contexts/LanguageContext'

const VehiclesPage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('vehicles')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('vehicleFleetSubtitle')}
          </p>
        </div>
      </div>

      {/* Vehicles Gallery */}
      <AccessibilityToolsGallery />

      <Footer />
    </div>
  )
}

export default VehiclesPage
