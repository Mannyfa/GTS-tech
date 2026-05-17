// src/components/layout/GiftModal.jsx
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const GiftModal = ({ isOpen, onClose }) => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Make sure to use the same EmailJS credentials you used in About.jsx
    const serviceID = 'service_3p894ok'; 
    const templateID = 'template_n9cgx4q'; 
    const publicKey = 'e8NKqPBQPIh-fciZL';

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
          console.log('Success:', result.text);
          setSubmitStatus('success');
          setIsSubmitting(false);
          formRef.current.reset();
          
          // Auto-close after 3 seconds of success
          setTimeout(() => {
            onClose();
            setSubmitStatus(null);
          }, 3000);
      }, (error) => {
          console.error('Failed:', error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
      });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#191970]/60 dark:bg-black/80 backdrop-blur-sm px-4"
        >
          <motion.div 
            initial={{ y: 50, opacity: 0, scale: 0.95 }} 
            animate={{ y: 0, opacity: 1, scale: 1 }} 
            exit={{ y: 50, opacity: 0, scale: 0.95 }} 
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="bg-white dark:bg-[#12141A] w-full max-w-lg p-8 md:p-12 relative shadow-2xl rounded-2xl overflow-hidden transition-colors duration-500"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]"></div>

            {/* Close Button (Top Right X) */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            {submitStatus === 'success' ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                <div className="w-16 h-16 bg-teal-50 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                   <span className="text-teal-600 dark:text-teal-400 text-2xl">✓</span>
                </div>
                <h3 className="font-primary text-2xl font-bold text-[#191970] dark:text-white mb-2">Check your inbox!</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light text-sm">Your free gift is on its way to your email.</p>
              </motion.div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <span className="font-primary text-xs tracking-widest uppercase text-[#D4AF37] mb-2 block">A Gift For You</span>
                  <h3 className="font-primary text-2xl md:text-3xl font-bold text-[#191970] dark:text-white mb-4">
                    Hi, and welcome to Grand Tech Solutions.
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed font-light">
                    We’re glad you’re here. At GTS, we believe every founder deserves clarity, confidence, and support on their journey. As a thank‑you for stopping by, we’ve prepared a free gift to help you build with more direction and ease.
                    <br/><br/>
                    Join our email list to receive your gift and get ongoing insights designed to help you grow with excellence.
                  </p>
                </div>

                <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
                  <input 
                    type="text" 
                    name="user_name" 
                    placeholder="Your Name" 
                    required 
                    className="w-full bg-gray-50 dark:bg-[#1C1F26] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] dark:focus:border-[#D4AF37] text-[#191970] dark:text-white transition-colors"
                  />
                  <input 
                    type="email" 
                    name="user_email" 
                    placeholder="Your Email Address" 
                    required 
                    className="w-full bg-gray-50 dark:bg-[#1C1F26] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] dark:focus:border-[#D4AF37] text-[#191970] dark:text-white transition-colors"
                  />
                  
                  {submitStatus === 'error' && (
                    <p className="text-red-500 text-xs text-center">Something went wrong. Please try again.</p>
                  )}

                  <div className="pt-2 flex flex-col space-y-3">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`w-full bg-[#191970] dark:bg-white text-white dark:text-[#191970] font-primary px-8 py-4 uppercase tracking-widest text-xs rounded-lg hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] dark:hover:text-white transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Get My Free Gift'}
                    </button>
                    
                    {/* NEW SKIP BUTTON */}
                    <button 
                      type="button" 
                      onClick={onClose}
                      className="w-full py-3 text-xs font-primary uppercase tracking-widest text-gray-400 hover:text-[#191970] dark:hover:text-white transition-colors"
                    >
                      No thanks, skip for now
                    </button>
                  </div>
                </form>
              </>
            )}
            
            <p className="text-center text-[10px] text-gray-400 mt-6 font-light">
              By submitting, you agree to our Privacy Policy. We promise not to spam you.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GiftModal;