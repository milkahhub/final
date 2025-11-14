import React from 'react';
import Button from '../common/Button';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h2 className="text-5xl font-bold text-green-600 mb-4">Elevate Your Laptop Experience</h2>
        <p className="text-gray-100 mb-6">
          Premium accessories designed for comfort, performance, and style.
          From desks to backpacks — Milly Accessories
        </p>
        <Button text="Shop Now" />
      </div>
    </section>
  );
}
