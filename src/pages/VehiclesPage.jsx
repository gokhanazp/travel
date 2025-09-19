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

      {/* Vehicles Gallery */}
      <AccessibilityToolsGallery />

      <Footer />
    </div>
  )
}

export default VehiclesPage
