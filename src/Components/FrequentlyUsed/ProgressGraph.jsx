import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from 'recharts';
import './ProgressGraph.css';

const LineGraph = ({ trackData }) => {
  // Assuming trackData is an array with objects like { name: 'Jan', value: 10 }
  return (
    <div className="graph-container">
      <div className="graph-heading">Progress Graph</div>
      <ResponsiveContainer className="responsive-container" width={500} height={300}>
        <LineChart data={trackData} margin={{ left: 5, right: 20, bottom: 5 }}>
          <XAxis dataKey="name">
            <Label value="Months" offset={-5} position="insideBottom" style={{ fill: 'white' }} />
          </XAxis>
          <YAxis>
            <Label value="Values" angle={-90} offset={15} position="insideLeft" style={{ fill: 'white' }} />
          </YAxis>
          <Tooltip
            contentStyle={{
              backgroundColor: '#2d2828df',
              border: '1px solid white',
              color: 'white',
              fontSize: '14px',
              padding: '10px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
            labelStyle={{ fontWeight: 'bold', marginBottom: '5px' }}
            itemStyle={{ color: 'white' }}
            cursor={{ stroke: 'white', strokeWidth: 2 }}
          />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;
