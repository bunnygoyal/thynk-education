
import React, { useState } from 'react';
import EligibilityForm from './EligibilityForm';
import EligibilityResults from './EligibilityResults';
import AccountCreation from './AccountCreation';

const EligibilityCard: React.FC = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    studyLevel: '',
    destination: '',
    field: '',
    academicScore: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const goToNextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    goToNextStep();
  };

  const resetForm = () => {
    setStep(0);
    setFormData({
      studyLevel: '',
      destination: '',
      field: '',
      academicScore: '',
    });
  };

  return (
    <div className="glass rounded-2xl p-1 animate-scale-in animate-delay-200 subtle-shadow">
      <div className="bg-white rounded-xl p-6 sm:p-8">
        {step === 0 && (
          <EligibilityForm 
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        )}

        {step === 1 && (
          <EligibilityResults 
            formData={formData}
            onNext={goToNextStep}
          />
        )}

        {step === 2 && (
          <AccountCreation 
            onReset={resetForm}
          />
        )}
      </div>
    </div>
  );
};

export default EligibilityCard;
