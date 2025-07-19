import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = [
  'rice-plate.png',
  'puff-puff.png',
  'rice-and-beans.png',
  'mandazi.png',
  'yellow-rice.png',
  'chicken.png',
  'beans.png',
  'sambusa.png',
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  const slides = images.map((filename) => ({
    src: `/img/${filename}`,
    title: filename
      .replace(/[-_]/g, ' ')
      .replace(/\.\w+$/, '')
      .replace(/\b\w/g, (char) => char.toUpperCase()),
  }));

  return (
    <section id="gallery" className="py-20 scroll-mt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-14">
          Our Past Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-xl group"
            >
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                loading="lazy"
                onClick={() => setIndex(i)}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm p-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {slide.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Lightbox
        open={index >= 0}
        slides={slides}
        index={index}
        close={() => setIndex(-1)}
      />
    </section>
  );
}
