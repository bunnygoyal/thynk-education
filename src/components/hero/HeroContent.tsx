
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroContent: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-up">
      <div className="space-y-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-balance">
          <span className="text-navy-700">Certainty</span> in Your <span className="text-gradient">Global Education</span> Journey
        </h1>
        <p className="text-xl text-gray-600 pt-4 max-w-xl">
          Transforming uncertainty into a personalized, inevitable path forward within the first interaction.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 pt-2">
        <Button size="lg" className="bg-thynk-500 hover:bg-thynk-600 text-white font-heading font-semibold transition-colors">
          See Your Personalized Path
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button size="lg" variant="outline" className="border-thynk-200 text-thynk-800 hover:bg-thynk-50 font-heading font-semibold">
          Explore Universities
        </Button>
      </div>

      <div className="flex flex-wrap gap-6 pt-6">
        {['USA', 'UK', 'Canada', 'Australia', 'Germany'].map((country) => (
          <div key={country} className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-teal-500" />
            <span className="text-gray-700">{country}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;
