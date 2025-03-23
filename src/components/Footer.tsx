
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-6">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Logo className="mb-4" />
              <p className="text-gray-600 mt-4 max-w-md">
                "Education for a world stage" – We at THYNK believe in providing a platform where students can work with eminent admission service experts to transform their abroad education dreams into reality.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-thynk-500 mt-0.5" />
                <div>
                  <p className="text-gray-800">123 Education Lane, Suite 500</p>
                  <p className="text-gray-600">New York, NY 10001, USA</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-thynk-500" />
                <p className="text-gray-800">+91 8294739402</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-thynk-500" />
                <p className="text-gray-800">info@thynkeducation.com</p>
              </div>
            </div>
            
            <div className="flex gap-4 pt-2">
              <a href="#" className="bg-white p-2 rounded-full text-gray-500 hover:text-thynk-500 transition-colors border border-gray-200 hover:border-thynk-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full text-gray-500 hover:text-thynk-500 transition-colors border border-gray-200 hover:border-thynk-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full text-gray-500 hover:text-thynk-500 transition-colors border border-gray-200 hover:border-thynk-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full text-gray-500 hover:text-thynk-500 transition-colors border border-gray-200 hover:border-thynk-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full text-gray-500 hover:text-thynk-500 transition-colors border border-gray-200 hover:border-thynk-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-thynk-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-thynk-500 transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/universities" className="text-gray-600 hover:text-thynk-500 transition-colors">Universities</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-600 hover:text-thynk-500 transition-colors">Programs</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-600 hover:text-thynk-500 transition-colors">Resources</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-thynk-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Study Destinations */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Study Destinations</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/destinations/usa" className="text-gray-600 hover:text-thynk-500 transition-colors">Study in USA</Link>
              </li>
              <li>
                <Link to="/destinations/uk" className="text-gray-600 hover:text-thynk-500 transition-colors">Study in UK</Link>
              </li>
              <li>
                <Link to="/destinations/canada" className="text-gray-600 hover:text-thynk-500 transition-colors">Study in Canada</Link>
              </li>
              <li>
                <Link to="/destinations/australia" className="text-gray-600 hover:text-thynk-500 transition-colors">Study in Australia</Link>
              </li>
              <li>
                <Link to="/destinations/germany" className="text-gray-600 hover:text-thynk-500 transition-colors">Study in Germany</Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-600 hover:text-thynk-500 transition-colors">All Destinations</Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Newsletter</h3>
            <p className="text-gray-600">
              Subscribe to our newsletter for the latest updates, tips, and special offers.
            </p>
            
            <div className="flex gap-2 flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thynk-500 focus:border-transparent"
              />
              <Button className="bg-thynk-500 hover:bg-thynk-600 text-white">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our privacy policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        
        <hr className="my-8 border-gray-200" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Thynk Education. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-thynk-500">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-thynk-500">Terms of Service</Link>
            <Link to="/cookies" className="text-sm text-gray-500 hover:text-thynk-500">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
