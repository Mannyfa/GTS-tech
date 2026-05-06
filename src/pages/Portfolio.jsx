// src/pages/Portfolio.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/layout/Footer';

// Dummy data for the Project Grid
const projects = [
  {
    id: 1,
    client: "Lumina Wealth",
    category: "Digital Transformation & Web App",
    description: "A complete structural overhaul and custom client dashboard for a premium financial advisory firm.",
    tags: ["React", "System Architecture", "UI/UX"]
  },
  {
    id: 2,
    client: "Aura Logistics",
    category: "Brand Positioning & Growth Systems",
    description: "Automated logistics tracking interface merged with an aggressive B2B lead generation funnel.",
    tags: ["Web Design", "Automation", "SEO"]
  },
  {
    id: 3,
    client: "Veritas Health",
    category: "Full Ecosystem (Combo)",
    description: "End-to-end digital architecture for a telehealth startup, focusing on security, scale, and patient trust.",
    tags: ["Platform Development", "Branding"]
  },
  {
    id: 4,
    client: "The Kingdom Initiative",
    category: "Mission-Aligned Infrastructure",
    description: "Digital presence and donor management system built for a high-impact faith-based organization.",
    tags: ["Web Platform", "System Integration"]
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white font-secondary text-midnight">
      
      {/* 1. Hero Section */}
      <section className="bg-midnight text-white py-32 px-6 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-primary text-4xl md:text-6xl font-bold mb-6"
          >
            Proof of <span className="text-electric">Impact.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-softGray leading-editorial max-w-2xl"
          >
            We build systems that scale and brands that command authority. Explore our recent case studies and digital transformations.
          </motion.p>
        </div>
      </section>

      {/* 2. Project Grid */}
      <section className="py-24 px-6 lg:px-24 bg-softGray">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image Placeholder (Editorial Style) */}
              <div className="bg-gray-200 aspect-video w-full mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-midnight/5 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="w-full h-full flex items-center justify-center text-gray-400 font-primary uppercase tracking-widest text-xs">
                  [ Project Visual ]
                </div>
              </div>
              
              <div className="flex flex-col space-y-3">
                <span className="text-xs font-primary tracking-[0.2em] text-teal uppercase">
                  {project.category}
                </span>
                <h3 className="font-primary text-2xl font-bold text-midnight">
                  {project.client}
                </h3>
                <p className="text-gray-600 leading-editorial text-sm">
                  {project.description}
                </p>
                
                {/* 3. Case Study Template Link[cite: 1] */}
                <div className="pt-4 flex items-center">
                  <span className="text-xs font-primary tracking-widest uppercase text-midnight border-b border-midnight pb-1 group-hover:text-electric group-hover:border-electric transition-colors">
                    Read Case Study
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;