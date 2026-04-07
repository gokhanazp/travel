import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import ScrollToTop from './components/ScrollToTop'
import UnderConstruction from './components/UnderConstruction'
import HomePage from './pages/HomePage'
import ReservationPage from './pages/ReservationPage'
import AboutPage from './pages/AboutPage'
import PinarSiverekPage from './pages/PinarSiverekPage'
import ContactPage from './pages/ContactPage'
import TourDetailPage from './pages/TourDetailPage'
import ToursPage from './pages/ToursPage'
import VehiclesPage from './pages/VehiclesPage'
import GalleryPage from './pages/GalleryPage'
import PlanYourTripPage from './pages/PlanYourTripPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import BlogPage from './pages/BlogPage'
import BlogDetailPage from './pages/BlogDetailPage'

import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [isUnderConstruction, setIsUnderConstruction] = useState(false)

  useEffect(() => {
    // Preview mode kontrolü
    const isPreviewMode = localStorage.getItem('pibawings_preview')
    if (isPreviewMode === 'true') {
      setIsUnderConstruction(false)
    }
  }, [])

  const handleAuthenticated = () => {
    setIsUnderConstruction(false)
  }

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        {isUnderConstruction ? (
          <UnderConstruction onAuthenticated={handleAuthenticated} />
        ) : (
          <div className="min-h-screen bg-white">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/reservation" element={<ReservationPage />} />
              <Route path="/rezervasyon" element={<ReservationPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/hakkimizda" element={<AboutPage />} />
              <Route path="/pinar-siverek" element={<PinarSiverekPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/iletisim" element={<ContactPage />} />
              <Route path="/tours" element={<ToursPage />} />
              <Route path="/turlar" element={<ToursPage />} />
              <Route path="/vehicles" element={<VehiclesPage />} />
              <Route path="/araclarimiz" element={<VehiclesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/galeri" element={<GalleryPage />} />
              <Route path="/tour/:slug" element={<TourDetailPage />} />
              <Route path="/tours/:slug" element={<TourDetailPage />} />
              <Route path="/tur/:slug" element={<TourDetailPage />} />
              <Route path="/turlar/:slug" element={<TourDetailPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/gizlilik-politikasi" element={<PrivacyPolicyPage />} />
              <Route path="/plan-trip" element={<PlanYourTripPage />} />
              <Route path="/plan-your-trip" element={<PlanYourTripPage />} />
              <Route path="/seyahat-planla" element={<PlanYourTripPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/yazilar" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogDetailPage />} />
              <Route path="/yazilar/:slug" element={<BlogDetailPage />} />
            </Routes>
            <WhatsAppButton />
          </div>
        )}
      </Router>
    </LanguageProvider>
  )
}

export default App