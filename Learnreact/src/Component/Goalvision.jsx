import React from 'react';

const GoalsVision = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-white text-right font-sans">
      {/* Image Section */}
        <div>
                    <img
                      src="/src/assets/image3.jpg"
                      alt="Image 1"
                      className="object-cover w-full h-[80vh]"
                    />
                  </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 md:pl-12">
        <h2 className="text-red-600 text-2xl font-bold mb-4">الأهداف والرؤية</h2>
        <p className="mb-4 leading-loose text-gray-800">
          نحن في مكتب باحث للمستثمر العقاري نؤمن ببناء علاقات طويلة الأمد مع المستثمرين، المشترين، والبائعين، تقوم على أسس من الثقة والشفافية والنجاح المشترك. نعمل على تقديم فرص عقارية مميزة ومناسبة لمختلف الاحتياجات سواء للسكن أو للاستثمار،د.


        </p>
        <p className="leading-loose text-gray-800"> وذلك من خلال فهم دقيق لحركة السوق العقاري في المملكة وخبرة محلية متعمقة. نسعى لربط البائعين الجادين بالمشترين والمستثمرين، وتوفير حلول متكاملة لتسهيل عمليات البيع والشراء بكل مصداقية واحترافية. رؤيتنا أن نكون الوجهة الأولى لكل من يبحث عن الاستقرار أو العائد الاستثماري في السوق العقاري السعودي، من خلال خدمات موثوقة وعلاقات قائمة على الالتزام والجودة على المدى البعي
          </p>
      </div>
    </div>
  );
};

export default GoalsVision;
