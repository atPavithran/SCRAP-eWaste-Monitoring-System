import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

const MapboxDirectionsComponent = () => {
  const mapContainer = useRef(null);

  // Function to speak text using speechSynthesis
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    mapboxgl.accessToken = '*Your map box API access token*';

    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true,
    });

    function successLocation(position) {
      setupMap([position.coords.longitude, position.coords.latitude]);
    }

    function errorLocation() {
      setupMap([-2.24, 53.48]);
    }

    function setupMap(center) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15,
      });

      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav);

      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      });

      map.addControl(directions, 'top-left');

      // Example of speaking the first instruction when route is ready
      directions.on('route', (e) => {
        if (e.route && e.route[0] && e.route[0].legs && e.route[0].legs[0] && e.route[0].legs[0].steps) {
          const firstInstruction = e.route[0].legs[0].steps[0].maneuver.instruction;
          speak(firstInstruction);

          // Simulate movement and speak instructions every 10 seconds
          let stepIndex = 1;
          setInterval(() => {
            if (stepIndex < e.route[0].legs[0].steps.length) {
              const nextInstruction = e.route[0].legs[0].steps[stepIndex].maneuver.instruction;
              speak(nextInstruction);
              stepIndex++;
            }
          }, 10000);
        }
      });
    }
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <div ref={mapContainer} style={{ height: '100%', width: '100%' }}></div>
      <button
        onClick={() => speak('Starting navigation.')}
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          zIndex: 1,
        }}
      >
        Start Navigation
      </button>
    </div>
  );
};

export default MapboxDirectionsComponent;
