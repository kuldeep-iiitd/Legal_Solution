import React from 'react';
import Header from '../components/Header';

const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 p-12">
    <Header />
    
    <div className="container mx-auto">
      <h1 className="text-6xl font-extrabold text-navy-900 text-center mb-16 drop-shadow-md">
        About Ninex Legal Advisors
      </h1>
      
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
              <strong>Integrity:</strong> Upholding the highest ethical standards...
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


    </div>
  </div>
);

export default AboutPage;