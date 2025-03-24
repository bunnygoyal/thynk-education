
import React from 'react';

const TrustedBy: React.FC = () => {
  return (
    <div className="section-container pt-16 pb-8">
      <p className="text-center text-sm text-gray-500 uppercase tracking-wider mb-8 font-heading">Trusted by students accepted to</p>
      <div className="flex flex-wrap justify-center gap-12 opacity-70">
        {['Harvard', 'Stanford', 'MIT', 'Oxford', 'Cambridge', 'ETH Zurich'].map((uni) => (
          <div key={uni} className="text-xl font-heading font-medium text-navy-700">
            {uni}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
