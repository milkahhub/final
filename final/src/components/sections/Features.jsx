import React from 'react';

const features = [
  {
    title: 'Fast Delivery',
    description: 'Get your accessories quickly with our 24hr delivery system.',
  },
  {
    title: 'Smart Designs',
    description: 'Ergonomically built for performance, portability, and comfort.',
  },
  {
    title: 'Professional Quality',
    description: 'Built with precision tools used by professional studios.',
  },
];

export default function Features({ textAlign = 'left' }) {

  const alignClass = textAlign === 'right' ? 'text-right' : 'text-left';

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`p-6 bg-gray-50 rounded-xl shadow ${alignClass}`}
        >
          <h4 className="font-bold mb-2 text-green-600">{feature.title}</h4>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
