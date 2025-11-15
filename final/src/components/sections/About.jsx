import React from 'react';

export default function About() {
  return (
    <section id="About" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">
          About Milly Accessories
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-6">
          At <span className="font-semibold text-green-600">Milly Accessories</span>, we craft premium accessories
          for your everyday tech needs. From sleek laptop stands and wireless keyboards to protective phone cases and
          charging hubs, our products are designed to elevate your digital experience.
        </p>
        <p className="text-gray-700 text-lg md:text-xl">
          Our mission is simple: provide high-quality, stylish, and functional accessories that help you work smarter,
          travel easier, and enjoy your devices to the fullest.
        </p>

        {/* Updated Image Section */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <img
            src="https://images.unsplash.com/photo-1705508216613-be1715a31212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcCUyMGFjY2Vzb3JpZXN8ZW58MHx8MHx8fDA%3D"
            alt="Laptop Accessories"
            className="rounded-lg shadow-md"
          />


          <img
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80"
            alt="Phone Accessories"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
