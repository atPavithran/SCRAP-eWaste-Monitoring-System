import React, { useState, useEffect } from 'react';
import './JobSheetComponent.css'; // Import the CSS file

const JobSheetComponent = ({ workerId }) => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        // Fetch jobs for the worker from the backend
        // Replace this with an actual API call
        const fetchJobs = async () => {
            try {
                // Assuming the backend API returns a list of jobs
                const response = await fetch(`/api/jobs?workerId=${workerId}`);
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, [workerId]);

    const handleJobClick = (job) => {
        setSelectedJob(job);
    };

    const handleAcceptJob = () => {
        // Send an API request to the backend to mark the job as accepted
        // Replace this with an actual API call
        console.log('Job accepted:', selectedJob);
        // You can also implement further actions like sending notifications to admin
    };

    return (
        <div className="job-sheet-container">
            <h2>Job Sheet</h2>
            <div className="job-list">
                <ul>
                    {jobs.map((job) => (
                        <li key={job.id} onClick={() => handleJobClick(job)}>
                            {job.companyName} - {job.taskId}
                        </li>
                    ))}
                </ul>
            </div>
            {selectedJob && (
                <div className="job-details">
                    <h3>Job Details</h3>
                    <p>Date: {selectedJob.date}</p>
                    <p>Venue: {selectedJob.venue}</p>
                    <p>Company Name: {selectedJob.companyName}</p>
                    <p>Task ID: {selectedJob.taskId}</p>
                    <button onClick={handleAcceptJob}>Accept Job</button>
                </div>
            )}
        </div>
    );
};

export default JobSheetComponent;
