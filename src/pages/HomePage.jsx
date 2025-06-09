// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, MessageSquare, TrendingUp, ArrowRight, Star } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Academic Resources',
      description: 'Access comprehensive study materials, notes, and guides for all economics courses.',
      link: '/resources',
      color: 'bg-blue-500'
    },
    {
      icon: MessageSquare,
      title: 'Course Reviews',
      description: 'Read honest reviews and ratings from fellow students about economics courses.',
      link: '/reviews',
      color: 'bg-green-500'
    },
    {
      icon: TrendingUp,
      title: 'Department Updates',
      description: 'Stay informed about the latest news, events, and opportunities in economics.',
      link: '/blog',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-econ-blue-600 via-econ-blue-700 to-econ-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Economics Association
              <span className="block text-yellow-300">Welcomes You!</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Your comprehensive platform for academic excellence, peer support, and career guidance 
              in the Economics Department at IIT Bombay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/resources"
                className="inline-flex items-center px-8 py-4 bg-white text-econ-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Explore Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/reviews"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-econ-blue-600 transition-colors duration-300"
              >
                View Course Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                About Us
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  The IITB Economics degree was launched in 2017 and has been one of the top sought after branches among JEE rankers and this year we finally launched our own department after being a sub-department of HSS for years.
                </p>
                <p>
                  Being an unconventional branch, it is often difficult to understand this branch and we aim to provide academic resources, course reviews and other important information that we found necessary when getting accustomed to BS Economics.
                </p>
                <p>
                  This portal will act as your one-stop destination for any query regarding the department and trust me, if you are having a query, I am sure some of us had it too at some point, so do not hesitate to reach out to us 🙂
                </p>
                <p>
                  Use these resources to your best and do contact us in case of any glitches or queries.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/team"
                  className="inline-flex items-center px-6 py-3 bg-econ-blue-600 text-white font-semibold rounded-lg hover:bg-econ-blue-700 transition-colors duration-300"
                >
                  Meet Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest Updates</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">New Course Reviews Added</p>
                      <p className="text-sm text-gray-600">Latest reviews for SEM 4 courses now available</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Career Fair 2025</p>
                      <p className="text-sm text-gray-600">Register for upcoming economics career fair</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Research Opportunities</p>
                      <p className="text-sm text-gray-600">New undergraduate research positions available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;