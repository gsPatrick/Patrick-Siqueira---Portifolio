import React from 'react';
import '../styles/Preference.css'; // Aqui já estamos importando o CSS

const Preference = () => {
  return (
    <div className="preference-container">
      <h1 className="preference-title js">Javascript</h1>
      <h1 className="preference-title react">React</h1>
      <h1 className="preference-title coffee">Coffee</h1>
    </div>
  );
};

export default Preference;
