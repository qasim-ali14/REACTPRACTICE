import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Herosection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div dir="rtl" className="font-sans">
      {/* Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Contact Info */}
          

          {/* Navigation Links */}
          <div className="hidden md:flex flex-wrap gap-4 text-sm font-medium text-gray-700">
            <a href="/src/Component/Herosection.jsx" className="hover:text-red-500 transition">الرئيسية</a>
            <a href="/src/Component/Goalvision.jsx" className="hover:text-red-500 transition">من نحن</a>
            <a href="/src/Component/Goalvision.jsx" className="font-bold text-red-600 hover:text-red-700 transition">الخدمات</a>
            <a href="/src/Component/PropertyList.jsx" className="font-bold text-red-600 hover:text-red-700 transition">قائمة العقارات</a>
                      <a href="./ContactForm.jsx" className="hover:text-red-500 transition">اتصل بنا</a>

          </div>
          <div className=" md:flex items-center gap-2 text-sm">
            <span className="text-gray-600">تواصل معنا:</span>
            <br />
            <a
              href="tel:+966312423523"
              className="bg-green-600 text-white px-3  rounded hover:bg-green-700 transition"
            >
              📞 +٩٦٦ ٥٠ ٥٢٥ ٩٠١٩
            </a>
          </div>

          {/* Hamburger */}
          <button onClick={toggleMenu} className="md:hidden text-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 text-sm text-gray-700 space-y-2">
            <div className="flex flex-col gap-2">
              <a href="/src/Component/Herosection.jsx" className="hover:text-red-500">الرئيسية</a>
              <a href="/src/Component/Goalvision.jsx" className="hover:text-red-500">من نحن</a>
                            <a href="/src/Component/Goalvision.jsx" className="hover:text-red-500">الخدمات</a>
              <a href="/src/Component/PropertyList.jsx" className="font-bold text-red-600 hover:text-red-700">قائمة العقارات</a>
                            <a href="/src/Component/ContactForm.jsx" className="hover:text-red-500">اتصل بنا</a>

              <div className="pt-2 border-t border-gray-200">
                <span className="text-gray-600">تواصل معنا:</span>
                <a
                  href="tel:+966312423523"
                  className="block mt-1 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  📞 +٩٦٦ ٥٠ ٥٢٥ ٩٠١٩
                </a>
              </div>
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

  {/* أيقونة زخرفية في الخلفية */}
  <div className="absolute -bottom-4 -left-4 opacity-10 rotate-12 text-8xl pointer-events-none select-none">
    🏘️
  </div>
</div>
    </div>
  );
};

export default Herosection;
