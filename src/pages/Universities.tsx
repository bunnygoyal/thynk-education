
import React, { useEffect, useState } from 'react';
import PageTemplate from '@/components/PageTemplate';
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
import { Search, MapPin, GraduationCap } from 'lucide-react';

const Universities = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countryFilter, setCountryFilter] = useState('');

  // Sample university data
  const universities = [
    {
      id: 1,
      name: 'Harvard University',
      country: 'USA',
      location: 'Cambridge, Massachusetts',
      ranking: '#5 Global',
      description: 'Founded in 1636, Harvard is America\'s oldest institution of higher learning and a world-renowned research university.',
      programs: '80+ undergraduate majors, 120+ graduate and professional programs',
      image: 'https://placehold.co/600x400/e2e8f0/475569?text=Harvard+University'
    },
    {
      id: 2,
      name: 'University of Oxford',
      country: 'UK',
      location: 'Oxford, England',
      ranking: '#1 Global',
      description: 'Oxford is the oldest university in the English-speaking world with evidence of teaching as early as 1096.',
      programs: '350+ graduate and 30+ undergraduate programs across all disciplines',
      image: 'https://placehold.co/600x400/e2e8f0/475569?text=Oxford+University'
    },
    {
      id: 3,
      name: 'University of Toronto',
      country: 'Canada',
      location: 'Toronto, Ontario',
      ranking: '#26 Global',
      description: 'Founded in 1827, the University of Toronto is Canada\'s leading institution of learning, discovery and knowledge creation.',
      programs: '700+ undergraduate programs, 200+ graduate programs',
      image: 'https://placehold.co/600x400/e2e8f0/475569?text=University+of+Toronto'
    },
    {
      id: 4,
      name: 'Technical University of Munich',
      country: 'Germany',
      location: 'Munich, Bavaria',
      ranking: '#50 Global',
      description: 'TUM is one of Europe\'s leading technical universities, committed to excellence in research, teaching, and innovation.',
      programs: '150+ degree programs across engineering, natural sciences, and medicine',
      image: 'https://placehold.co/600x400/e2e8f0/475569?text=TU+Munich'
    },
    {
      id: 5,
      name: 'University of Melbourne',
      country: 'Australia',
      location: 'Melbourne, Victoria',
      ranking: '#37 Global',
      description: 'Established in 1853, the University of Melbourne is a leading Australian research university.',
      programs: '100+ undergraduate majors and 400+ graduate programs',
      image: 'https://placehold.co/600x400/e2e8f0/475569?text=University+of+Melbourne'
    },
    {
      id: 6,
      name: 'ETH Zurich',
      country: 'Switzerland',
      location: 'Zurich, Switzerland',
      ranking: '#9 Global',
      description: 'ETH Zurich is a science, technology, engineering and mathematics university known for groundbreaking research.',
      programs: '25+ bachelor\'s and 40+ master\'s programs in STEM fields',
      image: 'https://placehold.co/600x400/e2e8f0/475569?text=ETH+Zurich'
    },
  ];
  
  // Filter universities based on search term and country filter
  const filteredUniversities = universities.filter(university => {
    const matchesSearch = university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      university.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCountry = !countryFilter || university.country === countryFilter;
    
    return matchesSearch && matchesCountry;
  });

  return (
    <PageTemplate 
      title="Explore Universities"
      description="Discover top universities around the world and find the perfect institution for your academic journey. Use the filters below to narrow down your search."
    >
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search universities..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full md:w-64">
          <Select value={countryFilter} onValueChange={setCountryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Countries</SelectItem>
              <SelectItem value="USA">USA</SelectItem>
              <SelectItem value="UK">UK</SelectItem>
              <SelectItem value="Canada">Canada</SelectItem>
              <SelectItem value="Australia">Australia</SelectItem>
              <SelectItem value="Germany">Germany</SelectItem>
              <SelectItem value="Switzerland">Switzerland</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button 
          variant="outline" 
          onClick={() => {
            setSearchTerm('');
            setCountryFilter('');
          }}
        >
          Clear Filters
        </Button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUniversities.map((university) => (
          <Card key={university.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <img 
              src={university.image} 
              alt={university.name} 
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-thynk-700">{university.name}</h3>
              
              <div className="flex items-center mb-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{university.location}</span>
              </div>
              
              <div className="flex items-center mb-4 text-sm text-gray-600">
                <GraduationCap className="h-4 w-4 mr-1" />
                <span>Ranking: {university.ranking}</span>
              </div>
              
              <p className="text-gray-700 mb-4 line-clamp-3">{university.description}</p>
              
              <Button className="w-full bg-thynk-600 hover:bg-thynk-700">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredUniversities.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500">No universities matching your criteria were found.</p>
          <p className="text-gray-500 mt-2">Try adjusting your filters or search term.</p>
        </div>
      )}
    </PageTemplate>
  );
};

export default Universities;
