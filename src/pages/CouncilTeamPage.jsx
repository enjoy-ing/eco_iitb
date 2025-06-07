// src/pages/CouncilTeamPage.jsx
import React, { useState } from 'react';
import { Mail, Linkedin, ExternalLink, Users as UsersIcon, Search, Filter } from 'lucide-react';
import { teamData } from '../data/teamData';

const CouncilTeamPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('all');

  // Get unique positions for filtering
  const positions = ['all', ...new Set(teamData.map(member => member.position))];

  const filteredMembers = teamData.filter(member => {
    // Filter by position
    if (selectedPosition !== 'all' && member.position !== selectedPosition) {
      return false;
    }
    // Filter by search term
    if (searchTerm && 
        !member.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !member.position.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !member.bio.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Council Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated team behind the Economics Students Support initiative, 
            working to enhance your academic journey at IIT Bombay.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search team members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-econ-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedPosition}
                onChange={(e) => setSelectedPosition(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-econ-blue-500 focus:border-transparent"
              >
                <option value="all">All Positions</option>
                {positions.slice(1).map(position => (
                  <option key={position} value={position}>{position}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm opacity-90">{member.position}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-econ-blue-100 text-econ-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {member.year}
                  </span>
                  <div className="flex space-x-2">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hover:text-econ-blue-600 transition-colors duration-200"
                        title="Send Email"
                      >
                        <Mail size={20} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-econ-blue-600 transition-colors duration-200"
                        title="LinkedIn Profile"
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg shadow-md">
            <UsersIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No team members found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              {searchTerm ? 
                `No team members match "${searchTerm}" in the selected position.` : 
                `No team members available for the selected position.`}
            </p>
          </div>
        )}

        {/* Join Team Section */}
        <div className="mt-16 bg-gradient-to-r from-econ-green-600 to-econ-blue-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Join Our Team?</h2>
          <p className="text-xl mb-6">
            We're always looking for passionate economics students to join our council and help fellow students.
          </p>
          <div className="max-w-md mx-auto space-y-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">What we're looking for:</h3>
              <ul className="text-sm space-y-1 text-left">
                <li>• Passion for economics and helping peers</li>
                <li>• Leadership and communication skills</li>
                <li>• Commitment to academic excellence</li>
                <li>• Experience in organizing events (preferred)</li>
              </ul>
            </div>
            <button className="bg-white text-econ-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center">
              Apply Now
              <ExternalLink size={16} className="ml-2" />
            </button>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions or suggestions? We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-econ-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-econ-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-sm text-gray-600">contact@econcouncil.iitb.ac.in</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-econ-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="h-6 w-6 text-econ-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
              <p className="text-sm text-gray-600">Mon-Fri, 2:00-5:00 PM</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Office Location</h3>
              <p className="text-sm text-gray-600">HSS Building, Room 201</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouncilTeamPage;