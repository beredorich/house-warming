import React, { useState } from 'react';
import Front_Page from './Front_Page/Front_Page';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import Second_Page from './Second_Page/Second_Page';


function App() {

  const [page, setPage] = useState<boolean>(false);

  const handlePageChange = () => {
    setPage(!page);
  }

  return (
    <Box
      sx={{
        overflowY: 'auto',
        overflowX: 'hidden',
        minHeight: '98vh',
        maxHeight: '98vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2,
      }}>
      {page ?
        <Front_Page /> :
        <Second_Page setPage={setPage} />}
      {page ?
        <Button
          variant='contained'
          sx={{ borderRadius: 5, backgroundColor: 'pink', border: 3 }}
          onClick={handlePageChange}
        >RSVP</Button>
        :
        <Button
          variant='contained'
          sx={{ borderRadius: 5, backgroundColor: 'pink', border: 3 }}
          onClick={handlePageChange}
        >Back</Button>

      }
    </Box>

  );
}

export default App;
