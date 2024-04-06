// src/components/Services.js
import React from 'react';
import ServiceItem from './ServicesItem.jsx';
import './Services.css'

const servicesData = [
  {
    imageSrc: 'Images/collect.png',
    title: 'Collect',
    description: 'Periodic Scheduling of ewaste collection',
    learnMoreLink: '#',
    aosEffect: 'fade-right',
  },
  {
    imageSrc: 'Images/monitor.png',
    title: 'Monitor',
    description: 'Real-time visibility and control of e-waste',
    learnMoreLink: '#',
    aosEffect: 'flip-up',
  },
  {
    imageSrc: 'Images/recycle.png',
    title: 'Recycle',
    description: 'Identify suitable recycling centres for waste dropoff',
    learnMoreLink: '#',
    aosEffect: 'fade-left',
  },
  {
    imageSrc: 'Images/analyse.svg',
    title: 'Analyse',
    description: 'Analysis of waste generation patterns and trends',
    learnMoreLink: '#',
    aosEffect: 'fade-right',
  },
  {
    imageSrc: 'Images/request.webp',
    title: 'Request',
    description: 'Request a convenient day for e-waste collection',
    learnMoreLink: '#',
    aosEffect: 'fade-up',
  },
  {
    imageSrc: 'Images/feedback.png',
    title: 'Feedback',
    description: 'Give valuable feedback to help us improve',
    learnMoreLink: '#',
    aosEffect: 'fade-left',
  },
];

const Services = () => {
  return (
    <div id="services" data-aos="fade-up" data-aos-duration="300" data-aos-anchor-placement="top-center">
      <div className="services-container">
        <h1 className="sub-title">Our Services</h1>
        <div className="services-list">
          {servicesData.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
