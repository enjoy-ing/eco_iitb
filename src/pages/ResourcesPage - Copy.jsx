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
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Resources', color: 'bg-gray-600 hover:bg-gray-700' },
    { id: 'semester', name: 'Semester Materials', color: 'bg-econ-blue-600 hover:bg-econ-blue-700' },
    { id: 'research', name: 'Research Resources', color: 'bg-purple-600 hover:bg-purple-700' },
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

  // Sort resources
  const sortedResources = [...filteredResources].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.downloadCount - a.downloadCount;
      case 'title':
        return a.title.localeCompare(b.title);
      case 'type':
        return a.type.localeCompare(b.type);
      default:
        return 0;
    }
  });

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

        {/* Search and Sort */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-econ-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-econ-blue-500 focus:border-transparent"
              >
                <option value="popular">Sort by Popularity</option>
                <option value="title">Sort by Title</option>
                <option value="type">Sort by Type</option>
              </select>
            </div>
          </div>
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
                      <div>
                        <span className="text-xs font-medium text-econ-blue-600 uppercase">
                          {resource.type}
                        </span>
                        <h3 className="font-semibold text-gray-900 mt-1">{resource.title}</h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      {resource.downloadCount}
                    </div>
                    <a 
                      href={resource.fileUrl} 
                      download
                      className="flex items-center text-econ-blue-600 hover:text-econ-blue-800 font-medium text-sm transition-colors"
                    >
                      <DownloadIcon className="h-4 w-4 mr-1" />
                      Download
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

        {/* Request Resources Section */}
        <div className="mt-16 bg-gradient-to-r from-econ-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
              <p className="text-lg mb-6 lg:mb-0 opacity-90">
                Request specific resources or suggest new materials to be added to our repository
              </p>
            </div>
            <button className="bg-white text-econ-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Request Resource
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;