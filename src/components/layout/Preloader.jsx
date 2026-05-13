// src/components/layout/Preloader.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ isLoading, setIsLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            // Wait half a second at 100% before removing the preloader
            setTimeout(() => setIsLoading(false), 500); 
            return 100;
          }
          // Adjust this number to make the loading faster or slower
          return prev + 2; 
        });
      }, 25); 

      return () => clearInterval(interval);
    }
  }, [isLoading, setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } }}
          className="fixed inset-0 z-[9999] bg-[#191970] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle Background Noise */}
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-noise mix-blend-overlay"></div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Brand Reveal */}
            <div className="overflow-hidden mb-10">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                className="font-primary text-6xl md:text-8xl font-bold text-[#D4AF37] tracking-widest uppercase"
              >
                GTS<span className="text-teal-500">.</span>
              </motion.h1>
            </div>
            
            {/* Minimalist Progress Bar */}
            <div className="w-64 md:w-80 h-[1px] bg-white/20 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#D4AF37]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            
            {/* Percentage Text */}
            <div className="w-64 md:w-80 flex justify-between mt-4">
              <span className="font-primary text-xs tracking-[0.3em] uppercase text-gray-400">Loading</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-secondary text-xs tracking-widest text-[#D4AF37]"
              >
                {progress}%
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;