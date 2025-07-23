import React from 'react';

const ContactForm = () => {
  return (
    <section className="relative py-12 px-4 bg-cover bg-center" style={{ backgroundImage: `url('https://via.placeholder.com/1500x700')` }}>
      <div className="bg-black/60 absolute inset-0"></div>
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-2">Looking To Buy, Sell, Or Just Say Hello? Let’s Talk!</h2>
          <p className="mb-2">📞 +966 5449726**</p>
          <p>✉️ info@realestatesaudi.com</p>
        </div>
        <form className="bg-white rounded-xl p-6 shadow-md w-full">
          <h3 className="text-xl font-bold text-orange-500 mb-4">Contact Us</h3>
          <input className="border px-4 py-2 mb-3 w-full rounded" placeholder="Full Name" required />
          <div className="grid grid-cols-2 gap-3">
            <input className="border px-4 py-2 w-full rounded" placeholder="Email Address" type="email" required />
            <input className="border px-4 py-2 w-full rounded" placeholder="Phone Number" required />
          </div>
          <select className="border px-4 py-2 mt-3 mb-3 w-full rounded" required>
            <option value="">Are you interested in investing in Saudi Property?</option>
            <option>Yes</option>
            <option>No</option>
            <option>Maybe</option>
          </select>
          <textarea className="border px-4 py-2 w-full rounded mb-3" rows="4" placeholder="Your Message"></textarea>
          <button className="bg-orange-400 text-white px-6 py-2 rounded hover:bg-orange-500 w-full">
            Send Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
