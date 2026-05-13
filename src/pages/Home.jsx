// src/pages/Home.jsx
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/layout/Hero.jsx';
import Footer from '../components/layout/footer.jsx'; 
import LeadCaptureModal from '../features/LeadCaptureModal.jsx';


import introImg from '../assets/images/homeimg.jpg'; 

// =========================================================================
// CUSTOM ANIMATION COMPONENTS 
// =========================================================================

const SplitText = ({ text, className, justify = "center" }) => {
  const words = text.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };
  const child = {
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
    hidden: { opacity: 0, y: 30 },
  };

  return (
    <motion.div 
      style={{ display: "flex", flexWrap: "wrap", justifyContent: justify }} 
      variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl transition-transform duration-500 hover:-translate-y-2 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(20, 184, 166, 0.08), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

// =========================================================================
// MAIN HOME COMPONENT
// =========================================================================

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resultsRef = useRef(null);

  const { scrollYProgress: resultsScroll } = useScroll({
    target: resultsRef,
    offset: ["start end", "end start"]
  });
  const testimonialY = useTransform(resultsScroll, [0, 1], ["20%", "-20%"]);

  const customEase = [0.33, 1, 0.68, 1];

  const revealText = {
    hidden: { y: "120%" },
    visible: { y: 0, transition: { duration: 1.2, ease: customEase } }
  };

  return (
    <div className="min-h-screen bg-white font-secondary text-[#191970] selection:bg-teal-500 selection:text-white">
      
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* 1. Brand Introduction */}
      <section className="py-32 lg:py-48 px-6 lg:px-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 text-left z-10">
            <div className="overflow-hidden mb-6">
              <motion.h2 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={revealText}
                className="font-primary text-3xl md:text-4xl lg:text-5xl font-medium text-[#191970] tracking-tight leading-tight"
              >
                A Partner, <br className="hidden md:block"/> <span className="text-teal-600 italic font-light">Not Just a Vendor</span>
              </motion.h2>
            </div>
            <SplitText 
              text="For ambitious founders navigating digital transformation, Grand Tech Solutions provides absolute clarity, robust structure, and high-end design. We merge innovation with global impact."
              className="font-secondary leading-editorial text-base md:text-lg text-gray-600 font-light"
              justify="flex-start" 
            />
          </div>
          
          {/* Right Aligned Image Replacement */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-md lg:max-w-lg aspect-square lg:aspect-auto lg:h-[500px] overflow-hidden rounded-2xl shadow-xl border border-gray-100"
            >
              {/* Subtle decorative offset block behind the image */}
              <div className="absolute inset-0 bg-teal-500/5 mix-blend-multiply pointer-events-none"></div>
              
              <img 
                src={introImg} 
                alt="Grand Tech Solutions Transformation" 
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Why GTS */}
      <section className="py-32 lg:py-48 px-6 lg:px-24 bg-white relative border-t border-gray-100">
        <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-noise mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16 lg:gap-24 relative z-10">
          <div className="lg:sticky lg:top-40 lg:w-1/3 z-10 self-start h-fit">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
              <h2 className="font-primary text-xs tracking-[0.3em] text-[#D4AF37] uppercase mb-4">The GTS Advantage</h2>
              <h3 className="font-primary text-3xl md:text-4xl lg:text-5xl font-bold text-[#191970] leading-tight">
                Why <br className="hidden lg:block"/> Visionaries <br className="hidden lg:block"/> Choose Us.
              </h3>
            </motion.div>
          </div>
          <div className="lg:w-2/3 flex flex-col space-y-12 mt-16 lg:mt-0">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.8 }}>
              <SpotlightCard className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <span className="font-primary text-4xl md:text-5xl lg:text-6xl text-[#D4AF37] font-light leading-none mt-1">01</span>
                  <div>
                    <h4 className="font-primary text-lg md:text-xl font-bold text-[#191970] mb-2">Premium Aesthetics</h4>
                    <p className="text-gray-600 leading-editorial text-sm md:text-base font-light">
                      We believe your digital presence should command authority. Every pixel is intentional, delivering a high-end, editorial feel that immediately builds trust with your audience.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.8, delay: 0.1 }}>
              <SpotlightCard className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <span className="font-primary text-4xl md:text-5xl lg:text-6xl text-[#D4AF37] font-light leading-none mt-1">02</span>
                  <div>
                    <h4 className="font-primary text-lg md:text-xl font-bold text-[#191970] mb-2">Scalable Systems</h4>
                    <p className="text-gray-600 leading-editorial text-sm md:text-base font-light">
                      Beautiful design means nothing without structure. We engineer robust, tech-forward platforms designed to handle operational workflows and scale gracefully as your business grows.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.8, delay: 0.2 }}>
              <SpotlightCard className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <span className="font-primary text-4xl md:text-5xl lg:text-6xl text-[#D4AF37] font-light leading-none mt-1">03</span>
                  <div>
                    <h4 className="font-primary text-lg md:text-xl font-bold text-[#191970] mb-2">Conversion Driven</h4>
                    <p className="text-gray-600 leading-editorial text-sm md:text-base font-light">
                      We design for impact. From subtle micro-interactions to seamless user journeys, our ecosystems are aggressively optimized to turn your web traffic into qualified leads.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Services Overview - Off-White Background with Teal/Navy Typography */}
      <section className="py-32 lg:py-48 px-6 lg:px-24 bg-gray-50 border-t border-gray-200 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-gray-200 pb-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="font-primary text-xs tracking-[0.3em] text-[#4e3612] uppercase mb-4">Service Ecosystem</h2>
              <h3 className="font-primary text-3xl md:text-4xl lg:text-5xl font-bold text-[#191970] leading-tight">
                Tailored Solutions <br/> for Every Stage.
              </h3>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <a href="/services" className="inline-flex items-center gap-3 text-sm font-primary uppercase tracking-widest text-[#008080] hover:text-teal-600 transition-colors">
                View All Packages
                <span className="w-6 h-[1px] bg-teal-500"></span>
              </a>
            </motion.div>
          </div>

          {/* Service Cards Grid - Using Solid White cards against the Off-White background */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Positioning Kit */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
              className="group p-8 md:p-10 bg-white border border-gray-200  hover:border-[#008080]/50 transition-colors duration-500 rounded-xl shadow-sm hover:shadow-md"
            >
              <span className="font-primary text-3xl text-[#D4AF37] font-light mb-6 block">01</span>
              <h4 className="font-primary text-xl font-bold text-[#008080] mb-4">Positioning Kit</h4>
              <p className="text-gray-600 text-sm md:text-base font-light leading-editorial mb-8">
                Establish a dominant visual identity and brand presence. We craft high-end aesthetics that immediately build trust and distinguish you in the marketplace.
              </p>
              <ul className="space-y-3 font-secondary text-sm text-gray-700">
                <li className="flex items-center gap-3"><span className="text-teal-500 text-lg">✓</span> Brand Strategy</li>
                <li className="flex items-center gap-3"><span className="text-teal-500 text-lg">✓</span> Visual Identity</li>
                <li className="flex items-center gap-3"><span className="text-teal-500 text-lg">✓</span> UI/UX Design</li>
              </ul>
            </motion.div>

            {/* Stability & Structure Kit */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="group p-8 md:p-10 bg-white border border-gray-200  hover:border-[#008080]/50 transition-colors duration-500 rounded-xl relative overflow-hidden shadow-sm hover:shadow-md"
            >
              {/* Highlight bar for the core technical offering */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#008080] transition-colors duration-500 group-hover:bg-teal-500"></div> 
              <span className="font-primary text-3xl text-[#D4AF37] font-light mb-6 block">02</span>
              <h4 className="font-primary text-xl font-bold text-[#008080] mb-4">Stability & Structure</h4>
              <p className="text-gray-600 text-sm md:text-base font-light leading-editorial mb-8">
                Beautiful design requires a robust foundation. We engineer seamless operational workflows and high-performance web architecture built to scale.
              </p>
              <ul className="space-y-3 font-secondary text-sm text-gray-700">
                <li className="flex items-center gap-3"><span className="text-teal-500 text-lg">✓</span> Web Architecture</li>
                <li className="flex items-center gap-3"><span className="text-teal-500 text-lg">✓</span> Operational Workflows</li>
                <li className="flex items-center gap-3"><span className="text-teal-500 text-lg">✓</span> Full-Stack Dev</li>
              </ul>
            </motion.div>

            {/* Growth Kit */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
              className="group p-8 md:p-10 bg-white border border-gray-200  hover:border-[#008080]/50 transition-colors duration-500 rounded-xl shadow-sm hover:shadow-md"
            >
              <span className="font-primary text-3xl text-[#D4AF37] font-light mb-6 block">03</span>
              <h4 className="font-primary text-xl font-bold text-[#008080] mb-4">Growth Kit</h4>
              <p className="text-gray-600 text-sm md:text-base font-light leading-editorial mb-8">
                Turn traffic into revenue. We implement conversion-optimized funnels, advanced SEO strategies, and automated lead generation systems.
              </p>
              <ul className="space-y-3 font-secondary text-sm text-gray-700">
                <li className="flex items-center gap-3"><span className="text-teal-500 text-lg">✓</span> SEO & Analytics</li>
                <li className="flex items-center gap-3"><span className="text-teal-500 text-lg">✓</span> Conversion Funnels</li>
                <li className="flex items-center gap-3"><span className="text-teal-500 text-lg">✓</span> Lead Generation</li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>
      
      {/* 4. Client Results - White Section */}
      <section ref={resultsRef} className="py-32 lg:py-48 px-6 lg:px-24 bg-white text-[#191970] relative flex flex-col justify-center overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative w-full">
          <div className="lg:w-1/2 z-10 relative">
            <h2 className="font-primary text-xs tracking-[0.3em] text-[#008080] text-bold uppercase mb-6">Proven Results</h2>
            <div className="overflow-hidden mb-10">
              <motion.h3 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealText}
                className="font-primary text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              >
                Transformations <br/> that <span className="text-teal-600 italic font-light">drive growth.</span>
              </motion.h3>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }}
              className="grid grid-cols-2 gap-8 border-l border-gray-200 pl-8"
            >
              <div>
                <span className="font-primary text-4xl md:text-5xl font-bold text-[#008080] block mb-2">40%</span>
                <span className="font-secondary text-xs text-gray-500 uppercase tracking-widest leading-relaxed">Avg. Conversion<br/>Increase</span>
              </div>
              <div>
                <span className="font-primary text-4xl md:text-5xl font-bold text-[#008080] block mb-2">10x</span>
                <span className="font-secondary text-xs text-gray-500 uppercase tracking-widest leading-relaxed">System<br/>Efficiency</span>
              </div>
            </motion.div>
          </div>
          <motion.div 
            style={{ y: testimonialY }}
            className="w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] lg:w-1/2 bg-white text-[#191970] p-8 md:p-10 shadow-[0_20px_50px_rgba(25,25,112,0.1)] relative z-20 mx-4 sm:mx-8 lg:mx-0 lg:-ml-12 mt-[-40px] lg:mt-0 self-center lg:self-auto rounded-xl border border-gray-100"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#008080] rounded-t-xl"></div>
            <p className="font-secondary italic text-sm md:text-base text-gray-700 leading-editorial mb-8 font-light">
              "Working with GTS changed everything. We were overwhelmed by our tech stack and had inconsistent branding. They stepped in as true partners, overhauled our entire system, and delivered a platform that not only looks incredible but captures leads on autopilot."
            </p>
            <div className="flex items-center space-x-4 md:space-x-5">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-xs text-gray-400 border border-gray-200 shrink-0">
                [Img]
              </div>
              <div>
                <h5 className="font-primary font-bold text-[#008080] tracking-wide text-sm">Marcus T.</h5>
                <span className="text-[10px] text-teal-600 font-primary uppercase tracking-[0.2em] mt-1 block">Visionary Founder</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;