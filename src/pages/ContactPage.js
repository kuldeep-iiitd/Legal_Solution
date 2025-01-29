import React from 'react';
import Header from '../components/Header';

const ContactPage = () => {
    // Replace this URL with your actual Google Form URL
    const googleFormUrl = "https://forms.gle/bydfiuY1BwP41u486";
  
    const redirectToGoogleForm = () => {
      window.open(googleFormUrl, "_blank");
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-purple-50 p-12">  <Header />
        {
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
}</div>
    );
  };

export default ContactPage;