const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gray-900"
      role="banner"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Istanbul skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">

            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-piba-orange/20 backdrop-blur-sm rounded-full border border-piba-orange/30 mb-8">
              <span className="w-2 h-2 bg-piba-orange rounded-full mr-3 animate-pulse"></span>
              <span className="text-piba-orange font-semibold text-sm uppercase tracking-wide">
                Erişilebilir Turizm
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="block mb-2">
                Engelliler İçin
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-piba-yellow via-piba-orange to-piba-yellow">
                Özel Turlar
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Herkes için erişilebilir, güvenli ve unutulmaz İstanbul deneyimleri
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <a
                href="#tours"
                className="group relative bg-gradient-to-r from-piba-orange to-piba-yellow hover:from-piba-yellow hover:to-piba-orange text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-piba-yellow/50 inline-flex items-center justify-center overflow-hidden"
              >
                <span className="relative z-10 mr-3">Turlarımızı İnceleyin</span>
                <svg className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>

              <a
                href="#contact"
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-piba-navy font-bold py-5 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/50 inline-flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                İletişim
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-piba-yellow mb-2">500+</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">
                  Mutlu Müşteri
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-piba-yellow mb-2">100%</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">
                  Erişilebilir
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-piba-yellow mb-2">24/7</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">
                  Destek
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default Hero
