import React from "react";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Elevate Your Laptop Experience
        </h2>
        <p className="text-gray-600 mb-6">
          Premium accessories designed for comfort, performance, and style.
          From stands to backpacks — Ramm Technologies has you covered.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Shop Now
        </button>
      </div>
      <div className="mt-10">
        <img
          src="/src/assets/images/hero.jpg"
          alt="Laptop workspace"
          className="mx-auto rounded-2xl shadow-lg w-full max-w-3xl"
        />
      </div>
    </section>
  );
}
