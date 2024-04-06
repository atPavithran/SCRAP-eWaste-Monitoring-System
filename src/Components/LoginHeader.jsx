// LoginHeader.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const LoginHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  return (
    <div id="login-header" data-aos-duration="1000" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className="login-header-container">
        <nav>
          <img src={"Images/logo.png"} alt="logo" className="logo" data-aos="zoom-in" />
          <ul className={isMenuOpen ? 'open' : ''} data-aos="zoom-in">
            <li><Link to= "/" id="login-colour" >Home</Link></li>
            <li><Link to="/login" id="login-colour">Login</Link></li>
            <li><Link to="/signup" id="login-colour">Sign Up</Link></li>
            <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
          </ul>
          <i className="fa-solid fa-bars" onClick={openMenu}></i>
        </nav>
      </div>
    </div>
  );
};

export default LoginHeader;
