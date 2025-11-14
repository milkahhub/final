import React from 'react';

export default function Newsletter() {
  return (
    <section id="newsletter" className="bg-green-600 text-white py-16 text-center">
      <h3 className="text-3xl font-semibold mb-4">Get unlimmited discounts everytime you shop</h3>
      <p className="mb-6 text-green-100">Join our newsletter for exclusive deals, updates, and offers.</p>
      <form className="flex justify-center gap-3 max-w-md mx-auto">
        <input type="email" placeholder="Enter your email" className="px-4 py-3 w-2/3 rounded-lg text-gray-900 focus:outline-none" />
        <button className="bg-green-700 text-white font-semibold px-4 py-3 rounded-lg hover:bg-green-800 transition">Shop Now</button>
      </form>
    </section>
  );
}
