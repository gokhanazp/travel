import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const TopBar = () => {
  return (
    <div className="hidden lg:block bg-gray-900 text-white py-2 px-4 text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+90 532 543 36 73</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>info@pibawingsmobility.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span>Follow us:</span>
            <a href="#" className="text-orange-400 hover:text-orange-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-orange-400 hover:text-orange-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" className="text-orange-400 hover:text-orange-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, changeLanguage, t } = useLanguage()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">

          {/* Logo - pibawingsmobility.com */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="pibawingsmobility.com"
              className="h-10 sm:h-12 w-auto"
            />
          </Link>

          {/* Navigation - Havezic Style */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-900 hover:text-orange-500 transition-colors duration-300 font-medium text-base relative group">
              {t('home')}
            </Link>
            <Link to="/tours" className="text-gray-900 hover:text-orange-500 transition-colors duration-300 font-medium text-base relative group">
              {t('tours')}
            </Link>

            <Link to="/gallery" className="text-gray-900 hover:text-orange-500 transition-colors duration-300 font-medium text-base">
              {t('gallery')}
            </Link>
            <Link to="/about" className="text-gray-900 hover:text-orange-500 transition-colors duration-300 font-medium text-base">
              {t('about')}
            </Link>
            <Link to="/contact" className="text-gray-900 hover:text-orange-500 transition-colors duration-300 font-medium text-base">
              {t('contact')}
            </Link>
          </nav>

          {/* Right Side - Language & Book Now */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('tr')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'tr'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                TR
              </button>
            </div>

            <Link
              to="/reservation"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm"
            >
              {t('bookNow')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Mobile Language Switcher */}
            <div className="flex items-center space-x-1 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 min-w-[36px] ${
                  language === 'en'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('tr')}
                className={`px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 min-w-[36px] ${
                  language === 'tr'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                TR
              </button>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500 transition-colors p-2 rounded-lg hover:bg-orange-50"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-25 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* Menu Content */}
            <div className="lg:hidden py-4 border-t border-gray-200 bg-white shadow-lg relative z-50 animate-slide-down">
            <div className="space-y-2">
              <Link
                to="/"
                className="block px-4 py-4 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link
                to="/tours"
                className="block px-4 py-4 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('tours')}
              </Link>
              <Link
                to="/gallery"
                className="block px-4 py-4 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('gallery')}
              </Link>
              <Link
                to="/about"
                className="block px-4 py-4 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-4 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('contact')}
              </Link>

              {/* Mobile Contact Info */}
              <div className="px-4 py-2 border-t border-gray-100 mt-4">
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+905325433673" className="hover:text-orange-500">+90 532 543 36 73</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@pibawingsmobility.com" className="hover:text-orange-500 break-all">info@pibawingsmobility.com</a>
                  </div>
                </div>
              </div>

              {/* Mobile Book Now Button */}
              <div className="px-4 pt-4">
                <Link
                  to="/reservation"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-medium block text-center shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('bookNow')}
                </Link>
              </div>
            </div>
            </div>
          </>
        )}
      </div>
    </header>
  )
}

const Header = () => {
  return (
    <>
      <TopBar />
      <MainHeader />
    </>
  )
}

export default Header
