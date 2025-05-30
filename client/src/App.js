import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <ServicesSection />
        <Gallery />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
