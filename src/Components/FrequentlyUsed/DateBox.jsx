// DateBox.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EventToolTip from './EventToolTip'; // Assuming you have EventTooltip component in the same directory
import './DateBox.css';

const DateBox = ({ dayOfMonth, dateString, onDateClick, events }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`date-box ${events && events.length > 0 ? 'event' : ''}`}
      onClick={() => onDateClick(dateString)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="date">{dayOfMonth}</div>
      {isHovered && events && events.length > 0 && <EventToolTip events={events} />}
      {events && events.length > 0 && <div className="events-indicator">{events.length}</div>}
    </div>
  );
};

DateBox.propTypes = {
  dayOfMonth: PropTypes.number.isRequired,
  dateString: PropTypes.string.isRequired,
  onDateClick: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape({
    taskId: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  })),
};

export default DateBox;
