
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/your-logo.png'; 

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="bg-gradient-to-r from-navy-800 to-navy-900 text-white py-4 px-10 shadow-md flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <img 
          src={logo} 
          alt="Ninex Legal Logo" 
          className="h-12 w-auto object-contain" 
        />
      </div>

      {/* Navigation Section */}
      <nav className="flex space-x-8 text-sm font-medium">
        <Link to="/" className="hover:text-blue-300 transition-all duration-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-300 transition-all duration-300">
          About Us
        </Link>
        <Link to="/services" className="hover:text-blue-300 transition-all duration-300">
          Services
        </Link>
        <Link to="/contact" className="hover:text-blue-300 transition-all duration-300">
          Contact Us
        </Link>
      </nav>

      {/* Tagline or Call-to-Action */}
      <div className="hidden md:block text-sm text-gray-300 italic">
        "Your Trusted Legal Partner"
      </div>
    </header>
  );
};

export default Header;