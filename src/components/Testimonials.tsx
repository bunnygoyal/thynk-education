
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  university: string;
  country: string;
  image: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    university: "Stanford University",
    country: "USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    content: "Working with Thynk Education transformed my application journey. Their personalized approach and deep knowledge of Stanford's requirements helped me craft the perfect application. They turned an overwhelming process into a structured pathway to success."
  },
  {
    id: 2,
    name: "Michael Chang",
    university: "University of Oxford",
    country: "UK",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    content: "The detailed eligibility assessment from Thynk Education gave me confidence that I was applying to the right programs. Their guidance throughout the visa process was invaluable, and their strategic approach to my application truly made a difference."
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    university: "University of Toronto",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    content: "I was unsure about the financial aspects of studying abroad until I found Thynk Education. Their financial planning services helped me identify scholarships I didn't know existed, making my dream of studying in Canada a reality."
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="section-container py-20">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Real Success <span className="text-gradient">Stories</span>
        </h2>
        <p className="text-lg text-gray-600">
          Hear from students who transformed their education journey with our guidance.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Testimonial Slider */}
        <div className="glass rounded-2xl p-1 overflow-hidden">
          <div className="relative h-full bg-white rounded-xl p-8 md:p-12 overflow-hidden">
            <Quote className="absolute top-6 left-6 h-24 w-24 text-thynk-50 rotate-180" />
            
            <div className="relative z-10">
              <div className="grid md:grid-cols-5 gap-6 md:gap-12 items-center">
                <div className="md:col-span-2 flex flex-col items-center md:items-start">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center md:text-left">
                    <h3 className="font-semibold text-lg text-gray-900">
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className="text-thynk-600 font-medium text-sm mb-1">
                      {testimonials[activeIndex].university}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonials[activeIndex].country}
                    </p>
                  </div>
                </div>
                
                <div className="md:col-span-3">
                  <p className="text-lg text-gray-700 italic leading-relaxed">
                    {testimonials[activeIndex].content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute -bottom-5 right-10 flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300"
            onClick={goToPrev}
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300"
            onClick={goToNext}
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </Button>
        </div>
        
        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-thynk-600 w-6" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <Button 
          size="lg" 
          variant="outline"
          className="border-thynk-200 text-thynk-800 hover:bg-thynk-50"
        >
          Read More Success Stories
        </Button>
      </div>
    </section>
  );
};

export default Testimonials;
