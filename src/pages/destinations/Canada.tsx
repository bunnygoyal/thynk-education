
import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, GraduationCap, Building, MapPin, DollarSign } from 'lucide-react';

const Canada = () => {
  return (
    <PageTemplate 
      title="Study in Canada"
      description="Canada offers world-class education, diverse culture, and excellent post-graduation work opportunities, making it a top destination for international students."
    >
      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Why Choose Canada?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <GraduationCap className="h-6 w-6 text-thynk-600 mr-3" />
                <h3 className="text-lg font-medium text-thynk-600">World-Class Education</h3>
              </div>
              <p className="text-gray-700">Canadian universities are known for their excellence and high standards in education.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <Building className="h-6 w-6 text-thynk-600 mr-3" />
                <h3 className="text-lg font-medium text-thynk-600">Work Opportunities</h3>
              </div>
              <p className="text-gray-700">Post-graduation work permits allow students to gain valuable Canadian work experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <MapPin className="h-6 w-6 text-thynk-600 mr-3" />
                <h3 className="text-lg font-medium text-thynk-600">Quality of Life</h3>
              </div>
              <p className="text-gray-700">Canada consistently ranks among the top countries for quality of life and safety.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Education System in Canada</h2>
          <p className="text-gray-700 mb-6">
            Canada's education system is known for its high standards and diverse program offerings. 
            Universities and colleges offer a wide range of programs at undergraduate, postgraduate, 
            and doctoral levels.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Undergraduate Programs</h3>
              <p className="text-gray-700">4-year Bachelor's degrees with options for co-op programs and internships.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Postgraduate Programs</h3>
              <p className="text-gray-700">1-2 year Master's programs with research and coursework options.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Doctoral Programs</h3>
              <p className="text-gray-700">4-6 year PhD programs with strong research focus and funding opportunities.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Top Universities in Canada</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-thynk-700">University of Toronto</h3>
                <p className="text-gray-700 mb-4">One of Canada's top research universities, known for its diverse programs and research impact.</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Ranked among the top 30 universities worldwide</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Over 700 undergraduate programs</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Located in Toronto, Canada's largest city</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-thynk-700">University of British Columbia</h3>
                <p className="text-gray-700 mb-4">A leading research university known for its innovation and global perspective.</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Consistently ranked among the top 40 universities globally</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Beautiful campus in Vancouver</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Strong in research and sustainability</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-thynk-700">McGill University</h3>
                <p className="text-gray-700 mb-4">Founded in 1821, McGill is one of Canada's oldest and most prestigious universities.</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Located in Montreal, a bilingual and culturally rich city</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Strong in medicine, law, and engineering</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Diverse international student community</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-thynk-700">University of Alberta</h3>
                <p className="text-gray-700 mb-4">A leading research-intensive university with a reputation for excellence.</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Located in Edmonton, Alberta</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Strong in engineering, science, and business</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Excellent research facilities and funding</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Admission Requirements</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Academic Requirements</h3>
              <p className="text-gray-700">Strong academic record with minimum GPA requirements varying by institution.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Language Proficiency</h3>
              <p className="text-gray-700">IELTS (minimum 6.5) or TOEFL (minimum 90) scores demonstrating English proficiency.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Financial Requirements</h3>
              <p className="text-gray-700">Proof of sufficient funds to cover tuition and living expenses.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Additional Requirements</h3>
              <p className="text-gray-700">Letters of recommendation, statement of purpose, and other program-specific requirements.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Cost of Studying in Canada</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <DollarSign className="h-6 w-6 text-thynk-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Tuition Fees</h3>
                <p className="text-gray-700">Undergraduate: CAD 15,000 - 35,000 per year<br />
                Postgraduate: CAD 18,000 - 40,000 per year</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <DollarSign className="h-6 w-6 text-thynk-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Living Expenses</h3>
                <p className="text-gray-700">Approximately CAD 12,000 - 18,000 per year including accommodation, food, transportation, and other essentials.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <DollarSign className="h-6 w-6 text-thynk-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Health Insurance</h3>
                <p className="text-gray-700">Approximately CAD 600 - 900 per year for mandatory health insurance.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default Canada;
