// CurrentTasks.jsx
import React, { useState } from 'react';
import MapComponent from './MapComponent'; // Import your Map component
import './WorkerCurrentTasks.css'; // Import your custom CSS file

const CurrentTasks = () => {
  const [currentTask, setCurrentTask] = useState({
    company: 'ABC Company', // Example company name
    companyLocation: {
      latitude: 12.971598, // Example latitude for ABC Company
      longitude: 77.594562, // Example longitude for ABC Company
    },
    recyclingUnitLocation: {
      latitude: 12.917654, // Example latitude for Recycling Unit
      longitude: 77.623782, // Example longitude for Recycling Unit
    },
  });

  const [status, setStatus] = useState('Pending'); // Example status

  const handleTrackCompanyLocation = () => {
    // Logic to handle tracking company's location (e.g., show map)
    setStatus('En route to Company');
  };

  const handleTrackRecyclingUnitLocation = () => {
    // Logic to handle tracking recycling unit's location (e.g., show map)
    setStatus('En route to Recycling Unit');
  };

  return (
    <div className="current-tasks-container">
      <div className="tasks-content">
        <h1>The Current Task to be Performed</h1>
        <p>{`Collection of E-Waste from ${currentTask.company}`}</p>

        {/* Option to track company's location */}
        {status === 'Pending' && (
          <button onClick={handleTrackCompanyLocation}>Track Location of Company</button>
        )}

        {/* Map component for live tracking */}
        {status === 'En route to Company' && (
          <MapComponent
            latitude={currentTask.companyLocation.latitude}
            longitude={currentTask.companyLocation.longitude}
          />
        )}

        {/* Display arrival message when worker reaches the company */}
        {status === 'En route to Company' && (
          <div>
            <h3>Arrival Information</h3>
            <p>{`You have arrived at ${currentTask.company}'s location.`}</p>
          </div>
        )}

        {/* Option to track recycling unit's location */}
        {status === 'En route to Company' && (
          <button onClick={handleTrackRecyclingUnitLocation}>
            Track Location of Recycling Unit
          </button>
        )}

        {/* Map component for live tracking to the recycling unit */}
        {status === 'En route to Recycling Unit' && (
          <MapComponent
            latitude={currentTask.recyclingUnitLocation.latitude}
            longitude={currentTask.recyclingUnitLocation.longitude}
          />
        )}

        {/* Display arrival message when worker reaches the recycling unit */}
        {status === 'En route to Recycling Unit' && (
          <div>
            <h3>Arrival Information</h3>
            <p>You have arrived at the Recycling Unit.</p>
          </div>
        )}

        {/* Sample task details */}
        <div className="current-tasks">
          <h2>Current Task</h2>
          <div className="task-details">
            <p><strong>Company:</strong> {currentTask.company}</p>
            <p><strong>Company Location:</strong> {currentTask.companyLocation.latitude}, {currentTask.companyLocation.longitude}</p>
            <p><strong>Recycling Unit Location:</strong> {currentTask.recyclingUnitLocation.latitude}, {currentTask.recyclingUnitLocation.longitude}</p>
            <p><strong>Status:</strong> {status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentTasks;
