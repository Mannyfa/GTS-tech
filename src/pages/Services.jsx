// src/pages/Services.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/layout/footer.jsx';


const serviceKits = [
  {
    id: 'positioning',
    title: 'Positioning Kit',
    theme: 'Golden Cloud',
    accentText: 'text-steelGold',
    accentBg: 'bg-steelGold',
    accentBorder: 'border-steelGold',
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
    theme: 'Blue Cloud',
    accentText: 'text-electric',
    accentBg: 'bg-electric',
    accentBorder: 'border-electric',
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
    theme: 'Teal Cloud',
    accentText: 'text-teal',
    accentBg: 'bg-teal',
    accentBorder: 'border-teal',
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

  // Prevent background scrolling when modal is open
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
    <div className="min-h-screen bg-softGray font-secondary text-midnight relative">
      
      {/* 1. Hero Section */}
      <section className="bg-midnight text-white pt-48 pb-32 px-6 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-noise mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: "50%" }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="font-primary text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            Strategic <span className="text-teal italic font-light">Ecosystems.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl text-softGray leading-editorial max-w-2xl mx-auto font-light"
          >
            We don't just build websites; we engineer comprehensive platforms. Choose the signature kit that aligns with your current stage of growth.
          </motion.p>
        </div>
      </section>

      {/* 2. Service Kit Cards */}
      <section className="py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {serviceKits.map((kit, index) => (
            <motion.div 
              key={kit.id}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } } }}
              className="bg-white p-10 md:p-14 shadow-xl relative group flex flex-col justify-between"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1 ${kit.accentBg} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              
              <div>
                <span className={`text-xs font-primary tracking-[0.2em] uppercase mb-4 block ${kit.accentText}`}>
                  {kit.theme}
                </span>
                <h3 className="font-primary text-3xl font-bold text-midnight mb-4">
                  {kit.title}
                </h3>
                <p className="font-primary text-sm font-semibold text-gray-800 mb-4">{kit.purpose}</p>
                <p className="text-gray-600 leading-editorial text-sm font-light mb-10">
                  {kit.description}
                </p>
              </div>
              
              {/* Fancy CTA Button */}
              <button 
                onClick={() => setSelectedKit(kit)}
                className={`relative overflow-hidden w-full py-4 border border-gray-200 group-hover:${kit.accentBorder} transition-colors duration-500`}
              >
                <span className="relative z-10 font-primary text-xs uppercase tracking-widest text-midnight group-hover:text-white transition-colors duration-300">
                  View Deliverables
                </span>
                <div className={`absolute inset-0 ${kit.accentBg} translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.33,1,0.68,1] z-0`}></div>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Quiz CTA Section */}
      <section className="py-32 px-6 bg-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-primary text-sm tracking-[0.2em] text-teal uppercase mb-4">Diagnostic Tool</h2>
            <h3 className="font-primary text-4xl md:text-5xl font-bold mb-6 text-midnight">Not sure where to start?</h3>
            <p className="font-secondary text-lg leading-editorial text-gray-600 mb-10 font-light max-w-2xl mx-auto">
              Take our 2-minute Discovery Quiz. We'll analyze your current brand infrastructure and recommend the exact systems you need to scale efficiently.
            </p>
            <Link 
              to="/quiz"
              className="inline-block bg-midnight text-white font-primary px-10 py-5 tracking-widest uppercase text-sm hover:bg-electric transition-colors duration-500 shadow-2xl"
            >
              Start Discovery Quiz
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* OVERLAY MODAL FOR KIT DETAILS */}
      <AnimatePresence>
        {selectedKit && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-midnight/80 backdrop-blur-md px-0 md:px-6"
          >
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white z-20 flex justify-between items-center p-8 md:p-12 border-b border-gray-100">
                <div>
                  <span className={`text-xs font-primary tracking-widest uppercase block mb-2 ${selectedKit.accentText}`}>
                    {selectedKit.theme}
                  </span>
                  <h3 className="font-primary text-3xl md:text-4xl font-bold text-midnight">{selectedKit.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedKit(null)}
                  className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors text-2xl font-light text-midnight"
                >
                  &times;
                </button>
              </div>

              {/* Modal Content - Tiers Grid */}
              <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {selectedKit.tiers.map((tier, idx) => (
                  <div key={idx} className="flex flex-col">
                    <h4 className="font-primary text-xl font-bold text-midnight mb-6 pb-4 border-b border-gray-200">
                      {tier.level} Level
                    </h4>
                    <ul className="space-y-4 flex-1">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start font-secondary text-sm text-gray-600 font-light leading-relaxed">
                          <span className={`mr-3 ${selectedKit.accentText}`}>✦</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="p-8 md:p-12 bg-softGray mt-auto flex flex-col md:flex-row items-center justify-between">
                <p className="font-primary text-sm font-semibold text-midnight mb-6 md:mb-0 text-center md:text-left">
                  Ready to build the {selectedKit.title}?
                </p>
                <Link 
                  to="/booking"
                  onClick={() => setSelectedKit(null)}
                  className={`font-primary px-8 py-4 text-xs tracking-widest uppercase text-white ${selectedKit.accentBg} hover:opacity-90 transition-opacity`}
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