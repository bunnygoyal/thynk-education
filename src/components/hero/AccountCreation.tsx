
import React from 'react';
import { Button } from '@/components/ui/button';

interface AccountCreationProps {
  onReset: () => void;
}

const AccountCreation: React.FC<AccountCreationProps> = ({ onReset }) => {
  return (
    <div className="animate-scale-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold text-navy-700">Save Your Results</h2>
        <p className="text-gray-600 mt-2">Create an account to save your eligibility report</p>
      </div>

      <form className="space-y-4">
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thynk-500 focus:border-transparent"
            required
          />
        </div>
        
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thynk-500 focus:border-transparent"
            required
          />
        </div>

        <div className="pt-4">
          <Button 
            className="w-full bg-thynk-500 hover:bg-thynk-600 text-white py-3 rounded-lg transition-colors font-heading font-semibold"
          >
            Create Account & Save Results
          </Button>
        </div>

        <div className="text-center pt-4">
          <Button variant="link" className="text-thynk-500 font-heading" onClick={onReset}>
            Start over
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AccountCreation;
