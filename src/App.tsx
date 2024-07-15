import React from 'react';
import Front_Page from './Front_Page/Front_Page';
import { Box } from '@mui/system';


function App() {
  return (
    <Box
      sx={{
        overflowY: 'auto',
        overflowX: 'hidden',
        minHeight: '98vh',
        maxHeight: '98vh',
      }}>
      <Front_Page />
    </Box>
  );
}

export default App;
