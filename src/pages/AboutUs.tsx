
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
          Thynk Education is dedicated to helping students achieve their academic ambitions abroad. 
          With our team of experienced consultants, we provide comprehensive guidance through every 
          step of the study abroad journey.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Founded with the mission to make quality education accessible, we have helped thousands 
          of students secure admissions in top universities across the globe.
        </p>
        
        <h2 className="text-2xl font-bold mt-10 mb-4 text-thynk-700">Our Vision</h2>
        <p className="text-lg text-gray-700 mb-8">
          To be the most trusted study abroad consultancy, transforming students' lives through 
          educational opportunities and global exposure.
        </p>
        
        <h2 className="text-2xl font-bold mt-10 mb-4 text-thynk-700">Our Team</h2>
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
