
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Video, Phone, MessageCircle, ChevronDown, CheckCircle, AlertCircle } from 'lucide-react';

const ConsultationBooking = () => {
  const [step, setStep] = useState(1);
  const [consultationType, setConsultationType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const handleTypeSelect = (type: string) => {
    setConsultationType(type);
    setStep(2);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const consultationTypes = [
    {
      type: 'video',
      title: 'Video Call',
      description: 'Face-to-face consultation via Zoom or similar platforms',
      icon: <Video className="h-10 w-10 mb-2 text-thynk-600" />,
    },
    {
      type: 'phone',
      title: 'Phone Call',
      description: 'Direct phone conversation with our education consultants',
      icon: <Phone className="h-10 w-10 mb-2 text-thynk-600" />,
    },
    {
      type: 'inperson',
      title: 'In-Person',
      description: 'Meet with our consultants at one of our office locations',
      icon: <MessageCircle className="h-10 w-10 mb-2 text-thynk-600" />,
    },
  ];

  return (
    <section className="section-container py-20">
      <div className="max-w-5xl mx-auto">
        <div className="bg-thynk-50 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-sm">
          {/* Background elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-thynk-100 rounded-full filter blur-3xl opacity-50" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-thynk-100 rounded-full filter blur-3xl opacity-50" />
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Book Your <span className="text-gradient">Free Consultation</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our education experts are ready to guide you through every step of your study abroad journey.
              </p>
            </div>

            {/* Steps Indicator */}
            <div className="flex justify-center mb-10">
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  step >= 1 ? 'bg-thynk-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  1
                </div>
                <div className={`w-16 h-1 ${step >= 2 ? 'bg-thynk-600' : 'bg-gray-200'}`}></div>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  step >= 2 ? 'bg-thynk-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  2
                </div>
                <div className={`w-16 h-1 ${step >= 3 ? 'bg-thynk-600' : 'bg-gray-200'}`}></div>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  step >= 3 ? 'bg-thynk-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  3
                </div>
              </div>
            </div>

            {/* Step 1: Select Consultation Type */}
            {step === 1 && (
              <div className="animate-scale-in">
                <h3 className="text-xl font-semibold text-center mb-8">Select Consultation Type</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {consultationTypes.map((type, index) => (
                    <div 
                      key={index}
                      className="glass bg-white rounded-xl p-6 text-center cursor-pointer hover:shadow-md transition-all duration-300"
                      onClick={() => handleTypeSelect(type.type)}
                    >
                      <div className="flex flex-col items-center">
                        {type.icon}
                        <h4 className="text-lg font-semibold mb-2">{type.title}</h4>
                        <p className="text-gray-600 text-sm">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Booking Form */}
            {step === 2 && (
              <div className="glass bg-white rounded-xl p-8 animate-scale-in">
                <h3 className="text-xl font-semibold mb-6">
                  {consultationType === 'video' && 'Book Your Video Consultation'}
                  {consultationType === 'phone' && 'Book Your Phone Consultation'}
                  {consultationType === 'inperson' && 'Book Your In-Person Consultation'}
                </h3>
                
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thynk-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thynk-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thynk-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">Preferred Study Destination</label>
                    <select
                      name="destination"
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thynk-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select destination</option>
                      <option value="usa">USA</option>
                      <option value="uk">UK</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                      <option value="germany">Germany</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thynk-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thynk-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select time</option>
                        <option value="9:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-3 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Your Message (Optional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thynk-500 focus:border-transparent"
                      placeholder="Tell us about your education goals and any specific questions you have..."
                    />
                  </div>
                  
                  <div className="md:col-span-2 flex justify-between items-center pt-4">
                    <Button 
                      type="button" 
                      variant="outline"
                      className="border-thynk-200 text-thynk-800 hover:bg-thynk-50"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                    
                    <Button 
                      type="submit" 
                      className="bg-thynk-600 hover:bg-thynk-700 text-white"
                    >
                      Book Consultation
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="bg-white rounded-xl p-8 text-center animate-scale-in">
                <div className="flex justify-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Consultation Booked Successfully!</h3>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                  Thank you for booking a consultation with us. We've sent a confirmation email with all the details to your inbox.
                </p>
                
                <div className="glass bg-gray-50 rounded-lg p-6 max-w-md mx-auto mb-8">
                  <div className="text-left space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Consultation Type:</span>
                      <span className="font-medium">
                        {consultationType === 'video' && 'Video Call'}
                        {consultationType === 'phone' && 'Phone Call'}
                        {consultationType === 'inperson' && 'In-Person Meeting'}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-500">Date:</span>
                      <span className="font-medium">{formData.date}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-500">Time:</span>
                      <span className="font-medium">{formData.time}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    variant="outline"
                    className="border-thynk-200 text-thynk-800 hover:bg-thynk-50"
                    onClick={() => setStep(1)}
                  >
                    Book Another Consultation
                  </Button>
                  
                  <Button className="bg-thynk-600 hover:bg-thynk-700 text-white">
                    Go to Dashboard
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;
