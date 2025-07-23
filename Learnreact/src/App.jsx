import { Carousel } from 'react-responsive-carousel';
// File: HomePage.jsx
import React from 'react';
import Herosection from './Component/Herosection';
import Goalvision from './Component/Goalvision';
import PropertyList from './Component/PropertyList';
import ContactForm from './Component/ContactForm';
import videoFile from './assets/vedio.webp';
import vedioFile from './assets/vedio2.webp';
const App = () => {
  return (
    <>
        <Herosection/>
        <section className="relative">
                {/* Carousel Container */}
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
                  {/* Slide 1 - Image */}
                  <div>
                    <img
                      src="/src/assets/image.jpg"
                      alt="Image 1"
                      className="object-cover w-full h-[80vh]"
                    />
                  </div>
        
                 
        
                  {/* Slide 3 - Video */}
                  <div className="relative h-[80vh] bg-black">
                    <video
                      className="object-cover w-full h-full"
                      controls
                      muted
                      poster="/src/assets/image2.jpg"
                    >
                      <source src="/src/assets/vedio.webp" type="video/webp" />
                    </video>
                  </div>
                   {/* Slide 1 - Image */}
                
                   {/* Slide 3 - Video */}
                  <div className="relative h-[80vh] bg-black">
      <video
        className="w-full h-full object-contain" // or object-cover
        controls
        muted
        poster="/src/assets/image6.jpg"
      >
        <source src={videoFile} type="video/webp" />
      </video>
    </div>
                   {/* Slide 1 - Image */}
                  <div>
                    <img
                      src="/src/assets/image4.jpg"
                      alt="Image 1"
                      className="object-cover w-full h-[80vh]"
                    />
                  </div>
                   {/* Slide 1 - Image */}
                  <div>
                    <img
                      src="/src/assets/image5.jpg"
                      alt="Image 1"
                      className="object-cover w-full h-[80vh]"
                    />
                  </div>
                   {/* Slide 1 - Image */}
                  <div>
                    <img
                      src="/src/assets/image6.jpg"
                      alt="Image 1"
                      className="object-cover w-full h-[80vh]"
                    />
                  </div>
                   {/* Slide 1 - Image */}
                  <div>
                    <img
                      src="/src/assets/image7.jpg"
                      alt="Image 1"
                      className="object-cover w-full h-[80vh]"
                    />
                  </div>
                </Carousel>
        
                {/* Overlay Text */}
                <div className="  transform -translate-x-1/2 text-center px-4 text-white z-20 max-w-2xl">
                  <h1 className="text-3xl sm:text-5xl font-bold mb-4">المروة | المتكاملة للمقاولات العامة</h1>
                  <p className="text-lg sm:text-xl">
                    متخصصين في أعمال التشطيبات الداخلية بأفكار ذكية من أكفا المهندسين منذ عام 1996
                  </p>
                </div>
              </section>
              <Goalvision/>
              <PropertyList/>
              <ContactForm/>

    </>
     )
};

export default App;

