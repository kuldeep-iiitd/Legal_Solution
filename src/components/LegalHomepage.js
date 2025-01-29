
import backImage from '../assets/back.jpg';


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { motion } from 'framer-motion'; // Add this import
import logo from '../assets/your-logo.png'; // Ensure you have this logo in your assets
import pic1 from '../assets/pic1.jpg'; // Ensure you have this logo in your assets
import pic2 from '../assets/pic2.jpg'; // Ensure you have this logo in your assets
import pic3 from '../assets/pic3.jpg'; // Ensure you have this logo in your assets
import pic4 from '../assets/pic4.jpg'; // Ensure you have this logo in your assets
import pic5 from '../assets/pic5.jpg'; // Ensure you have this logo in your assets
import pic6 from '../assets/pic6.jpg'; // Ensure you have this logo in your assets

//this is random comment


const ServicesPage = () => (
  <div className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-200 p-12">
    <div className="container mx-auto">
      <h1 className="text-6xl font-extrabold text-navy-900 text-center mb-16 drop-shadow-lg">
        Our Services
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
        {/* Service 1 */}
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden transform hover:scale-105 transition-transform">
          <img
            src={pic1}
            alt="Banking Litigation"
            className="w-full h-52 object-cover"
          />
          <div className="p-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Banking Litigation</h2>
            <p className="text-gray-700 leading-relaxed">
              Expertise in resolving banking disputes, providing legal solutions for financial institutions.
            </p>
          </div>
        </div>
        {/* Service 2 */}
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden transform hover:scale-105 transition-transform">
          <img
            src={pic5}
            alt="Real Estate & Land Revenue"
            className="w-full h-52 object-cover"
          />
          <div className="p-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Real Estate & Land Revenue</h2>
            <p className="text-gray-700 leading-relaxed">
              Comprehensive support for real estate transactions and land revenue legalities.
            </p>
          </div>
        </div>
        {/* Service 3 */}
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden transform hover:scale-105 transition-transform">
          <img
            src={pic6}
            alt="Civil & Criminal Litigation"
            className="w-full h-52 object-cover"
          />
          <div className="p-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Civil & Criminal Litigation</h2>
            <p className="text-gray-700 leading-relaxed">
              Trusted representation in civil and criminal cases, delivering justice with precision.
            </p>
          </div>
        </div>
        {/* Service 4 */}
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden transform hover:scale-105 transition-transform">
          <img
            src={pic2}
            alt="Arbitration Services"
            className="w-full h-52 object-cover"
          />
          <div className="p-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Arbitration Services</h2>
            <p className="text-gray-700 leading-relaxed">
              Efficient conflict resolution through arbitration, ensuring fair outcomes.
            </p>
          </div>
        </div>
        {/* Service 5 */}
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden transform hover:scale-105 transition-transform">
          <img
            src={pic4}
            alt="Corporate Law"
            className="w-full h-52 object-cover"
          />
          <div className="p-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Corporate Law</h2>
            <p className="text-gray-700 leading-relaxed">
              Comprehensive guidance for corporate legal needs, safeguarding business interests.
            </p>
          </div>
        </div>
        {/* Service 6 */}
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden transform hover:scale-105 transition-transform">
          <img
            src={pic3}
            alt="Contract Management"
            className="w-full h-52 object-cover"
          />
          <div className="p-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Contract Management</h2>
            <p className="text-gray-700 leading-relaxed">
              Drafting and managing contracts to minimize risks and ensure compliance.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <p className="text-lg text-gray-800">
          For more information about our services, feel free to{' '}
          <a href="/contact" className="text-navy-700 font-bold underline hover:text-navy-500">
            contact us
          </a>
          . We are here to assist you with any legal needs.
        </p>
      </div>
    </div>
  </div>
);






