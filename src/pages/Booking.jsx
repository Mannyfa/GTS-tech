// src/pages/Booking.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/layout/Footer';

const Booking = () => {
  return (
    <div className="min-h-screen bg-softGray font-secondary text-midnight">
      
      {/* 1. Headline & Hero Section */}
      <section className="pt-40 pb-20 px-6 lg:px-24 bg-midnight text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-primary text-4xl md:text-6xl font-bold mb-6"
          >
            Claim Your <span className="text-electric">Clarity.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-softGray leading-editorial max-w-2xl mx-auto"
          >
            Schedule a 30-minute discovery call with our founding team to map out the digital architecture your brand needs to scale.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: What to Expect & Testimonial */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col space-y-16"
          >
            {/* 3. What to Expect */}
            <div>
              <h2 className="font-primary text-2xl font-bold mb-8 text-midnight">What to Expect</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <span className="font-primary text-teal font-bold text-xl">01</span>
                  <div>
                    <h4 className="font-primary font-bold text-midnight mb-2">Vision Alignment</h4>
                    <p className="text-sm text-gray-600 leading-editorial">We'll discuss your current bottlenecks, brand positioning, and where you want to take your business in the next 12 months.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="font-primary text-teal font-bold text-xl">02</span>
                  <div>
                    <h4 className="font-primary font-bold text-midnight mb-2">System Audit</h4>
                    <p className="text-sm text-gray-600 leading-editorial">A brief review of your existing digital infrastructure to identify gaps in your tech stack or user experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="font-primary text-teal font-bold text-xl">03</span>
                  <div>
                    <h4 className="font-primary font-bold text-midnight mb-2">Strategic Roadmap</h4>
                    <p className="text-sm text-gray-600 leading-editorial">You'll leave the call with actionable clarity on the exact service tier or custom system required for your transformation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Testimonial[cite: 1] */}
            <div className="bg-white p-8 border-l-4 border-steelGold shadow-sm">
              <p className="font-secondary italic text-gray-700 leading-editorial mb-6">
                "GTS didn't just build us a website; they structured our entire digital workflow. The combination of high-end design and operational tech expertise is unmatched. We saw a 40% increase in qualified leads within the first quarter."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-400">
                  [Img]
                </div>
                <div>
                  <h5 className="font-primary font-bold text-sm text-midnight">Sarah Jenkins</h5>
                  <span className="text-xs text-gray-500 font-primary uppercase tracking-widest">Founder, Lumina Wealth</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2. Scheduling Tool[cite: 1] */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full h-full min-h-[600px] bg-white shadow-xl border border-gray-100 p-2 flex flex-col"
          >
            {/* 
              NOTE: In a production environment, you would embed a tool like Calendly or Acuity here using an iframe or their official React component.
              Example: <iframe src="https://calendly.com/your-link" width="100%" height="100%" frameBorder="0"></iframe>
            */}
            <div className="flex-1 border-2 border-dashed border-gray-200 flex items-center justify-center flex-col text-center p-10">
              <span className="text-4xl mb-4">📅</span>
              <h3 className="font-primary text-xl font-bold text-midnight mb-2">Scheduling Tool Integration</h3>
              <p className="text-gray-500 text-sm font-secondary">
                Embed your Calendly, Acuity, or custom booking widget here. 
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;