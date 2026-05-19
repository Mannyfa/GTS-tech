
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LeadCaptureModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-midnight/80 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-midnight p-10 rounded-sm max-w-md w-full relative z-10 shadow-2xl"
          >
            <button 
              onClick={onClose} 
              className="absolute top-4 right-6 text-3xl font-light text-gray-400 hover:text-white transition-colors"
            >
              &times;
            </button>
            
            <h3 className="font-primary text-2xl font-bold mb-2 text-white tracking-wide">
              Top 10 Website Secrets
            </h3>
            <p className="font-secondary text-sm text-gray-400 mb-8 leading-editorial">
              Enter your details to get your free report and join our exclusive mailing list.
            </p>
            
            <form className="flex flex-col space-y-6">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  // ADDED: text-white and placeholder-gray-400
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-electric font-secondary bg-transparent transition-colors peer text-white placeholder-gray-400" 
                  required 
                />
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  // ADDED: text-white and placeholder-gray-400
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-electric font-secondary bg-transparent transition-colors peer text-white placeholder-gray-400" 
                  required 
                />
              </div>
              <button 
                type="submit"
                className="bg-[#191970] text-white border border-[#191970] font-primary py-4 mt-4 hover:bg-electric hover:border-electric transition-colors duration-300 tracking-widest text-sm uppercase"
              >
                Send My Report
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadCaptureModal;