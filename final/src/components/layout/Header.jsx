import React from 'react';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-bold text-green-600 mb-3 md:mb-0">
          Milly Accessories
        </h1>

        <nav className="flex space-x-6 text-gray-600 font-medium">
          <a href="#Home" className="hover:text-green-600">Home</a>
          <a href="#About" className="hover:text-green-600">About</a>
          <a href="#Products" className="hover:text-green-600">Products</a>
          <a href="#Contact" className="hover:text-green-600">Contact</a>
        </nav>
      </div>
    </header>
  );
}
