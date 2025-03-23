
import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import { Sun, GraduationCap, Briefcase, Globe } from 'lucide-react';

const Australia = () => {
  return (
    <PageTemplate 
      title="Study in Australia"
      description="Australia offers world-class education, a relaxed lifestyle, post-study work opportunities, and a welcoming environment for international students."
    >
      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Why Choose Australia?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <GraduationCap className="h-6 w-6 text-thynk-600 mr-3" />
                <h3 className="text-lg font-medium text-thynk-600">Quality Education</h3>
              </div>
              <p className="text-gray-700">Australian universities are known for their research-focused approach and high academic standards.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <Sun className="h-6 w-6 text-thynk-600 mr-3" />
                <h3 className="text-lg font-medium text-thynk-600">Lifestyle & Safety</h3>
              </div>
              <p className="text-gray-700">High quality of life, safe environment, and beautiful natural surroundings.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <Briefcase className="h-6 w-6 text-thynk-600 mr-3" />
                <h3 className="text-lg font-medium text-thynk-600">Work Opportunities</h3>
              </div>
              <p className="text-gray-700">Work rights during study and post-study work visas for graduates.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Australian Education System</h2>
          <p className="text-gray-700 mb-6">
            Australia's education system is known for its innovative approach and focus on practical skills. 
            The Australian Qualifications Framework (AQF) ensures that qualifications are nationally consistent 
            and recognized worldwide.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Bachelor's Degrees</h3>
              <p className="text-gray-700">3-4 year undergraduate programs with options for honours year.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Master's Degrees</h3>
              <p className="text-gray-700">1-2 year postgraduate programs with coursework or research options.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Doctoral Degrees</h3>
              <p className="text-gray-700">3-4 year research-based programs leading to a PhD.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Top Universities in Australia</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2 text-thynk-700">University of Melbourne</h3>
              <p className="text-gray-700">Australia's second-oldest university and a leading research institution.</p>
              <div className="mt-3">
                <div className="flex items-center mb-1">
                  <Globe className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Located in Melbourne, Victoria</span>
                </div>
                <div className="flex items-center mb-1">
                  <Globe className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Ranked among top 40 universities globally</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Strong in medicine, arts, and sciences</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2 text-thynk-700">University of Sydney</h3>
              <p className="text-gray-700">Australia's first university, established in 1850.</p>
              <div className="mt-3">
                <div className="flex items-center mb-1">
                  <Globe className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Located in Sydney, New South Wales</span>
                </div>
                <div className="flex items-center mb-1">
                  <Globe className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Sandstone campus with rich history</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Excellent programs in business, engineering, and health</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2 text-thynk-700">Australian National University</h3>
              <p className="text-gray-700">Australia's only national university, with a focus on research.</p>
              <div className="mt-3">
                <div className="flex items-center mb-1">
                  <Globe className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Located in Canberra, ACT</span>
                </div>
                <div className="flex items-center mb-1">
                  <Globe className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Highest ranked Australian university</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Strong in law, politics, and international relations</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2 text-thynk-700">University of Queensland</h3>
              <p className="text-gray-700">A member of the prestigious Group of Eight universities.</p>
              <div className="mt-3">
                <div className="flex items-center mb-1">
                  <Globe className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Located in Brisbane, Queensland</span>
                </div>
                <div className="flex items-center mb-1">
                  <Globe className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Beautiful riverside campus</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Exceptional science and research facilities</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Student Visa Information</h2>
          <p className="text-gray-700 mb-6">
            International students need a Student Visa (Subclass 500) to study in Australia. This visa allows you 
            to stay in Australia for the duration of your course and work part-time.
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Visa Requirements</h3>
              <p className="text-gray-700">Confirmation of Enrollment (CoE), Genuine Temporary Entrant (GTE) statement, financial capacity proof, health insurance, and English proficiency.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Work Rights During Study</h3>
              <p className="text-gray-700">Students can work up to 48 hours per fortnight when their course is in session, and unlimited hours during scheduled course breaks.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Post-Study Work Visa</h3>
              <p className="text-gray-700">Temporary Graduate Visa (Subclass 485) allows graduates to work in Australia for 2-4 years, depending on the level of qualification.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Cost of Studying in Australia</h2>
          <p className="text-gray-700 mb-6">
            Australia offers high-quality education, but it's important to plan for the associated costs.
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Tuition Fees</h3>
              <p className="text-gray-700">Bachelor's Degree: AUD 20,000 - 45,000 per year<br />
              Master's Degree: AUD 22,000 - 50,000 per year<br />
              Doctoral Degree: AUD 18,000 - 42,000 per year</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Living Expenses</h3>
              <p className="text-gray-700">Approximately AUD 21,000 per year for living expenses, including accommodation, food, and transportation.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Health Insurance</h3>
              <p className="text-gray-700">Overseas Student Health Cover (OSHC) is mandatory, costing approximately AUD 500-700 per year.</p>
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default Australia;
