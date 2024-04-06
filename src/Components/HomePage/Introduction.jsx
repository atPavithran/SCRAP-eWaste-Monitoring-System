// src/components/Introduction.js
import React from 'react';
import './Introduction.css';

const Introduction = () => {
  return (
    <div id="intro" className="introduction" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="intro-text" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <p>E-Waste Monitoring System</p>
          <h1>Welcome to our platform dedicated to managing <span>electronic waste</span> <br />efficiently and sustainably...</h1>
        </div>
    </div>
  );
};

export default Introduction;
