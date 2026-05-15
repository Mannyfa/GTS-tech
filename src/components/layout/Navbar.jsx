// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/images/logo.png'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Initialize Theme Hook
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Consultation', path: '/booking' },
  ];

  return (
    <>
    {/* MOTION WRAPPER: Smooth drop-down animation on initial load */}
    {/* GLASSMORPHISM: Semi-transparent background + backdrop blur */}
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        (isScrolled || isMobileMenuOpen) 
          ? 'bg-[#191970]/80 backdrop-blur-lg border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] py-4' 
          : 'bg-[#191970]/40 backdrop-blur-sm border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-24 flex justify-between items-center relative">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center group cursor-pointer shrink-0 z-50">
          <img 
            src={logoImg} 
            alt="Grand Tech Solutions Logo" 
            className="h-12 md:h-16 lg:h-20 w-auto object-contain -my-4 lg:-my-6 group-hover:scale-110 transition-transform duration-500"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`relative font-primary text-xs tracking-[0.15em] uppercase transition-colors duration-300 group ${
                location.pathname === link.path ? 'text-teal-400 font-bold' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
              {/* ANIMATION: Subtle underline expansion on hover */}
              <span className={`absolute -bottom-2 left-0 h-[2px] bg-teal-400 transition-all duration-300 ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
          
          {/* Desktop Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'light' ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            )}
          </button>

          <Link 
            to="/booking"
            className="bg-[#D4AF37]/90 backdrop-blur-md border border-[#4e3612] text-white px-6 py-2.5 text-xs font-primary tracking-[0.15em] uppercase hover:bg-teal-500 hover:border-teal-400 hover:shadow-[0_0_15px_rgba(45,212,191,0.4)] transition-all duration-300"
          >
            Book Call
          </Link>
        </div>

        {/* Mobile Controls (Theme Toggle + Hamburger) */}
        <div className="md:hidden flex items-center space-x-4 z-50">
          
          {/* Mobile Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-white focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-white transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            
            className="absolute top-full left-0 w-full bg-[#191970]/90 backdrop-blur-xl border-t border-white/10 shadow-2xl md:hidden"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link, index) => (
                <motion.div 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={link.path}
                    className={`font-primary text-lg tracking-widest uppercase block ${
                      location.pathname === link.path ? 'text-teal-400 font-bold' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4"
              >
                <Link 
                  to="/booking"
                  className="inline-block w-full text-center bg-[#704d19]/90 backdrop-blur-md text-white px-6 py-4 text-sm font-primary tracking-[0.15em] uppercase border border-[#4e3612] hover:bg-teal-500 hover:border-teal-400 transition-colors"
                >
                  Book Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </>
  );
};

export default Navbar;