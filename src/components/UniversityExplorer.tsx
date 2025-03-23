
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Award, MapPin, DollarSign, ChevronRight, Search, Filter } from 'lucide-react';

interface University {
  id: number;
  name: string;
  country: string;
  programs: string[];
  tuitionRange: string;
  ranking: number;
  imageUrl: string;
}

const universities: University[] = [
  {
    id: 1,
    name: "Harvard University",
    country: "USA",
    programs: ["Business", "Law", "Medicine", "Engineering"],
    tuitionRange: "$49,000 - $51,000",
    ranking: 1,
    imageUrl: "https://images.unsplash.com/photo-1605806616958-7a2454fa2b98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80"
  },
  {
    id: 2,
    name: "Stanford University",
    country: "USA",
    programs: ["Computer Science", "Business", "Engineering", "Medicine"],
    tuitionRange: "$52,000 - $56,000",
    ranking: 2,
    imageUrl: "https://images.unsplash.com/photo-1610809027249-86c649feacd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    name: "University of Oxford",
    country: "UK",
    programs: ["Arts", "Humanities", "Sciences", "Social Sciences"],
    tuitionRange: "£28,000 - £37,000",
    ranking: 3,
    imageUrl: "https://images.unsplash.com/photo-1600095987370-9c715efbfbff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 4,
    name: "University of Toronto",
    country: "Canada",
    programs: ["Business", "Computer Science", "Engineering", "Life Sciences"],
    tuitionRange: "CAD 36,000 - CAD 58,000",
    ranking: 18,
    imageUrl: "https://images.unsplash.com/photo-1569389329572-259d3a3c9c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
];

const UniversityExplorer = () => {
  const [filters, setFilters] = useState({
    country: "",
    program: "",
    budget: "",
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="section-container py-20 bg-gray-50">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Find Your Perfect <span className="text-gradient">University Match</span>
        </h2>
        <p className="text-lg text-gray-600">
          Explore top universities worldwide and find the perfect fit for your academic goals and preferences.
        </p>
      </div>

      {/* Filters */}
      <div className="glass p-6 rounded-xl mb-12 max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Filter className="h-5 w-5 text-thynk-600" />
          <h3 className="font-medium text-gray-800">Filter Universities</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Country</label>
            <select
              name="country"
              value={filters.country}
              onChange={handleFilterChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thynk-500 focus:border-transparent"
            >
              <option value="">All Countries</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
              <option value="germany">Germany</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Program</label>
            <select
              name="program"
              value={filters.program}
              onChange={handleFilterChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thynk-500 focus:border-transparent"
            >
              <option value="">All Programs</option>
              <option value="business">Business</option>
              <option value="engineering">Engineering</option>
              <option value="computer">Computer Science</option>
              <option value="medicine">Medicine</option>
              <option value="arts">Arts & Humanities</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Budget</label>
            <select
              name="budget"
              value={filters.budget}
              onChange={handleFilterChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thynk-500 focus:border-transparent"
            >
              <option value="">All Budgets</option>
              <option value="low">Under $20,000</option>
              <option value="medium">$20,000 - $40,000</option>
              <option value="high">$40,000 - $60,000</option>
              <option value="very-high">Above $60,000</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6 flex justify-between items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search universities..." 
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-thynk-500 focus:border-transparent"
            />
          </div>
          
          <Button className="bg-thynk-600 hover:bg-thynk-700 text-white">
            Apply Filters
          </Button>
        </div>
      </div>

      {/* University Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {universities.map((university) => (
          <div 
            key={university.id} 
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-up"
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                src={university.imageUrl} 
                alt={university.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute top-3 right-3 bg-white text-xs font-semibold px-2 py-1 rounded-full">
                Rank #{university.ranking}
              </div>
            </div>
            
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">{university.name}</h3>
              
              <div className="flex items-start gap-2 mb-2 text-sm">
                <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                <span className="text-gray-700">{university.country}</span>
              </div>
              
              <div className="flex items-start gap-2 mb-2 text-sm">
                <BookOpen className="h-4 w-4 text-gray-500 mt-0.5" />
                <span className="text-gray-700">{university.programs.slice(0, 2).join(", ")} & more</span>
              </div>
              
              <div className="flex items-start gap-2 mb-4 text-sm">
                <DollarSign className="h-4 w-4 text-gray-500 mt-0.5" />
                <span className="text-gray-700">{university.tuitionRange}/year</span>
              </div>
              
              <Button
                variant="outline"
                className="w-full border-thynk-100 text-thynk-700 hover:bg-thynk-50 mt-2 justify-between"
              >
                View Details
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button size="lg" className="bg-thynk-600 hover:bg-thynk-700 text-white">
          View All Universities
        </Button>
      </div>
    </section>
  );
};

export default UniversityExplorer;
