import React from "react";
import Card from "../common/Card";

export default function Products() {
  const items = [
    { name: "Laptop Stand", img: "/src/assets/images/product1.jpg" },
    { name: "Wireless Keyboard", img: "/src/assets/images/product2.jpg" },
    { name: "Wireless Mouse", img: "/src/assets/images/product3.jpg" },
    { name: "Laptop Sleeve", img: "/src/assets/images/product4.jpg" },
  ];

  return (
    <section id="products" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h3 className="text-3xl font-semibold mb-6 text-blue-600">
          Our Products
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((p, i) => (
            <Card key={i} image={p.img} title={p.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
