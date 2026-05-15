// src/pages/Portfolio.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from '../components/layout/footer.jsx';
import { client, urlFor } from '../client.js';

import portfolioHeroImg from '../assets/images/portfolioimg.jpg'; 

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // 1. Setup Scroll Tracking for Parallax
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const query = '*[_type == "project"] | order(order asc)';

    client.fetch(query)
      .then((data) => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const revealVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0C10] font-secondary selection:bg-[#008080] selection:text-white transition-colors duration-500">
      
      {/* 3. Wrap Hero in a ref and make sure it hides overflowing content */}
      <section 
        ref={heroRef}
        className="relative pt-40 pb-20 px-6 lg:px-24 min-h-[75vh] md:min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#0B0C10] transition-colors duration-500"
      >
        {/* 4. The Parallax Background Image Layer */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
        >
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url(${portfolioHeroImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </motion.div>

        {/* Soft white/dark gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 dark:from-[#0B0C10]/95 dark:via-[#0B0C10]/70 to-transparent z-10 pointer-events-none transition-colors duration-500"></div>
        <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none bg-noise mix-blend-overlay"></div>

        {/* Foreground Content */}
        <div className="max-w-7xl mx-auto w-full relative z-20">
          <div className="md:w-3/5 lg:w-1/2 flex flex-col items-start">
            <motion.h2 
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="font-primary text-xs tracking-[0.3em] text-[#008080] dark:text-teal-400 uppercase mb-6 block font-bold"
            >
              Case Studies
            </motion.h2>

            <div className="overflow-hidden mb-6">
              <motion.h1 
                variants={revealVariants} initial="hidden" animate="visible"
                className="font-primary text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-[#008080] dark:text-white"
              >
                Proof of <br/> <span className="italic font-light">Impact.</span>
              </motion.h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-editorial font-light max-w-md"
            >
              We build systems that scale and brands that command authority. Explore our recent case studies and digital transformations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Projects Gallery */}
      <section className="py-32 lg:py-48 px-6 lg:px-24 bg-white dark:bg-[#0B0C10] min-h-[50vh] relative z-20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-8 h-8 border-2 border-[#008080] dark:border-teal-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              {projects.map((project, index) => (
                <motion.div 
                  key={project._id}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="bg-gray-100 dark:bg-[#12141A] aspect-[4/3] w-full mb-8 overflow-hidden relative rounded-xl shadow-sm dark:shadow-none border border-gray-100 dark:border-white/5 transition-colors duration-500">
                    {project.mainImage && (
                      <img 
                        src={urlFor(project.mainImage).url()} 
                        alt={project.client}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-[#191970]/0 dark:bg-black/0 group-hover:bg-[#191970]/5 dark:group-hover:bg-black/20 transition-colors duration-500"></div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex flex-col space-y-4 px-2">
                    <span className="text-xs font-primary tracking-[0.2em] text-[#008080] dark:text-teal-400 uppercase font-bold">
                      {project.category}
                    </span>
                    <h3 className="font-primary text-2xl md:text-3xl font-bold text-[#191970] dark:text-white">
                      {project.client}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-editorial text-sm md:text-base font-light">
                      {project.description}
                    </p>
                    
                    {project.tags && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] font-primary uppercase tracking-widest bg-gray-50 dark:bg-[#151720] border border-gray-200 dark:border-white/10 px-3 py-1.5 text-gray-500 dark:text-gray-400 rounded-full group-hover:border-[#008080]/30 transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;