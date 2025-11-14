import React from 'react';

/**
 * Section component wraps content with optional background color and padding
 * Props:
 * - bg: background color class (default: 'bg-white')
 * - children: section content
 * - className: additional Tailwind classes
 */
export default function Section({ bg = 'bg-white', children, className = '' }) {
  return (
    <section className={`${bg} py-16 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}
