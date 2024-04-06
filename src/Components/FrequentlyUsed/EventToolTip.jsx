// EventTooltip.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './DateBox.css'; // Include the DateBox styles here

const EventToolTip = ({ events }) => {
  return (
    <div className="event-tooltip">
      <div className="event-tooltip-arrow"></div>
      {events.map((event, index) => (
        <div key={index} className="event-tooltip-item">
          <p><strong>Task ID:</strong> {event.taskId}</p>
          <p><strong>Company Name:</strong> {event.companyName}</p>
          <p><strong>Location:</strong> {event.location}</p>
        </div>
      ))}
    </div>
  );
};

EventToolTip.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    taskId: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  })).isRequired,
};

export default EventToolTip;
