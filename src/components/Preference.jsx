import React from 'react';
import '../styles/Preference.css';
import "../styles/responsive.css";

const Preference = () => {
    return (
      <div className="preference-container">
        <h1 className="preference-title" style={{ color: '#C69AFF' }}>Javascript</h1>
        <h1 className="preference-title" style={{ color: '#9F53FF' }}>React</h1>
        <h1 className="preference-title" style={{ color: '#6104D6' }}>Coffee</h1>
      </div>
    );
  };
  
  export default Preference;