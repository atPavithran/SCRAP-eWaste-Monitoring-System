import React, { useState } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import './SidebarForDeliveryPartner.css'; // Import your custom CSS file

function SidebarForDeliveryPartner() {
  const [activeLink, setActiveLink] = useState('/dashboard');

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <BrowserRouter>
      <nav className="sidebar">
        <Link
          to="/dashboard"
          className={`sidebar-link ${activeLink === '/dashboard' && 'active'}`}
          onClick={() => handleLinkClick('/dashboard')}
        >
          Dashboard
        </Link>
        <Link
          to="/current-tasks"
          className={`sidebar-link ${activeLink === '/current-tasks' && 'active'}`}
          onClick={() => handleLinkClick('/current-tasks')}
        >
          Current Tasks
        </Link>
        <Link
          to="/assigned-jobs"
          className={`sidebar-link ${activeLink === '/assigned-jobs' && 'active'}`}
          onClick={() => handleLinkClick('/assigned-jobs')}
        >
          Assigned Jobs
        </Link>
        <Link
          to="/support"
          className={`sidebar-link ${activeLink === '/support' && 'active'}`}
          onClick={() => handleLinkClick('/support')}
        >
          Support
        </Link>
      </nav>
    </BrowserRouter>
  );
}

export default SidebarForDeliveryPartner;
