
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface EligibilityResultsProps {
  formData: {
    destination: string;
  };
  onNext: () => void;
}

const EligibilityResults: React.FC<EligibilityResultsProps> = ({ formData, onNext }) => {
  return (
    <div className="animate-scale-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold text-navy-700">Your Eligibility Results</h2>
        <p className="text-gray-600 mt-2">Based on your profile information</p>
      </div>

      <div className="space-y-6">
        <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex items-center gap-3">
          <div className="bg-green-500 rounded-full p-1">
            <CheckCircle className="h-5 w-5 text-white" />
          </div>
          <p className="text-green-800 font-medium">You're eligible for 42 universities in {formData.destination}</p>
        </div>

        <div className="space-y-4">
          <h3 className="font-heading font-semibold text-gray-900">Top University Matches</h3>
          
          {[
            { name: "Massachusetts Institute of Technology", match: 92 },
            { name: "Stanford University", match: 88 },
            { name: "University of California, Berkeley", match: 85 },
          ].map((uni, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="font-medium">{uni.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Match</span>
                <span className="px-2 py-1 bg-teal-100 text-teal-800 rounded-md font-medium text-sm">
                  {uni.match}%
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <Button
            onClick={onNext} 
            className="w-full bg-thynk-500 hover:bg-thynk-600 text-white py-3 rounded-lg transition-colors font-heading font-semibold"
          >
            View Detailed Report
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EligibilityResults;
