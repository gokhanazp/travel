import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AccessibilityToolsGallery from '../components/AccessibilityToolsGallery'
import { useLanguage } from '../contexts/LanguageContext'

const VehiclesPage = () => {
  const { t, language } = useLanguage()

  useEffect(() => {
    document.title = language === 'en' 
      ? "Accessible Vehicles & Rental Equipment | Piba Wings Mobility" 
      : "Erişilebilir Araçlarımız & Ekipman Kiralama | Piba Wings Mobility";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'en'
        ? "Explore our fleet of wheelchair-accessible minivans and our range of rental equipment including manual and electric wheelchairs for your travels in Turkey."
        : "Türkiye seyahatleriniz için tekerlekli sandalye erişimli minivan filomuzu ve manuel/akülü tekerlekli sandalye kiralama hizmetlerimizi keşfedin.");
    }
  }, [language]);

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
