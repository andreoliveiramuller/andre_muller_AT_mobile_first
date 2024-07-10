import React from 'react';
import { TextField as MuiTextField } from '@mui/material';

const TextField = ({ label, type, value, onChange }) => {
  return <MuiTextField label={label} type={type} value={value} onChange={onChange} variant="outlined" fullWidth />;
};

export default TextField;
