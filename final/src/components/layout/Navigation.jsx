import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white md:hidden border-b border-gray-100 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-green-600">Menu</h2>

        {/* Hamburger Icon */}
        <button onClick={() => setOpen(!open)} className="text-2xl text-gray-700">
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 
        ${open ? "max-h-40" : "max-h-0"}`}
      >
        <div className="flex flex-col space-y-3 px-4 pb-4 text-gray-700 font-medium">
          <a href="#Home" className="hover:text-green-600">Home</a>
          <a href="#About" className="hover:text-green-600">About</a>
          <a href="#newsletter" className="hover:text-green-600">Newsletter</a>
          <a href="#Products" className="hover:text-green-600">Products</a>
          <a href="#Contact" className="hover:text-green-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}
