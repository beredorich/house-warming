import { Box, Button, Drawer, Input, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import hotdog from '../Images/hotdog.png';
import martini from '../Images/martini.png';
import { motion } from 'framer-motion';
import ThreeDotsWave from './three-dots';

const Second_Page: React.FC<{ setPage: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setPage }) => {

    const [name, setName] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const handleSubmit = () => {
        if (name === '') {
            setError(true);
        } else {
            setError(false);
            setDrawerOpen(true);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
            setTimeout(() => {
                setDrawerOpen(false);
                setPage(true);
                setLoading(true);
            }, 4000);
            sendNametoServer();
        }
    };

    const sendNametoServer = async () => {
        try {

            const response = await fetch('http://localhost:8000/api/create/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: name }),
            });

            if (!response.ok) {
                throw new Error('Failed to send name to server');
            }

            const data = await response.json();
            console.log(data);

        }
        catch (error) {
            console.error(error);
        }
    }



    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '85vh',
                maxHeight: '85vh',
                border: 10,
                borderRadius: 2,
                backgroundColor: 'lightblue',
                borderColor: 'tan'

            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    minHeight: '85vh',
                    maxHeight: '85vh',
                    border: 1,
                    borderColor: 'lightblue',
                    borderRadius: 2,
                    width: '100%',

                }}
            >
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    maxWidth={'50%'}
                >
                    <Box
                        component={'img'}
                        src={hotdog}
                        sx={{
                            maxWidth: '60%',
                            maxHeight: '60%',
                            height: 'auto',
                        }}
                    />
                    <Box
                        component={'img'}
                        src={martini}
                        sx={{
                            maxWidth: '60%',
                            maxHeight: '60%',

                            height: 'auto',
                        }}
                    />
                </Box>
                <Typography
                    variant='h5'
                    sx={{ fontFamily: 'Playwrite CU, sans-serif', textAlign: 'center', lineHeight: '4rem' }}>
                    RSVP:
                </Typography>
                <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent={'center'}
                    width={'95%'}

                >
                    <TextField
                        id="outlined-basic"
                        label={!error ? 'Name' : 'Error'}
                        error={error}
                        helperText={error ? 'Name is required' : ''}
                        variant="outlined"
                        sx={{
                            width: '100%',
                            mb: 2,
                        }}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </Box>

                <Box
                    width={'95%'}
                    display={'flex'}
                    justifyContent={'center'}
                    gap={10}
                    height={'5vh'}
                >
                    <Button variant='contained' style={{ backgroundColor: 'green', width: '8vh' }} onClick={handleSubmit}>
                        <CheckIcon />
                    </Button>
                    <Button variant='contained' style={{ backgroundColor: 'red', width: '8vh' }} onClick={handleSubmit}>
                        <ClearIcon />
                    </Button>
                </Box>
            </Box>
            <Drawer anchor='top' open={drawerOpen} sx={{
                '& .MuiPaper-root': {
                    borderRadius: '30px'
                }
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        minHeight: '15vh',
                        maxHeight: '15vh',
                        width: '100%',
                        backgroundColor: 'white',
                    }}
                >
                    {loading ?
                        <ThreeDotsWave />
                        :
                        (
                            <>
                                <svg viewBox="0 0 53.19 53.19" height={'10vh'}>
                                    <g>
                                        <motion.circle
                                            stroke="#51e051"
                                            strokeWidth={3}
                                            fill="transparent"
                                            cx={26.59}
                                            cy={26.59}
                                            r={24}
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}

                                        />
                                        <motion.path
                                            stroke="#51e051"
                                            strokeWidth={3}
                                            strokeLinecap="round"
                                            fill="transparent"
                                            d="M12.29 26.59l10.98 10.42 17.49-18.23"
                                            initial={{ opacity: 0, pathLength: 0 }}
                                            animate={{ opacity: 1, pathLength: 1 }}
                                            transition={{ duration: 1.0, delay: 0.2 }}
                                        />
                                    </g>
                                </svg>
                                <Typography variant='h5' textAlign={'center'} color={'#51e051'}>
                                    Confirmed
                                </Typography>
                            </>
                        )}


                </Box>
            </Drawer>
        </Box >
    )
}

export default Second_Page