// HeaderAfterLogin.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import defaultPfp from './defaultPfp.png'; // Import default profile picture
import './HeaderAfterLogin.css';

const HeaderAfterLogin = ({ user, logout }) => {
  const [showLogout, setShowLogout] = useState(false);

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  const handleLogout = () => {
    logout();
    setShowLogout(false);
  };

  return (
    <div id="after-header">
      <div className="after-container">
        <nav>
          <img src={"Images/logo.png"} alt="logo" className="afterlogin-logo" data-aos="zoom-in" />
          <ul>
            <li><Link to="/" id="colour">Home</Link></li>
            <li><a id="colour" href="#about">About</a></li>
            <li><a id="colour" href="#services">Services</a></li>
            <li><a id="colour" href="#portfolio">Projects</a></li>
            <li><a id="colour" href="#contact">Contact</a></li>
            <li className="profile-section">
              <div className="profile-info" onClick={toggleLogout}>
                <div className="profile-picture-container">
                  <img src={user.photoURL || defaultPfp} alt="Profile" className="profile-picture" />
                </div>
              </div>
              {showLogout && (
                <div className="logout-dropdown">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderAfterLogin;
