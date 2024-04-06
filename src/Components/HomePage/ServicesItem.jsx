// ServiceItem.jsx
import React from 'react';

const ServiceItem = ({ imageSrc, title, description, learnMoreLink, aosEffect }) => {
  return (
    <div data-aos={aosEffect}>
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <h3>{description}</h3>
    </div>
  );
};

export default ServiceItem;
