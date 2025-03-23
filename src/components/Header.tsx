
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Globe, 
  GraduationCap, 
  FileText, 
  Menu, 
  X,
  ChevronDown 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 lg:px-8',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-thynk-800">
            Thynk <span className="text-thynk-600">Education</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <NavItem href="/" label="Home" />
          <NavItem href="/about" label="About Us" />
          <NavItemWithDropdown 
            label="Services" 
            items={[
              { href: '/services/eligibility', label: 'Eligibility Assessment' },
              { href: '/services/admissions', label: 'Admission Support' },
              { href: '/services/documents', label: 'Documents (LOR/SOP)' },
              { href: '/services/test-prep', label: 'Test Preparation' },
              { href: '/services/visa', label: 'Visa Services' },
              { href: '/services/departure', label: 'Pre/Post Departure' },
              { href: '/services/financial', label: 'Financial Planning' },
            ]}
          />
          <NavItemWithDropdown 
            label="Study Destinations" 
            items={[
              { href: '/destinations/usa', label: 'USA' },
              { href: '/destinations/uk', label: 'UK' },
              { href: '/destinations/canada', label: 'Canada' },
              { href: '/destinations/germany', label: 'Germany' },
              { href: '/destinations/australia', label: 'Australia' },
            ]}
          />
          <NavItem href="/universities" label="Universities" />
          <NavItem href="/programs" label="Programs" />
          <NavItem href="/resources" label="Resources" />
          <NavItem href="/contact" label="Contact" />
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-thynk-800 hover:text-thynk-600">
            <User className="h-4 w-4 mr-2" />
            Log In
          </Button>
          <Button className="bg-thynk-600 hover:bg-thynk-700 text-white transition duration-300">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-thynk-800" />
          ) : (
            <Menu className="h-6 w-6 text-thynk-800" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-white p-6 pt-10 animate-fade-in overflow-y-auto">
          <div className="flex flex-col space-y-6">
            <MobileNavItem href="/" label="Home" icon={<User className="h-5 w-5" />} />
            <MobileNavItem href="/about" label="About Us" icon={<User className="h-5 w-5" />} />
            <MobileNavItem href="/services" label="Services" icon={<FileText className="h-5 w-5" />} />
            <MobileNavItem href="/destinations" label="Study Destinations" icon={<Globe className="h-5 w-5" />} />
            <MobileNavItem href="/universities" label="Universities" icon={<GraduationCap className="h-5 w-5" />} />
            <MobileNavItem href="/programs" label="Programs" icon={<FileText className="h-5 w-5" />} />
            <MobileNavItem href="/resources" label="Resources" icon={<FileText className="h-5 w-5" />} />
            <MobileNavItem href="/contact" label="Contact" icon={<User className="h-5 w-5" />} />
            
            <hr className="border-gray-200" />
            
            <div className="flex flex-col space-y-4 pt-4">
              <Button variant="outline" className="justify-start">
                <User className="h-5 w-5 mr-3" />
                Log In
              </Button>
              <Button className="bg-thynk-600 hover:bg-thynk-700 text-white justify-start">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem = ({ href, label }: NavItemProps) => (
  <Link 
    to={href} 
    className="px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-thynk-600 hover:bg-gray-50 transition-colors"
  >
    {label}
  </Link>
);

interface NavItemWithDropdownProps {
  label: string;
  items: { href: string; label: string }[];
}

const NavItemWithDropdown = ({ label, items }: NavItemWithDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button 
        className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-thynk-600 hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-1 w-56 glass rounded-lg py-2 shadow-lg animate-fade-in z-50">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-thynk-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

interface MobileNavItemProps extends NavItemProps {
  icon: React.ReactNode;
}

const MobileNavItem = ({ href, label, icon }: MobileNavItemProps) => (
  <Link to={href} className="flex items-center py-3 px-2 rounded-lg hover:bg-gray-50">
    <span className="mr-3 text-gray-500">{icon}</span>
    <span className="text-gray-800 font-medium">{label}</span>
  </Link>
);

export default Header;
