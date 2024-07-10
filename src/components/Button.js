import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ({ variant, color, onClick, children }) => {
  return (
    <MuiButton variant={variant} color={color} onClick={onClick}>
      {children}
    </MuiButton>
  );
};

export default Button;
