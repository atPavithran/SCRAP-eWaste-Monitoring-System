// EventPopup.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './EventPopup.css';

const EventPopup = ({ onClose, onSubmit }) => {
  const [taskID, setTaskID] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    onSubmit({ taskId: taskID, companyName: companyName, location: location });
    setTaskID('');
    setCompanyName('');
    setLocation('');
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Add Event</h2>
          <span className="close-btn" onClick={onClose}>&times;</span>
        </div>
        <div className="popup-body">
          <label>Task ID:</label>
          <input type="text" value={taskID} onChange={(e) => setTaskID(e.target.value)} />
          <label>Company Name:</label>
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className="popup-footer">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

EventPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default EventPopup;
