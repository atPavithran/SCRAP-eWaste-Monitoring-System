import React from 'react';
import './WorkerAssignedJobs.css'; // Import your custom CSS file
import Calendar from './Calendar';

function AssignedJobsComponent() {
  return (
    <div className="assigned-jobs">
      <h2>Assigned Jobs</h2>
      {/* Add your assigned jobs content here */}
      <div className="calendar-container">
        <h3>Calendar</h3>
        <Calendar/>
      </div>
    </div>
  );
}

export default AssignedJobsComponent;
