// src/components/layout/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
// 1. Import your background image here
import heroBg from '../../assets/images/hero-bg.jpg'; 

const Hero = ({ onOpenModal }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-midnight text-white px-6 overflow-hidden"
      
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Cinematic Gradient Overlay - Keeps text readable over the image */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/85 to-midnight z-0"></div>
      
      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className="font-primary text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Build Systems That <span className="text-electric">Shape the Future.</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-softGray mb-10 leading-editorial max-w-2xl"
        >
          We are a boutique hybrid tech and creative studio designing premium digital transformations for visionary founders.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-electric text-white font-primary px-8 py-4 rounded-sm tracking-wide hover:bg-opacity-90 transition-all duration-300">
            Schedule Discovery
          </button>
          <button 
            onClick={onOpenModal}
            className="border border-teal text-teal font-primary px-8 py-4 rounded-sm tracking-wide hover:bg-teal hover:text-midnight transition-all duration-300"
          >
            Free Strategy Report
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;