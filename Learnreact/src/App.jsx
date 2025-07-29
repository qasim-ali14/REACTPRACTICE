// File: App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Herosection from "./Component/Herosection";
import Goalvision from "./Component/Goalvision";
import PropertyList from "./Component/PropertyList";
import ContactForm from "./Component/ContactForm";
import PropertyDetails from "./Component/PropertyDetails";

// Floating Back Button Component
const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Show button only if NOT on homepage
  if (location.pathname === "/") return null;

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed bottom-6 left-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-lg transition z-50"
    >
      ⬅ الرجوع
    </button>
  );
};

// Home Page
const Home = () => (
  <>
    <Herosection />

    {/* Carousel Section */}
    <section className="relative">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={5000}
        showStatus={false}
        showIndicators={true}
        swipeable
        emulateTouch
      >
        {[
          "image.jpg",
          "image2.jpg",
          "image3.jpg",
          "image4.jpg",
          "image5.jpg",
          "image6.jpg",
          "image7.jpg",
        ].map((img, idx) => (
          <div key={idx}>
            <img
              src={`/images/${img}`}
              alt={`Slide ${idx + 1}`}
              className="object-cover w-full h-[40vh] sm:h-[60vh] md:h-[80vh]"
              loading="lazy"
            />
          </div>
        ))}
      </Carousel>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white z-20 max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-snug">
          فيلا زاوية مميزة
        </h1>
        <p className="text-sm sm:text-base md:text-xl leading-relaxed">
          فيلا مميزة على ثلاث شوارع تضم ٥ غرف نوم و٤ شقق ومداخل مستقلة وخدمات
          فاخرة. مطابخ راقية، مكيفات، عدادات كهرباء ومياه خاصة، وأسقف بإطلالات
          خلابة. شقة VIB مؤثثة بالكامل بالأجهزة مع ضمان. الدخل السنوي: ١٩٨,٠٠٠
          ريال.
        </p>
      </div>
    </section>

    <Goalvision />
    <PropertyList />
    <ContactForm />
  </>
);

// App with proper navigation routes
const App = () => {
  return (
    <Router>
      <div className="font-sans rtl bg-gray-50 text-gray-800 min-h-screen">
        <BackButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goals" element={<Goalvision />} />
          <Route path="/properties" element={<PropertyList />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
