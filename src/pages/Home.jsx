// src/pages/Home.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/layout/Hero.jsx';
import Footer from '../components/layout/footer.jsx'; 
import LeadCaptureModal from '../features/LeadCaptureModal.jsx';

// =========================================================================
// IMAGE IMPORTS (Update these paths with your actual images)
// =========================================================================
import problemImg from '../assets/images/problem.jpeg'; 
import solutionImg from '../assets/images/solu.jpeg'; 
import processImg1 from '../assets/images/process.jpeg'; 
import processImg2 from '../assets/images/portfolioimg.jpg'; 
import finalCtaImg from '../assets/images/ctahero.jpeg'; 

// =========================================================================
// CUSTOM ANIMATION COMPONENTS 
// =========================================================================
const SplitText = ({ text, className, justify = "center" }) => {
  const words = text.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
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
        <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>{word}</motion.span>
      ))}
    </motion.div>
  );
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// =========================================================================
// MAIN HOME COMPONENT
// =========================================================================
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const revealText = {
    hidden: { y: "120%" },
    visible: { y: 0, transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] } }
  };

  const ctaRef = useRef(null);
  const { scrollYProgress: ctaScroll } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });
  const ctaImageY = useTransform(ctaScroll, [0, 1], ["-10%", "10%"]);

  return (
    // Global wrapper with dark mode text color adjustments
    <div className="min-h-screen bg-white dark:bg-[#0B0C10] font-secondary text-[#191970] dark:text-gray-100 selection:bg-[#008080] selection:text-white transition-colors duration-500">
      
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* SECTION 2 — PROBLEM (Forced Side-by-Side) */}
      <section className="py-24 lg:py-48 px-4 lg:px-24 bg-white dark:bg-[#0B0C10] relative overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-4 lg:gap-24">
          <div className="w-1/2 text-left z-10">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="font-primary text-[10px] lg:text-xs tracking-[0.3em] text-[#008080] uppercase mb-4 lg:mb-6 block font-bold"
            >
             
            </motion.h2>
            <div className="overflow-hidden mb-4 lg:mb-8">
              <motion.h3 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={revealText}
                className="font-primary text-xl md:text-5xl lg:text-6xl font-medium text-[#191970] dark:text-white tracking-tight leading-tight"
              >
                You’re Busy <br/>
                <span className="text-[#D4AF37] italic font-light">Running Business.</span>
              </motion.h3>
            </div>
            
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3 lg:space-y-6">
              <motion.p variants={fadeUpVariants} className="text-xs md:text-xl text-[#191970] dark:text-gray-200 font-medium leading-relaxed">
                Your digital presence shouldn’t be another full-time job.
              </motion.p>
              <motion.p variants={fadeUpVariants} className="font-secondary leading-editorial text-[10px] md:text-lg text-gray-600 dark:text-gray-400 font-light">
                Most business owners don’t struggle because they lack skill—they struggle because they don’t have time.
              </motion.p>
              <motion.p variants={fadeUpVariants} className="font-secondary leading-editorial text-[10px] md:text-lg text-gray-600 dark:text-gray-400 font-light hidden sm:block">
                Your website, branding, and social media are essential—but they often get pushed aside. <strong className="text-[#191970] dark:text-white font-medium">That’s where we come in.</strong>
              </motion.p>
            </motion.div>
          </div>
          
          <div className="w-1/2 flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="relative w-full aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden rounded-xl lg:rounded-2xl shadow-xl dark:shadow-none border border-gray-100 dark:border-white/5"
            >
              <img src={problemImg} alt="Busy business owner" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SOLUTION (Forced Side-by-Side) */}
      <section className="py-24 lg:py-48 px-4 lg:px-24 bg-[#191970] dark:bg-[#07080A] text-white relative border-t border-gray-100 dark:border-white/10 overflow-hidden transition-colors duration-500">
         <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none bg-noise mix-blend-overlay"></div>
         <motion.div animate={{ rotate: 360 }} transition={{ duration: 150, repeat: Infinity, ease: "linear" }} className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-[#008080]/30 rounded-full opacity-50 z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-row-reverse items-center gap-4 lg:gap-24 relative z-10">
          
          <div className="w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="relative w-full aspect-[4/3] rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={solutionImg} alt="GTS Solution" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-[#191970]/20 mix-blend-multiply pointer-events-none"></div>
            </motion.div>
          </div>

          <div className="w-1/2 flex flex-col space-y-4 lg:space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-primary text-[10px] lg:text-xs tracking-[0.3em] text-[#D4AF37] uppercase font-bold"
            >
              
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-primary text-xl md:text-4xl lg:text-5xl font-bold leading-tight text-white"
            >
              We Handle the Digital Side—So You Can Focus.
            </motion.h3>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3 lg:space-y-6">
               <motion.p variants={fadeUpVariants} className="text-gray-300 leading-editorial text-[10px] md:text-lg font-light">
                Grand Tech Solutions provides professional branding, website development, and digital content support.
              </motion.p>
              <motion.p variants={fadeUpVariants} className="text-[#D4AF37] leading-editorial text-xs md:text-xl font-medium hidden sm:block">
                We don’t just design—we help you show up confidently and consistently online.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SERVICES SNAPSHOT */}
      <section className="py-24 bg-gray-50 dark:bg-[#12141A] border-b border-gray-200 dark:border-white/10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="text-center mb-16">
             
             <h3 className="font-primary text-3xl md:text-4xl font-bold text-[#191970] dark:text-white">What We Help With</h3>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {[
              "Website design and development",
              "Branding and logo design",
              "Social media setup and management",
              "Graphic design and marketing materials",
              "Content creation and video support"
            ].map((service, idx) => (
              <motion.div 
                key={idx} variants={fadeUpVariants}
                className="bg-white dark:bg-[#1C1F26] px-6 py-4 rounded-full border border-gray-200 dark:border-white/10 shadow-sm text-sm md:text-base text-gray-700 dark:text-gray-300 font-secondary flex items-center gap-3 transition-colors duration-500"
              >
                <span className="text-[#008080]">✦</span> {service}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — PACKAGES */}
      <section className="py-32 lg:py-48 px-6 lg:px-24 bg-white dark:bg-[#0B0C10] relative transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="text-center mb-24">
            
            <h3 className="font-primary text-3xl md:text-5xl font-bold text-[#191970] dark:text-white">Choose the Right Package.</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* PACKAGE 01 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white dark:bg-[#151720] p-8 md:p-10 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none hover:shadow-xl dark:hover:border-[#008080]/50 transition-all duration-500 flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#191970] dark:bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 font-bold mb-2">Package 01</span>
              <h4 className="font-primary text-2xl font-bold text-[#191970] dark:text-white mb-2">Brand Foundation Kit</h4>
              <p className="text-[#008080] text-sm font-medium mb-8">Graphics Design Only — Essential Starter Kit</p>
              
              <div className="mb-8 flex-grow">
                <p className="text-sm font-bold text-gray-900 dark:text-gray-200 mb-3 uppercase tracking-wider">Perfect For:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-light">New founders who need basic brand visuals to look credible and professional quickly.</p>
                
                <p className="text-sm font-bold text-gray-900 dark:text-gray-200 mb-3 uppercase tracking-wider">What's Included:</p>
                <ul className="space-y-3 mb-6">
                  {['Brand Discovery Session', 'Premium Logo Suite', 'Brand Color System + Typography', 'Mini Visual Identity Guide (PDF)', '5 Social Media Launch Graphics', '3 Caption Templates'].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700 dark:text-gray-300 font-light"><span className="text-[#D4AF37] mr-3">✓</span> {item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-[#1C1F26] p-4 rounded-lg mt-auto border border-gray-100 dark:border-white/5 transition-colors">
                <p className="text-xs font-bold text-[#191970] dark:text-white uppercase tracking-wider mb-1">Outcome:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-light">A clean, cohesive visual identity that helps you show up professionally from day one.</p>
              </div>
            </motion.div>

            {/* PACKAGE 02 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-white dark:bg-[#151720] p-8 md:p-10 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none hover:shadow-xl dark:hover:border-[#008080]/50 transition-all duration-500 flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#191970] dark:bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 font-bold mb-2">Package 02</span>
              <h4 className="font-primary text-2xl font-bold text-[#191970] dark:text-white mb-2">Brand Identity Pro Kit</h4>
              <p className="text-[#008080] text-sm font-medium mb-8">Graphics + Full Brand Identity System</p>
              
              <div className="mb-8 flex-grow">
                <p className="text-sm font-bold text-gray-900 dark:text-gray-200 mb-3 uppercase tracking-wider">Perfect For:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-light">Founders who need a polished, premium brand identity with strategy, visuals, and messaging.</p>
                
                <p className="text-sm font-bold text-gray-900 dark:text-gray-200 mb-3 uppercase tracking-wider">What's Included:</p>
                <ul className="space-y-3 mb-6">
                  {['Everything in Foundation Kit', 'Full Brand Strategy', 'Extended Logo System', 'Full Visual Identity Guide', '10 Editable Social Templates', 'Brand Story + About Copywriting', 'Launch Day Content Pack'].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700 dark:text-gray-300 font-light"><span className="text-[#D4AF37] mr-3">✓</span> {item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-[#1C1F26] p-4 rounded-lg mt-auto border border-gray-100 dark:border-white/5 transition-colors">
                <p className="text-xs font-bold text-[#191970] dark:text-white uppercase tracking-wider mb-1">Outcome:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-light">A fully developed, intentional brand identity designed to attract the right audience.</p>
              </div>
            </motion.div>

            {/* PACKAGE 03 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white dark:bg-[#151720] p-8 md:p-10 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none hover:shadow-xl dark:hover:border-[#008080]/50 transition-all duration-500 flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#191970] dark:bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 font-bold mb-2">Package 03</span>
              <h4 className="font-primary text-2xl font-bold text-[#191970] dark:text-white mb-2">Website Launch Kit</h4>
              <p className="text-[#008080] text-sm font-medium mb-8">Website Only — Modern, Conversion-Ready</p>
              
              <div className="mb-8 flex-grow">
                <p className="text-sm font-bold text-gray-900 dark:text-gray-200 mb-3 uppercase tracking-wider">Perfect For:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-light">Founders who already have a brand identity and need a professional website that converts.</p>
                
                <p className="text-sm font-bold text-gray-900 dark:text-gray-200 mb-3 uppercase tracking-wider">What's Included:</p>
                <ul className="space-y-3 mb-6">
                  {['5-Page Custom Website', 'Conversion-Focused Layout', 'Mobile Optimization', 'Basic SEO Setup', 'Contact Form + Lead Capture', '1-Hour Website Training Session'].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700 dark:text-gray-300 font-light"><span className="text-[#D4AF37] mr-3">✓</span> {item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-[#1C1F26] p-4 rounded-lg mt-auto border border-gray-100 dark:border-white/5 transition-colors">
                <p className="text-xs font-bold text-[#191970] dark:text-white uppercase tracking-wider mb-1">Outcome:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-light">A clean, modern website designed to showcase your business and turn visitors into clients.</p>
              </div>
            </motion.div>

            {/* PACKAGE 04 - FLAGSHIP (Remains unchanged for dark mode to keep emphasis) */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-[#191970] text-white p-8 md:p-10 rounded-2xl border border-[#191970] shadow-2xl flex flex-col h-full relative overflow-hidden group transform hover:-translate-y-2 transition-transform">
              <div className="absolute top-0 right-0 p-4"><span className="text-2xl">⭐</span></div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-2">Flagship Package</span>
              <h4 className="font-primary text-2xl font-bold text-white mb-2">Brand + Website Suite</h4>
              <p className="text-teal-400 text-sm font-medium mb-8">Full Transformation</p>
              
              <div className="mb-8 flex-grow">
                <p className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Perfect For:</p>
                <p className="text-sm text-gray-300 leading-relaxed mb-6 font-light">Founders ready for a complete brand and digital presence transformation.</p>
                
                <p className="text-sm font-bold text-white mb-3 uppercase tracking-wider">What's Included:</p>
                <ul className="space-y-3 mb-6">
                  {['Full Brand Identity Pro Kit', 'Full Website Launch Kit', '3-Month Content Strategy', '10 Extra Social Templates', 'Brand Messaging Framework', 'Full Website Copywriting'].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-300 font-light"><span className="text-teal-400 mr-3">✓</span> {item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg mt-auto border border-white/20">
                <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">Outcome:</p>
                <p className="text-sm text-white font-light">A complete, elevated brand and digital ecosystem—built for visibility, credibility, and long-term growth.</p>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center bg-gray-50 dark:bg-[#151720] p-8 rounded-xl border border-gray-200 dark:border-white/10 transition-colors duration-500">
             <p className="font-primary text-lg text-[#191970] dark:text-white mb-4">Not sure which package is right for you?</p>
             <Link to="/booking" className="inline-block bg-[#008080] text-white text-xs font-primary uppercase tracking-widest px-8 py-4 rounded hover:bg-[#191970] dark:hover:bg-white dark:hover:text-[#191970] transition-colors">
               Schedule a Consultation
             </Link>
          </motion.div>

        </div>
      </section>

      {/* SECTION 7 — OUR PROCESS (Forced Side-by-Side) */}
      <section className="py-24 lg:py-48 px-4 lg:px-24 bg-gray-50 dark:bg-[#12141A] border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
        <div className="max-w-7xl mx-auto flex flex-row gap-4 lg:gap-24 items-center">
          
          <div className="w-[40%] grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 relative">
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-xl lg:rounded-2xl overflow-hidden shadow-lg dark:shadow-none border dark:border-white/10 h-32 md:h-80 hidden lg:block lg:mt-12">
                <img src={processImg1} alt="Design process" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
             </motion.div>
             <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="rounded-xl lg:rounded-2xl overflow-hidden shadow-lg dark:shadow-none border dark:border-white/10 h-40 md:h-80">
                <img src={processImg2} alt="Strategy meeting" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
             </motion.div>
          </div>

          <div className="w-[60%] flex flex-col space-y-6 lg:space-y-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}>
              
              <h3 className="font-primary text-xl md:text-5xl font-bold text-[#191970] dark:text-white">How It Works.</h3>
            </motion.div>

            <div className="space-y-4 lg:space-y-8 relative before:absolute before:inset-0 before:ml-3 lg:before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 dark:before:via-gray-800 before:to-transparent">
              {[
                { step: '01', title: 'Discovery', desc: 'We learn about your business.' },
                { step: '02', title: 'Design', desc: 'We build your digital assets.' },
                { step: '03', title: 'Launch', desc: 'We prepare you to go live.' },
                { step: '04', title: 'Support', desc: 'We help you continue growing.', optional: true }
              ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                   <div className="flex items-center justify-center w-6 h-6 lg:w-10 lg:h-10 rounded-full border border-white dark:border-[#0B0C10] bg-[#008080] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-primary text-[10px] lg:text-sm font-bold z-10 transition-colors">
                     {item.step}
                   </div>
                   <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2.5rem)] p-3 lg:p-6 rounded-lg lg:rounded-xl border border-gray-100 dark:border-white/5 bg-white dark:bg-[#1C1F26] shadow-sm dark:shadow-none transition-all duration-300 group-hover:-translate-y-1">
                     <h4 className="font-primary font-bold text-[#191970] dark:text-white text-xs lg:text-base mb-1 flex items-center gap-1 lg:gap-2">
                       {item.title} 
                       {item.optional && <span className="text-[7px] lg:text-[9px] uppercase tracking-widest text-gray-400 font-light border border-gray-200 dark:border-gray-700 px-1 py-0.5 rounded-full">Opt</span>}
                     </h4>
                     <p className="text-[10px] lg:text-sm text-gray-600 dark:text-gray-400 font-light">{item.desc}</p>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 8 — RESULTS & SECTION 9 — FINAL CTA */}
      <section ref={ctaRef} className="relative py-32 lg:py-48 px-6 lg:px-24 overflow-hidden min-h-screen flex items-center">
        {/* Parallax Background */}
        <motion.div style={{ y: ctaImageY }} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
          <div className="w-full h-full bg-black/60" style={{ backgroundImage: `url(${finalCtaImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
        </motion.div>
        
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-[#191970]/80 dark:bg-[#050608]/90 mix-blend-multiply z-10 transition-colors duration-500"></div>
        <div className="absolute inset-0 z-10 opacity-[0.05] pointer-events-none bg-noise"></div>

        <div className="max-w-4xl mx-auto text-center relative z-20 flex flex-col items-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-primary text-xs tracking-[0.3em] text-[#D4AF37] uppercase mb-8 font-bold">
            
          </motion.h2>
          
          <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-primary text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Show Up Confidently.<br/> <span className="italic text-[#008080] font-light">Grow Consistently.</span>
          </motion.h3>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4 mb-16 text-gray-300 font-secondary font-light text-lg md:text-xl">
            <motion.p variants={fadeUpVariants}>When your brand and digital presence are aligned, everything becomes easier.</motion.p>
            <motion.p variants={fadeUpVariants} className="text-white font-medium">You attract better clients. You look more professional. You grow with confidence.</motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 p-10 md:p-16 rounded-2xl">
            <h4 className="font-primary text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Started?</h4>
            <p className="text-gray-300 font-light mb-8 text-sm md:text-base">If you’ve been putting off your website, branding, or digital presence, now is the time. Let’s build something that represents your business the right way.</p>
            <Link to="/booking" className="inline-block bg-[#D4AF37] text-[#191970] font-primary font-bold px-10 py-5 tracking-widest uppercase text-sm hover:bg-white transition-colors duration-500 shadow-xl rounded">
              Book Your Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;