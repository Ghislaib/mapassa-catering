import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = [
  'rice-plate.png',
  'puff-puffs.png',
  'gallery1.jpg',
  'gallery2.jpg',
  'gallery3.jpg',
  'gallery4.jpg',
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  const slides = images.map((f) => ({
    src: `/img/${f}`,
    title: f.replace(/[-.]/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
  }));

  return (
    <section id="gallery" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Past Work</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.src}
            alt={s.title}
            className="cursor-pointer rounded shadow"
            loading="lazy"
            onClick={() => setIndex(i)}
          />
        ))}
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
