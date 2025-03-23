
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

const AboutUs = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="section-container">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-thynk-800">About Us</h1>
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
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
