import React from 'react';
import { Instagram, Facebook, Twitter, Github, Linkedin } from 'lucide-react';

const footerLinks = [
  {
    title: "Laptop Accessories",
    links: ["Laptop Bags", "Cooling Pads", "USB Hubs", "Laptop Stands"]
  },
  {
    title: "Tech Essentials",
    links: ["External Hard Drives", "Flash Drives", "Webcams", "Headsets"]
  },
  {
    title: "Customer Support",
    links: ["Warranty Services", "Repair Assistance", "Order Tracking"]
  },
  {
    title: "Company",
    links: ["About Us", "Terms & Conditions", "Privacy Policy"]
  },
];

export default function Footer() {
  const darkBg = '#0B6623'; // Deep Green
  const logoText = '#FFFFFF';
  const linkText = '#E8F5E9'; 

  return (
    <footer className="text-gray-200">

      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto py-10 px-6 sm:px-8 lg:px-12" style={{ backgroundColor: darkBg }}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h4 className="text-white text-2xl font-semibold mb-4 md:mb-0">
            Milly Tech Accessories
          </h4>
        </div>
      </div>

      {/* Main Footer Content */}
      <footer
        className="w-full py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: darkBg, color: linkText }}
      >
        <div className="max-w-7xl mx-auto">

          {/* Logo + Socials */}
          <div className="flex flex-col sm:flex-row justify-between items-start mb-10">
            <div className="text-2xl font-semibold mb-8 sm:mb-0" style={{ color: logoText }}>
              Your Trusted Laptop Accessories Store
            </div>

            <div className="flex space-x-3">
              {[Instagram, Facebook, Twitter, Github, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="Social link"
                  className="p-3 rounded-full flex items-center justify-center transition duration-150"
                  style={{ backgroundColor: '#145A32', width: '40px', height: '40px' }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white mb-10 opacity-30"></div>

          {/* Footer Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
            {footerLinks.map((column, colIndex) => (
              <div key={colIndex}>
                <h3 className="text-lg font-bold mb-4" style={{ color: logoText }}>
                  {column.title}
                </h3>

                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-sm hover:text-white transition duration-150">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div
            className="text-center text-sm pt-8"
            style={{ borderTop: '1px solid #145A32' }}
          >
            © 2025 Milly Tech Accessories. All rights reserved.
          </div>

        </div>
      </footer>
    </footer>
  );
}
