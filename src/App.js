import React from 'react';
import Navbar from './components/Navbar'; // Ensure this path is correct
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Recommendations from './components/Recommendations';
import Tools from './components/Tools';
import ContactPage from './components/ContactPage';
import AboutUs from './components/AboutUs'; // Import AboutUs component

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BudgetEstimator from './components/BudgetEstimator';

import ConsultationBooking from './components/ConsultationBooking';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/budgetestimator" element={<BudgetEstimator />} />
          <Route path="/consultationbooking" element={<ConsultationBooking />} />
          <Route path="/contact" element={<ContactPage />} /> {/* Change to lowercase */}
          <Route path="/about" element={<AboutUs />} /> {/* Add About Us route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
