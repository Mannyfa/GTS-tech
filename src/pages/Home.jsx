// src/pages/Home.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/layout/Hero';
import Footer from '../components/layout/Footer';
import LeadCaptureModal from '../features/LeadCaptureModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-secondary text-midnight selection:bg-electric selection:text-white">
      
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Brand Introduction Section */}
      <section className="py-24 px-6 lg:px-24 bg-softGray">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-primary text-3xl md:text-4xl font-bold mb-6 text-midnight tracking-wide">
            A Partner, Not Just a Vendor
          </h2>
          <p className="font-secondary leading-editorial text-lg text-gray-700 max-w-3xl mx-auto">
            For ambitious founders navigating digital transformation, Grand Tech Solutions provides clarity, structure, and high-end design. We merge innovation with global impact.
          </p>
        </div>
      </section>

      {/* NEW: Why GTS (Value Propositions) Section[cite: 1] */}
      <section className="py-32 px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-primary text-sm tracking-[0.2em] text-teal uppercase mb-4">The GTS Advantage</h2>
            <h3 className="font-primary text-3xl md:text-5xl font-bold text-midnight">Why Visionaries Choose Us</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Value Prop 1 */}
            <div className="border-t border-gray-200 pt-8">
              <span className="font-primary text-4xl text-steelGold font-light block mb-6">01</span>
              <h4 className="font-primary text-xl font-bold text-midnight mb-4">Premium Aesthetics</h4>
              <p className="text-gray-600 leading-editorial text-sm">
                We believe your digital presence should command authority. Every pixel is intentional, delivering a high-end, editorial feel that immediately builds trust with your audience.
              </p>
            </div>
            
            {/* Value Prop 2 */}
            <div className="border-t border-gray-200 pt-8">
              <span className="font-primary text-4xl text-steelGold font-light block mb-6">02</span>
              <h4 className="font-primary text-xl font-bold text-midnight mb-4">Scalable Systems</h4>
              <p className="text-gray-600 leading-editorial text-sm">
                Beautiful design means nothing without structure. We engineer robust, tech-forward platforms designed to handle operational workflows and scale as your business grows.
              </p>
            </div>

            {/* Value Prop 3 */}
            <div className="border-t border-gray-200 pt-8">
              <span className="font-primary text-4xl text-steelGold font-light block mb-6">03</span>
              <h4 className="font-primary text-xl font-bold text-midnight mb-4">Conversion Driven</h4>
              <p className="text-gray-600 leading-editorial text-sm">
                We design for impact. From subtle micro-interactions to seamless user journeys, our ecosystems are aggressively optimized to turn your web traffic into qualified leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Client Results / Social Proof Section[cite: 1] */}
      <section className="py-32 px-6 lg:px-24 bg-midnight text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Metrics & Headline */}
          <div>
            <h2 className="font-primary text-sm tracking-[0.2em] text-softGray uppercase mb-4">Proven Results</h2>
            <h3 className="font-primary text-4xl md:text-5xl font-bold mb-10 leading-tight">
              Transformations that <span className="text-electric">drive growth.</span>
            </h3>
            
            <div className="grid grid-cols-2 gap-8 border-l border-gray-800 pl-8">
              <div>
                <span className="font-primary text-5xl font-bold text-teal block mb-2">40%</span>
                <span className="font-secondary text-sm text-gray-400 uppercase tracking-widest">Avg. Conversion Increase</span>
              </div>
              <div>
                <span className="font-primary text-5xl font-bold text-teal block mb-2">10x</span>
                <span className="font-secondary text-sm text-gray-400 uppercase tracking-widest">System Efficiency</span>
              </div>
            </div>
          </div>

          {/* Right: Featured Testimonial */}
          <div className="bg-white text-midnight p-10 md:p-14 relative">
            <div className="absolute top-0 right-0 w-2 h-full bg-steelGold"></div>
            <p className="font-secondary italic text-lg md:text-xl text-gray-700 leading-editorial mb-8">
              "Working with GTS changed everything. We were overwhelmed by our tech stack and had inconsistent branding. They stepped in as true partners, overhauled our entire system, and delivered a platform that not only looks incredible but actually captures leads on autopilot."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">
                [Img]
              </div>
              <div>
                <h5 className="font-primary font-bold text-midnight">Marcus T.</h5>
                <span className="text-xs text-gray-500 font-primary uppercase tracking-widest">Visionary Founder</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;