import React, { useEffect, useState } from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const opentab = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    // Initialize AOS after component mount
    const AOS = require('aos');
    AOS.init();
  }, []);

  return (
    <div id="about" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
      <div className='aboutme-container'>
        <div className="row">
          <div className="about-col-1" data-aos="zoom-in">
            <img src="Images/logo.png" alt="Profile" />
          </div>
          <div className="about-col-2" data-aos="zoom-in">
            <h1 className="sub-title">About Us</h1>
            <p>
              
              Welcome to SCRAP, where we are dedicated to revolutionizing eWaste management through cutting-edge monitoring 
              solutions. With a focus on environmental sustainability and technological innovation, our team is committed to ensuring 
              a cleaner and safer future for all. By adhering to the highest standards of compliance and accountability, we work tirelessly 
              to divert eWaste from landfills and promote responsible recycling practices. Join us in our mission to create a more sustainable 
              world, one electronic device at a time.

            </p>
            <div className="tab-titles" data-aos="fade-left">
              <p
                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                onClick={() => opentab('skills')}
              >
                Contact details
              </p>
              <p
                className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                onClick={() => opentab('experience')}
              >
                Socials
              </p>
              <p
                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                onClick={() => opentab('education')}
              >
                Location
              </p>
            </div>
            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
              <ul>
                <li>
                  <span>Mail:</span>
                  <br />
                  admin@scrap.in
                </li>
                <li>
                  <span>Tele:</span>
                  <br />
                  044 - 26500516 
                </li>
                
              </ul>
            </div>
            <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
              <ul>
                <li>
                  <span>Instagram</span>
                  <br />
                  @scrap_ewaste_collection
                </li>
                <li>
                  <span>LinkedIn</span>
                  <br />
                  @Scrap_Ewaste_Collection
                </li>
                {/* Add more experience entries as needed */}
              </ul>
            </div>
            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
              <ul>
                <li>
                  <span>Area</span>
                  <br />
                  18, TVS Colony, Anna Nagar West Extention
                </li>
                <li>
                  <span>City</span>
                  <br />
                  Chennai - 600101.
                </li>
                {/* Add more education entries as needed */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
