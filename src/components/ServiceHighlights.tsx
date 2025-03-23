
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  CheckCircle, 
  BookOpen, 
  FileText, 
  GraduationCap, 
  Plane, 
  DollarSign, 
  Award, 
  Compass 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
}

const ServiceCard = ({ title, description, icon, color, delay }: ServiceCardProps) => (
  <div 
    className={cn(
      "glass rounded-xl p-6 hover:shadow-md transition-all duration-300 animate-fade-up",
      `animate-delay-${delay}`,
      "group hover:translate-y-[-5px]"
    )}
  >
    <div className={cn("p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4", color)}>
      {icon}
    </div>
    <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServiceHighlights = () => {
  const services = [
    {
      title: "Eligibility Assessment",
      description: "Get instant feedback on your eligibility for top universities worldwide.",
      icon: <CheckCircle className="text-white h-6 w-6" />,
      color: "bg-thynk-500",
      delay: 100
    },
    {
      title: "University Selection",
      description: "Personalized university recommendations based on your profile and preferences.",
      icon: <GraduationCap className="text-white h-6 w-6" />,
      color: "bg-teal-500",
      delay: 200
    },
    {
      title: "Application Support",
      description: "End-to-end assistance with university applications and documentation.",
      icon: <FileText className="text-white h-6 w-6" />,
      color: "bg-navy-500",
      delay: 300
    },
    {
      title: "Test Preparation",
      description: "Expert guidance for IELTS, TOEFL, GRE, GMAT, and other standardized tests.",
      icon: <BookOpen className="text-white h-6 w-6" />,
      color: "bg-thynk-500",
      delay: 100
    },
    {
      title: "Visa Assistance",
      description: "Comprehensive support for student visa applications and interviews.",
      icon: <Compass className="text-white h-6 w-6" />,
      color: "bg-teal-500",
      delay: 200
    },
    {
      title: "Pre-Departure Guidance",
      description: "Essential information and support before you depart for your studies abroad.",
      icon: <Plane className="text-white h-6 w-6" />,
      color: "bg-navy-500",
      delay: 300
    },
    {
      title: "Scholarship Guidance",
      description: "Identifying and applying for relevant scholarships and financial aid.",
      icon: <Award className="text-white h-6 w-6" />,
      color: "bg-gold-500",
      delay: 100
    },
    {
      title: "Financial Planning",
      description: "Comprehensive financial planning for your entire education journey.",
      icon: <DollarSign className="text-white h-6 w-6" />,
      color: "bg-gold-600",
      delay: 200
    },
  ];

  return (
    <section className="section-container py-20" id="services">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Comprehensive Services for Your <span className="text-gradient">Education Journey</span>
        </h2>
        <p className="text-lg text-gray-600">
          From university selection to pre-departure guidance, we provide end-to-end support tailored to your unique educational path.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button 
          size="lg" 
          className="bg-thynk-500 hover:bg-thynk-600 text-white font-heading font-semibold"
        >
          Explore All Services
        </Button>
      </div>
    </section>
  );
};

export default ServiceHighlights;
