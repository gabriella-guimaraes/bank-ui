import React from 'react';
import { Typography } from '@mui/material';

function LinkItem({ name }) {
  return (
    <Typography variant="body1" align="left" gutterBottom>
      {name}
    </Typography>
  )
}

export default LinkItem;