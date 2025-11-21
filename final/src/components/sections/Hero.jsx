import React from "react";

export default function Hero() {
  return (
    <section 
      className="relative h-[650px] md:h-[750px] lg:h-[850px] bg-cover bg-center"
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=2127&auto=format&fit=crop')` 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full max-w-2xl mx-auto text-center pt-10 md:pt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 drop-shadow-lg">
            Milly Accessories <br />
            <span className="text-white">Upgrade Your Laptop Experience</span>
          </h1>
          
          <p className="text-gray-100 text-lg md:text-xl mb-8 leading-relaxed max-w-lg mx-auto drop-shadow-md">
            High-quality laptop accessories designed to boost productivity, comfort, and style wherever you work.
          </p>

          {/* Button directly under H1 */}
          <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3.5 px-8 rounded shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Shop Now
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-teal-700/95 backdrop-blur-sm rounded-t-xl shadow-2xl">
            <div className="flex flex-wrap md:flex-nowrap justify-around items-center text-white text-center py-6">
              
              {/* Stat 1 */}
              <div className="flex-1 min-w-[120px] p-4">
                <p className="text-3xl font-bold mb-1">5</p>
                <p className="text-sm text-gray-200">Years in Business</p>
              </div>
              
              {/* Divider */}
              <div className="hidden md:block h-12 w-px bg-white/20"></div>

              {/* Stat 2 */}
              <div className="flex-1 min-w-[120px] p-4">
                <p className="text-3xl font-bold mb-1">3</p>
                <p className="text-sm text-gray-200">Countries Shipped</p>
              </div>

              {/* Divider */}
              <div className="hidden md:block h-12 w-px bg-white/20"></div>

              {/* Stat 3 */}
              <div className="flex-1 min-w-[120px] p-4">
                <p className="text-3xl font-bold mb-1">15k+</p>
                <p className="text-sm text-gray-200">Accessories Sold</p>
              </div>

              {/* Divider */}
              <div className="hidden md:block h-12 w-px bg-white/20"></div>

              {/* Stat 4 */}
              <div className="flex-1 min-w-[120px] p-4">
                <p className="text-3xl font-bold mb-1">50+</p>
                <p className="text-sm text-gray-200">Product Variants</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
