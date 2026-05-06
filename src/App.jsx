// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Import the Navbar
import Navbar from './components/layout/Navbar';

// 2. Import all the completed pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Booking from './pages/Booking';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;