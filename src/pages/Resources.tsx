
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Video, Users, Download } from 'lucide-react';

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="section-container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-thynk-800">Resources</h1>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl">
              Access our comprehensive collection of resources designed to help you navigate the study abroad journey. 
              From application guides to visa preparation, we've got you covered.
            </p>
            
            <Tabs defaultValue="guides" className="mb-10">
              <TabsList className="mb-8">
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="webinars">Webinars</TabsTrigger>
                <TabsTrigger value="stories">Success Stories</TabsTrigger>
                <TabsTrigger value="downloads">Downloads</TabsTrigger>
              </TabsList>
              
              <TabsContent value="guides">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ResourceCard 
                    title="Application Process Guide"
                    description="Step-by-step guidance on preparing a successful university application, from choosing programs to submitting documents."
                    icon={<FileText className="h-8 w-8" />}
                    buttonText="Read Guide"
                  />
                  <ResourceCard 
                    title="SOP Writing Masterclass"
                    description="Learn how to craft a compelling Statement of Purpose that showcases your academic journey and aspirations."
                    icon={<FileText className="h-8 w-8" />}
                    buttonText="Read Guide"
                  />
                  <ResourceCard 
                    title="Scholarship Application Guide"
                    description="Discover strategies for finding and securing scholarships to fund your international education."
                    icon={<FileText className="h-8 w-8" />}
                    buttonText="Read Guide"
                  />
                  <ResourceCard 
                    title="Test Preparation Tips"
                    description="Expert advice on preparing for standardized tests like IELTS, TOEFL, GRE, GMAT, and SAT."
                    icon={<FileText className="h-8 w-8" />}
                    buttonText="Read Guide"
                  />
                  <ResourceCard 
                    title="Visa Interview Preparation"
                    description="Prepare for your student visa interview with sample questions, tips, and common scenarios."
                    icon={<FileText className="h-8 w-8" />}
                    buttonText="Read Guide"
                  />
                  <ResourceCard 
                    title="Financial Planning for Students"
                    description="Strategies for budgeting, managing expenses, and finding part-time work opportunities while studying abroad."
                    icon={<FileText className="h-8 w-8" />}
                    buttonText="Read Guide"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="webinars">
                <div className="grid md:grid-cols-2 gap-6">
                  <ResourceCard 
                    title="Studying in the US: What You Need to Know"
                    description="Learn about the American education system, application timelines, and student life from experts and current students."
                    icon={<Video className="h-8 w-8" />}
                    buttonText="Watch Webinar"
                    date="Recorded on June 15, 2023"
                  />
                  <ResourceCard 
                    title="UK University Applications Demystified"
                    description="Get insider tips on applying to UK universities, including the UCAS system, personal statements, and interviews."
                    icon={<Video className="h-8 w-8" />}
                    buttonText="Watch Webinar"
                    date="Recorded on July 22, 2023"
                  />
                  <ResourceCard 
                    title="Scholarship Opportunities for International Students"
                    description="Explore various scholarship options available for international students and learn strategies to maximize your chances."
                    icon={<Video className="h-8 w-8" />}
                    buttonText="Watch Webinar"
                    date="Recorded on August 10, 2023"
                  />
                  <ResourceCard 
                    title="Mastering the Student Visa Process"
                    description="Detailed walkthrough of student visa applications for popular destinations, with advice from immigration experts."
                    icon={<Video className="h-8 w-8" />}
                    buttonText="Watch Webinar"
                    date="Recorded on September 5, 2023"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="stories">
                <div className="grid md:grid-cols-2 gap-6">
                  <ResourceCard 
                    title="From Mumbai to MIT: Priya's Journey"
                    description="How Priya overcame challenges to secure admission and funding at one of the world's top engineering schools."
                    icon={<Users className="h-8 w-8" />}
                    buttonText="Read Story"
                    image="https://placehold.co/600x200/e2e8f0/475569?text=Student+Success+Story"
                  />
                  <ResourceCard 
                    title="Ahmed's Path to Oxford"
                    description="Ahmed shares his experience applying to Oxford University and adjusting to life in the UK as an international student."
                    icon={<Users className="h-8 w-8" />}
                    buttonText="Read Story"
                    image="https://placehold.co/600x200/e2e8f0/475569?text=Student+Success+Story"
                  />
                  <ResourceCard 
                    title="Securing a Full Scholarship: Maria's Story"
                    description="How Maria prepared her application to win a competitive full scholarship for her Master's degree in Canada."
                    icon={<Users className="h-8 w-8" />}
                    buttonText="Read Story"
                    image="https://placehold.co/600x200/e2e8f0/475569?text=Student+Success+Story"
                  />
                  <ResourceCard 
                    title="From Rejection to Acceptance: Li's Persistence"
                    description="After initial rejections, Li adjusted his strategy and secured multiple admissions offers the following year."
                    icon={<Users className="h-8 w-8" />}
                    buttonText="Read Story"
                    image="https://placehold.co/600x200/e2e8f0/475569?text=Student+Success+Story"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="downloads">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ResourceCard 
                    title="University Application Checklist"
                    description="A comprehensive checklist to ensure you don't miss any important steps in your university application process."
                    icon={<Download className="h-8 w-8" />}
                    buttonText="Download PDF"
                  />
                  <ResourceCard 
                    title="SOP Template & Examples"
                    description="Statement of Purpose templates with annotated successful examples for different fields of study."
                    icon={<Download className="h-8 w-8" />}
                    buttonText="Download PDF"
                  />
                  <ResourceCard 
                    title="Recommendation Letter Guidelines"
                    description="Instructions for your recommenders, with templates and examples of strong recommendation letters."
                    icon={<Download className="h-8 w-8" />}
                    buttonText="Download PDF"
                  />
                  <ResourceCard 
                    title="Study Abroad Budget Planner"
                    description="Excel template to help you plan and manage your finances for studying abroad."
                    icon={<Download className="h-8 w-8" />}
                    buttonText="Download Excel"
                  />
                  <ResourceCard 
                    title="Student Visa Document Checklist"
                    description="Country-specific checklists of required documents for student visa applications."
                    icon={<Download className="h-8 w-8" />}
                    buttonText="Download PDF"
                  />
                  <ResourceCard 
                    title="Pre-Departure Guide"
                    description="Essential information to prepare for departure, including packing lists and first-week survival tips."
                    icon={<Download className="h-8 w-8" />}
                    buttonText="Download PDF"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  date?: string;
  image?: string;
}

const ResourceCard = ({ title, description, icon, buttonText, date, image }: ResourceCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <CardContent className={`p-6 flex flex-col flex-grow ${!image ? 'h-full' : ''}`}>
        <div className="mb-4 text-thynk-600">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-thynk-700">{title}</h3>
        
        {date && (
          <p className="text-sm text-gray-500 mb-3">{date}</p>
        )}
        
        <p className="text-gray-700 mb-6 flex-grow">{description}</p>
        
        <Button className="bg-thynk-600 hover:bg-thynk-700 w-full mt-auto">
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Resources;