const ContactPage = () => {
  // Replace this URL with your actual Google Form URL
  const googleFormUrl = "https://forms.gle/bydfiuY1BwP41u486";

  const redirectToGoogleForm = () => {
    window.open(googleFormUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-purple-50 p-12">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-navy-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            We’re here to help and answer any questions you might have. Reach out to us!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="p-8 bg-white shadow-xl rounded-3xl border-t-4 border-blue-400">
            <p className="text-gray-700 mb-6 text-lg">
              We'd love to hear from you! Click below to access our contact form,
              and we'll get back to you as soon as possible.
            </p>
            <button
              onClick={redirectToGoogleForm}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-transform transform hover:scale-105 text-lg shadow-lg"
            >
              Go to Contact Form
            </button>
          </div>

          {/* Right Section */}
          <div className="p-8 bg-white shadow-xl rounded-3xl border-t-4 border-purple-400">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Contact Information
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-center space-x-4">
                <span className="inline-block w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                    />
                    <circle cx={8.5} cy={7} r={4} />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 8v6m0 0l2-2m-2 2l-2-2"
                    />
                  </svg>
                </span>
                <span>Ninex Legal Advisory LLP</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="inline-block w-8 h-8 bg-purple-600 text-white flex items-center justify-center rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 12c2.28 0 4.04 1.98 4.04 4.43m0 0c0 1.24-.42 2.43-1.12 3.37M16.04 20h1.92m-4.04 0h-.92m4.04 0c0 1.24-.42 2.43-1.12 3.37M20.04 20c2.28 0 4.04 1.98 4.04 4.43"
                    />
                  </svg>
                </span>
                <span>OfficeNo.-S2 , VDS Building A-1/B , Sector-16 , Noida</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="inline-block w-8 h-8 bg-green-600 text-white flex items-center justify-center rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h11M9 21l6-6m-6-6l6 6"
                    />
                  </svg>
                </span>
                <span>Phone: +91 89202 98602</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="inline-block w-8 h-8 bg-red-600 text-white flex items-center justify-center rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.828 6.828a4 4 0 015.656 0L12 10.343m0 0l2.828 2.828a4 4 0 010 5.656M12 10.343l2.828-2.828a4 4 0 015.656 0M12 10.343l-2.828-2.828a4 4 0 00-5.656 0"
                    />
                  </svg>
                </span>
                <span>Email: corporate@ninexlegal.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 p-12">
    <div className="container mx-auto">
      <h1 className="text-6xl font-extrabold text-navy-900 text-center mb-16 drop-shadow-md">About Ninex Legal Advisors</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-gray-800 leading-relaxed">
            Ninex Legal Advisors is a comprehensive law firm committed to delivering innovative legal solutions across a wide range of specialized practice areas. Our team of experts is dedicated to serving domestic banks, financial institutions, and other clients with exceptional counsel and strategic advice tailored to their specific needs.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            Our mission is to collaborate closely with our clients, ensuring mutual success through reliability, creativity, and timely service. With a strong focus on fostering long-term relationships, we strive to be trusted legal partners for the future.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            At Ninex Legal Advisors, we prioritize delivering exceptional value by offering tailored legal solutions that address both immediate challenges and long-term goals. Our approach ensures that clients navigate intricate legal landscapes confidently.
          </p>
        </div>
        <div className="bg-white shadow-2xl rounded-lg p-10 transition-transform hover:scale-105">
          <h2 className="text-4xl font-bold text-navy-900 mb-8">Core Values</h2>
          <ul className="space-y-4 text-lg text-gray-800">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-navy-700 rounded-full mr-4"></span>
              <strong>Integrity:</strong> Upholding the highest ethical standards in all our actions.
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-navy-700 rounded-full mr-4"></span>
              <strong>Professionalism:</strong> Delivering exceptional service with expertise and care.
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-navy-700 rounded-full mr-4"></span>
              <strong>Client-Centered Approach:</strong> Prioritizing our clients' needs above all else.
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-navy-700 rounded-full mr-4"></span>
              <strong>Continuous Learning:</strong> Staying ahead with the latest legal developments.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-4xl font-extrabold text-navy-900 text-center mb-12 drop-shadow-md">Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:-translate-y-2 transition-all">
            <h3 className="text-2xl font-bold text-navy-900">Mr. Vipin Sharma</h3>
            <p className="text-gray-700 mt-2">Chairman & Founder<br />Real Estate & Land Revenue (25+ yrs Experience)</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:-translate-y-2 transition-all">
            <h3 className="text-2xl font-bold text-navy-900">Adv. Pragyanishu Shukla</h3>
            <p className="text-gray-700 mt-2">Founding Partner<br />Banking Litigation (11+ yrs Experience)</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:-translate-y-2 transition-all">
            <h3 className="text-2xl font-bold text-navy-900">Adv. Abhishek Agarwal</h3>
            <p className="text-gray-700 mt-2">Founding Partner<br />Civil & Criminal Litigation</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:-translate-y-2 transition-all">
            <h3 className="text-2xl font-bold text-navy-900">Mr. Pawan Kumar</h3>
            <p className="text-gray-700 mt-2">Founding Partner<br />Head of SID Department</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:-translate-y-2 transition-all">
            <h3 className="text-2xl font-bold text-navy-900">Adv. Mohd Hassan</h3>
            <p className="text-gray-700 mt-2">Sr. Legal Head (Hyderabad)<br />Rich Experience in Banking</p>
          </div>          
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:-translate-y-2 transition-all">
            <h3 className="text-2xl font-bold text-navy-900">Adv. Rupesh</h3>
            <p className="text-gray-700 mt-2">Sr. Legal Head(Bihar)<br />Civil Litigation & Revenue(15+yr Experience)</p>
          </div>          
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:-translate-y-2 transition-all">
            <h3 className="text-2xl font-bold text-navy-900">Adv. Mohd Aquib Khan</h3>
            <p className="text-gray-700 mt-2">Legal Manager(Delhi NCR)<br />Rich Experience in banking</p>
          </div>          
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:-translate-y-2 transition-all">
            <h3 className="text-2xl font-bold text-navy-900">Adv. Sharad Kadam</h3>
            <p className="text-gray-700 mt-2">Sr. Legal Head(Chhattisgarh)<br />Rich Experience in banking</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:-translate-y-2 transition-all">
            <h3 className="text-2xl font-bold text-navy-900">Adv. Mahadeva</h3>
            <p className="text-gray-700 mt-2">Sr. Legal Head (Karnataka)<br />Banking Litigation</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:-translate-y-2 transition-all">
            <h3 className="text-2xl font-bold text-navy-900">Adv. Piyush Gandhi</h3>
            <p className="text-gray-700 mt-2">Sr. Legal Head (Ahmedabad)<br />Civil Litigation & Arbitration</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:-translate-y-2 transition-all">
            <h3 className="text-2xl font-bold text-navy-900">Adv. Sanket Gupta</h3>
            <p className="text-gray-700 mt-2">Sr. Legal Head (Surat)<br />Rich Experience in Banking</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:-translate-y-2 transition-all">
            <h3 className="text-2xl font-bold text-navy-900">Adv. Ajay Kumar</h3>
            <p className="text-gray-700 mt-2">Sr. Legal Head (Rajasthan)<br />Rich Experience in Banking</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:-translate-y-2 transition-all">
            <h3 className="text-2xl font-bold text-navy-900">Adv. Shubham Chaudhary</h3>
            <p className="text-gray-700 mt-2">Legal Manager (Delhi NCR)<br />Rich Experience in Banking</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);




const LegalHomepage = () => {

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
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' , block: 'start' });
    }
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
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
    <a 
      href="#about" 
      onClick={(e) => {
        e.preventDefault(); // Prevent default anchor behavior
        scrollToSection("services");
      }}      className="hover:text-blue-300 transition-all duration-300"
    >
      About Us
    </a>
    <a 
      href="#services" 
      onClick={() => scrollToSection('services')} 
      className="hover:text-blue-300 transition-all duration-300"
    >
      Services
    </a>
    <Link to="/contact" className="hover:text-blue-300 transition-all duration-300">
      Contact Us
    </Link>
  </nav>

  {/* Tagline or Call-to-Action */}
  <div className="hidden md:block text-sm text-gray-300 italic">
    "Your Trusted Legal Partner"
  </div>
</header>












      {/* Hero Section */}
      <section
  className="relative bg-cover bg-center h-[600px] flex items-center justify-center text-white"
  style={{
    backgroundImage: `url(${backImage})`,
    backgroundSize: '100% auto', // Ensures the image covers the whole section
    backgroundPosition: 'center ', // Adjusts the vertical positioning
    backgroundRepeat: 'no-repeat',  // Shifts the image downwards

  }}
  
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




      {/* About Section */}
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

      {/* Services Section */}
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



      {/* Contact Preview */}
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


      {/* Footer */}
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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LegalHomepage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;