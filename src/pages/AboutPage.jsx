import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import pinarSiverekImg from '../assets/7e00f7a9-eb16-4987-9997-57b62355358f.jpeg';

const AboutPage = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = language === 'en' 
      ? "About Us | Piba Wings Mobility - Accessible Tourism Experts" 
      : "Hakkımızda | Piba Wings Mobility - Erişilebilir Turizm Uzmanları";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'en'
        ? "Learn about Piba Wings Mobility, our 24 years of experience in tourism, and our commitment to providing accessible travel solutions in Turkey for everyone."
        : "Piba Wings Mobility hakkında bilgi edinin. Turizmdeki 24 yıllık tecrübemiz ve herkes için Türkiye'de erişilebilir seyahat çözümleri sunma taahhüdümüz.");
    }
  }, [language]);

  const whyChooseUsItems = [
    {
      title: '24 Years Experience',
      icon: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z',
    },
    {
      title: 'Licensed Guides',
      icon: 'M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z',
    },
    {
      title: 'Fully Accessible Vehicles',
      icon: 'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z',
    },
    {
      title: 'Personalized Service',
      icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
    },
    {
      title: 'Multilingual Support',
      icon: 'M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04z',
    },
    {
      title: '1000+ Happy Guests',
      icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
    },
  ];

  return (
    <div className="bg-white">
      <Header />

      {/* --- Banner Section --- */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url('/about-hero-clear.png')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in-down">
            {language === 'tr' ? 'İstanbul\'da Erişilebilir Seyahat' : 'Accessible Travel in İstanbul'}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            {language === 'tr' ? 'Kişiselleştirilmiş erişilebilir turlar' : 'Personalized accessible tours'}
          </p>
        </div>
      </section>

      {/* --- Main Content Section --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Image */}
            <div className="animate-slide-in-left">
              <img
                src={pinarSiverekImg}
                alt="Pınar Siverek, Founder of Piba Wings"
                className="rounded-3xl shadow-2xl object-cover w-full h-full"
              />
            </div>

            {/* Right Side: Description & Founder Link */}
            <div className="space-y-6 animate-slide-in-right">
              <h2 className="text-3xl font-bold text-gray-900">
                {language === 'tr' ? 'Rehberinizle Tanışın / Kurucumuzla Tanışın' : 'Meet Your Guide / Meet the Founder'}
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  {language === 'tr' 
                    ? 'Pınar Siverek, Türkiye\'de 24 yılı aşkın deneyime sahip profesyonel bir turist rehberidir. Erişilebilir turizme olan derin tutkusuyla kariyerini herkes için kapsayıcı seyahat deneyimleri yaratmaya adamıştır.'
                    : 'Pınar Siverek is a Professional tour guide with over 24 years of experience in Turkey. With a deep passion for accessible tourism, she has dedicated her career to creating inclusive travel experiences for all.'}
                </p>
              </div>
              <div className="pt-4">
                <Link
                  to="/pinar-siverek"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {language === 'tr' ? 'Pınar Hakkında Daha Fazla Bilgi Edinin' : 'Learn More About Pınar'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Why Choose Us Section --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t('whyChooseUs', 'Why Choose Us?')}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {whyChooseUsItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center p-4 group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center mb-4 text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-md font-semibold text-gray-800">{t(`why_choose_us_${index + 1}`, item.title)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t('about_cta', 'Ready to Explore İstanbul without barriers?')}
          </h2>
          <div className="mt-8">
            <Link
              to={language === 'tr' ? '/turlar' : '/tours'}
              className="inline-block px-10 py-4 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {t('viewTours', 'View Our Tours')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
