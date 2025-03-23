
import React, { useEffect, ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

interface PageTemplateProps {
  title: string;
  description?: string;
  children: ReactNode;
}

const PageTemplate = ({ title, description, children }: PageTemplateProps) => {
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
            className="max-w-5xl mx-auto"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-thynk-800">{title}</h1>
            {description && (
              <p className="text-lg text-gray-700 mb-12 max-w-3xl">
                {description}
              </p>
            )}
            {children}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageTemplate;
