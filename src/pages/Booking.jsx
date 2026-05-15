// src/pages/Booking.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/layout/footer.jsx';

import bookingHeroImg from '../assets/images/hero2.jpg'; 

const Booking = () => {
  const revealVariants = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0C10] font-secondary text-[#191970] dark:text-gray-100 overflow-hidden selection:bg-teal-500 selection:text-white transition-colors duration-500">
      
      {/* 1. Hero Section */}
      <section 
        className="relative pt-40 pb-20 px-6 lg:px-24 min-h-[70vh] md:min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${bookingHeroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 dark:from-[#0B0C10]/95 dark:via-[#0B0C10]/80 to-transparent z-0 pointer-events-none transition-colors duration-500"></div>
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-noise mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="md:w-3/5 lg:w-1/2 flex flex-col items-start pt-10 lg:pt-0">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
              className="font-primary text-xs tracking-[0.3em] text-[#191970] dark:text-[#D4AF37] uppercase mb-6 block font-semibold"
            >
              Consultation
            </motion.h2>
            
            <div className="overflow-hidden mb-8">
              <motion.h1 
                variants={revealVariants} initial="hidden" animate="visible"
                className="font-primary text-5xl md:text-6xl lg:text-7xl font-bold text-[#191970] dark:text-white tracking-tight leading-tight"
              >
                Claim Your <br/> <span className="italic font-light">Clarity.</span>
              </motion.h1>
            </div>
            
            <motion.p 
              variants={fadeUpVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}
              className="text-base md:text-lg text-[#191970]/80 dark:text-gray-300 leading-editorial font-light max-w-md"
            >
              Schedule a complimentary 30-minute discovery call to map out the digital architecture and brand positioning your business needs to scale.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Main Booking Architecture */}
      <section className="py-24 lg:py-48 px-4 sm:px-6 lg:px-24 relative bg-white dark:bg-[#0B0C10] transition-colors duration-500">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Expectations & Trust */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants}
            className="lg:w-5/12 flex flex-col space-y-16"
          >
            <div>
              <h3 className="font-primary text-2xl md:text-3xl font-bold mb-10 text-[#008080] dark:text-teal-400">What happens next?</h3>
              
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Vision Alignment', desc: 'We will discuss your current bottlenecks, brand positioning, and where you want to take your business in the next 12 months.' },
                  { step: '02', title: 'System Audit', desc: 'A brief, live review of your existing digital infrastructure to identify immediate gaps in your tech stack or user experience.' },
                  { step: '03', title: 'Strategic Roadmap', desc: 'You will leave the call with actionable clarity on the exact service tier or custom system required for your transformation.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-6 group">
                    <span className="font-primary text-teal-600 dark:text-teal-500 font-light text-2xl group-hover:scale-110 transition-transform">{item.step}</span>
                    <div>
                      <h4 className="font-primary font-bold text-[#008080] dark:text-teal-300 mb-2 text-lg">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-editorial font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro-Testimonial */}
            <div className="bg-gray-50 dark:bg-[#12141A] p-8 shadow-sm dark:shadow-none border border-gray-200 dark:border-white/5 relative rounded-xl transition-colors duration-500">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#008080] dark:bg-teal-500 rounded-l-xl"></div>
              <p className="font-secondary italic text-gray-700 dark:text-gray-300 leading-editorial mb-6 text-sm">
                "The clarity I got from just the initial consultation was worth its weight in gold. GTS doesn't just build websites; they architect your entire business flow."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white dark:bg-[#1C1F26] border border-gray-200 dark:border-white/10 rounded-full flex items-center justify-center text-[10px] text-gray-400">IMG</div>
                <div>
                  <h5 className="font-primary font-bold text-xs text-[#008080] dark:text-teal-400">Sarah Jenkins</h5>
                  <span className="text-[10px] text-[#008080] dark:text-teal-500 font-primary uppercase tracking-[0.2em]">Lumina Wealth</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Scheduling Tool */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4 }}
            className="lg:w-7/12 w-full relative"
          >
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-48 h-48 bg-teal-100 dark:bg-teal-900/30 rounded-full blur-[60px] -z-10"
            />
            
            {/* FIXED HEIGHT FOR MOBILE: Changed min-h to h-screen/h-[800px] on mobile */}
            <div className="flex-1 w-full h-[850px] md:h-[700px] rounded-xl overflow-hidden bg-white dark:bg-white shadow-[0_20px_50px_rgba(25,25,112,0.05)] border border-gray-100 dark:border-none">
              <iframe
                src="https://calendly.com/kim-grandtech-solutions/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule Consultation"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Quiz CTA Section */}
      <section className="py-32 lg:py-48 px-6 bg-white dark:bg-[#0B0C10] text-center relative overflow-hidden border-t border-gray-100 dark:border-white/5 transition-colors duration-500">
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}>
            
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
    </div>
  );
};

export default Booking;