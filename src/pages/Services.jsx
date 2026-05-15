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

const serviceKits = [
  {
    id: 'positioning',
    title: 'Positioning Kit',
    theme: 'Foundational',
    accentText: 'text-[#4e3612] dark:text-[#D4AF37]',
    accentBg: 'bg-[#4e3612] dark:bg-[#D4AF37]',
    accentBorder: 'border-[#4e3612] dark:border-[#D4AF37]',
    hoverText: 'group-hover:text-white dark:group-hover:text-[#191970]',
    purpose: 'Brand identity, clarity, and foundational storytelling.',
    description: 'Establish a commanding digital presence. We craft the visual identity, messaging, and high-end aesthetics that communicate authority before your client even reads a word.',
    tiers: [
      {
        level: 'Standard',
        features: ['Primary & Secondary Logo', 'Basic Color & Typography', 'Simple Brand Statement', 'Up to 3-Page Website']
      },
      {
        level: 'Professional',
        features: ['Full Logo Suite & Brand Patterns', 'Expanded Color System', 'Full Brand Story & Pillars', 'Up to 5-Page Custom Website']
      },
      {
        level: 'Executive',
        features: ['Complete Identity System', 'Comprehensive Brand Strategy', 'Custom Icon Set', 'Up to 10-Page Website with SEO Setup']
      }
    ]
  },
  {
    id: 'stability',
    title: 'Stability & Structure Kit',
    theme: 'Operational',
    accentText: 'text-[#191970] dark:text-blue-400',
    accentBg: 'bg-[#191970] dark:bg-blue-500',
    accentBorder: 'border-[#191970] dark:border-blue-500',
    hoverText: 'group-hover:text-white',
    purpose: 'Operations, tech alignment, and workflow automation.',
    description: 'Build the foundation. We engineer robust operational workflows, automated client onboarding, and secure web architecture designed to handle scale without founder burnout.',
    tiers: [
      {
        level: 'Standard',
        features: ['Basic CRM Integration', 'Standard Contact Workflows', 'Client Portal Setup', 'Basic Security Protocols']
      },
      {
        level: 'Professional',
        features: ['Advanced CRM Automation', 'Automated Client Onboarding', 'Payment Gateway Integration', 'Dynamic Data Filtering']
      },
      {
        level: 'Executive',
        features: ['Custom API Integrations', 'Full Data Migration', 'Custom Dashboard Architecture', 'Team Technical Training']
      }
    ]
  },
  {
    id: 'growth',
    title: 'Growth Kit',
    theme: 'Expansion',
    accentText: 'text-teal-600 dark:text-teal-400',
    accentBg: 'bg-teal-500 dark:bg-teal-500',
    accentBorder: 'border-teal-500 dark:border-teal-500',
    hoverText: 'group-hover:text-white',
    purpose: 'Momentum, expansion, and aggressive lead generation.',
    description: 'Accelerate your impact. Conversion-optimized funnels, advanced SEO, and dynamic user experiences strategically designed to turn passive traffic into highly qualified leads.',
    tiers: [
      {
        level: 'Standard',
        features: ['Basic Lead Magnet Funnel', 'Standard Email Sequence', 'On-Page SEO Optimization', 'Analytics Integration']
      },
      {
        level: 'Professional',
        features: ['Multi-Step Sales Funnels', 'Advanced Drip Campaigns', 'Technical SEO Overhaul', 'Conversion Rate Optimization (CRO)']
      },
      {
        level: 'Executive',
        features: ['Comprehensive Ecosystem Growth', 'Custom Algorithm Targeting', 'A/B Testing Architecture', 'Dedicated Growth Consulting']
      }
    ]
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {serviceKits.map((kit, index) => (
            <motion.div 
              key={kit.id}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } } }}
              className="bg-gray-50 dark:bg-[#12141A] p-8 md:p-12 shadow-sm dark:shadow-none border border-gray-200 dark:border-white/5 relative group flex flex-col justify-between rounded-xl hover:shadow-xl dark:hover:border-white/20 transition-all duration-500"
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${kit.accentBg} rounded-t-xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              
              <div>
                <span className={`text-xs font-primary tracking-[0.2em] uppercase mb-4 block ${kit.accentText}`}>
                  {kit.theme}
                </span>
                <h3 className="font-primary text-2xl font-bold text-[#191970] dark:text-white mb-4">
                  {kit.title}
                </h3>
                <p className="font-primary text-sm font-semibold text-gray-800 dark:text-gray-300 mb-4">{kit.purpose}</p>
                <p className="text-gray-600 dark:text-gray-400 leading-editorial text-sm font-light mb-10">
                  {kit.description}
                </p>
              </div>
              
              <button 
                onClick={() => setSelectedKit(kit)}
                className={`relative overflow-hidden w-full py-4 border border-gray-300 dark:border-gray-700 rounded-lg group-hover:${kit.accentBorder} transition-colors duration-500`}
              >
                <span className={`relative z-10 font-primary text-xs uppercase tracking-widest text-[#191970] dark:text-white ${kit.hoverText} transition-colors duration-300`}>
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
            <h2 className="font-primary text-sm tracking-[0.2em] text-[#4e3612] dark:text-[#D4AF37] uppercase mb-4"></h2>
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
              className="bg-white dark:bg-[#12141A] w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl rounded-t-2xl md:rounded-2xl transition-colors duration-500"
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

              {/* Modal Content - Tiers Grid */}
              <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-100 dark:border-white/5">
                {selectedKit.tiers.map((tier, idx) => (
                  <div key={idx} className="flex flex-col bg-gray-50 dark:bg-[#1C1F26] p-6 rounded-xl border border-gray-100 dark:border-white/5 transition-colors duration-500">
                    <h4 className="font-primary text-lg font-bold text-[#191970] dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-white/10">
                      {tier.level} Level
                    </h4>
                    <ul className="space-y-4 flex-1">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start font-secondary text-sm text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                          <span className={`mr-3 ${selectedKit.accentText}`}>✦</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
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