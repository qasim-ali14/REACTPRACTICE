// File: Component/PropertyDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const propertyData = {
  'villa-2': {
    title: 'فيلا فاخرة للإيجار',
    location: 'الرياض، السعودية',
    price: '198,000 ريال سنوياً',
    description: 'فيلا واسعة ومجهزة بالكامل، مع مسبح وحديقة خاصة.',
    images: [
      '/images/image4.jpg',
      '/images/image5.jpg',
      '/images/image6.jpg',
    ],
  },
   'villa-3': {
    title: 'فيلا فاخرة للإيجار',
    location: 'الرياض، السعودية',
    price: '180,000 ريال سنوياً',
    description: 'فيلا واسعة ومجهزة بالكامل، مع مسبح وحديقة خاصة.',
    images: [
      '/images/image4.jpg',
      '/images/image5.jpg',
      '/images/image6.jpg',
    ],
  },
  // You can add more entries like 'villa-2', 'villa-3'...
};

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertyData[id];

  if (!property) {
    return <div className="text-center p-8 text-red-600 text-xl">عذرًا، لم يتم العثور على العقار.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 text-right rtl">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      <p className="text-lg mb-2">📍 {property.location}</p>
      <p className="text-xl font-semibold text-green-600 mb-4">💰 {property.price}</p>
      <p className="mb-6">{property.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {property.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`تفاصيل العقار ${index + 1}`}
            className="rounded-xl shadow-md object-cover h-64 w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyDetails;
