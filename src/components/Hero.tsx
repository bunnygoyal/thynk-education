
import React from 'react';
import HeroContent from './hero/HeroContent';
import EligibilityCard from './hero/EligibilityCard';
import TrustedBy from './hero/TrustedBy';

const Hero = () => {
  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-40 right-0 w-96 h-96 bg-thynk-100 rounded-full filter blur-3xl opacity-40" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-teal-50 rounded-full filter blur-3xl opacity-30" />
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-10 items-center pt-20">
        {/* Hero Content */}
        <HeroContent />

        {/* Eligibility Assessment Card */}
        <EligibilityCard />
      </div>

      {/* Trusted By */}
      <TrustedBy />
    </section>
  );
};

export default Hero;
