
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './pages/Quiz';


import Navbar from './components/layout/Navbar';
import ScrollToTop from './components/layout/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';


import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Booking from './pages/Booking.jsx';

import Preloader from './components/layout/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <HelmetProvider>
        <Router>

      <ScrollToTop />

      
      <Preloader isLoading={isLoading} setIsLoading={setIsLoading} />
      
      
      <div className={isLoading ? "h-screen overflow-hidden" : ""}>
        
        
        <Navbar />
        
        
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
    </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;