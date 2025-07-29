// File: Component/Herosection.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Herosection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div dir="rtl" className="font-sans">
      {/* Navigation */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 text-base font-medium text-gray-700">
            {[
              { to: "/", label: "الرئيسية" },
              { to: "/goals", label: "من نحن" },
              { to: "/properties", label: "قائمة العقارات" },
              { to: "/contact", label: "اتصل بنا" },
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className="relative group px-3 py-1 rounded-lg transition-all duration-300 hover:bg-red-50 hover:text-red-600"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Always Visible Call Button */}
          <p className="text-green-700 text-xs font-bold">
            اتصل بنا الآن
        </p>
         <a
            href="tel:+966505259019"
            className="bg-green-600 text-white ml-16 px-2 py-1.5 rounded-full shadow hover:bg-green-700 transition text-sm sm:text-base font-medium flex items-center gap-1"
          >
            📞 +٩٦٦ ٥٠ ٥٢٥ ٩٠١٩ 
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-4 pb-4 shadow-inner animate-slideDown space-y-2">
            {[
              { to: "/", label: "الرئيسية" },
              { to: "/goals", label: "من نحن" },
              { to: "/properties", label: "قائمة العقارات" },
              { to: "/contact", label: "اتصل بنا" },
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg px-2 transition"
              >
                {item.label}
              </Link>
            ))}

            {/* Call Button Inside Mobile Menu */}
            <div className="pt-3 border-t border-gray-200">
              <a
                href="tel:+966505259019"
                className="block bg-green-600 text-white text-center px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
              >
                📞 اتصل بنا الآن
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Section Heading */}
      <section className="bg-red-50 py-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-red-700">
          أحدث العقارات المعروضة للبيع
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          اكتشف أحدث الفرص العقارية التي تناسب احتياجاتك
        </p>
      </section>

      {/* Villa Card Heading */}
      <div className="h-5" />
      <div className="relative bg-gradient-to-br from-blue-100 to-white shadow-md rounded-xl p-6 md:p-10 mb-6 overflow-hidden border border-blue-300 text-right">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 drop-shadow-sm">
            🏡 فيلا للبيع
          </h1>
          <p className="text-md md:text-lg text-gray-600 max-w-2xl ml-auto">
            اكتشف الفخامة والراحة والأناقة في فللنا الفاخرة. موقع مثالي وتصميم مميز يناسب أسلوب حياتك.
          </p>
        </div>
        <div className="absolute -bottom-4 -left-4 opacity-10 rotate-12 text-8xl pointer-events-none select-none">
          🏘️
        </div>
      </div>
    </div>
  );
};

export default Herosection;
