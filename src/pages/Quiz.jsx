// src/pages/Quiz.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Data from GTS Discovery Quiz Document
const quizQuestions = [
  {
    id: 1,
    question: "How clearly does your current brand communicate what your business actually does?",
    options: [
      { text: "Somewhat — I still have to explain a lot", value: "b" },
      { text: "Not really — people often misunderstand us", value: "c" },
      { text: "Very clearly — people get it instantly", value: "a" },
      { text: "Not at all — we need a full refresh", value: "d" }
    ],
    explanation: "If your brand message isn't instantly clear, it weakens trust and slows growth.",
    hint: "Think about how often you have to clarify your business to new people."
  },
  {
    id: 2,
    question: "How organized are your internal systems (processes, workflows, client onboarding)?",
    options: [
      { text: "We don't have systems — we just try to keep up", value: "d" },
      { text: "Somewhat organized — but we rely on memory", value: "b" },
      { text: "Very organized — everything runs smoothly", value: "a" },
      { text: "Not organized — things slip through the cracks", value: "c" }
    ],
    explanation: "Weak systems create bottlenecks and limit your ability to scale.",
    hint: "Consider how predictable and repeatable your operations feel."
  },
  {
    id: 3,
    question: "How confident are you that your online presence reflects the quality of your work?",
    options: [
      { text: "Not confident — it looks outdated", value: "c" },
      { text: "Somewhat confident — it's okay, but not premium", value: "b" },
      { text: "Very confident — it matches our excellence", value: "a" },
      { text: "We don't really have an online presence yet", value: "d" }
    ],
    explanation: "A weak online presence reduces credibility and limits opportunities.",
    hint: "Your digital presence is often the first impression people get."
  },
  {
    id: 4,
    question: "How often do you feel overwhelmed trying to manage everything in your business?",
    options: [
      { text: "Sometimes — it depends on the season", value: "b" },
      { text: "Rarely — things are under control", value: "a" },
      { text: "Often — I'm constantly juggling", value: "c" },
      { text: "Almost always — I need help immediately", value: "d" }
    ],
    explanation: "Consistently overwhelm signals the need for better systems and strategic support.",
    hint: "Overwhelm is usually a sign of missing structure or support."
  },
  {
    id: 5,
    question: "If you had the right support, how quickly would you want to improve your brand and systems?",
    options: [
      { text: "Soon — within a few months", value: "b" },
      { text: "Very soon — within the next few weeks", value: "c" },
      { text: "Sometime in the future", value: "a" },
      { text: "Immediately — I'm ready now", value: "d" }
    ],
    explanation: "Readiness indicates how aligned you are with taking action toward growth.",
    hint: "Your urgency helps determine the best next step."
  }
];

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  const handleNext = () => {
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(prev => prev + 1);
      setSelectedOption(null); // Reset selection for next question
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] flex flex-col relative overflow-hidden font-secondary text-white transition-colors duration-500">
      {/* Background Noise for premium feel */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-noise mix-blend-overlay"></div>

      {/* Quiz Header Navigation */}
      <nav className="relative z-10 w-full p-6 lg:p-12 flex justify-between items-center border-b border-white/10">
        <Link to="/services" className="text-gray-400 hover:text-white font-primary text-xs uppercase tracking-widest transition-colors">
          &larr; Back to Services
        </Link>
        {!isFinished && (
          <span className="font-primary text-sm text-[#D4AF37] tracking-widest">
            0{currentStep + 1} / 0{quizQuestions.length}
          </span>
        )}
      </nav>

      {/* Main Quiz Content Area */}
      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div 
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="w-full max-w-3xl"
            >
              <h2 className="font-primary text-3xl md:text-5xl font-medium leading-tight mb-12">
                {quizQuestions[currentStep].question}
              </h2>
              
              <div className="flex flex-col space-y-4 mb-8">
                {quizQuestions[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedOption(idx)}
                    className={`text-left p-6 border rounded-lg transition-all duration-300 font-light text-lg md:text-xl
                      ${selectedOption === idx 
                        ? 'border-[#008080] bg-[#008080]/20 text-white' 
                        : 'border-white/20 text-gray-300 hover:border-white/50 hover:bg-white/5'
                      }`}
                  >
                    {option.text}
                  </button>
                ))}
              </div>

              {/* Dynamic Insight Reveal */}
              <AnimatePresence>
                {selectedOption !== null && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                    className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8"
                  >
                    <p className="text-[#D4AF37] font-primary text-xs tracking-widest uppercase mb-2">GTS Insight</p>
                    <p className="text-sm md:text-base leading-editorial text-gray-300 font-light mb-2">
                      {quizQuestions[currentStep].explanation}
                    </p>
                    <p className="text-xs text-gray-500 italic">
                      Hint: {quizQuestions[currentStep].hint}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next Button - Only appears after a selection is made */}
              <AnimatePresence>
                {selectedOption !== null && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <button 
                      onClick={handleNext}
                      className="bg-[#191970] text-white font-primary rounded-lg px-10 py-5 tracking-widest uppercase text-sm hover:bg-[#D4AF37] hover:text-[#191970] transition-colors duration-500 w-full md:w-auto"
                    >
                      {currentStep === quizQuestions.length - 1 ? 'See Results' : 'Next Question'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ) : (
            
            // =========================================================================
            // FINAL RESULTS SCREEN (UPDATED)
            // =========================================================================
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-3xl bg-[#12141A] p-8 md:p-14 shadow-2xl border border-white/10 rounded-2xl text-left"
            >
              <div className="text-center mb-8">
                <h2 className="font-primary text-xs tracking-[0.2em] text-[#D4AF37] uppercase mb-4">Diagnosis Complete</h2>
                <p className="font-secondary text-base md:text-lg text-gray-200 leading-relaxed">
                  Your answers show one thing clearly: your business is growing, but your brand, systems, or digital presence aren’t keeping up. That gap is costing you clarity, capacity, and opportunities.
                </p>
              </div>

              {/* Diagnostic Points */}
              <ul className="space-y-6 mb-10 bg-white/5 p-6 md:p-8 rounded-xl border border-white/5">
                <li className="flex items-start">
                  <span className="text-[#008080] mr-4 text-xl">✦</span>
                  <p className="font-secondary text-sm md:text-base text-gray-300 font-light">
                    <strong className="text-white font-medium">Brand Clarity</strong> — Your message may not be landing with the people who need you most.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#008080] mr-4 text-xl">✦</span>
                  <p className="font-secondary text-sm md:text-base text-gray-300 font-light">
                    <strong className="text-white font-medium">Systems & Structure</strong> — Too much depends on you, creating overwhelm and inconsistency.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#008080] mr-4 text-xl">✦</span>
                  <p className="font-secondary text-sm md:text-base text-gray-300 font-light">
                    <strong className="text-white font-medium">Digital Presence</strong> — Your online identity isn’t fully representing your excellence.
                  </p>
                </li>
              </ul>

              <p className="font-secondary text-gray-300 text-sm md:text-base mb-6 font-light">
                The good news: every one of these challenges is fixable with the right support.
              </p>

              {/* Highlighted Quote */}
              <div className="border-l-4 border-[#008080] pl-6 py-2 mb-8 bg-[#008080]/10 rounded-r-lg">
                <p className="font-primary text-lg md:text-xl text-white font-medium italic">
                  “Let’s fix what’s slowing you down — and build the business you actually envisioned.”
                </p>
              </div>

              <p className="font-secondary text-gray-300 text-sm md:text-base mb-10 font-light">
                You don’t need more hustle. You need a stronger brand, smarter systems, and a digital presence that works for you. <br/><br/>
                That’s exactly what <strong className="text-white font-medium">Grand Tech Solutions</strong> delivers.
              </p>

              {/* Final Call to Action */}
              <div className="flex flex-col items-center">
                <Link 
                  to="/booking"
                  className="inline-block bg-[#008080] text-white font-primary px-10 py-5 tracking-widest uppercase text-sm hover:bg-white hover:text-[#191970] transition-colors duration-500 w-full text-center rounded-lg shadow-lg"
                >
                  Book Your Free Clarity Call
                </Link>
                <p className="text-xs text-gray-400 mt-4 font-light text-center">
                  Let’s strengthen your foundation so you can grow with confidence and ease.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Quiz;