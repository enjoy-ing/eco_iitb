// src/components/Footer.jsx
import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Economics Student Association</h3>
            <p className="text-gray-300 mb-4">
              
            </p>
            <p className="text-sm text-gray-400">
              Proudly created and managed with 🫶🏻 by Economics Association and DAMP Team
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors">Academic Resources</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-white transition-colors">Course Reviews</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog Articles</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors">Council Team</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-gray-300 text-sm">contact@econcouncil.iitb.ac.in</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-gray-300 text-sm">HSS Building, IIT Bombay</span>
              </div>
              <div className="flex items-center">
                <ExternalLink className="h-4 w-4 mr-2" />
                <a href="https://www.iitb.ac.in" className="text-gray-300 text-sm hover:text-white transition-colors">
                  IIT Bombay
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            Developed with ❤️ by the Economics Council | 
            <span className="ml-2">Supporting academic excellence since 2017</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;