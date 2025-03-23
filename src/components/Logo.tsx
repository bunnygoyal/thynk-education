
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/86d862e8-4100-4262-8514-ddcce96a67f2.png" 
        alt="Thynk Education Logo" 
        className="h-10" 
      />
    </Link>
  );
};

export default Logo;
