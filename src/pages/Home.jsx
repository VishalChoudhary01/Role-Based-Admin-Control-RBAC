import React from "react";

const Home = () => {
  return (
    <header className="w-full bg-blue-900 text-white">
      {/* Top Section: Address and Open Hours */}
      <div className="flex flex-col md:flex-row justify-between items-center container mx-auto py-3 px-4 text-sm">
        <div className="flex w-[90%] items-center space-x-2">
          <span className="font-medium">📍</span>
          <span>No 10, Jyothi Nagar, 1st Street, Mudichur Rd, West Tambaram, Chennai, Tamil Nadu 600045</span>
        </div>
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <span className="font-medium">⏰</span>
          <span>Open 24 Hours</span>
        </div>
      </div>

      {/* Main Banner Section */}
      <div className="bg-blue-800 text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          VRV Security and Facility Services
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Providing professional and reliable security solutions for residential, commercial, and industrial facilities.
        </p>
        <div className="flex justify-center mt-6">
          <button className="bg-red-600 text-white px-6 py-3 rounded-md mx-2 hover:bg-red-700">
            For Business Enquiry
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md mx-2 hover:bg-blue-700">
            Our Services
          </button>
        </div>
      </div>

      {/* Bottom Section: Team Introduction */}
      <div className="bg-gray-100 text-gray-800 py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Our highly trained and professional team is committed to delivering exceptional security services with integrity and dedication.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Home;
