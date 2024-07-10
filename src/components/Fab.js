import React from 'react';
import './Fab.css';

const Fab = ({ icon, onClick }) => {
  return (
    <button className="fab" onClick={onClick}>
      {icon}
    </button>
  );
};

export default Fab;
