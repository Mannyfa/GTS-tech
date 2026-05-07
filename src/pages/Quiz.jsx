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
    explanation: "Consistent overwhelm signals the need for better systems and strategic support.",
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
    <div className="min-h-screen bg-midnight flex flex-col relative overflow-hidden font-secondary text-white">
      {/* Background Noise for premium feel */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-noise mix-blend-overlay"></div>

      {/* Quiz Header Navigation */}
      <nav className="relative z-10 w-full p-6 lg:p-12 flex justify-between items-center border-b border-white/10">
        <Link to="/services" className="text-gray-400 hover:text-white font-primary text-xs uppercase tracking-widest transition-colors">
          &larr; Back to Services
        </Link>
        {!isFinished && (
          <span className="font-primary text-sm text-steelGold tracking-widest">
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
                    className={`text-left p-6 border transition-all duration-300 font-light text-lg md:text-xl
                      ${selectedOption === idx 
                        ? 'border-electric bg-electric/10 text-white' 
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
                    className="bg-white/5 border border-white/10 p-6 mb-8"
                  >
                    <p className="text-steelGold font-primary text-xs tracking-widest uppercase mb-2">GTS Insight</p>
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
                      className="bg-electric text-white font-primary px-10 py-5 tracking-widest uppercase text-sm hover:bg-white hover:text-midnight transition-colors duration-500 w-full md:w-auto"
                    >
                      {currentStep === quizQuestions.length - 1 ? 'See Results' : 'Next Question'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ) : (
            // FINAL RESULTS SCREEN
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl bg-white p-12 md:p-20 shadow-2xl"
            >
              <h2 className="font-primary text-sm tracking-[0.2em] text-teal uppercase mb-4">Diagnosis Complete</h2>
              <h3 className="font-primary text-3xl md:text-5xl font-bold text-midnight mb-6">
                Ready to strengthen your brand and systems?
              </h3>
              <p className="font-secondary text-gray-600 leading-editorial mb-10 font-light">
                Based on your answers, your business is primed for a digital upgrade. Let’s build the structural foundation and high-end aesthetic your vision truly deserves.
              </p>
              <Link 
                to="/booking"
                className="inline-block bg-midnight text-white font-primary px-10 py-5 tracking-widest uppercase text-sm hover:bg-electric transition-colors duration-500 w-full"
              >
                Book Your Free Clarity Call
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Quiz;