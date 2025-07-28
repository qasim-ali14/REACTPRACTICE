import React from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Briefcase, Star } from 'lucide-react';

const GoalsVision = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 px-6 text-right font-sans" dir="rtl">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">من نحن - الأهداف والرؤية</h2>
          <p className="text-gray-800 leading-loose mb-4">
            نحن في <span className="font-semibold text-orange-500">مكتب باحث للمستثمر العقاري</span> نؤمن ببناء علاقات طويلة الأمد تقوم على الثقة، الشفافية، والنجاح المشترك. نعمل على تقديم فرص عقارية مميزة سواء للسكن أو الاستثمار عبر فهم دقيق لحركة السوق وخبرة محلية متعمقة.
          </p>
          <p className="text-gray-800 leading-loose">
            هدفنا أن نكون <span className="text-blue-700 font-semibold">الوجهة الأولى</span> لكل من يبحث عن الاستقرار أو العائد الاستثماري من خلال خدمات موثوقة، استشارات مدروسة، ودعم احترافي في كل خطوة.
          </p>

          {/* Services List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition"
              >
                <div className="p-2 bg-orange-100 rounded-full text-orange-600">{item.icon}</div>
                <div className="text-sm font-medium text-gray-700">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <img
            src="/images/image6.jpg"
            alt="Goals & Vision"
            className="rounded-xl shadow-lg object-cover w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

const services = [
  {
    label: 'فرص استثمارية عقارية متميزة',
    icon: <Briefcase size={20} />,
  },
  {
    label: 'تحليلات دقيقة لحركة السوق',
    icon: <Star size={20} />,
  },
  {
    label: 'ربط المشترين بالمستثمرين الفعليين',
    icon: <Users size={20} />,
  },
  {
    label: 'استشارات مخصصة وخدمات موثوقة',
    icon: <Home size={20} />,
  },
];

export default GoalsVision;
