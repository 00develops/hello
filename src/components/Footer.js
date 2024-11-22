import { Box } from '@mui/system';
import React from 'react';

import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ width: '100%', textAlign: 'center', padding: 1 }}>
      <Typography variant="body2">Made with love</Typography>
      <Typography variant="body2">Copyright © 2024 Shivam</Typography>
      <Typography variant="body2">All Rights Reserved</Typography>
    </Box>
  );
};

export default Footer;
