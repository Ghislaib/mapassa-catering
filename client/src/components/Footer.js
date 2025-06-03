export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + About */}
        <div>
          <img
            src="/img/logo.png"
            alt="Mapassa Catering"
            className="h-12 mb-4"
          />
          <p className="text-sm leading-relaxed">
            Serving unforgettable dishes for weddings, corporate events, and
            private gatherings.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-white transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-white transition">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Get in Touch
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="block">📍 Seattle, WA</span>
            </li>
            <li>
              <a href="tel:+1234567890" className="hover:text-white transition">
                📞 (323)906-7689
              </a>
            </li>
            {/* <li>
              <a href="mailto:info@mapassa.com" className="hover:text-white transition">
                ✉️ info@mapassa.com
              </a>
            </li> */}
            {/* <li className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-white">🌐</a>
              <a href="#" className="hover:text-white">📘</a>
              <a href="#" className="hover:text-white">📸</a>
            </li> */}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Mapassa Catering. All rights reserved.
      </div>
    </footer>
  );
}
