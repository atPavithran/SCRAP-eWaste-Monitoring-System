// NewlyAssignedTasks.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewlyAssignedTasks.css';

const NewlyAssignedTasks = ({ onFilterChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOptionClick = (filter) => {
    setSelectedOption(filter);
    setShowDropdown(false); // Close the dropdown after selecting an option
    onFilterChange(filter);
  };

  const getContentForOption = (option) => {
    const contentMap = {
      recent: 'Collect from OH MY GOD company',
      today: 'Collect from ABC company',
      upcoming: 'Collect from giant moon',
      later: 'Collect from hahaha company',
    };

    return contentMap[option] || '';
  };

  return (
    <div className="new-tasks-container">
      <div className="newly-assigned-task">
        <h3>Newly Assigned Tasks</h3>
        <div className="dropdown-container">
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className={`dropdown-trigger ${showDropdown ? 'active' : ''}`}
          >
            {selectedOption || '- Select -'}
          </div>
          {showDropdown && (
            <div className="dropdown-options">
              <div onClick={() => handleOptionClick('recent')} className="dropdown-option">
                Recent
              </div>
              <div onClick={() => handleOptionClick('today')} className="dropdown-option">
                Today
              </div>
              <div onClick={() => handleOptionClick('upcoming')} className="dropdown-option">
                Upcoming
              </div>
              <div onClick={() => handleOptionClick('later')} className="dropdown-option">
                Later
              </div>
            </div>
          )}
        </div>
        {selectedOption && (
          <div className="selected-option-content">
            {/* Display content based on the selected option */}
            {getContentForOption(selectedOption)}
          </div>
        )}
      </div>
    </div>
  );
};

NewlyAssignedTasks.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default NewlyAssignedTasks;
