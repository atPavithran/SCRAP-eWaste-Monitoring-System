// App.js
import React from 'react';
import Header from './Header';
import Introduction from './Introduction';
import Services from './Services';
import Contact from './Contact';
import Portfolio from './Portfolio';
import AboutMe from './AboutMe';
import backgroundImage from './wastepic.png';

const HomePage = () => {
  return (
    <div className='cont' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Header />
      <Introduction />
      <Services />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default HomePage;
