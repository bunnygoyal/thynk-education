
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
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

  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-40 right-0 w-96 h-96 bg-thynk-100 rounded-full filter blur-3xl opacity-40" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-teal-50 rounded-full filter blur-3xl opacity-30" />
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-10 items-center pt-20">
        {/* Hero Content */}
        <div className="space-y-8 animate-fade-up">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-balance">
              <span className="text-navy-700">Certainty</span> in Your <span className="text-gradient">Global Education</span> Journey
            </h1>
            <p className="text-xl text-gray-600 pt-4 max-w-xl">
              Transforming uncertainty into a personalized, inevitable path forward within the first interaction.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button size="lg" className="bg-thynk-500 hover:bg-thynk-600 text-white font-heading font-semibold transition-colors">
              See Your Personalized Path
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-thynk-200 text-thynk-800 hover:bg-thynk-50 font-heading font-semibold">
              Explore Universities
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 pt-6">
            {['USA', 'UK', 'Canada', 'Australia', 'Germany'].map((country) => (
              <div key={country} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-teal-500" />
                <span className="text-gray-700">{country}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility Assessment Card */}
        <div className="glass rounded-2xl p-1 animate-scale-in animate-delay-200 subtle-shadow">
          <div className="bg-white rounded-xl p-6 sm:p-8">
            {step === 0 && (
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
            )}

            {step === 1 && (
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
                      onClick={() => setStep(2)} 
                      className="w-full bg-thynk-500 hover:bg-thynk-600 text-white py-3 rounded-lg transition-colors font-heading font-semibold"
                    >
                      View Detailed Report
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
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
                    <Button variant="link" className="text-thynk-500 font-heading" onClick={() => setStep(0)}>
                      Start over
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Trusted By */}
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
    </section>
  );
};

export default Hero;
