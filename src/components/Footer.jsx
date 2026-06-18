import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import pibaMainLogo from '../assets/pibalogo-300x279.webp'

const Footer = () => {
  const { language, t } = useLanguage()
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900 text-white py-16">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Information */}
          <div className="lg:col-span-2">
            <div className="mb-6 space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <img
                    src={pibaMainLogo}
                    alt="Piba Wings Main Logo"
                    className="h-10 md:h-12 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8 max-w-md text-sm md:text-base">
              {t('footerDescription')}
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="mt-1 bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-gray-300 text-sm">
                  <div className="font-semibold text-white mb-1">Office</div>
                  <div>Ataköy 7-8-9-10. Kısım Çobançeşme</div>
                  <div>E5 Yanyol Caddesi A No: 22/1 217</div>
                  <div>Bakırköy – İSTANBUL</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="mt-1 bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-gray-300 text-sm">
                  <div className="font-semibold text-white mb-1">Direct Contact</div>
                  <div>Pınar SİVEREK</div>
                  <div className="text-gray-400 mb-1">
                    {language === 'tr' ? 'Kurucu & Lisanslı Tur Rehberi' : 'Founder & Licensed Tour Guide'}
                  </div>
                  <div className="hover:text-white transition-colors">📱 +90 532 543 36 73</div>
                  <a
                    href="mailto:pinar@pibawingstravel.com"
                    className="text-orange-400 hover:text-orange-300 transition-colors break-all"
                  >
                    pinar@pibawingstravel.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="mt-1 bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-gray-300 text-sm">
                   <div className="font-semibold text-white mb-1">Email</div>
                   <span className="hover:text-white transition-colors cursor-pointer">info@pibawingstravel.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links + Social Media (stacked) */}
          <div className="space-y-10">

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">{t('footerQuickLinks')}</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>{t('footerHome')}</span>
              </Link></li>
              <li><Link to={language === 'tr' ? "/turlar" : "/tours"} className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>{t('footerOurTours')}</span>
              </Link></li>
              <li><Link to={language === 'tr' ? "/yazilar" : "/blog"} className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <span>{t('blog')}</span>
              </Link></li>
              <li><Link to={language === 'tr' ? "/hakkimizda" : "/about"} className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{language === 'tr' ? 'Hakkımızda' : 'About Us'}</span>
              </Link></li>
              <li><Link to={language === 'tr' ? "/iletisim" : "/contact"} className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{language === 'tr' ? 'İletişim' : 'Contact Us'}</span>
              </Link></li>
            </ul>
          </div>

          {/* Social Media and Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">{t('footerFollowUs')}</h4>

            <div className="space-y-4 mb-6">
              <p className="text-gray-300 text-sm">
                {t('footerSocialMedia')}
              </p>
              
              {/* Sosyal Medya */}
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/pibawingsmobility" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="https://wa.me/905325433673" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z"/>
                  </svg>
                </a>
              </div>

              {/* TÜRSAB Accreditation */}
              <div className="pt-2">
                <a
                  href="https://www.tursab.org.tr/tr/ddsv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg inline-block transition-transform hover:scale-105"
                >
                  <img
                    src="/tursab-dds-17842.webp"
                    alt="TÜRSAB Dijital Doğrulama Sistemi"
                    className="h-14 md:h-16 w-auto object-contain"
                    loading="lazy"
                  />
                </a>
                <div className="text-[10px] md:text-xs text-gray-400 leading-tight mt-2">
                  <p>{language === 'tr' ? 'Yaptırdığınız turlar TÜRSAB güvencesindedir.' : 'We are a registered travel agency'}</p>
                  <p>{language === 'tr' ? 'Belge No: 17842' : 'under TURSAB (License No. 17842)'}</p>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Why Choose Us & Founder */}
          <div>
            <h4 className="text-xl font-bold mb-6">{language === 'tr' ? 'Neden Biz?' : 'Why Choose Us'}</h4>
            <ul className="space-y-3 mb-6">
              {(language === 'tr'
                ? ['24 Yıllık Deneyim', 'A Grubu Lisanslı Acente', 'Erişilebilir Araçlar', 'Kişiye Özel Erişilebilir Turlar', 'Doğrudan İletişim']
                : ['24 Years Experience', 'Licensed A Group Agency', 'Accessible Vehicles', 'Personalized Accessible Tours', 'Direct Contact']
              ).map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm flex flex-col items-center md:items-start gap-1">
              <span>{t('footerCopyright')}</span>
              <a 
                href="https://www.gokhan-yildirim.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-white transition-colors"
              >
                {language === 'tr' ? 'Yazılım & Tasarım' : 'Developed by'}
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-6 text-sm">
                <Link to={language === 'tr' ? "/gizlilik-politikasi" : "/privacy-policy"} className="text-gray-300 hover:text-white transition-colors duration-300">
                  {t('footerPrivacyPolicy')}
                </Link>
                <Link to={language === 'tr' ? "/hizmet-sartlari" : "/terms-of-service"} className="text-gray-300 hover:text-white transition-colors duration-300">
                  {t('footerTermsOfService')}
                </Link>
                <Link to={language === 'tr' ? "/odeme-politikasi" : "/payment-policy"} className="text-gray-300 hover:text-white transition-colors duration-300">
                  {language === 'tr' ? 'Ödeme & İptal' : 'Payment Policy'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
