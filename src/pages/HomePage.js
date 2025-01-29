import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import backImage from '../assets/back.jpg';

const HomePage = () => {
  const [typingText, setTypingText] = useState('');
  const phrases = [
    'Expert Guidance for All Legal Matters.',
    'Committed to Justice and Integrity.',
    'Your Advocate in Times of Need.'
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (!isDeleting && typingText.length < currentPhrase.length) {
        setTypingText(currentPhrase.slice(0, typingText.length + 1));
      } else if (isDeleting && typingText.length > 0) {
        setTypingText(currentPhrase.slice(0, typingText.length - 1));
      } else if (!isDeleting && typingText.length === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typingText.length === 0) {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [typingText, currentPhraseIndex, isDeleting]);

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5M9 21l3-3 3 3" />
        </svg>
      ),
      title: 'Contract Management',
      description: 'Expert legal solutions for businesses.'
    },
    {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ),
        title: 'Family Law',
        description: 'Compassionate assistance for personal matters.'
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        ),
        title: 'Real Estate Law',
        description: 'Reliable guidance in property dealings.'
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        title: 'Civil Litigation',
        description: 'Resolving disputes effectively.'
      }  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      <Header />


      <section
        className="relative bg-cover bg-center h-[600px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${backImage})` }}
      >
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold mb-6 text-gray-100">
            Trusted Excellence in Legal Services - Ninex Legal
          </h1>
          <p className="text-2xl mb-8 h-12">
            {typingText}
            <span className="animate-pulse">|</span>
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition"
          >
            Learn More
          </button>
        </div>
      </section>


    
      <section id="about" className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6 text-navy-900">About Us</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-8">
          We are committed to providing expert legal advice and services to individuals and businesses. 
          With years of experience and a team of dedicated professionals, we ensure you receive the best representation possible.
        </p>
        <Link 
          to="/about"
          onClick={() => window.scrollTo(0, 0)}
          className="bg-navy-700 hover:bg-navy-800 text-white font-bold py-3 px-6 rounded-full transition"
        >
          Read More
        </Link>
      </section>



      <section id="services" className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-navy-900">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            to="/services"
            onClick={() => window.scrollTo(0, 0)}
            className="bg-navy-700 hover:bg-navy-800 text-white font-bold py-3 px-6 rounded-full transition"
          >
            Explore Services
          </Link>
        </div>
      </section>



      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6 text-navy-900">Get in Touch</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-8">
          Have questions or need legal assistance? We're here to help.
        </p>
        <Link 
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition"
        >
          Contact Us
        </Link>
      </section>


    
      <footer className="bg-navy-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
          <nav className="flex justify-center md:justify-start space-x-4 mb-4">
              <Link to="/" className="hover:text-blue-300">Home</Link>
              <Link to="/about" className="hover:text-blue-300">About Us</Link>
              <Link to="/services" className="hover:text-blue-300">Services</Link>
              <Link to="/contact" className="hover:text-blue-300">Contact Us</Link>
            </nav>
            <p>&copy; 2025 Ninex Legal Advisory LLP. All Rights Reserved.</p>
            <p className="text-sm text-gray-400 mt-2">Designed & Developed BY Kuldeep Singh(kuldeep23291@iiitd.ac.in)</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300">LinkedIn</a>
            <a href="#" className="hover:text-blue-300">Facebook</a>
            <a href="#" className="hover:text-blue-300">Twitter</a>
          </div>
        </div>
      </footer>


    </div>
  );
};

export default HomePage;