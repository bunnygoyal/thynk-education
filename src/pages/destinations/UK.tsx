
import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import { History, GraduationCap, Globe, Clock } from 'lucide-react';

const UK = () => {
  return (
    <PageTemplate 
      title="Study in UK"
      description="The United Kingdom offers prestigious education with centuries of academic tradition, diverse culture, and globally recognized qualifications."
    >
      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Why Choose UK?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <History className="h-6 w-6 text-thynk-600 mr-3" />
                <h3 className="text-lg font-medium text-thynk-600">Academic Heritage</h3>
              </div>
              <p className="text-gray-700">Home to some of the world's oldest and most prestigious universities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <Clock className="h-6 w-6 text-thynk-600 mr-3" />
                <h3 className="text-lg font-medium text-thynk-600">Shorter Programs</h3>
              </div>
              <p className="text-gray-700">Bachelor's degrees typically take 3 years and Master's degrees just 1 year, saving time and money.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <Globe className="h-6 w-6 text-thynk-600 mr-3" />
                <h3 className="text-lg font-medium text-thynk-600">Global Recognition</h3>
              </div>
              <p className="text-gray-700">UK qualifications are recognized and respected worldwide.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Education System in UK</h2>
          <p className="text-gray-700 mb-6">
            The UK education system emphasizes specialized knowledge and in-depth study in the chosen 
            field. Students focus on their subject of interest from the beginning of their degree program.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Undergraduate Study</h3>
              <p className="text-gray-700">3-year Bachelor's degrees (4 years in Scotland) focused on specialization in a specific subject.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Postgraduate Study</h3>
              <p className="text-gray-700">1-year Master's programs offering intensive, specialized education.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Research Degrees</h3>
              <p className="text-gray-700">PhD programs typically taking 3-4 years with focus on original research.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Top Universities in UK</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2 text-thynk-700">University of Oxford</h3>
              <p className="text-gray-700">The oldest university in the English-speaking world with a reputation for academic excellence.</p>
              <div className="mt-3">
                <div className="flex items-center mb-1">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Established in 1096</span>
                </div>
                <div className="flex items-center mb-1">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Collegiate system with 39 colleges</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Strong in humanities, sciences, and medicine</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2 text-thynk-700">University of Cambridge</h3>
              <p className="text-gray-700">Founded in 1209, Cambridge is consistently ranked among the world's top universities.</p>
              <div className="mt-3">
                <div className="flex items-center mb-1">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">31 autonomous colleges</span>
                </div>
                <div className="flex items-center mb-1">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Renowned for mathematics and sciences</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Tutorial-based teaching methods</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2 text-thynk-700">Imperial College London</h3>
              <p className="text-gray-700">Specializing in science, engineering, medicine, and business.</p>
              <div className="mt-3">
                <div className="flex items-center mb-1">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Located in the heart of London</span>
                </div>
                <div className="flex items-center mb-1">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Strong industry connections</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Global reputation for research</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2 text-thynk-700">London School of Economics</h3>
              <p className="text-gray-700">Specializing in social sciences, economics, politics, and law.</p>
              <div className="mt-3">
                <div className="flex items-center mb-1">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Located in central London</span>
                </div>
                <div className="flex items-center mb-1">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Highly international student body</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Exceptional employment prospects</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Admission Requirements</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Undergraduate Requirements</h3>
              <p className="text-gray-700">Strong academic record, A-levels or equivalent, personal statement, and reference letters.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Postgraduate Requirements</h3>
              <p className="text-gray-700">Bachelor's degree with good grades (typically 2:1 or higher), research proposal for PhD, and letters of recommendation.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">English Language Requirements</h3>
              <p className="text-gray-700">IELTS scores typically 6.5-7.5 overall with no component below 6.0-6.5, depending on the program.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Student Visa Information</h2>
          <p className="text-gray-700 mb-6">
            International students need a Student Visa (previously Tier 4) to study in the UK for courses longer than 6 months.
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Visa Requirements</h3>
              <p className="text-gray-700">Confirmation of Acceptance for Studies (CAS) from university, proof of funds, English language proficiency, and tuberculosis test results (for some countries).</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Post-Study Work Options</h3>
              <p className="text-gray-700">Graduate Route visa allows students to stay in the UK and work for 2 years after graduation (3 years for doctoral students).</p>
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default UK;
