import React from 'react';
import { Typography as MuiTypography } from '@mui/material';

const Typography = ({ variant, children }) => {
  return <MuiTypography variant={variant}>{children}</MuiTypography>;
};

export default Typography;
