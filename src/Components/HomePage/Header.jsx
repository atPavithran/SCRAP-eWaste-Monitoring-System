// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  return (
      <div id="header" data-aos-duration="1000" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="header-container">
          <nav>
            <img src={"Images/logo.png"} alt="logo" className="logo" data-aos="zoom-in" />
            <ul className={isMenuOpen ? 'open' : ''} data-aos="zoom-in">
              <li><Link to= "/" id="colour" >Home</Link></li>
              <li><a id="colour" href="#about">About</a></li>
              <li><a id="colour" href="#services">Services</a></li>
              <li><a id="colour" href="#portfolio">Plans</a></li>
              <li><Link to="/login" id="colour">Login</Link></li> {/* Use Link for navigation */}
              <li><Link to="/signup" id="colour">Sign Up</Link></li>
              <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
            </ul>
            <i className="fa-solid fa-bars" onClick={openMenu}></i>
          </nav>
        </div>
      </div>
  );
};

export default Header;
