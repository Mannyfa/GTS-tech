// src/pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/layout/Footer';

// Data strictly adhering to the requested Service Kits[cite: 1]
const serviceKits = [
  {
    title: "Positioning",
    description: "Establish a commanding digital presence. We craft the visual identity, messaging, and high-end aesthetics that communicate authority.",
    tier: "Tier I",
    priceIndicator: "Starting at $2,500"
  },
  {
    title: "Stability & Structure",
    description: "Build the foundation. Robust operational workflows, data management, and secure web architecture designed to handle scale.",
    tier: "Tier II",
    priceIndicator: "Starting at $5,000"
  },
  {
    title: "Growth",
    description: "Accelerate your impact. Conversion-optimized funnels, advanced SEO, and dynamic user experiences that turn traffic into qualified leads.",
    tier: "Tier III",
    priceIndicator: "Starting at $8,500"
  },
  {
    title: "Combo (Full System)",
    description: "The ultimate transformation. A comprehensive merging of positioning, robust technical structure, and aggressive growth strategies.",
    tier: "Enterprise",
    priceIndicator: "Custom Quote"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-softGray font-secondary text-midnight">
      
      {/* 1. Hero Section[cite: 1] */}
      <section className="bg-midnight text-white py-32 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-primary text-4xl md:text-6xl font-bold mb-6"
          >
            Strategic <span className="text-teal">Digital Ecosystems.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-softGray leading-editorial max-w-2xl mx-auto"
          >
            We don't just build websites; we engineer comprehensive platforms that merge innovation with global impact. Choose the kit that fits your current stage of growth.
          </motion.p>
        </div>
      </section>

      {/* 2. Service Kit Cards & 3. Pricing Tier Indicators[cite: 1] */}
      <section className="py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceKits.map((kit, index) => (
              <motion.div 
                key={kit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-10 md:p-14 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-primary tracking-[0.2em] text-electric uppercase mb-4 block">
                    {kit.tier}
                  </span>
                  <h3 className="font-primary text-2xl font-bold text-midnight mb-4">
                    {kit.title}
                  </h3>
                  <p className="text-gray-600 leading-editorial mb-8">
                    {kit.description}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <span className="font-secondary text-sm text-gray-500 font-medium">
                    {kit.priceIndicator}
                  </span>
                  <button className="text-xs font-primary tracking-widest uppercase text-midnight hover:text-teal transition-colors flex items-center group">
                    Learn More 
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Discovery Quiz CTA[cite: 1] */}
      <section className="bg-electric py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="font-primary text-3xl md:text-5xl font-bold mb-6">
            Not sure where to start?
          </h2>
          <p className="font-secondary text-lg leading-editorial mb-10 opacity-90">
            Take our 2-minute Discovery Quiz. We'll analyze your current brand infrastructure and recommend the exact systems you need to scale efficiently.
          </p>
          <button className="bg-midnight text-white font-primary px-10 py-5 rounded-sm tracking-widest uppercase text-sm hover:bg-white hover:text-midnight transition-colors duration-300 shadow-lg">
            Start Discovery Quiz
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;