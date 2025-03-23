
import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import { BookOpen, GraduationCap, DollarSign, Globe } from 'lucide-react';

const Germany = () => {
  return (
    <PageTemplate 
      title="Study in Germany"
      description="Germany offers tuition-free or low-cost education at world-class universities, strong industry connections, and a high quality of life."
    >
      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Why Choose Germany?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <DollarSign className="h-6 w-6 text-thynk-600 mr-3" />
                <h3 className="text-lg font-medium text-thynk-600">Affordable Education</h3>
              </div>
              <p className="text-gray-700">Most public universities offer tuition-free education or charge very low fees compared to other countries.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <GraduationCap className="h-6 w-6 text-thynk-600 mr-3" />
                <h3 className="text-lg font-medium text-thynk-600">Academic Excellence</h3>
              </div>
              <p className="text-gray-700">German universities are known for their high standards and research-oriented education.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <BookOpen className="h-6 w-6 text-thynk-600 mr-3" />
                <h3 className="text-lg font-medium text-thynk-600">English Programs</h3>
              </div>
              <p className="text-gray-700">Growing number of programs taught entirely in English, especially at the graduate level.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">German Education System</h2>
          <p className="text-gray-700 mb-6">
            Germany's education system emphasizes both theoretical knowledge and practical applications. 
            The dual education system combines classroom learning with hands-on experience, preparing students 
            for the workforce.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Universities (Universität)</h3>
              <p className="text-gray-700">Research-oriented institutions offering a wide range of academic programs, strong in theory and research.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Universities of Applied Sciences (Fachhochschulen)</h3>
              <p className="text-gray-700">More practice-oriented, with strong industry connections and focus on applied knowledge.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Dual Study Programs</h3>
              <p className="text-gray-700">Combine academic studies with practical work experience at a company.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Top Universities in Germany</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2 text-thynk-700">Technical University of Munich</h3>
              <p className="text-gray-700">One of Germany's most prestigious technical universities.</p>
              <div className="mt-3">
                <div className="flex items-center mb-1">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Located in Munich, Bavaria</span>
                </div>
                <div className="flex items-center mb-1">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Strong in engineering, natural sciences, and technology</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Many English-taught programs available</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2 text-thynk-700">Heidelberg University</h3>
              <p className="text-gray-700">Germany's oldest university, founded in 1386.</p>
              <div className="mt-3">
                <div className="flex items-center mb-1">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Located in Heidelberg, Baden-Württemberg</span>
                </div>
                <div className="flex items-center mb-1">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Strong in medicine, life sciences, and humanities</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Rich academic tradition and global recognition</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2 text-thynk-700">Humboldt University of Berlin</h3>
              <p className="text-gray-700">One of Berlin's oldest universities, with a rich academic heritage.</p>
              <div className="mt-3">
                <div className="flex items-center mb-1">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Located in central Berlin</span>
                </div>
                <div className="flex items-center mb-1">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Strong in arts, humanities, and social sciences</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Vibrant student life in Germany's capital</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2 text-thynk-700">RWTH Aachen University</h3>
              <p className="text-gray-700">One of Europe's leading science and research institutions.</p>
              <div className="mt-3">
                <div className="flex items-center mb-1">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Located in Aachen, North Rhine-Westphalia</span>
                </div>
                <div className="flex items-center mb-1">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Excellent for engineering and technology</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-thynk-600 mr-2" />
                  <span className="text-gray-700">Strong industry partnerships and research opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Admission Requirements</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Academic Requirements</h3>
              <p className="text-gray-700">A recognized secondary school certificate equivalent to the German Abitur for undergraduate programs, or a bachelor's degree for master's programs.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Language Requirements</h3>
              <p className="text-gray-700">German language proficiency (DSH or TestDaF) for German-taught programs, or English proficiency (IELTS/TOEFL) for English-taught programs.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Studienkolleg</h3>
              <p className="text-gray-700">Some students may need to complete a preparatory course (Studienkolleg) if their education qualifications are not directly recognized.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Student Visa Information</h2>
          <p className="text-gray-700 mb-6">
            International students from non-EU countries need a student visa to study in Germany.
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Visa Requirements</h3>
              <p className="text-gray-700">University admission letter, proof of financial resources (approximately €10,332 per year), health insurance, and passport.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Work Permissions</h3>
              <p className="text-gray-700">Student visa allows you to work 120 full days or 240 half days per year alongside your studies.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Post-Study Options</h3>
              <p className="text-gray-700">Graduates can apply for an 18-month residence permit to search for a job in Germany.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-thynk-700">Cost of Studying in Germany</h2>
          <p className="text-gray-700 mb-6">
            Germany is known for its affordable education compared to many other popular study destinations.
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Tuition Fees</h3>
              <p className="text-gray-700">Public Universities: Most are tuition-free for all students (including international), with only a semester fee of €150-350.<br />
              Private Universities: €10,000-20,000 per year, varying by institution and program.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Living Expenses</h3>
              <p className="text-gray-700">Approximately €861 per month (€10,332 per year) for living expenses, including accommodation, food, transportation, and other necessities.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Health Insurance</h3>
              <p className="text-gray-700">Mandatory health insurance costs approximately €110 per month for students.</p>
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default Germany;
