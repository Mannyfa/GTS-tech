// src/components/layout/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  // ANIMATION: Staggered reveal for footer columns
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
  };

  return (
    // Base background is deep navy, blending with the rest of the site
    <footer className=" text-white py-16 px-6 lg:px-24 overflow-hidden">
      
      {/* GLASSMORPHISM WRAPPER: Creates a premium frosted pane for the footer content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto bg-[#191970] backdrop-blur-xl border border-white/10 rounded-2xl p-10 md:p-16 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-6">
            <div className="flex items-center space-x-3">
              <span className="font-primary font-bold text-3xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[#4e3612]">GTS</span>
              <span className="font-primary font-medium tracking-wide text-white">Grand Tech Solutions</span>
            </div>
            <p className="font-secondary text-gray-300 leading-editorial max-w-sm text-sm">
              Merging innovation, technology, and global impact—building brands and systems that shape the future.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4 font-primary text-sm tracking-widest uppercase">
            <h4 className="text-xs text-gray-500 mb-2">Explore</h4>
            {/* ANIMATION: Links translate on X axis on hover */}
            <a href="/about" className="text-white hover:text-teal-400 hover:translate-x-2 transition-all duration-300 w-fit">About Us</a>
            <a href="/services" className="text-white hover:text-teal-400 hover:translate-x-2 transition-all duration-300 w-fit">Services</a>
            <a href="/portfolio" className="text-white hover:text-teal-400 hover:translate-x-2 transition-all duration-300 w-fit">Portfolio</a>
            <a href="/booking" className="text-white hover:text-teal-400 hover:translate-x-2 transition-all duration-300 w-fit">Consultation</a>
          </motion.div>

          {/* Text-Based Social & Contact Links */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4 font-primary text-sm tracking-widest uppercase text-left md:text-right">
            <h4 className="text-xs text-gray-500 mb-2 md:text-right">Connect</h4>
            <a href="mailto:support@grandtech-solutions.com" className="text-white hover:text-teal-400 md:hover:-translate-x-2 transition-all duration-300 md:self-end w-fit">Email Us</a>
            <a href="https://www.instagram.com/grandtech_solutions_1?igsh=dDRuem41OWlhNWd2&utm_source=qr" target="_blank" rel="noreferrer" className="text-white hover:text-teal-400 md:hover:-translate-x-2 transition-all duration-300 md:self-end w-fit">Instagram</a>
            <a href="https://www.linkedin.com/in/grandtech-solutions-2655193bb?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" className="text-white hover:text-teal-400 md:hover:-translate-x-2 transition-all duration-300 md:self-end w-fit">LinkedIn</a>
            <a href="https://www.facebook.com/share/1B6n8aDu3d/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="text-white hover:text-teal-400 md:hover:-translate-x-2 transition-all duration-300 md:self-end w-fit">Facebook</a>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 font-primary tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} GTS. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Atlanta, GA</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;