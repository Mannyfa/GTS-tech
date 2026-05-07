// src/pages/Home.jsx
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/layout/Hero.jsx';
import footer from '../components/layout/footer.jsx';
import LeadCaptureModal from '../features/LeadCaptureModal.jsx';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resultsRef = useRef(null);

  // Parallax for the Testimonial Box
  const { scrollYProgress: resultsScroll } = useScroll({
    target: resultsRef,
    offset: ["start end", "end start"]
  });
  const testimonialY = useTransform(resultsScroll, [0, 1], ["20%", "-20%"]);

  // Luxury easing curve
  const customEase = [0.33, 1, 0.68, 1];

  const revealText = {
    hidden: { y: "120%" },
    visible: { y: 0, transition: { duration: 1.2, ease: customEase } }
  };

  const lineExpand = {
    hidden: { width: 0 },
    visible: { width: "100%", transition: { duration: 1.5, ease: customEase } }
  };

  return (
    <div className="min-h-screen bg-white font-secondary text-midnight selection:bg-electric selection:text-white">
      
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* 1. Brand Introduction - Editorial Text Masking */}
      <section className="py-32 md:py-48 px-6 lg:px-24 bg-softGray relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <div className="overflow-hidden mb-8">
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={revealText}
              className="font-primary text-3xl md:text-5xl lg:text-6xl font-medium text-midnight tracking-tight"
            >
              A Partner, <span className="text-teal italic font-light">Not Just a Vendor</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
            className="font-secondary leading-editorial text-lg md:text-2xl text-gray-600 max-w-4xl mx-auto font-light"
          >
            For ambitious founders navigating digital transformation, Grand Tech Solutions provides absolute clarity, robust structure, and high-end design. We merge innovation with global impact.
          </motion.div>
        </div>
      </section>

      {/* 2. Why GTS - Sticky Scroll Architecture */}
      <section className="py-32 md:py-48 px-6 lg:px-24 bg-white relative overflow-hidden">
        
        {/* NEW: Premium Grainy Noise Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none bg-noise mix-blend-multiply"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16 lg:gap-24 relative z-10">
          
          {/* Left Side: Sticky Header */}
          <div className="lg:sticky lg:top-40 lg:w-1/3 z-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
              <h2 className="font-primary text-xs tracking-[0.3em] text-teal uppercase mb-4">The GTS Advantage</h2>
              <h3 className="font-primary text-4xl md:text-6xl font-bold text-midnight leading-tight">
                Why <br className="hidden lg:block"/> Visionaries <br className="hidden lg:block"/> Choose Us.
              </h3>
            </motion.div>
          </div>

          {/* Right Side: Staggered Scrolling Cards */}
          <div className="lg:w-2/3 flex flex-col space-y-32 mt-16 lg:mt-0">
            
            {/* Value Prop 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20%" }}>
              <motion.div variants={lineExpand} className="h-[1px] bg-gray-300 mb-10" />
              <div className="flex flex-row items-start gap-4 md:gap-8 lg:gap-12">
                <span className="font-primary text-5xl md:text-6xl lg:text-7xl text-steelGold font-light leading-none mt-1">01</span>
                <div>
                  <h4 className="font-primary text-xl md:text-2xl font-bold text-midnight mb-3">Premium Aesthetics</h4>
                  <p className="text-gray-600 leading-editorial text-sm md:text-lg font-light">
                    We believe your digital presence should command authority. Every pixel is intentional, delivering a high-end, editorial feel that immediately builds trust with your audience.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Value Prop 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20%" }}>
              <motion.div variants={lineExpand} className="h-[1px] bg-gray-300 mb-10" />
              <div className="flex flex-row items-start gap-4 md:gap-8 lg:gap-12">
                <span className="font-primary text-5xl md:text-6xl lg:text-7xl text-steelGold font-light leading-none mt-1">02</span>
                <div>
                  <h4 className="font-primary text-xl md:text-2xl font-bold text-midnight mb-3">Scalable Systems</h4>
                  <p className="text-gray-600 leading-editorial text-sm md:text-lg font-light">
                    Beautiful design means nothing without structure. We engineer robust, tech-forward platforms designed to handle operational workflows and scale gracefully as your business grows.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Value Prop 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20%" }}>
              <motion.div variants={lineExpand} className="h-[1px] bg-gray-300 mb-10" />
              <div className="flex flex-row items-start gap-4 md:gap-8 lg:gap-12">
                <span className="font-primary text-5xl md:text-6xl lg:text-7xl text-steelGold font-light leading-none mt-1">03</span>
                <div>
                  <h4 className="font-primary text-xl md:text-2xl font-bold text-midnight mb-3">Conversion Driven</h4>
                  <p className="text-gray-600 leading-editorial text-sm md:text-lg font-light">
                    We design for impact. From subtle micro-interactions to seamless user journeys, our ecosystems are aggressively optimized to turn your web traffic into qualified leads.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      
      {/* 3. Client Results - Parallax Overlap */}
      <section ref={resultsRef} className="py-32 md:py-48 px-6 lg:px-24 bg-midnight text-white relative flex flex-col justify-center">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative w-full">
          
          {/* Left: Metrics */}
          <div className="lg:w-1/2 z-10 relative">
            <h2 className="font-primary text-xs tracking-[0.3em] text-softGray uppercase mb-6">Proven Results</h2>
            <div className="overflow-hidden mb-12">
              <motion.h3 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealText}
                className="font-primary text-4xl md:text-6xl font-bold leading-tight"
              >
                Transformations <br/> that <span className="text-electric italic font-light">drive growth.</span>
              </motion.h3>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }}
              className="grid grid-cols-2 gap-8 border-l border-gray-800 pl-8"
            >
              <div>
                <span className="font-primary text-5xl md:text-6xl font-bold text-teal block mb-2">40%</span>
                <span className="font-secondary text-xs text-gray-400 uppercase tracking-widest leading-relaxed">Avg. Conversion<br/>Increase</span>
              </div>
              <div>
                <span className="font-primary text-5xl md:text-6xl font-bold text-teal block mb-2">10x</span>
                <span className="font-secondary text-xs text-gray-400 uppercase tracking-widest leading-relaxed">System<br/>Efficiency</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Floating Parallax Testimonial (RESPONSIVE FLOAT FIX) */}
          <motion.div 
            style={{ y: testimonialY }}
            className="w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] lg:w-1/2 bg-white text-midnight p-8 md:p-10 lg:p-16 shadow-2xl relative z-20 mx-4 sm:mx-8 lg:mx-0 lg:-ml-12 mt-[-60px] lg:mt-0 self-center lg:self-auto"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-steelGold to-electric"></div>
            <p className="font-secondary italic text-base md:text-xl text-gray-700 leading-editorial mb-8 md:mb-10 font-light">
              "Working with GTS changed everything. We were overwhelmed by our tech stack and had inconsistent branding. They stepped in as true partners, overhauled our entire system, and delivered a platform that not only looks incredible but captures leads on autopilot."
            </p>
            <div className="flex items-center space-x-4 md:space-x-5">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-100 rounded-full flex items-center justify-center text-xs text-gray-400 border border-gray-200 shrink-0">
                [Img]
              </div>
              <div>
                <h5 className="font-primary font-bold text-midnight tracking-wide text-sm md:text-base">Marcus T.</h5>
                <span className="text-[10px] md:text-xs text-gray-500 font-primary uppercase tracking-[0.2em] mt-1 block">Visionary Founder</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <footer />
    </div>
  );
};

export default Home;