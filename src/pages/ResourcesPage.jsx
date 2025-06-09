// src/pages/ResourcesPage.jsx
import React, { useState } from 'react';
import { 
  Download, Calendar, Book, FileText, Users, 
  Search, Filter, Download as DownloadIcon,
  Briefcase, Code, Info, GraduationCap, TrendingUp
} from 'lucide-react';
import { resourcesData } from '../data/resourcesData';

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources', color: 'bg-gray-600 hover:bg-gray-700' },
    { id: 'semester', name: 'Semester Materials', color: 'bg-econ-blue-600 hover:bg-econ-blue-700' },
    { id: 'career', name: 'Career Resources', color: 'bg-econ-green-600 hover:bg-econ-green-700' },
    { id: 'information', name: 'General Information', color: 'bg-yellow-600 hover:bg-yellow-700' },
    { id: 'calendar', name: 'Calendars & Schedules', color: 'bg-red-600 hover:bg-red-700' }
  ];

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'Book': return Book;
      case 'FileText': return FileText;
      case 'Calendar': return Calendar;
      case 'Code': return Code;
      case 'Info': return Info;
      case 'Briefcase': return Briefcase;
      case 'GraduationCap': return GraduationCap;
      case 'TrendingUp': return TrendingUp;
      default: return FileText;
    }
  };

  const filteredResources = resourcesData.filter(resource => {
    // Filter by category
    if (selectedCategory !== 'all' && resource.category !== selectedCategory) {
      return false;
    }
    // Filter by search term
    if (searchTerm && !resource.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !resource.description.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  const sortedResources = filteredResources;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Academic Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive study materials, research guides, and career resources 
            to support your economics education at IIT Bombay.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 ${
                selectedCategory === category.id ? category.color : 'bg-gray-400 hover:bg-gray-500'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>


        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedResources.map((resource) => {
            const IconComponent = getIconComponent(resource.icon);
            return (
              <div key={resource.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-econ-blue-100 flex items-center justify-center mr-3">
                        <IconComponent className="h-6 w-6 text-econ-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                    </div>
                    <a 
                      href={resource.fileUrl || resource.pageUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-econ-blue-600 hover:text-econ-blue-800 font-medium text-sm"
                    >
                      Open
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {sortedResources.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg shadow-md">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              {searchTerm ? 
                `No resources match "${searchTerm}" in the ${selectedCategory === 'all' ? 'selected category' : categories.find(c => c.id === selectedCategory)?.name}.` : 
                `No resources available in the ${selectedCategory === 'all' ? 'selected category' : categories.find(c => c.id === selectedCategory)?.name}.`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesPage;