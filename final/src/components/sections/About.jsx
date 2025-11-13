import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="/src/assets/images/about.jpg"
            alt="About Milly Accessorries"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        <div className="md:w-1/2 md:pl-12 text-right">
          <h3 className="text-3xl font-semibold mb-4 text-blue-600">
            We Power Your Laptop Lifestyle
          </h3>
          <p className="text-gray-600 mb-8">
            Our premium quality laptop accessories enhance workflow comfort,
            speed, and productivity. Every product is crafted for modern
            professionals and creators.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>✔ Fast Delivery & 24hr Support</li>
            <li>✔ Ergonomic, sleek designs</li>
            <li>✔ Built for professionals & creators</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
