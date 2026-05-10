// src/pages/Booking.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/layout/footer.jsx';

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
    <div className="min-h-screen bg-softGray font-secondary text-midnight overflow-hidden selection:bg-electric selection:text-white">
      
      {/* 1. Hero Section */}
      <section className="pt-48 pb-20 px-6 lg:px-24 bg-midnight text-white relative">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-noise mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-10">
          <div className="md:w-2/3">
            <h2 className="font-primary text-xs tracking-[0.3em] text-steelGold uppercase mb-6 block">Consultation</h2>
            <div className="overflow-hidden mb-6">
              <motion.h1 
                variants={revealVariants} initial="hidden" animate="visible"
                className="font-primary text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
              >
                Claim Your <br/> <span className="text-electric italic font-light">Clarity.</span>
              </motion.h1>
            </div>
          </div>
          <motion.div 
            variants={fadeUpVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}
            className="md:w-1/3"
          >
            <p className="text-lg text-gray-300 leading-editorial font-light">
              Schedule a complimentary 30-minute discovery call to map out the digital architecture and brand positioning your business needs to scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Booking Architecture (Split Screen) */}
      <section className="py-24 px-6 lg:px-24 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Expectations & Trust */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants}
            className="lg:w-5/12 flex flex-col space-y-16"
          >
            {/* What to Expect */}
            <div>
              <h3 className="font-primary text-2xl md:text-3xl font-bold mb-10 text-midnight">What happens next?</h3>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <span className="font-primary text-teal font-light text-2xl group-hover:scale-110 transition-transform">01</span>
                  <div>
                    <h4 className="font-primary font-bold text-midnight mb-2 text-lg">Vision Alignment</h4>
                    <p className="text-sm text-gray-600 leading-editorial font-light">We will discuss your current bottlenecks, brand positioning, and where you want to take your business in the next 12 months.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <span className="font-primary text-teal font-light text-2xl group-hover:scale-110 transition-transform">02</span>
                  <div>
                    <h4 className="font-primary font-bold text-midnight mb-2 text-lg">System Audit</h4>
                    <p className="text-sm text-gray-600 leading-editorial font-light">A brief, live review of your existing digital infrastructure to identify immediate gaps in your tech stack or user experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <span className="font-primary text-teal font-light text-2xl group-hover:scale-110 transition-transform">03</span>
                  <div>
                    <h4 className="font-primary font-bold text-midnight mb-2 text-lg">Strategic Roadmap</h4>
                    <p className="text-sm text-gray-600 leading-editorial font-light">You will leave the call with actionable clarity on the exact service tier or custom system required for your transformation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro-Testimonial for Trust Injection */}
            <div className="bg-white p-8 md:p-10 shadow-xl border border-gray-50 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-steelGold"></div>
              <p className="font-secondary italic text-gray-700 leading-editorial mb-6 text-sm">
                "The clarity I got from just the initial consultation was worth its weight in gold. GTS doesn't just build websites; they architect your entire business flow."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[10px] text-gray-400">IMG</div>
                <div>
                  <h5 className="font-primary font-bold text-xs text-midnight">Sarah Jenkins</h5>
                  <span className="text-[10px] text-gray-400 font-primary uppercase tracking-[0.2em]">Lumina Wealth</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Scheduling Tool */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4 }}
            className="lg:w-7/12 w-full"
          >
            <div className="flex-1 w-full h-full min-h-[700px] rounded-sm overflow-hidden bg-white">
  <iframe
   
    src="https://calendly.com/kim-grandtech-solutions/30min"
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

      <Footer />
    </div>
  );
};

export default Booking;