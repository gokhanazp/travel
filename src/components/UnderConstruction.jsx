import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const UnderConstruction = ({ onAuthenticated }) => {
  const { language, toggleLanguage } = useLanguage()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // Basit şifre kontrolü (production'da daha güvenli olmalı)
  const ADMIN_PASSWORD = 'pibawings2024'

  const content = {
    en: {
      title: 'PibaWings Mobility',
      subtitle: 'Accessible Tourism Solutions',
      comingSoon: 'Coming Soon...',
      contact: 'For information and early bookings:',
      email: 'info@pibawingstravel.com',
      phone: '+90 212 XXX XX XX',
      passwordLabel: 'Access Password',
      passwordPlaceholder: 'Enter password to preview',
      loginButton: 'Preview Site',
      errorMessage: 'Incorrect password. Please try again.'
    },
    tr: {
      title: 'PibaWings Mobility',
      subtitle: 'Erişilebilir Turizm Çözümleri',
      comingSoon: 'Çok Yakında...',
      contact: 'Bilgi ve erken rezervasyon için:',
      email: 'info@pibawingstravel.com',
      phone: '+90 212 XXX XX XX',
      passwordLabel: 'Erişim Şifresi',
      passwordPlaceholder: 'Önizleme için şifre girin',
      loginButton: 'Siteyi Önizle',
      errorMessage: 'Yanlış şifre. Lütfen tekrar deneyin.'
    }
  }

  const currentContent = content[language]

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setError('')
      // Authenticated durumunu localStorage'a kaydet
      localStorage.setItem('pibawings_preview', 'true')
      // Parent component'e bildir
      onAuthenticated()
    } else {
      setError(currentContent.errorMessage)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center px-4">
      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="fixed top-4 right-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-gray-700 hover:text-orange-600"
      >
        {language === 'en' ? '🇹🇷 TR' : '🇬🇧 EN'}
      </button>

      <div className="max-w-4xl mx-auto text-center">
        {/* Logo/Title */}
        <div className="mb-8">
          <div className="mb-6">
            <img
              src="/pibawingsmobility-logo.png"
              alt="pibawingsmobility.com"
              className="h-16 md:h-20 lg:h-24 w-auto max-w-[300px] mx-auto object-contain"
              loading="eager"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h1>
          <p className="text-xl md:text-2xl text-orange-600 font-semibold">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Construction Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-orange-100 rounded-full mb-6">
            <svg className="w-16 h-16 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {currentContent.comingSoon}
          </h2>
        </div>



        {/* Contact Info */}
        <div className="mb-6 text-center">
          <p className="text-gray-600 mb-2">
            📧 {currentContent.email}
          </p>
          <p className="text-gray-600 mb-6">
            📞 {currentContent.phone}
          </p>
        </div>

        {/* Password Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-sm mx-auto">
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {currentContent.passwordLabel}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={currentContent.passwordPlaceholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {currentContent.loginButton}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UnderConstruction
