// src/pages/Services.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/layout/footer.jsx';

import servicesHeroImg from '../assets/images/servicehero.jpg'; 

const PricingGridIllustration = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden flex items-center justify-center mix-blend-multiply dark:mix-blend-lighten">
       <motion.div 
         animate={{ rotate: 360 }} 
         transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
         className="w-[800px] h-[800px] border border-teal-500/30 rounded-full"
       />
       <motion.div 
         animate={{ rotate: -360 }} 
         transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
         className="absolute w-[600px] h-[600px] border border-[#191970]/20 dark:border-white/10 rounded-full border-dashed"
       />
    </div>
  );
};

// Updated Service Kits data structure based on your new packages
const serviceKits = [
  {
    
    title: 'Brand Foundation Kit',
    theme: 'Package 01',
    accentText: 'text-gray-500 dark:text-gray-400',
    accentBg: 'bg-[#191970] dark:bg-white',
    accentBorder: 'border-[#191970] dark:border-white',
    hoverText: 'group-hover:text-white dark:group-hover:text-[#191970]',
    purpose: 'Graphics Design Only — Essential Starter Kit',
    description: 'Perfect for new founders who need basic brand visuals to look credible and professional quickly.',
    outcome: 'A clean, cohesive visual identity that helps you show up professionally from day one.',
    features: [
      'Brand Discovery Session',
      'Premium Logo Suite (primary, secondary, submark)',
      'Brand Color System + Typography Pairings',
      'Mini Visual Identity Guide (PDF)',
      '5 Social Media Launch Graphics',
      '3 Caption Templates'
    ]
  },
  {
    
    title: 'Brand Identity Pro Kit',
    theme: 'Package 02',
    accentText: 'text-gray-500 dark:text-gray-400',
    accentBg: 'bg-[#191970] dark:bg-white',
    accentBorder: 'border-[#191970] dark:border-white',
    hoverText: 'group-hover:text-white dark:group-hover:text-[#191970]',
    purpose: 'Graphics + Full Brand Identity System',
    description: 'Perfect for founders who need a polished, premium brand identity with strategy, visuals, and messaging.',
    outcome: 'A fully developed, intentional brand identity designed to attract the right audience.',
    features: [
      'Everything in the Brand Foundation Kit',
      'Full Brand Strategy (voice, tone, positioning)',
      'Extended Logo System (patterns, icons, brand elements)',
      'Full Visual Identity Guide (20–25 pages)',
      '10 Editable Social Media Templates',
      'Brand Story + About Copywriting',
      'Launch Day Content Pack'
    ]
  },
  {
    
    title: 'Website Launch Kit',
    theme: 'Package 03',
    accentText: 'text-gray-500 dark:text-gray-400',
    accentBg: 'bg-[#191970] dark:bg-white',
    accentBorder: 'border-[#191970] dark:border-white',
    hoverText: 'group-hover:text-white dark:group-hover:text-[#191970]',
    purpose: 'Website Only — Modern, Conversion-Ready',
    description: 'Perfect for founders who already have a brand identity and need a professional website that converts.',
    outcome: 'A clean, modern website designed to showcase your business and turn visitors into clients.',
    features: [
      '5-Page Website (Home, About, Services, Contact, +1 Custom Page)',
      'Conversion-Focused Layout & Strategic Copywriting',
      'Mobile Optimization',
      'Basic SEO Setup',
      'Contact Form + Lead Capture Integration',
      '1-Hour Website Training Session'
    ]
  },
  {
    
    title: 'Brand + Website Launch Suite',
    theme: '⭐ Package 04',
    accentText: 'text-[#D4AF37] dark:text-[#D4AF37]',
    accentBg: 'bg-[#D4AF37] dark:bg-[#D4AF37]',
    accentBorder: 'border-[#D4AF37] dark:border-[#D4AF37]',
    hoverText: 'group-hover:text-[#191970] dark:group-hover:text-[#191970]',
    purpose: 'Flagship Package — Full Transformation',
    description: 'Perfect for founders ready for a complete brand and digital presence transformation.',
    outcome: 'A complete, elevated brand and digital ecosystem—built for visibility, credibility, and long-term growth.',
    features: [
      'Full Brand Identity Pro Kit',
      'Full Website Launch Kit',
      '3-Month Content Strategy Outline',
      '10 Additional Social Media Templates',
      'Brand Messaging Framework',
      'Full Website Copywriting'
    ],
    isFlagship: true
  }
];

