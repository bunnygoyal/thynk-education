
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface EligibilityFormProps {
  formData: {
    studyLevel: string;
    destination: string;
    field: string;
    academicScore: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const EligibilityForm: React.FC<EligibilityFormProps> = ({ 
  formData, 
  handleInputChange, 
  handleSubmit 
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold text-navy-700">45-Second Eligibility Check</h2>
        <p className="text-gray-600 mt-2">Get instant university matches based on your profile</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Study Level</label>
          <select
            name="studyLevel"
            value={formData.studyLevel}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thynk-500 focus:border-transparent"
            required
          >
            <option value="">Select Study Level</option>
            <option value="bachelors">Bachelor's Degree</option>
            <option value="masters">Master's Degree</option>
            <option value="phd">PhD</option>
            <option value="diploma">Diploma/Certificate</option>
          </select>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Destination Country</label>
          <select
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thynk-500 focus:border-transparent"
            required
          >
            <option value="">Select Destination</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
            <option value="australia">Australia</option>
            <option value="germany">Germany</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Field of Study</label>
          <select
            name="field"
            value={formData.field}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thynk-500 focus:border-transparent"
            required
          >
            <option value="">Select Field</option>
            <option value="business">Business & Management</option>
            <option value="engineering">Engineering & Technology</option>
            <option value="medicine">Medicine & Health Sciences</option>
            <option value="arts">Arts & Humanities</option>
            <option value="science">Natural Sciences</option>
            <option value="social">Social Sciences</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Academic Score (%)</label>
          <select
            name="academicScore"
            value={formData.academicScore}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thynk-500 focus:border-transparent"
            required
          >
            <option value="">Select Score Range</option>
            <option value="90-100">90-100%</option>
            <option value="80-89">80-89%</option>
            <option value="70-79">70-79%</option>
            <option value="60-69">60-69%</option>
            <option value="below-60">Below 60%</option>
          </select>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-thynk-500 hover:bg-thynk-600 text-white py-6 rounded-lg transition-colors font-heading font-semibold"
        >
          Get Instant Matches
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </form>
    </div>
  );
};

export default EligibilityForm;
