import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Features from './components/sections/Features';
import Products from './components/sections/Products';
import Testimonials from './components/sections/Testimonials';
import Newsletter from './components/sections/Newsletter';
import Section from './components/common/Section';

export default function App() {
  return (
    <div className="font-sans scroll-smooth bg-gray-50 text-gray-900">
      {/* Header */}
      <Header />

      {/* Hero Section (full background image) */}
      <Hero />

      {/* About Section */}
      <Section bg="bg-white" id="about">
        <About />
      </Section>

      {/* Features Section */}
      <Section bg="bg-gray-50">
        <Features textAlign="right" />
      </Section>

      {/* Products Section */}
      <Section bg="bg-gray-100" id="products">
        <Products />
      </Section>

      {/* Testimonials Section */}
      <Section bg="bg-white">
        <Testimonials />
      </Section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
}
