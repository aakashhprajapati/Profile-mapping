
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-600 rounded"></div>
          <span className="text-xl font-bold text-gray-800">lejhro.</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Bootcamps</Link>
          <Link to="/resources" className="text-gray-600 hover:text-blue-600">Resources</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">About Us</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </nav>
        
        <div className="flex items-center space-x-4">

          <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-white-700 transition-colors">
            Course
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute top-full left-0 right-0 z-50 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-orange-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Bootcamps
            </Link>
            <Link 
              to="/resources" 
              className="text-gray-600 hover:text-orange-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-orange-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-600 hover:text-orange-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="border-t border-gray-200 pt-4">
              <button className="w-full text-gray-600 hover:text-orange-600 py-2 text-left">
                Sign In
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;