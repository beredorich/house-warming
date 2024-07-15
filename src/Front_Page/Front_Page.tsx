import React from 'react'
import { Button, Typography } from '@mui/material'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Box } from '@mui/system';
import hotdog from './hotdog.png';
import martini from './martini.png';

const Front_Page = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                border: 1,
                minHeight: '95vh',
                maxHeight: '95vh',
            }}
        >
            <Typography
                variant='h5'
                sx={{ fontFamily: 'Playwrite CU, sans-serif', textAlign: 'center', lineHeight: '4rem' }}>
                Your'e Invited to Mackenzi and Rich's House Warming
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
            >August 31
            </Typography>

            <Typography
                fontSize={12}
                sx={{ fontFamily: 'Playwrite CU, sans-serif' }}
                mb={5}
            >4pm-6pm
            </Typography>
            <Typography
                fontSize={14}
                textAlign={'center'}
                sx={{ fontFamily: 'Playwrite CU, sans-serif' }}>
                1611 Eckington Pl NE Washington, DC 20002
            </Typography>


        </Box >
    )
}

export default Front_Page
