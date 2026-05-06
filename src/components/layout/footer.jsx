// src/components/layout/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-midnight text-white py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand Column */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-3">
            {/* Monogram Representation */}
            <span className="font-primary font-bold text-2xl tracking-widest text-steelGold">G<span className="text-electric">T</span><span className="text-teal">S</span></span>
            <span className="font-primary font-medium tracking-wide">Grand Tech Solutions</span>
          </div>
          <p className="font-secondary text-softGray leading-editorial max-w-sm">
            Merging innovation, technology, and global impact—building brands and systems that shape the future.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-4 font-primary text-sm tracking-widest uppercase">
          <a href="/about" className="hover:text-electric transition-colors duration-300">About Us</a>
          <a href="/services" className="hover:text-electric transition-colors duration-300">Services</a>
          <a href="/portfolio" className="hover:text-electric transition-colors duration-300">Portfolio</a>
          <a href="/booking" className="hover:text-electric transition-colors duration-300">Consultation</a>
        </div>

        {/* Text-Based Social & Contact Links */}
        <div className="flex flex-col space-y-4 font-primary text-sm tracking-widest uppercase text-right">
          <a href="mailto:support@grandtech-solutions.com" className="hover:text-steelGold transition-colors duration-300">Email Us</a>
          <a href="#" className="hover:text-steelGold transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-steelGold transition-colors duration-300">LinkedIn</a>
          <a href="#" className="hover:text-steelGold transition-colors duration-300">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;