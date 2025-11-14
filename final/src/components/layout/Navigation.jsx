import React from "react";


export default function Navigation() {
  return (
    <nav className="bg-white md:hidden border-b border-gray-100">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-sm text-gray-600">Menu</div>
        <div className="space-x-3">
          <a href="#about" className="text-xs text-gray-600">About</a>
          <a href="#products" className="text-xs text-gray-600">Products</a>
        </div>
      </div>
    </nav>
  );
}
