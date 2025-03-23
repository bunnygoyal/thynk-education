
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Search, BookOpen, Clock, DollarSign } from 'lucide-react';

const Programs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [fieldFilter, setFieldFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample program data
  const programs = [
    {
      id: 1,
      name: 'Master of Business Administration (MBA)',
      field: 'Business',
      level: 'Master',
      duration: '1-2 years',
      description: 'A graduate program that develops leadership and management skills for business professionals.',
      universities: 'Harvard, Stanford, Wharton, INSEAD',
      tuition: '$50,000 - $150,000'
    },
    {
      id: 2,
      name: 'Bachelor of Computer Science',
      field: 'Computer Science',
      level: 'Bachelor',
      duration: '3-4 years',
      description: 'An undergraduate program focused on programming, algorithms, and computational systems.',
      universities: 'MIT, Stanford, Carnegie Mellon, University of Toronto',
      tuition: '$20,000 - $60,000 per year'
    },
    {
      id: 3,
      name: 'Master of Public Health (MPH)',
      field: 'Healthcare',
      level: 'Master',
      duration: '1-2 years',
      description: 'A graduate program that prepares students for careers in public health, health services, and health policy.',
      universities: 'Johns Hopkins, Harvard, University of Washington',
      tuition: '$40,000 - $80,000'
    },
    {
      id: 4,
      name: 'Bachelor of Engineering in Mechanical Engineering',
      field: 'Engineering',
      level: 'Bachelor',
      duration: '4 years',
      description: 'An undergraduate program covering the design, production, and operation of mechanical systems.',
      universities: 'MIT, Stanford, University of Michigan, Technical University of Munich',
      tuition: '$25,000 - $60,000 per year'
    },
    {
      id: 5,
      name: 'PhD in Neuroscience',
      field: 'Science',
      level: 'PhD',
      duration: '4-6 years',
      description: 'A doctoral program studying the structure and function of the nervous system and brain.',
      universities: 'Harvard, Stanford, University College London',
      tuition: 'Fully funded with stipend in many cases'
    },
    {
      id: 6,
      name: 'Master of Arts in International Relations',
      field: 'Social Sciences',
      level: 'Master',
      duration: '1-2 years',
      description: 'A graduate program analyzing global politics, foreign policy, and international organizations.',
      universities: 'Georgetown, LSE, Sciences Po, Oxford',
      tuition: '$35,000 - $70,000'
    },
    {
      id: 7,
      name: 'Bachelor of Fine Arts (BFA)',
      field: 'Arts',
      level: 'Bachelor',
      duration: '4 years',
      description: 'An undergraduate program developing practical and creative skills in visual arts or performing arts.',
      universities: 'Rhode Island School of Design, Parsons, Royal College of Art',
      tuition: '$20,000 - $50,000 per year'
    },
    {
      id: 8,
      name: 'Master of Laws (LLM)',
      field: 'Law',
      level: 'Master',
      duration: '1 year',
      description: 'A graduate law degree for those who already have a law degree and want to specialize further.',
      universities: 'Harvard, Yale, Columbia, Oxford, Cambridge',
      tuition: '$60,000 - $90,000'
    },
  ];
  
  // Filter programs based on search term and filters
  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesField = !fieldFilter || program.field === fieldFilter;
    const matchesLevel = !levelFilter || program.level === levelFilter;
    
    return matchesSearch && matchesField && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="section-container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-thynk-800">Explore Programs</h1>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl">
              Discover a wide range of academic programs available at universities around the world. 
              Use the filters below to find programs that match your interests and career goals.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 mb-10">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search programs..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="w-full md:w-48">
                <Select value={fieldFilter} onValueChange={setFieldFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Fields</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="Computer Science">Computer Science</SelectItem>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                    <SelectItem value="Healthcare">Healthcare</SelectItem>
                    <SelectItem value="Science">Science</SelectItem>
                    <SelectItem value="Social Sciences">Social Sciences</SelectItem>
                    <SelectItem value="Arts">Arts</SelectItem>
                    <SelectItem value="Law">Law</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-48">
                <Select value={levelFilter} onValueChange={setLevelFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Levels</SelectItem>
                    <SelectItem value="Bachelor">Bachelor's</SelectItem>
                    <SelectItem value="Master">Master's</SelectItem>
                    <SelectItem value="PhD">PhD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setFieldFilter('');
                  setLevelFilter('');
                }}
              >
                Reset
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPrograms.map((program) => (
                <Card key={program.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-thynk-700">{program.name}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-thynk-50 text-thynk-600 px-3 py-1 rounded-full text-sm font-medium">
                        {program.field}
                      </span>
                      <span className="bg-thynk-50 text-thynk-600 px-3 py-1 rounded-full text-sm font-medium">
                        {program.level}
                      </span>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-medium text-gray-700">Duration</h4>
                          <p className="text-gray-600">{program.duration}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <BookOpen className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-medium text-gray-700">Top Universities</h4>
                          <p className="text-gray-600">{program.universities}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <DollarSign className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-medium text-gray-700">Tuition Range</h4>
                          <p className="text-gray-600">{program.tuition}</p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{program.description}</p>
                    
                    <Button className="w-full bg-thynk-600 hover:bg-thynk-700">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredPrograms.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500">No programs matching your criteria were found.</p>
                <p className="text-gray-500 mt-2">Try adjusting your filters or search term.</p>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
