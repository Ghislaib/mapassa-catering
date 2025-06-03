export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center scroll-mt-20"
    >
      {/* Background and Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/img/hero.jpg)',
          filter: 'brightness(0.6)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Authentic African Cuisine
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-lg mx-auto">
          Bringing rich flavors to your special occasions.
        </p>

        {/* Call-to-Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-primary-dark transition"
          >
            Get Free Quote
          </a>
          <a
            href="#gallery"
            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition"
          >
            View Our Work
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center gap-6 mt-8 justify-center text-white">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 7h3v2H9V7z M7 3v6h5V3H7zm3 12H9v-3H7v6H3V9h6v1h3v-1h4v6h-3v1H7v-4h2v1zm2 0h2v5h-2v-5z" />
            </svg>
            <span>Quality Guaranteed</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 1C5.58 1 2 4.58 2 9s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4 11H6v-2h8v2z" />
            </svg>
            <span>Fresh Local Ingredients</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 4v1H2v11c0 1.1.9 2 2 2h16v-2H4V6h2zm4 2V6.5c.22-.15.48-.5.48-.5H18v1H10zm0 8h7v2h-7v-2z" />
            </svg>
            <span>Personalized Service</span>
          </div>
        </div>
      </div>
    </section>
  );
}
