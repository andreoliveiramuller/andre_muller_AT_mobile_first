import React from 'react';
import './Avatar.css';
import profileImage from '../assets/images/foto_perfil.jpg';

const Avatar = ({ alt, size = 'small' }) => {
  return (
    <div className={`avatar avatar-${size}`}>
      <img src={profileImage} alt={alt} />
    </div>
  );
};

export default Avatar;
