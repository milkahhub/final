import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Products from "./components/sections/Products";
import Testimonials from "./components/sections/Testimonials";
import Newsletter from "./components/sections/Newsletter";

export default function App() {
  return (
    <div className="font-sans scroll-smooth bg-gray-50 text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
