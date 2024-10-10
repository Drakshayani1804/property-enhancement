// src/components/AboutUs.jsx

import React from 'react';
import './AboutUs.css'; // Ensure you create this CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <div className="about-us-description">
        <p>
          Welcome to our website! We are dedicated to providing you with the best service
          in property enhancement. Our team is passionate about transforming spaces and 
          creating beautiful environments for our clients.
        </p>
        <p>
          Our goal is to offer exceptional quality and innovative solutions to meet all 
          your property needs. Whether you are looking for renovation, furnishing, or 
          consultation, we are here to help you every step of the way.
        </p>
      </div>
      <div className="about-us-images">
        <img src="https://cdn.mos.cms.futurecdn.net/7bCmm6nzTmyixyq6vUjVXa-320-80.jpg" alt="Placeholder 1" />
        <img src="https://www.ceakayinteriors.com/images/blog/imageZkxqclE3KzY5UDZyMTM5QkFJWUdNQT09.jpg" alt="Placeholder 2" />
      </div>
    </div>
  );
};

export default AboutUs;
