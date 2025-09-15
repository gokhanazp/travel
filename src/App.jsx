import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import ScrollToTop from './components/ScrollToTop'
import UnderConstruction from './components/UnderConstruction'
import HomePage from './pages/HomePage'
import ReservationPage from './pages/ReservationPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import TourDetailPage from './pages/TourDetailPage'
import ToursPage from './pages/ToursPage'
import GalleryPage from './pages/GalleryPage'

function App() {
  const [isUnderConstruction, setIsUnderConstruction] = useState(true)

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
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/tours" element={<ToursPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/galeri" element={<GalleryPage />} />
              <Route path="/tour/:slug" element={<TourDetailPage />} />
              <Route path="/tours/:slug" element={<TourDetailPage />} />
            </Routes>
          </div>
        )}
      </Router>
    </LanguageProvider>
  )
}

export default App