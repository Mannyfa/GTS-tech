// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle sticky navigation background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Consultation', path: '/booking' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-midnight py-4 shadow-lg' : 'bg-midnight/95 py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-24 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 group">
          <span className="font-primary font-bold text-2xl tracking-widest text-steelGold group-hover:scale-105 transition-transform">
            G<span className="text-electric">T</span><span className="text-teal">S</span>
          </span>
          <span className="font-primary font-medium tracking-widest text-white hidden sm:block text-sm uppercase">
            Grand Tech Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`font-primary text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                location.pathname === link.path ? 'text-electric' : 'text-softGray hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/booking"
            className="border border-steelGold text-steelGold px-5 py-2 text-xs font-primary tracking-[0.15em] uppercase hover:bg-steelGold hover:text-midnight transition-colors"
          >
            Book Call
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;