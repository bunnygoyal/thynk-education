
import React from 'react';
import PageTemplate from '@/components/PageTemplate';

const AdmissionSupport = () => {
  return (
    <PageTemplate 
      title="Admission Support"
      description="Our comprehensive admission support services guide you through the entire application process, from university selection to acceptance."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-thynk-700">Our Admission Services</h2>
          <p className="text-gray-700 mb-4">
            We provide end-to-end support for your university application process, ensuring that 
            you present the strongest possible application to your chosen institutions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">University Selection</h3>
              <p className="text-gray-700">Guidance on choosing the right universities based on your profile and aspirations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Application Strategy</h3>
              <p className="text-gray-700">Strategic planning to maximize your chances of admission.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Document Preparation</h3>
              <p className="text-gray-700">Assistance with preparing all required application documents.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Application Submission</h3>
              <p className="text-gray-700">Support with completing and submitting applications to multiple universities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Interview Preparation</h3>
              <p className="text-gray-700">Mock interviews and preparation for university interviews.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Admission Follow-up</h3>
              <p className="text-gray-700">Regular follow-ups with universities for application status.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-thynk-700">Our Success Rate</h2>
          <p className="text-gray-700 mb-6">
            With our expert guidance, our students have achieved a 95% success rate in securing 
            admissions to their preferred universities. Our personalized approach ensures that 
            each application stands out from the competition.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3 text-thynk-600">Our Admission Process:</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Initial consultation to understand your goals</li>
              <li>Profile assessment and university shortlisting</li>
              <li>Application strategy development</li>
              <li>Document preparation and review</li>
              <li>Application submission and tracking</li>
              <li>Interview preparation (if required)</li>
              <li>Admission confirmation and next steps</li>
            </ol>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default AdmissionSupport;
