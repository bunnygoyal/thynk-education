
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceHighlights from '@/components/ServiceHighlights';
import UniversityExplorer from '@/components/UniversityExplorer';
import Testimonials from '@/components/Testimonials';
import ConsultationBooking from '@/components/ConsultationBooking';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ServiceHighlights />
        <UniversityExplorer />
        <Testimonials />
        <ConsultationBooking />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