const Services = () => {
  const [selectedKit, setSelectedKit] = useState(null);

  useEffect(() => {
    if (selectedKit) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => document.body.style.overflow = 'unset';
  }, [selectedKit]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0C10] font-secondary text-[#191970] dark:text-gray-100 relative selection:bg-teal-500 selection:text-white transition-colors duration-500">
      
      {/* 1. Hero Section */}
      <section 
        className="relative pt-40 pb-20 px-6 lg:px-24 min-h-[80vh] md:min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${servicesHeroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 dark:from-[#0B0C10]/95 dark:via-[#0B0C10]/80 to-transparent z-0 pointer-events-none transition-colors duration-500"></div>
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-noise mix-blend-overlay"></div>
        
        <PricingGridIllustration />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="md:w-3/5 lg:w-1/2 flex flex-col items-start">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
              className="font-primary text-xs tracking-[0.3em] text-[#191970] dark:text-white uppercase mb-6 block font-semibold"
            >
              Our Capabilities
            </motion.h2>

            <div className="overflow-hidden mb-6">
              <motion.h1 
                initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                className="font-primary text-5xl md:text-6xl font-bold tracking-tight leading-tight text-[#191970] dark:text-white"
              >
                Strategic <br/> <span className="text-teal-600 dark:text-teal-400 italic font-light">Ecosystems.</span>
              </motion.h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}
              className="text-base md:text-lg text-[#191970]/80 dark:text-gray-300 leading-editorial font-light max-w-md"
            >
              We don't just build websites; we engineer comprehensive platforms. Choose the signature kit that aligns with your current stage of growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Service Kit Cards */}
      <section className="py-32 lg:py-48 px-6 lg:px-24 border-t border-gray-100 dark:border-white/5 bg-white dark:bg-[#0B0C10] transition-colors duration-500">
        {/* Changed grid-cols-3 to grid-cols-2 or 4 to fit 4 packages nicely */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {serviceKits.map((kit, index) => (
            <motion.div 
              key={kit.id}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.1 } } }}
              // Added conditional styling for the flagship package
              className={`${kit.isFlagship ? 'bg-[#191970] text-white border-[#191970] dark:bg-[#1C1F26] dark:border-white/20' : 'bg-gray-50 dark:bg-[#12141A] text-[#191970] dark:text-white border-gray-200 dark:border-white/5'} p-8 shadow-sm dark:shadow-none border relative group flex flex-col justify-between rounded-xl hover:shadow-xl transition-all duration-500`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${kit.accentBg} rounded-t-xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              
              <div>
                <span className={`text-[10px] font-primary tracking-[0.2em] uppercase mb-4 block ${kit.accentText}`}>
                  {kit.theme}
                </span>
                <h3 className={`font-primary text-2xl font-bold mb-4 ${kit.isFlagship ? 'text-white' : 'text-[#191970] dark:text-white'}`}>
                  {kit.title}
                </h3>
                <p className={`font-primary text-sm font-semibold mb-4 ${kit.isFlagship ? 'text-teal-400' : 'text-[#008080] dark:text-teal-400'}`}>
                  {kit.purpose}
                </p>
                <p className={`leading-editorial text-sm font-light mb-10 ${kit.isFlagship ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>
                  {kit.description}
                </p>
              </div>
              
              <button 
                onClick={() => setSelectedKit(kit)}
                className={`relative overflow-hidden w-full py-4 border rounded-lg group-hover:${kit.accentBorder} transition-colors duration-500 ${kit.isFlagship ? 'border-white/20' : 'border-gray-300 dark:border-gray-700'}`}
              >
                <span className={`relative z-10 font-primary text-xs uppercase tracking-widest transition-colors duration-300 ${kit.isFlagship ? 'text-white' : 'text-[#191970] dark:text-white'} ${kit.hoverText}`}>
                  View Deliverables
                </span>
                <div className={`absolute inset-0 ${kit.accentBg} translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.33,1,0.68,1] z-0`}></div>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Quiz CTA Section */}
      <section className="py-32 lg:py-48 px-6 bg-white dark:bg-[#0B0C10] text-center relative overflow-hidden border-t border-gray-100 dark:border-white/5 transition-colors duration-500">
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-primary text-sm tracking-[0.2em] text-[#4e3612] dark:text-[#D4AF37] uppercase mb-4">Diagnostic Tool</h2>
            <h3 className="font-primary text-3xl md:text-5xl font-bold mb-6 text-[#191970] dark:text-white">Not sure where to start?</h3>
            <p className="font-secondary text-base md:text-lg leading-editorial text-gray-600 dark:text-gray-400 mb-10 font-light max-w-2xl mx-auto">
              Take our 2-minute Discovery Quiz. We'll analyze your current brand infrastructure and recommend the exact systems you need to scale efficiently.
            </p>
            
            <div className="flex flex-col items-center">
              <motion.div 
                animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }} 
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="mb-4 text-teal-500"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </motion.div>
              
              <Link 
                to="/quiz"
                className="inline-block bg-[#191970] dark:bg-white text-white dark:text-[#191970] font-primary px-10 py-5 tracking-widest uppercase text-sm hover:bg-teal-600 dark:hover:bg-teal-400 transition-colors duration-500 shadow-xl rounded-lg"
              >
                Start Discovery Quiz
              </Link>
            </div>
            
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* OVERLAY MODAL FOR KIT DETAILS */}
      <AnimatePresence>
        {selectedKit && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-[#191970]/40 dark:bg-black/60 backdrop-blur-md px-0 md:px-6"
          >
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="bg-white dark:bg-[#12141A] w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl rounded-t-2xl md:rounded-2xl transition-colors duration-500"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white/95 dark:bg-[#12141A]/95 backdrop-blur-md z-20 flex justify-between items-center p-8 md:p-10 border-b border-gray-200 dark:border-white/10 transition-colors duration-500">
                <div>
                  <span className={`text-xs font-primary tracking-widest uppercase block mb-2 ${selectedKit.accentText}`}>
                    {selectedKit.theme}
                  </span>
                  <h3 className="font-primary text-2xl md:text-4xl font-bold text-[#191970] dark:text-white">{selectedKit.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedKit(null)}
                  className="w-12 h-12 bg-gray-100 dark:bg-white/5 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-2xl font-light text-gray-600 dark:text-gray-300"
                >
                  &times;
                </button>
              </div>

              {/* Modal Content - Single List Instead of Tiers */}
              <div className="p-8 md:p-10 border-b border-gray-100 dark:border-white/5">
                <div className="flex flex-col bg-gray-50 dark:bg-[#1C1F26] p-8 rounded-xl border border-gray-100 dark:border-white/5 transition-colors duration-500">
                  <h4 className="font-primary text-xl font-bold text-[#191970] dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-white/10">
                    What's Included
                  </h4>
                  <ul className="space-y-5">
                    {selectedKit.features.map((feature, i) => (
                      <li key={i} className="flex items-start font-secondary text-base text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                        <span className={`mr-4 text-xl ${selectedKit.accentText}`}>✦</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-10 pt-6 border-t border-gray-200 dark:border-white/10">
                    <h5 className="font-primary text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">Outcome</h5>
                    <p className="text-gray-800 dark:text-gray-200 italic font-light">{selectedKit.outcome}</p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-8 md:p-10 bg-white dark:bg-[#12141A] mt-auto flex flex-col md:flex-row items-center justify-between transition-colors duration-500">
                <p className="font-primary text-sm font-semibold text-[#191970] dark:text-white mb-6 md:mb-0 text-center md:text-left">
                  Ready to build the {selectedKit.title}?
                </p>
                <Link 
                  to="/booking"
                  onClick={() => setSelectedKit(null)}
                  className={`font-primary px-8 py-4 text-xs tracking-widest uppercase text-white dark:text-[#191970] rounded-lg ${selectedKit.accentBg} hover:opacity-90 transition-opacity`}
                >
                  Book Clarity Call
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Services;