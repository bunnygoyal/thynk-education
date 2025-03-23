
import React from 'react';
import PageTemplate from '@/components/PageTemplate';

const AboutUs = () => {
  return (
    <PageTemplate 
      title="About Us"
      description="Thynk Education is dedicated to helping students achieve their academic ambitions abroad."
    >
      <div className="max-w-3xl">
        <p className="text-lg text-gray-700 mb-6">
          "Education for a world stage" – We at THYNK believe in providing a platform where students can work with eminent admission 
          service experts to transform their abroad education dreams into reality. The comprehensive process includes Profile building 
          suggestions and solutions, Standardized test preparation and guidance, University shortlisting and finalizing, Application 
          assistance and review, Interview preparation, VISA counseling and Pre & Post Departure services.
        </p>
        
        <h2 className="text-2xl font-bold mt-10 mb-4 text-thynk-600">Our Vision</h2>
        <p className="text-lg text-gray-700 mb-8">
          Our vision statement is based on Aiden Wilson Tozer's famous quote: 
          <span className="italic font-medium text-thynk-700 ml-2">
            "Refuse to be average. Let your heart soar as high as it will."
          </span>
        </p>
        <p className="text-lg text-gray-700 mb-8">
          All this is provided under the mentor-ship of industry stalwarts and experienced admission mentors.
        </p>
        
        <h2 className="text-2xl font-bold mt-10 mb-4 text-thynk-600">Our Team</h2>
        <p className="text-lg text-gray-700 mb-8">
          Our team consists of experienced education consultants, many of whom have studied abroad 
          themselves. This personal experience allows them to provide authentic guidance to students 
          navigating their study abroad journey.
        </p>
      </div>
    </PageTemplate>
  );
};

export default AboutUs;
