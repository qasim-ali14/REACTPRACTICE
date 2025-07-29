// File: Component/PropertyDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

// Property Data
const propertyData = {
  "villa-2": {
    title: "فيلا للبيع بحديقة",
    location: "حي الجزيرة، الرياض",
    price: "١٩٨,٠٠٠ ريال",
    description: (
      <>
        <strong className="text-red-700 text-lg">
          📢 للبيع فيلا ٤٨٤م في حي الجزيره بالرياض
        </strong>
        <br />على شارعين ومن الشارع الثالث مرفق — متكونة من دور أرضي و٤ شقق.
        <br />
        <br />
        <strong className="text-blue-700">🏠 الدور الأرضي:</strong>
        <ul className="list-disc pr-6 mt-2">
          <li>٥ غرف وصالة</li>
          <li>غرفة خادمة</li>
          <li>٣ دورات مياه</li>
          <li>غرفة ماستر</li>
          <li>
            دكة مرتفعة في مقدمة الرجال (إمكانية بناء ملحق خارجي + مظلة للسيارة
            + سواتر على الجدران)
          </li>
          <li>عداد كهرباء مستقل</li>
        </ul>
        <br />
        <strong className="text-blue-700">🏠 الدور الأول:</strong>
        <ul className="list-disc pr-6 mt-2">
          <li>شقتين — كل شقة ٣ غرف + صالة + مطبخ راكب + دورتين مياه</li>
          <li>شقة تشطيب ممتاز + ٤ مكيفات + مطبخ كبير</li>
          <li>شقة تشطيب جيد جدًا + ٢ مكيفات + مطبخ جودة عادية</li>
          <li>عداد كهرباء مستقل يخدم الشقتين + ساعة قراءة</li>
        </ul>
        <br />
        <strong className="text-blue-700">🏠 الدور الثاني:</strong>
        <ul className="list-disc pr-6 mt-2">
          <li>
            شقة تشطيب جيد جدًا — ٣ غرف + ٢ دورات مياه + مطبخ ممتاز + صالة كبيرة
          </li>
          <li>
            شقة جديدة (VIB) — غرفتين (ماستر + غرفة) + صالة بإطلالة رائعة + مطبخ
            مؤثث فخم مع جميع الأجهزة
          </li>
          <li>٣ مكيفات جديدة + جميع الأجهزة على الضمان</li>
        </ul>
        <br />
        <span className="text-green-700 font-bold">
          💰 الدخل السنوي: ١٩٨,٠٠٠ ريال
        </span>
      </>
    ),
    images: [
      "/images/image.jpg",
      "/images/image2.jpg",
      "/images/image3.jpg",
      "/images/image4.jpg",
      "/images/image5.jpg",
    ],
  },
  "villa-3": {
    title: "فيلا حديثة للإيجار",
    location: "حي الرائد، الرياض",
    price: "١٨٠,٠٠٠ ريال / سنوياً",
    description: (
      <>
        <strong className="text-red-700 text-lg">
          🏡 فيلا حديثة للإيجار في حي الرائد
        </strong>
        <br />
        حوش كبير يتسع لأكثر من أربع سيارات + حديقة واسعة + ملحق رجال وملحق
        نساء + مطبخ خارجي + مستودع.
        <br />
        <br />
        <strong className="text-blue-700">🏠 الدور الأول:</strong>
        <ul className="list-disc pr-6 mt-2">
          <li>مجلس كبير</li>
          <li>صالة طعام</li>
          <li>صالة جلوس</li>
          <li>مطبخ</li>
          <li>غرفة لكبار السن</li>
          <li>٣ حمامات</li>
        </ul>
        <br />
        <strong className="text-blue-700">🏠 الدور الثاني:</strong>
        <ul className="list-disc pr-6 mt-2">
          <li>٦ غرف نوم (منها غرفتين ماستر)</li>
          <li>صالة كبيرة + بلكونة</li>
          <li>٤ حمامات</li>
          <li>أوفيز صغير</li>
        </ul>
        <br />
        <strong className="text-blue-700">🏠 الدور العلوي:</strong>
        <ul className="list-disc pr-6 mt-2">
          <li>غرفة خادمة</li>
          <li>غرفة غسيل</li>
          <li>سطح كبير</li>
        </ul>
        <br />
        <span className="text-green-700 font-bold">
          💰 الإيجار السنوي: ١٨٠,٠٠٠ ريال
        </span>
      </>
    ),
    images: [
      "/images/rent1.jpg",
      "/images/rent2.jpg",
      "/images/rent3.jpg",
      "/images/rent4.jpg",
      "/images/rent5.jpg",
    ],
  },
};

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertyData[id];

  if (!property) {
    return (
      <div className="text-center p-8 text-red-600 text-xl">
        ❌ عذرًا، لم يتم العثور على العقار.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 text-right rtl">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      <p className="text-lg mb-2">📍 {property.location}</p>
      <p className="text-xl font-semibold text-green-600 mb-4">
        💰 {property.price}
      </p>

      {/* Description */}
      <div className="mb-6 text-gray-700 leading-relaxed">
        {property.description}
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {property.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`تفاصيل العقار ${index + 1}`}
            className="rounded-xl shadow-md object-cover h-64 w-full"
          />
        ))}
      </div>

      {/* Back Button */}
      <Link
        to="/properties"
        className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        ⬅️ رجوع لقائمة العقارات
      </Link>
    </div>
  );
};

export default PropertyDetails;
