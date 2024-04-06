import React, { useState } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './SidebarForCustomer.css'; // Import your custom CSS file

function SidebarForCustomer() {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <BrowserRouter> {/* Wrap your component with BrowserRouter */}
      <nav className="sidebar">
        <Link
          to="/"
          className={`sidebar-link ${activeLink === '/' && 'active'}`}
          onClick={() => handleLinkClick('/')}
        >
          Dashboard
        </Link>
        <Link
          to="/requests"
          className={`sidebar-link ${activeLink === '/requests' && 'active'}`}
          onClick={() => handleLinkClick('/requests')}
        >
          Requests
        </Link>
        <Link
          to="/feedback"
          className={`sidebar-link ${activeLink === '/feedback' && 'active'}`}
          onClick={() => handleLinkClick('/feedback')}
        >
          Feedback
        </Link>
        <Link
          to="/events"
          className={`sidebar-link ${activeLink === '/events' && 'active'}`}
          onClick={() => handleLinkClick('/events')}
        >
          Upcoming Events
        </Link>
        <Link
          to="/analysis"
          className={`sidebar-link ${activeLink === '/analysis' && 'active'}`}
          onClick={() => handleLinkClick('/analysis')}
        >
          Analysis
        </Link>
      </nav>
    </BrowserRouter>
  );
}

export default SidebarForCustomer;
