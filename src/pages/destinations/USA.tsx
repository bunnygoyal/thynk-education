
import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import { GraduationCap, Building, Trophy, DollarSign } from 'lucide-react';

const USA = () => {
  return (
    <PageTemplate 
      title="Study in USA"
      description="The United States offers prestigious universities, diverse programs, and innovative research opportunities, making it the leading destination for international students."
    >
      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Why Choose USA?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <GraduationCap className="h-6 w-6 text-thynk-600 mr-3" />
                <h3 className="text-lg font-medium text-thynk-600">Academic Excellence</h3>
              </div>
              <p className="text-gray-700">Home to many of the world's top-ranked universities with cutting-edge research facilities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <Building className="h-6 w-6 text-thynk-600 mr-3" />
                <h3 className="text-lg font-medium text-thynk-600">Program Diversity</h3>
              </div>
              <p className="text-gray-700">Extensive range of programs and specializations to match any academic interest.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <Trophy className="h-6 w-6 text-thynk-600 mr-3" />
                <h3 className="text-lg font-medium text-thynk-600">Career Opportunities</h3>
              </div>
              <p className="text-gray-700">Strong connections to industries with internship and employment opportunities.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Education System in USA</h2>
          <p className="text-gray-700 mb-6">
            The US education system is known for its flexibility, allowing students to explore various 
            subjects before choosing a major. The system encourages critical thinking, research, and 
            practical application of knowledge.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Bachelor's Degree</h3>
              <p className="text-gray-700">4-year undergraduate programs with a liberal arts foundation and major specialization.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Master's Degree</h3>
              <p className="text-gray-700">1-2 year programs focused on advanced study and specialization in a field.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Doctoral Degree</h3>
              <p className="text-gray-700">3-7 year programs emphasizing original research and contribution to the field.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Admission Requirements</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Academic Requirements</h3>
              <p className="text-gray-700">Strong GPA, standardized test scores (SAT/ACT for undergraduate, GRE/GMAT for graduate).</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">English Proficiency</h3>
              <p className="text-gray-700">TOEFL (minimum 80-100) or IELTS (minimum 6.5-7.0) scores required for non-native English speakers.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Application Components</h3>
              <p className="text-gray-700">Statement of purpose, letters of recommendation, resume/CV, and application essays.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Financial Documentation</h3>
              <p className="text-gray-700">Proof of sufficient funds to cover tuition and living expenses for at least one year.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Cost of Studying in USA</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <DollarSign className="h-6 w-6 text-thynk-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Tuition Fees</h3>
                <p className="text-gray-700">
                  Public Universities: $25,000 - $50,000 per year<br />
                  Private Universities: $35,000 - $80,000 per year
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <DollarSign className="h-6 w-6 text-thynk-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Living Expenses</h3>
                <p className="text-gray-700">$15,000 - $25,000 per year depending on location and lifestyle.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <DollarSign className="h-6 w-6 text-thynk-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Health Insurance</h3>
                <p className="text-gray-700">$1,500 - $2,500 per year for mandatory health insurance.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Scholarship Opportunities</h2>
          <p className="text-gray-700 mb-6">
            Many US universities offer scholarships and financial aid to international students based on 
            academic merit, talent, or financial need. Here are some common types of scholarships:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Merit-Based Scholarships</h3>
              <p className="text-gray-700">Awarded based on academic achievement, typically requiring high GPA and test scores.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Athletic Scholarships</h3>
              <p className="text-gray-700">For students with exceptional athletic abilities who can compete at collegiate level.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">University-Specific Scholarships</h3>
              <p className="text-gray-700">Many universities offer their own scholarship programs for international students.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Fulbright Program</h3>
              <p className="text-gray-700">Prestigious international exchange program sponsored by the U.S. government.</p>
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default USA;
