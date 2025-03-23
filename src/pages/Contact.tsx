
import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <PageTemplate
      title="Contact Us"
      description="Have questions about your study abroad journey? Our team is here to help. Reach out to us through any of the channels below or fill out the contact form."
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-thynk-600">Get in Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-thynk-500 mt-1 mr-4" />
              <div>
                <h3 className="font-medium text-gray-900">Our Office</h3>
                <p className="text-gray-700">123 Education Avenue, Knowledge City, Country</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-thynk-500 mt-1 mr-4" />
              <div>
                <h3 className="font-medium text-gray-900">Phone</h3>
                <p className="text-gray-700">+91 8294739402</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-thynk-500 mt-1 mr-4" />
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="text-gray-700">info@thynkeducation.com</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-medium text-gray-900 mb-2">Visit our website</h3>
            <a href="https://www.thynkeducation.com" target="_blank" rel="noopener noreferrer" className="text-thynk-500 hover:underline">
              www.thynkeducation.com
            </a>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6 text-thynk-600">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <Input placeholder="Your Name" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" />
            </div>
            <div>
              <Input placeholder="Subject" />
            </div>
            <div>
              <Textarea placeholder="Your Message" className="min-h-[120px]" />
            </div>
            <Button className="bg-thynk-500 hover:bg-thynk-600">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Contact;
