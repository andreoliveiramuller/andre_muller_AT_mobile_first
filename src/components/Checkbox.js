import React from 'react';
import './Checkbox.css';

const Checkbox = ({ checked, onChange, label }) => {
  return (
    <label className="checkbox-container">
      {label}
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
