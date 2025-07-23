import React from 'react';

const properties = [
  {
    id: 1,
    type: 'فلل للإيجار',
    price: '65,000 ريال سعودي',
    title: 'فيلا للإيجار في الرياض',
    location: 'الرياض',
    size: '400 sq Ft',
    image: '/src/assets/image6.jpg',
    status: 'للإيجار',
    phone: '+966500000001',
    email: 'info@realestatesaudi.com',
    whatsapp: '966500000001'
  },
  {
    id: 2,
    type: 'فلل للإيجار',
    price: '65,000 ريال سعودي',
    title: 'فيلا للإيجار في الرياض',
    location: 'الرياض',
    size: '800 sq Ft',
    image: '/src/assets/image4.jpg',
    status: 'للإيجار',
    phone: '+966500000002',
    email: 'info@realestatesaudi.com',
    whatsapp: '966500000002'
  }
];

const PropertyList = () => {
  return (
    <section className="px-4 py-10 text-center font-sans">
      <h2 className="text-3xl font-bold text-blue-900 mb-2">
        Latest Properties For Sale In <span className="text-indigo-600">Saudi</span>.
      </h2>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Real Estate Saudi helps you find a home that suits your budget and lifestyle. From apartments, villas, townhouses to penthouses, we have got you covered!
      </p>

      <div className="mb-6 flex justify-center gap-2">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded">For Sale</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Off Plan</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">For Rent</button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="border rounded-md shadow p-4">
            <div className="relative">
              <img src={property.image} alt={property.title} className="w-full h-60 object-cover rounded-md" />
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                {property.status}
              </span>
            </div>
            <div className="text-left mt-3">
              <p className="text-sm text-gray-600">{property.type}</p>
              <p className="text-orange-500 font-semibold">{property.price}</p>
              <h3 className="text-lg font-semibold text-blue-900">{property.title}</h3>
              <p className="text-sm text-gray-600">{property.location} • {property.size}</p>
            </div>
            <div className="mt-3 flex flex-col sm:flex-row gap-2">
              <a href={`tel:${property.phone}`} className="bg-blue-900 text-white px-3 py-2 rounded w-full text-center">
                📞 Call
              </a>
              <a href={`mailto:${property.email}`} className="bg-blue-900 text-white px-3 py-2 rounded w-full text-center">
                📧 Email
              </a>
              <a
                href={`https://wa.me/${property.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 text-white px-3 py-2 rounded w-full text-center"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 bg-orange-400 text-white px-6 py-2 rounded hover:bg-orange-500">
        Load More
      </button>
    </section>
  );
};

export default PropertyList;
