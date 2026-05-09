// src/pages/About.jsx
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Footer from '../components/layout/footer.jsx';

import blessingImg from '../assets/images/BlesRaph.jpg';
import kimberlyImg from '../assets/images/KimNuo.jpg';

const About = () => {
  // --- Form State Management ---
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace these with your actual EmailJS IDs
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
          console.log('Success:', result.text);
          setSubmitStatus('success');
          setIsSubmitting(false);
          formRef.current.reset(); // Clear the form
      }, (error) => {
          console.error('Failed:', error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
      });
  };

  const revealVariants = {
    hidden: { y: "100%" },
    visible: { 
      y: 0, 
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } 
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-white font-secondary text-midnight overflow-hidden">
      
      {/* 1. Hero Section (About Company) - Staggered Text Reveal */}
      <section className="pt-48 pb-32 px-6 lg:px-24 bg-white relative">
        <div className="max-w-5xl mx-auto">
          <div className="overflow-hidden mb-4">
            <motion.h1 
              variants={revealVariants} initial="hidden" animate="visible"
              className="font-primary text-5xl md:text-7xl font-bold text-midnight tracking-tight"
            >
              We Shape <span className="text-steelGold italic font-light">The Future.</span>
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[2px] bg-electric my-8"
          />

          <motion.p 
            variants={fadeUpVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 leading-editorial max-w-3xl font-light"
          >
            A hybrid tech and creative studio helping small and growing businesses build digital presence, streamline workflows, and tell powerful stories. We blend design, technology, and strategy to create brands that scale.
          </motion.p>
        </div>
      </section>

      {/* 2. Mission & Vision - Asymmetrical Overlap */}
      <section className="py-24 px-6 lg:px-24 bg-softGray relative">
        <div className="max-w-7xl mx-auto relative flex flex-col lg:flex-row items-center lg:items-end justify-between">
          
          {/* Mission (Giant Typography) */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="lg:w-2/3 pb-12 lg:pb-0 z-10"
          >
            <span className="font-primary text-xs tracking-[0.3em] text-teal uppercase mb-6 block">Our Mission</span>
            <h2 className="font-primary text-3xl md:text-5xl leading-[1.3] text-midnight font-medium pr-4 lg:pr-12">
              To build powerful brands and digital systems that elevate voices, strengthen communities, and position businesses for <span className="text-electric border-b-2 border-electric pb-1">global influence,</span> sustainable growth, and long-term success.
            </h2>
          </motion.div>

          {/* Vision (Floating Contrast Box) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/3 bg-midnight text-white p-12 lg:-ml-20 z-20 shadow-2xl relative lg:translate-y-16"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-steelGold to-electric"></div>
            <span className="font-primary text-xs tracking-[0.3em] text-softGray uppercase mb-6 block">The Vision</span>
            <p className="font-secondary text-sm leading-editorial text-gray-300">
              To become a global creative-tech studio shaping brands that inspire, transform, and create impact.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 3. Core Values - Minimalist Grid Array */}
      <section className="py-32 px-6 lg:px-24 bg-midnight text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
            className="mb-16"
          >
            <h2 className="font-primary text-sm tracking-[0.2em] text-steelGold uppercase mb-4">The Standard</h2>
            <h3 className="font-primary text-4xl md:text-5xl font-bold">Our Core Values</h3>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-gray-800 pt-12"
          >
            {['Excellence', 'Creativity', 'Integrity', 'Innovation', 'Global Impact'].map((value, index) => (
              <motion.div key={value} variants={fadeUpVariants} className="flex flex-col">
                <span className="font-primary text-softGray/30 text-2xl font-light mb-4 block">0{index + 1}</span>
                <h4 className="font-primary text-xl tracking-wide text-white">{value}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Meet the Founders - Editorial Overlap Layout (RESPONSIVE UPDATES APPLIED HERE) */}
      <section className="py-40 px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
            className="text-center mb-32"
          >
            <h2 className="font-primary text-sm tracking-[0.2em] text-teal uppercase mb-4">Leadership</h2>
            <h3 className="font-primary text-4xl md:text-5xl font-bold text-midnight">Meet the Founders</h3>
          </motion.div>

          <div className="flex flex-col space-y-32 lg:space-y-48">
            
            {/* Founder 1: Blessing (Image Left, Box Right Overlap) */}
            <div className="relative flex flex-col md:flex-row items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
                className="w-full md:w-3/5 lg:w-1/2 z-10 aspect-[4/5] overflow-hidden bg-gray-100"
              >
                <motion.img 
                  whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
                  src={blessingImg} alt="Blessing Raphael" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
                className="w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-1/2 lg:w-2/5 bg-white p-8 md:p-10 lg:p-14 z-20 mx-4 sm:mx-8 md:mx-0 md:-ml-24 mt-[-80px] md:mt-auto shadow-2xl border border-gray-50 relative self-center md:self-auto"
              >
                <div className="w-12 h-[2px] bg-steelGold mb-6"></div>
                <h3 className="font-primary text-2xl md:text-3xl font-bold text-midnight">Blessing Raphael</h3>
                <p className="font-primary text-xs tracking-widest uppercase text-gray-400 mt-2 mb-6">COO / Project Manager</p>
                <p className="text-gray-600 leading-editorial text-sm">
                  Driving operational excellence and project clarity, Blessing ensures that every digital transformation is delivered with precision, structure, and warmth. He acts as the bridge between ambitious vision and flawless execution.
                </p>
              </motion.div>
            </div>

            {/* Founder 2: Kimberly (Image Right, Box Left Overlap) */}
            <div className="relative flex flex-col md:flex-row-reverse items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
                className="w-full md:w-3/5 lg:w-1/2 z-10 aspect-[4/5] overflow-hidden bg-gray-100"
              >
                <motion.img 
                  whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
                  src={kimberlyImg} alt="Kimberly Nuonum" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
                className="w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-1/2 lg:w-2/5 bg-midnight text-white p-8 md:p-10 lg:p-14 z-20 mx-4 sm:mx-8 md:mx-0 md:-mr-24 mt-[-80px] md:mt-auto shadow-2xl relative self-center md:self-auto"
              >
                <div className="w-12 h-[2px] bg-electric mb-6"></div>
                <h3 className="font-primary text-2xl md:text-3xl font-bold text-steelGold">Kimberly Nuonum</h3>
                <p className="font-primary text-xs tracking-widest uppercase text-softGray mt-2 mb-6">Founder / Leadership</p>
                <p className="text-gray-300 leading-editorial text-sm">
                  Leading the creative and technological vision, Kimberly engineers the high-end aesthetic and robust digital infrastructure that defines the GTS standard. Her focus is on systems that breathe and designs that command attention.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Contact Form & Details - Fade Up Animation */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants}
        className="py-24 px-6 lg:px-24 bg-softGray"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="flex flex-col justify-center space-y-10">
            <div>
              <h2 className="font-primary text-3xl font-bold mb-4">Let's Build Together.</h2>
              <p className="text-gray-600 leading-editorial max-w-md">
                Ready to elevate your digital presence? Reach out directly or fill out the form to start the conversation.
              </p>
            </div>
            
            <div className="space-y-6 font-primary text-sm tracking-wide">
              <div>
                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">Email Support</span>
                <a href="mailto:support@grandtech-solutions.com" className="text-electric hover:text-midnight transition-colors">support@grandtech-solutions.com</a>
              </div>
              <div>
                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">Direct Line</span>
                <a href="tel:229-454-7920" className="text-midnight hover:text-electric transition-colors">229-454-7920</a>
              </div>
              <div>
                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">Headquarters</span>
                <p className="text-midnight">30331 Atlanta, GA, United States</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 shadow-sm border border-gray-100 relative group overflow-hidden">
            {/* Subtle interactive border effect */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent group-focus-within:bg-electric transition-colors duration-500"></div>
            
            {submitStatus === 'success' ? (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} 
                 className="h-full flex flex-col items-center justify-center text-center py-12"
               >
                 <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-teal text-2xl">✓</span>
                 </div>
                 <h3 className="font-primary text-2xl font-bold text-midnight mb-2">Inquiry Received.</h3>
                 <p className="text-gray-600 font-light text-sm">Thank you for reaching out. A member of the GTS team will review your project details and contact you shortly.</p>
                 <button 
                    onClick={() => setSubmitStatus(null)}
                    className="mt-8 text-xs font-primary uppercase tracking-widest text-electric hover:text-midnight transition-colors"
                 >
                   Send Another Message
                 </button>
               </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input type="text" name="from_name" placeholder="First Name" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-electric bg-transparent transition-colors" required />
                  <input type="text" name="last_name" placeholder="Last Name" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-electric bg-transparent transition-colors" required />
                </div>
                <input type="email" name="reply_to" placeholder="Email Address" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-electric bg-transparent transition-colors" required />
                <textarea name="message" placeholder="Tell us about your project..." rows="4" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-electric bg-transparent resize-none transition-colors" required></textarea>
                
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-xs font-primary tracking-wide">Something went wrong. Please try again or email us directly.</p>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`bg-midnight text-white font-primary px-8 py-4 uppercase tracking-widest text-xs hover:bg-electric transition-colors w-full md:w-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>

        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default About;