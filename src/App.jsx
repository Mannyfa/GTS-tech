// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './pages/Quiz';

// 1. Import the Navbar
import Navbar from './components/layout/Navbar';

// 2. Import all the completed pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Booking from './pages/Booking.jsx';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;