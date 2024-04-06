import React from 'react';
import Confetti from 'react-confetti';
import './App.css'; // Update the path

const EwasteCelebration = () => {
  const today = new Date();
  const isEwasteDay = today.getMonth() === 3 && today.getDate() === 2; // Assuming International E-Waste Day is on April 2nd

  return (
    <div>
      {isEwasteDay && <Confetti />}
      {isEwasteDay && (
        <div className="celebration-overlay">
          <h1>Happy International E-Waste Day!</h1>
          <p>Thank you for joining us in creating a greener and more sustainable future.</p>
          <p>Your support means the world to us!</p>
          <p>Click anywhere to close</p>
        </div>
      )}
    </div>
  );
};

export default EwasteCelebration;
