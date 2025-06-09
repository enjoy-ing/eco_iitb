// src/pages/BlogPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight, Search, Filter, ChevronDown } from 'lucide-react';
import { blogData, blogCategories } from '../data/blogData';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('latest');

  const filteredPosts = blogData.filter(post => {
    // Filter by category
    if (selectedCategory !== 'all' && post.category !== selectedCategory) {
      return false;
    }
    // Filter by search term
    if (searchTerm && 
        !post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !post.author.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  // Sort posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.date) - new Date(a.date);
      case 'oldest':
        return new Date(a.date) - new Date(b.date);
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  // Get featured posts
  const featuredPosts = blogData.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blogs</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Coming soon..
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar size={16} className="mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                      <span className="mx-2">•</span>
                      {post.readTime}
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-econ-blue-600 cursor-pointer">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User size={16} className="text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <button className="flex items-center text-econ-blue-600 hover:text-econ-blue-800 font-semibold">
                        Read More
                        <ArrowRight size={16} className="ml-1" />
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {blogCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id 
                  ? category.color 
                  : 'bg-gray-400 hover:bg-gray-500'
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
                placeholder="Search blog posts..."
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
                <option value="latest">Latest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Sort by Title</option>
              </select>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  {new Date(post.date).toLocaleDateString()}
                  <span className="mx-2">•</span>
                  {post.readTime}
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-econ-blue-600 cursor-pointer">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User size={16} className="text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  <button className="flex items-center text-econ-blue-600 hover:text-econ-blue-800 font-semibold">
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                      <Tag size={12} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {sortedPosts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg shadow-md">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No blog posts found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              {searchTerm ? 
                `No posts match "${searchTerm}" in the ${selectedCategory === 'all' ? 'selected category' : blogCategories.find(c => c.id === selectedCategory)?.name}.` : 
                `No posts available in the ${selectedCategory === 'all' ? 'selected category' : blogCategories.find(c => c.id === selectedCategory)?.name}.`}
            </p>
          </div>
        )}

        {/* Subscribe Section */}
        <div className="mt-16 bg-gradient-to-r from-econ-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Articles on Finance, Economics and Business in a language you'll understand!</h2>
          <p className="text-xl mb-6">Explore in-depth analyses, student experiences, and career insights from industry professionals.</p>
          <div className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-econ-blue-800 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-white text-econ-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;