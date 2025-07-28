// File: App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Herosection from './Component/Herosection';
import Goalvision from './Component/Goalvision';
import PropertyList from './Component/PropertyList';
import ContactForm from './Component/ContactForm';
import PropertyDetails from './Component/PropertyDetails';

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
        <div>
          <img
            src="/images/image.jpg"
            alt="Slide 1"
            className="object-cover w-full h-[80vh]"
            loading="lazy"
          />
        </div>
        <div className="relative h-[80vh] bg-black">
          <video
            className="w-full h-full object-cover"
            controls
            muted
            poster="/images/image2.jpg"
            preload="metadata"
          >
            <source src="/vedios/vedio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative h-[80vh] bg-black">
          <video
            className="w-full h-full object-cover"
            controls
            muted
            poster="/images/image6.jpg"
            preload="metadata"
          >
            <source src="/vedios/vedio2.webp" type="video/webp" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <img
            src="/images/image4.jpg"
            alt="Slide 4"
            className="object-cover w-full h-[80vh]"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src="/images/image5.jpg"
            alt="Slide 5"
            className="object-cover w-full h-[80vh]"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src="/images/image6.jpg"
            alt="Slide 6"
            className="object-cover w-full h-[80vh]"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src="/images/image7.jpg"
            alt="Slide 7"
            className="object-cover w-full h-[80vh]"
            loading="lazy"
          />
        </div>
      </Carousel>

      {/* Overlay Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 text-white z-20 max-w-2xl">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
فيلا زاوية مميزة        </h1>
        <p className="text-lg sm:text-xl">

فيلا مميزة على ثلاث شوارع تضم ٥ غرف نوم و٤ شقق ومداخل مستقلة وخدمات فاخرة.
مطابخ راقية، مكيفات، عدادات كهرباء ومياه خاصة، وأسقف بإطلالات خلابة.
شقة VIB مؤثثة بالكامل بالأجهزة مع ضمان. الدخل السنوي: ١٩٨,٠٠٠ ريال.

        </p>
      </div>
    </section>

    <Goalvision />
    <PropertyList />
    <ContactForm />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="font-sans rtl bg-gray-50 text-gray-800 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<PropertyDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
