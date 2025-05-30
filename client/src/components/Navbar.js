import { useState } from 'react';
import useScrollSpy from '../hooks/useScrollSpy';

const sections = ['home', 'services', 'gallery', 'testimonials', 'contact'];

export default function Navbar() {
  const active = useScrollSpy(sections, 80);
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50" role="navigation">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="#home" className="flex items-center">
          <img
            src="/img/logo.png"
            alt="Mapassa Catering logo"
            className="h-10"
          />
          <span className="ml-2 font-bold text-xl">Mapassa Catering LLC</span>
        </a>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul
          className={`${
            open ? 'block' : 'hidden'
          } md:flex space-y-2 md:space-y-0 md:space-x-6`}
        >
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block px-2 py-1 hover:text-red-600 ${
                  active === id ? 'text-red-600 font-semibold' : ''
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
