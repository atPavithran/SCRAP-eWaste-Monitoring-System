// MapContainer.js
import React from "react";
import MapComponent from "./MapComponent";
import "./MapContainer.css"; // Uncomment and adjust the path as needed

const MapContainer = () => {
  return (
    <div className="map-container">
      {/* Adjust the size of the container as needed */}
      <div className="small-map-window">
        <MapComponent />
      </div>
    </div>
  );
};

export default MapContainer;
