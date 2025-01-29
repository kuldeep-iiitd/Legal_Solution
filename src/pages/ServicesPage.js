// ServicesPage.js
import React from 'react';
import Header from '../components/Header';
import pic1 from '../assets/pic1.jpg'; // Ensure you have this logo in your assets
import pic2 from '../assets/pic2.jpg'; // Ensure you have this logo in your assets
import pic3 from '../assets/pic3.jpg'; // Ensure you have this logo in your assets
import pic4 from '../assets/pic4.jpg'; // Ensure you have this logo in your assets
import pic5 from '../assets/pic5.jpg'; // Ensure you have this logo in your assets
import pic6 from '../assets/pic6.jpg';

const ServicesPage = () => (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-200 p-12"><Header />
      {<div className="container mx-auto">
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
    }</div>
  );

export default ServicesPage;