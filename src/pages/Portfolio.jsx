// src/pages/Portfolio.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from '../components/layout/Footer.jsx';
import { client, urlFor } from '../client.js';

import portfolioHeroImg from '../assets/images/portfolioimg.jpg'; 

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Setup Scroll Tracking for Parallax
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

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Static Testimonial Data (You can replace this with Sanity data later if desired)
  const testimonials = [
    {
      id: 1,
      quote: "“GTS has helped me develop the online presence I need.  I honestly didn’t know what to do at all.”",
      name: " Racon Handyman",
      title: "Founder, Racon Handyman Services"
    },
    {
      id: 2,
      quote: "GTS allowed me to focus on serving my clients and not worry about Social Media,  they assisted me by taking it over and focusing on my niche, which has brought in more new clients",
      name: "Neesha’s Hair World",
      title: "Neesha, Owner of Neesha’s Hair World"
    },
    {
      id: 3,
      quote: "Working with Kim and Blessing has been a blessing!  They are helping me launch my new business and have the right systems set up from the start!  Thank you so much for taking this off my plate!",
      // name: "Sarah Jenkins",
      title: "Living Well Travel Creative"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0C10] font-secondary selection:bg-[#008080] selection:text-white transition-colors duration-500">
      
      {/* 1. Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-40 pb-20 px-6 lg:px-24 min-h-[75vh] md:min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#0B0C10] transition-colors duration-500"
      >
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

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 dark:from-[#0B0C10]/95 dark:via-[#0B0C10]/70 to-transparent z-10 pointer-events-none transition-colors duration-500"></div>
        <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none bg-noise mix-blend-overlay"></div>

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

      {/* 2. Projects Gallery
      <section className="py-24 lg:py-40 px-6 lg:px-24 bg-white dark:bg-[#0B0C10] min-h-[50vh] relative z-20 transition-colors duration-500">
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
      </section> */}

      {/* 3. NEW TESTIMONIALS SECTION */}
      <section className="py-32 lg:py-40 px-6 lg:px-24 bg-gray-50 dark:bg-[#12141A] border-t border-gray-200 dark:border-white/5 transition-colors duration-500 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-noise mix-blend-overlay"></div>
        <div className="absolute -left-32 top-0 w-[500px] h-[500px] bg-[#008080]/5 dark:bg-teal-900/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
            className="text-center mb-20"
          >
            
            <h3 className="font-primary text-4xl md:text-5xl font-bold text-[#191970] dark:text-white">Testimonials.</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }} 
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white dark:bg-[#1C1F26] p-10 rounded-2xl shadow-sm dark:shadow-none border border-gray-100 dark:border-white/5 flex flex-col justify-between h-full hover:-translate-y-2 transition-transform duration-500"
              >
                <div>
                  {/* Decorative Quote Mark */}
                  <span className="text-[#008080]/20 dark:text-teal-500/20 font-serif text-6xl leading-none absolute block -mt-4 -ml-2">"</span>
                  <p className="text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-8 relative z-10 pt-4">
                    {testimonial.quote}
                  </p>
                </div>
                
                <div className="border-t border-gray-100 dark:border-white/10 pt-6 mt-auto">
                  <h4 className="font-primary font-bold text-[#191970] dark:text-white text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs font-primary uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-1">
                    {testimonial.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;