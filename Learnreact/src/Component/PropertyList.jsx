// File: Component/PropertyList.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const properties = [
  {
    id: 'villa-2',
    title: 'فيلا للبيع بحديقة',
    location: 'حي الجزيرة، الرياض',
    area: '٤٨٤م في',
    price: '١٩٨ الف',
    for: 'sale',
    images: [
      '/images/image.jpg',
      '/images/image2.jpg',
      '/images/image3.jpg',
      '/images/image4.jpg',
      '/images/image5.jpg',
    ],
  },
  {
    id: 'villa-3',
    title: 'فيلا حديثة للإيجار',
    location: ' حي الرائد، الرياض',
    area: '1000م في ',
    price: '180,000 ريال/سنوياً',
    for: 'rent',
    images: [
      '/images/rent1.jpg',
      '/images/rent2.jpg',
      '/images/rent3.jpg',
      '/images/rent4.jpg',
      '/images/rent5.jpg',
    ],
  },
];

const PropertyList = () => {
  const [filter, setFilter] = useState('all');

  const filteredProperties =
    filter === 'all' ? properties : properties.filter((p) => p.for === filter);

  return (
    <div className="py-10 bg-gray-50 text-right rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">قائمة العقارات</h2>

        <div className="flex justify-center gap-4 mb-8">
          {['all', 'sale', 'rent'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded ${
                filter === type ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}
            >
              {type === 'all' ? 'الكل' : type === 'sale' ? 'للبيع' : 'للإيجار'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="h-64"
              >
                {property.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={property.title}
                      className="h-64 w-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600">📍 {property.location}</p>
                <p className="text-green-600 font-bold mt-2">💰 {property.price}</p>

                <Link to={`/property/${property.id}`}>
                  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded w-full">
                    تعرف أكثر
                  </button>
                </Link>

                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href="tel:+966505259019"
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-center"
                  >
                    📞 اتصل الآن
                  </a>

                  <a
                    href="mailto:investor143@gmail.com"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-center"
                  >
                    ✉️ أرسل بريد إلكتروني
                  </a>

                  <a
                    href="https://wa.me/966505259019"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-lime-600 hover:bg-lime-700 text-white px-4 py-2 rounded text-center"
                  >
                    💬 تواصل عبر واتساب
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
