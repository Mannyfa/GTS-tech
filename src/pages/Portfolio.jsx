// src/pages/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/layout/footer.jsx';
import { client, urlFor } from '../client';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // GROQ query: Fetch all 'project' documents and order them
    const query = '*[_type == "project"] | order(order asc)';

    client.fetch(query)
      .then((data) => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="min-h-screen bg-white font-secondary text-midnight">
      
      <section className="bg-midnight text-white py-32 px-6 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="font-primary text-4xl md:text-6xl font-bold mb-6"
          >
            Proof of <span className="text-electric italic font-light">Impact.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-softGray leading-editorial max-w-2xl font-light"
          >
            We build systems that scale and brands that command authority. Explore our recent case studies and digital transformations.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-24 bg-softGray min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-8 h-8 border-2 border-electric border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {projects.map((project, index) => (
                <motion.div 
                  key={project._id}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gray-200 aspect-[4/3] w-full mb-6 overflow-hidden relative">
                    {project.mainImage && (
                      <img 
                        src={urlFor(project.mainImage).url()} 
                        alt={project.client}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-midnight/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <span className="text-xs font-primary tracking-[0.2em] text-teal uppercase">
                      {project.category}
                    </span>
                    <h3 className="font-primary text-2xl font-bold text-midnight">
                      {project.client}
                    </h3>
                    <p className="text-gray-600 leading-editorial text-sm font-light">
                      {project.description}
                    </p>
                    
                    {project.tags && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] font-primary uppercase tracking-widest bg-white border border-gray-200 px-2 py-1 text-gray-500">
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