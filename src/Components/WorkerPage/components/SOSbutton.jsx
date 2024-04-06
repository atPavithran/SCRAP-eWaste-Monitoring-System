// SOSButton.js
import React from 'react';

class SOSButton extends React.Component {
  handleSOSClick = () => {
    // Your SOS action goes here, like triggering an alert, sending an email, etc.
    alert('SOS action triggered!');
  };

  render() {
    return (
      <button onClick={this.handleSOSClick} style={styles.sosButton}>
        SOS
      </button>
    );
  }
}

const styles = {
  sosButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    zIndex: '9999' // Ensure it's above other elements
  }
};

export default SOSButton;
