// src/components/layout/Hero.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '../../assets/images/hero-bg.jpg'; 

const Hero = ({ onOpenModal }) => {
  const heroRef = useRef(null);
  
  // Advanced Parallax Scroll Effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Moves the background down at 50% the speed of the scroll
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // Fades out text as you scroll down
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const revealVariants = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } }
  };

  return (
    <section 
      ref={heroRef}
      className="relative h-screen min-h-[600px] flex items-center justify-center bg-midnight text-white px-6 overflow-hidden"
    >
      {/* Animated Parallax Background Layer */}
      <motion.div 
        className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover md:bg-cover"
        style={{
          backgroundImage: `url(${heroBg})`,
          y: yBg,
        }}
      />
      
      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to to-midnight z-10"></div>
      
      {/* Hero Content */}
      <motion.div 
        style={{ opacity: opacityText }}
        className="relative z-20 text-center max-w-5xl mx-auto flex flex-col items-center"
      >
        <div className="overflow-hidden mb-6">
          <motion.h1 
            initial="hidden" animate="visible" variants={revealVariants}
            className="font-primary text-5xl md:text-7xl font-bold leading-tight"
          >
           <span className="text-[#191970]">Build Systems That</span>  <span className="text-[#008080] italic font-light">Shape the Future.</span>
          </motion.h1>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-[#191970] mb-10 leading-editorial max-w-2xl font-light"
        >
          We are a boutique hybrid tech and creative studio designing premium digital transformations for visionary founders.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <button className="bg-[#008080] text-white font-primary px-8 py-4 rounded-sm tracking-widest text-xs uppercase hover:bg-midnight hover:text-white transition-colors duration-500">
            Schedule Discovery
          </button>
          <button 
            onClick={onOpenModal}
            className="border border-[#191970] text-[#191970] font-primary px-8 py-4 rounded-sm tracking-widest text-xs uppercase hover:bg-[#008080] hover:border-[#008080] hover:text-white transition-colors duration-500"
          >
            Free Strategy Report
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;