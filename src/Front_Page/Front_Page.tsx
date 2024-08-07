import React from 'react'
import { Button, Typography } from '@mui/material'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Box } from '@mui/system';
import hotdog from '../Images/hotdog.png';
import martini from '../Images/martini.png';

const Front_Page = () => {
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
                }}


            >

                <Typography
                    variant='h5'
                    sx={{ fontFamily: 'Playwrite CU, sans-serif', textAlign: 'center', lineHeight: '4rem' }}>
                    Mackenzi and Rich are invting you to our Tinis and Weenies House Warming Party
                </Typography>
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
                    variant={'h5'}
                    sx={{ fontFamily: 'Playwrite CU, sans-serif' }}
                    mb={5}
                >Date: TBD
                </Typography>
                <Typography
                    fontSize={12}
                    sx={{ fontFamily: 'Playwrite CU, sans-serif' }}
                    mb={5}
                >4:00pm
                </Typography>
                <Typography
                    fontSize={14}
                    textAlign={'center'}
                    sx={{ fontFamily: 'Playwrite CU, sans-serif' }}>
                    1611 Eckington Pl NE Washington, DC 20002
                </Typography>
            </Box>


        </Box >
    )
}

export default Front_Page
