// src/pages/About.jsx
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Footer from '../components/layout/footer.jsx';

import blessingImg from '../assets/images/BlesRaph.jpg';
import kimberlyImg from '../assets/images/KimNuo.jpg';

// 1. IMPORT YOUR FULL-SCREEN BACKGROUND IMAGE HERE
import aboutHeroImg from '../assets/images/abouthero.jpg'; 

// 2. IMPORT YOUR CORE VALUES IMAGE HERE
import aboutCoreValuesImg from '../assets/images/sorttt.jpg';

// =========================================================================
// MAIN ABOUT COMPONENT
// =========================================================================

const About = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  // Parallax Setup for Hero
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
          console.log('Success:', result.text);
          setSubmitStatus('success');
          setIsSubmitting(false);
          formRef.current.reset();
      }, (error) => {
          console.error('Failed:', error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
      });
  };

  const revealVariants = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    // Global wrapper set to support dark mode
    <div className="min-h-screen bg-white dark:bg-[#0B0C10] font-secondary text-[#191970] dark:text-gray-100 overflow-hidden selection:bg-teal-500 selection:text-white transition-colors duration-500">
      
      {/* 1. Hero Section - Full Screen Image Background with Parallax */}
      <section 
        ref={heroRef}
        className="relative pt-40 pb-20 px-6 lg:px-24 min-h-[80vh] md:min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#0B0C10] transition-colors duration-500"
      >
        {/* Parallax Background Layer */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
        >
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url(${aboutHeroImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center right',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </motion.div>

        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#191970]/95 via-[#191970]/80 to-[#191970]/20 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none bg-noise mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto w-full relative z-20">
          
          {/* Left-Aligned Text Content */}
          <div className="md:w-3/5 lg:w-1/2 flex flex-col items-start pt-10 lg:pt-0">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
              className="font-primary text-xs tracking-[0.3em] text-[#D4AF37] uppercase mb-6 block font-semibold"
            >
              Who We Are
            </motion.h2>

            <div className="overflow-hidden mb-6">
              <motion.h1 
                variants={revealVariants} initial="hidden" animate="visible"
                className="font-primary text-5xl md:text-6xl font-bold text-[#D4AF37] tracking-tight leading-tight"
              >
                We Shape <br/> <span className="italic font-light">The Future.</span>
              </motion.h1>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "100px" }} transition={{ duration: 1, delay: 0.5 }}
              className="h-[2px] bg-[#D4AF37] my-8" 
            />

            <motion.p 
              variants={fadeUpVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-[#D4AF37]/90 leading-editorial max-w-md font-light"
            >
              A hybrid tech and creative studio helping small and growing businesses build digital presence, streamline workflows, and tell powerful stories. We blend design, technology, and strategy to create brands that scale.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision - White Section */}
      <section className="py-32 lg:py-48 px-6 lg:px-24 bg-white dark:bg-[#0B0C10] relative border-t border-gray-100 dark:border-white/5 z-20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto relative flex flex-col lg:flex-row items-center lg:items-end justify-between">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariants}
            className="lg:w-2/3 pb-12 lg:pb-0 z-10"
          >
            <span className="font-primary text-xs tracking-[0.3em] text-[#4e3612] dark:text-[#D4AF37] uppercase mb-6 block">Our Mission</span>
            {/* Reduced from 5xl to 4xl */}
            <h2 className="font-primary text-2xl md:text-4xl leading-[1.3] text-[#191970] dark:text-white font-medium pr-4 lg:pr-12">
              To build powerful brands and digital systems that elevate voices, strengthen communities, and position businesses for <span className="text-teal-600 border-b-2 border-teal-600 pb-1">global influence,</span> sustainable growth, and long-term success.
            </h2>
          </motion.div>

          {/* Floating Vision Box - Kept dark for contrast */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/3 bg-[#191970] text-white p-10 lg:-ml-20 z-20 shadow-2xl relative lg:translate-y-16 rounded-xl"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#4e3612] rounded-t-xl"></div>
            <span className="font-primary text-xs tracking-[0.3em] text-gray-400 uppercase mb-6 block">The Vision</span>
            <p className="font-secondary text-sm md:text-base leading-editorial text-gray-200">
              To become a global creative-tech studio shaping brands that inspire, transform, and create impact.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 3. Core Values - Section with Image Replacement */}
      <section className="py-32 lg:py-48 px-6 lg:px-24 bg-white dark:bg-[#0B0C10] text-[#191970] dark:text-white relative overflow-hidden z-20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
          
          {/* Left Text Side */}
          <div className="lg:w-1/2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="mb-12">
              <h2 className="font-primary text-xs tracking-[0.3em] text-[#4e3612] dark:text-[#D4AF37] uppercase mb-4">The Standard</h2>
              <h3 className="font-primary text-3xl md:text-4xl font-bold text-[#191970] dark:text-white">Our Core Values</h3>
            </motion.div>

            <motion.div 
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col space-y-6 border-l border-gray-200 dark:border-white/10 pl-8"
            >
              {['Excellence', 'Creativity', 'Integrity', 'Innovation', 'Global Impact'].map((value, index) => (
                <motion.div key={value} variants={fadeUpVariants} className="flex items-center gap-6">
                  <span className="font-primary text-[#4e3612] dark:text-[#D4AF37] text-xl font-light w-8">0{index + 1}</span>
                  <h4 className="font-primary text-lg md:text-xl tracking-wide text-[#191970] dark:text-gray-200">{value}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Image Side */}
          <div className="lg:w-1/2 w-full mt-16 lg:mt-0 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-md lg:max-w-lg aspect-square lg:aspect-auto lg:h-[500px] overflow-hidden rounded-2xl shadow-xl dark:shadow-none border border-gray-100 dark:border-white/5"
            >
              {/* Subtle decorative offset block behind the image */}
              <div className="absolute inset-0 bg-teal-500/5 mix-blend-multiply pointer-events-none"></div>
              
              <img 
                src={aboutCoreValuesImg} 
                alt="Grand Tech Solutions Core Values" 
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* 4. Meet the Founders - White BG */}
      <section className="py-32 lg:py-48 px-6 lg:px-24 bg-white dark:bg-[#0B0C10] border-t border-gray-100 dark:border-white/5 z-20 relative transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
            className="text-center mb-24"
          >
            <h2 className="font-primary text-xs tracking-[0.3em] text-[#4e3612] dark:text-[#D4AF37] uppercase mb-4">Leadership</h2>
            <h3 className="font-primary text-3xl md:text-4xl lg:text-5xl font-bold text-[#191970] dark:text-white">Meet the Founders</h3>
          </motion.div>

          <div className="flex flex-col space-y-24 lg:space-y-32">
            
            {/* Founder 1: Blessing */}
            <div className="relative flex flex-col md:flex-row items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
                className="w-full md:w-3/5 lg:w-1/2 z-10 aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-[#151720] rounded-lg shadow-md dark:shadow-none"
              >
                <motion.img 
                  whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
                  src={blessingImg} alt="Blessing Raphael" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
                className="w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-1/2 lg:w-2/5 bg-white dark:bg-[#1C1F26] p-8 md:p-10 z-20 mx-4 sm:mx-8 md:mx-0 md:-ml-16 mt-[-60px] md:mt-auto shadow-xl dark:shadow-none border border-gray-100 dark:border-white/10 relative self-center md:self-auto rounded-xl transition-colors duration-500"
              >
                <div className="w-12 h-[2px] bg-teal-500 mb-6"></div>
                <h3 className="font-primary text-xl md:text-2xl font-bold text-[#191970] dark:text-white">Blessing Raphael</h3>
                <p className="font-primary text-xs tracking-widest uppercase text-teal-600 dark:text-teal-400 mt-2 mb-4">President / Founder</p>
                <p className="text-gray-600 dark:text-gray-400 leading-editorial text-sm">
                  A visionary creative-tech leader with a passion for building businesses, shaping brands, and designing scalable systems that empower growth. Blessing blends creativity, strategy, and operational excellence to help companies transform their digital presence and unlock their full potential. Her work is driven by clarity, innovation, and a deep commitment to excellence - crafting solutions that are not only beautiful, but built to last.
                </p>
              </motion.div>
            </div>

            {/* Founder 2: Kimberly */}
            <div className="relative flex flex-col md:flex-row-reverse items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
                className="w-full md:w-3/5 lg:w-1/2 z-10 aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-[#151720] rounded-lg shadow-md dark:shadow-none"
              >
                <motion.img 
                  whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
                  src={kimberlyImg} alt="Kimberly Nuonum" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
                className="w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-1/2 lg:w-2/5 bg-white dark:bg-[#1C1F26] p-8 md:p-10 z-20 mx-4 sm:mx-8 md:mx-0 md:-mr-16 mt-[-60px] md:mt-auto shadow-xl dark:shadow-none border border-gray-100 dark:border-white/10 relative self-center md:self-auto rounded-xl transition-colors duration-500"
              >
                <div className="w-12 h-[2px] bg-[#4e3612] dark:bg-[#D4AF37] mb-6"></div>
                <h3 className="font-primary text-xl md:text-2xl font-bold text-[#191970] dark:text-white">Kimberly Nuonum</h3>
                <p className="font-primary text-xs tracking-widest uppercase text-[#4e3612] dark:text-[#D4AF37] mt-2 mb-4">Co-Founder / CEO</p>
                <p className="text-gray-600 dark:text-gray-400 leading-editorial text-sm">
                  Kimberly O. Nuonum is a global business strategist and digital transformation leader with over two decades of experience delivering scalable digital marketing, supply chain and technology solutions. Working closely with C-suite executives and leadership teams, she translates vision into structured strategies that strengthen digital presence, operational efficiency, and long-term growth. With experience across domestic and international markets, Kimberly brings a global perspective to innovation and business development.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Contact Form & Details - White Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants}
        className="py-32 lg:py-48 px-6 lg:px-24 bg-white dark:bg-[#0B0C10] border-t border-gray-100 dark:border-white/5 z-20 relative transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="flex flex-col justify-center space-y-10">
            <div>
              <h2 className="font-primary text-3xl font-bold mb-4 text-[#191970] dark:text-white">Let's Build Together.</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-editorial max-w-md text-sm md:text-base">
                Ready to elevate your digital presence? Reach out directly or fill out the form to start the conversation.
              </p>
            </div>
            
            <div className="space-y-6 font-primary text-sm tracking-wide">
              <div>
                <span className="block text-gray-400 dark:text-gray-500 text-xs uppercase tracking-widest mb-1">Email Support</span>
                <a href="mailto:support@grandtech-solutions.com" className="text-teal-600 dark:text-teal-400 hover:text-[#191970] dark:hover:text-white transition-colors">support@grandtech-solutions.com</a>
              </div>
              <div>
                <span className="block text-gray-400 dark:text-gray-500 text-xs uppercase tracking-widest mb-1">Direct Line</span>
                <a href="tel:229-454-7920" className="text-teal-600 dark:text-teal-400 hover:text-[#191970] dark:hover:text-white transition-colors">229-454-7920</a>
              </div>
              <div>
                <span className="block text-gray-400 dark:text-gray-500 text-xs uppercase tracking-widest mb-1">Headquarters</span>
                <p className="text-[#191970] dark:text-gray-300">30331 Atlanta, GA, United States</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-[#151720] p-8 md:p-10 shadow-sm dark:shadow-none border border-gray-200 dark:border-white/10 relative group overflow-hidden rounded-xl transition-colors duration-500">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent group-focus-within:bg-teal-500 transition-colors duration-500"></div>
            
            {submitStatus === 'success' ? (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} 
                 className="h-full flex flex-col items-center justify-center text-center py-12"
               >
                 <div className="w-16 h-16 bg-teal-50 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-6">
                    <span className="text-teal-600 dark:text-teal-400 text-2xl">✓</span>
                 </div>
                 <h3 className="font-primary text-xl font-bold text-[#191970] dark:text-white mb-2">Inquiry Received.</h3>
                 <p className="text-gray-600 dark:text-gray-400 font-light text-sm">Thank you for reaching out. A member of the GTS team will review your project details and contact you shortly.</p>
                 <button 
                    onClick={() => setSubmitStatus(null)}
                    className="mt-8 text-xs font-primary uppercase tracking-widest text-[#4e3612] dark:text-[#D4AF37] hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                 >
                   Send Another Message
                 </button>
               </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="from_name" placeholder="First Name" className="w-full border-b border-gray-300 dark:border-gray-700 py-2 focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 bg-transparent transition-colors text-[#191970] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm" required />
                  <input type="text" name="last_name" placeholder="Last Name" className="w-full border-b border-gray-300 dark:border-gray-700 py-2 focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 bg-transparent transition-colors text-[#191970] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm" required />
                </div>
                <input type="email" name="reply_to" placeholder="Email Address" className="w-full border-b border-gray-300 dark:border-gray-700 py-2 focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 bg-transparent transition-colors text-[#191970] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm" required />
                <textarea name="message" placeholder="Tell us about your project..." rows="4" className="w-full border-b border-gray-300 dark:border-gray-700 py-2 focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 bg-transparent resize-none transition-colors text-[#191970] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm" required></textarea>
                
                {submitStatus === 'error' && (
                  <p className="text-red-500 dark:text-red-400 text-xs font-primary tracking-wide">Something went wrong. Please try again or email us directly.</p>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`bg-[#191970] dark:bg-white text-white dark:text-[#191970] font-primary px-8 py-4 uppercase tracking-widest text-xs hover:bg-teal-600 dark:hover:bg-teal-400 dark:hover:text-white transition-colors w-full md:w-auto mt-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>

        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default About;