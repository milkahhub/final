import { Check } from "lucide-react";

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* md:grid-cols-2 creates 2 columns on tablets & desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Image */}
          <div className="relative w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww"
              alt="Laptop accessories on a desk"
              className="rounded-lg shadow-sm w-full object-cover h-full min-h-[300px] md:min-h-[400px]"
            />
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Milly Accessories <br className="hidden lg:block" />
              Enhance Your Laptop Experience
            </h2>
            
            <p className="text-gray-600 mb-8 text-base leading-relaxed">
              Milly Accessories provides high-quality laptop accessories to boost your productivity, comfort, and style.
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              
              {/* Item 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-900 text-white">
                    <Check size={14} strokeWidth={3} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Laptop Sleeves & Cases
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Protect your laptop with stylish and durable sleeves that are lightweight and easy to carry.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-900 text-white">
                    <Check size={14} strokeWidth={3} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Keyboards & Mice
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Ergonomic keyboards and precision mice designed to make your work faster, smoother, and more comfortable.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-900 text-white">
                    <Check size={14} strokeWidth={3} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Laptop Stands & Cooling Pads
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Improve your posture and keep your laptop cool during long hours of use.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
