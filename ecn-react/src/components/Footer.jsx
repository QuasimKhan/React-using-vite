import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Educational Committee of Naseerpur. All rights reserved.</p>
        <div className="mt-4">
          <a href="/" className="text-blue-400 hover:underline">Home</a> | 
          <a href="/about-ecn" className="text-blue-400 hover:underline"> About</a> | 
          <a href="/services-studymaterial" className="text-blue-400 hover:underline"> Study Material</a> | 
          <a href="/books" className="text-blue-400 hover:underline"> Books</a> | 
          <a href="/about-naseerpur" className="text-blue-400 hover:underline"> About Naseerpur</a> | 
          <a href="/contact" className="text-blue-400 hover:underline"> Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
