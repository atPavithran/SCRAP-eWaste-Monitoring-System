// Portfolio.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './Plans.css';

const Plans = () => {
  return (
    <div id="portfolio">
      <div className="portfolio-container">
        <h1 className="sub-title">Plans</h1>
        <p>Choose the plan thats right for your company!</p>
        <div className="work-list">
          {/* Repeat this block for each work item */}
          <WorkItem
            imgSrc="Images/Monthly_plan.png"
            title="Monthly Plan"
            description="Monthly subscription fee for ongoing e-waste management services: ₹1,44,000.
            "
            link="#"
          />
          <WorkItem
            imgSrc="Images/Quaterly_plan.png"
            title="Quarterly Plan"
            description="Quarterly charged fee for ongoing e-waste management services: ₹54,000."
            link="#"
          />
          <WorkItem
            imgSrc="Images/Annual_plan.png"
            title="Annual Plan"
            description="Annual charged fee for ongoing e-waste management services: ₹25000."
            link="#"
          />
        </div>
      </div>
    </div>
  );
};

// WorkItem component for each work entry
const WorkItem = ({ imgSrc, title, description, link }) => {
  return (
    <div className="work" data-aos="zoom-in">
      <img src={imgSrc} alt={title} />
      <div className="layer">
        <h3>{title}</h3>
        <p>{description}</p>
        <a target="_blank" rel="noreferrer" href={link}>
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </a>
      </div>
    </div>
  );
};

export default Plans;
