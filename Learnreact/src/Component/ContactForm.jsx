import React from 'react';

const ContactForm = () => {
  return (
    <section
      dir="rtl"
      className="relative py-12 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url('https://via.placeholder.com/1500x700')` }}
    >
      <div className="bg-black/60 absolute inset-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
        {/* Contact Info */}
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-2">
            هل ترغب في الشراء أو البيع أو التواصل؟ تحدث معنا!
          </h2>
          <p className="mb-2">📞 <span className="font-semibold">+٩٦٦ ٥٠ ٥٢٥ ٩٠١٩</span></p>
          <p>✉️ <span className="font-semibold">investor143@gmail.com</span></p>
        </div>

        {/* Contact Form */}
        <form className="bg-white rounded-xl p-6 shadow-md w-full">
          <h3 className="text-xl font-bold text-orange-500 mb-4">تواصل معنا</h3>

          <input
            className="border px-4 py-2 mb-3 w-full rounded text-right"
            placeholder="الاسم الكامل"
            required
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              className="border px-4 py-2 w-full rounded text-right"
              placeholder="البريد الإلكتروني"
              type="email"
              required
            />
            <input
              className="border px-4 py-2 w-full rounded text-right"
              placeholder="رقم الهاتف"
              required
            />
          </div>

          <select
            className="border px-4 py-2 mt-3 mb-3 w-full rounded text-right"
            required
          >
            <option value="">هل أنت مهتم بالاستثمار في العقارات السعودية؟</option>
            <option>نعم</option>
            <option>لا</option>
            <option>ربما</option>
          </select>

          <textarea
            className="border px-4 py-2 w-full rounded mb-3 text-right"
            rows="4"
            placeholder="رسالتك"
          ></textarea>

          <button className="bg-orange-400 text-white px-6 py-2 rounded hover:bg-orange-500 w-full">
            إرسال الطلب
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
