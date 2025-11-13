import React from "react";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-3 md:mb-0">
          Milly Accessorries
        </h1>
        <nav className="flex space-x-6 text-gray-600 font-medium">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#products" className="hover:text-blue-600">Products</a>
          <a href="#testimonials" className="hover:text-blue-600">Reviews</a>
          <a href="#newsletter" className="hover:text-blue-600">Newsletter</a>
        </nav>
      </div>
    </header>
  );
}
