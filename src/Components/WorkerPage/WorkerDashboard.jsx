// WorkerDashboard.jsx
import React, { useState } from 'react';
import './WorkerDashboard.css'; // Import your custom CSS file
import LineGraph from '../FrequentlyUsed/ProgressGraph';
import SidebarForDeliveryPartner from './SidebarForDeliveryPartner';
import NewlyAssignedTasks from './NewlyAssignedTasks';

function DashboardComponent() {
  const [newlyAssignedTasks] = useState([]); // Assuming you have the tasks populated
  const [taskFilter, setTaskFilter] = useState('recent');

  const handleTaskFilterChange = (filter) => {
    setTaskFilter(filter);
  };

  return (
    <div>
      <div className="dashboard">
        <SidebarForDeliveryPartner />
        <div className="sidebar-container">
          <NewlyAssignedTasks onFilterChange={handleTaskFilterChange} />
          {/* Add any other components you want beside the sidebar */}
        </div>
        <div className="content-container">
          <div className="header">
            <h1>Dashboard</h1>
          </div>
          <div className="new-tasks-container">
            {/* ... (Rest of the code remains unchanged) */}
          </div>
          {/* LineGraph */}
        <div className="line-graph-container">
            <LineGraph />
        </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
