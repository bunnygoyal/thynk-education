
import React from 'react';
import PageTemplate from '@/components/PageTemplate';

const EligibilityAssessment = () => {
  return (
    <PageTemplate 
      title="Eligibility Assessment"
      description="Our comprehensive eligibility assessment helps you understand your chances of admission to your desired programs and universities."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-thynk-700">How It Works</h2>
          <p className="text-gray-700 mb-4">
            Our eligibility assessment process evaluates your academic background, test scores, 
            and other relevant qualifications to determine your eligibility for specific programs
            and universities.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3 text-thynk-600">The Assessment Process:</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Complete our detailed assessment form</li>
              <li>Upload your academic documents</li>
              <li>Schedule a consultation with our experts</li>
              <li>Receive a comprehensive eligibility report</li>
              <li>Get personalized recommendations based on your profile</li>
            </ol>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-thynk-700">Why Choose Our Assessment</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Expert Evaluation</h3>
              <p className="text-gray-700">Assessment conducted by experienced consultants who understand university requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Realistic Chances</h3>
              <p className="text-gray-700">Honest evaluation of your admission chances based on historical data.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Personalized Options</h3>
              <p className="text-gray-700">Suggestions tailored to your academic background and career goals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-2 text-thynk-600">Comprehensive Report</h3>
              <p className="text-gray-700">Detailed report with actionable steps to improve your application.</p>
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default EligibilityAssessment;
