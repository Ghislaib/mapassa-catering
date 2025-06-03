import { useState } from 'react';
import useScrollSpy from '../hooks/useScrollSpy';

const sections = ['home', 'services', 'gallery', 'testimonials', 'contact'];

export default function Navbar() {
  const active = useScrollSpy(sections, 80);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center">
          <img
            src="/img/logo.png"
            alt="Mapassa Catering logo"
            className="h-10 w-auto"
          />
          <span className="ml-2 font-bold text-lg sm:text-xl whitespace-nowrap">
            Mapassa Catering LLC
          </span>
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block px-3 py-2 transition-colors duration-200 ${
                  active === id
                    ? 'text-red-600 font-semibold'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="absolute top-4 right-4 text-xl"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          ✕
        </button>
        <ul className="mt-16 p-8 space-y-4">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={toggleMenu}
                className={`block px-3 py-2 transition-colors ${
                  active === id
                    ? 'text-red-600 font-semibold'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
