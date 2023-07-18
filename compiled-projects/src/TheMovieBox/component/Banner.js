import React from "react";

const Banner = () => {
  return (
    <div className="bg-blue-600 text-white flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-2xl mb-8">We provide the best service for you.</p>
        <button className="px-8 py-2 bg-white text-blue-600 text-lg font-semibold rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
