
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Quiz from './pages/Quiz';


import Navbar from './components/layout/Navbar';


import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Booking from './pages/Booking.jsx';


import Preloader from './components/layout/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false, 
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      {/* The Preloader Component */}
      <Preloader isLoading={isLoading} setIsLoading={setIsLoading} />
      
      {/* Hide the main content scrollbar until loading is done */}
      <div className={isLoading ? "h-screen overflow-hidden" : ""}>
        
        {/* The Navbar sits outside the Routes so it appears on every page */}
        <Navbar />
        
        {/* The wrapper div adds padding to the top so the sticky nav doesn't cover content */}
        <div className="pt-20"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;