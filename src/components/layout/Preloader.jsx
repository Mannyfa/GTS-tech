// src/components/layout/Preloader.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Import your logo
import logoImg from '../../assets/images/logo.png'; 

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B0C10]">
      
      {/* 1. The Logo (Static or slight fade-in) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        
        className="w-36 md:w-52 mb-6 flex justify-center"
      >
        <img 
          src={logoImg} 
          alt="GTS Logo" 
          className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(0,128,128,0.2)]" 
        />
      </motion.div>

      {/* 2. Typewriter Text: "GRAND TECH SOLUTIONS" */}
      <div className="flex justify-center">
        <motion.div
          
          animate={{ width: ["0%", "100%", "100%", "0%"] }}
          transition={{
            duration: 4, 
            times: [0, 0.25, 0.8, 1], 
            ease: "easeInOut"
          }}
          
          className="overflow-hidden whitespace-nowrap border-r-[3px] border-[#D4AF37] pr-1"
        >
          <h1 className="text-white font-primary font-bold text-lg md:text-2xl tracking-[0.15em] uppercase pl-1">
            Grand Tech Solutions
          </h1>
        </motion.div>
      </div>

      {/* 3. Subtitles: "CLARITY EXCELLENCE CONFIDENCE" */}
      <motion.div
         animate={{ opacity: [0, 0, 1, 1, 0] }}
         transition={{
            duration: 4,
            times: [0, 0.3, 0.4, 0.7, 0.9],
            ease: "easeInOut"
         }}
         className="flex space-x-3 md:space-x-4 mt-3 font-secondary text-[9px] md:text-xs font-bold tracking-widest uppercase"
      >
         <span className="text-white">Clarity</span>
         {/* Matching the gradient colors from your logo */}
         <span className="text-blue-400">Excellence</span>
         <span className="text-[#008080]">Confidence</span>
      </motion.div>

    </div>
  );
};

export default Preloader;