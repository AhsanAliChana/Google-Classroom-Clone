import React, { useState, useEffect } from 'react';
import { Button, IconButton, Grid, Toolbar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import { Link } from 'react-router-dom';

const Layout = () => {
    // Load the active button from localStorage or default to 'stream'
    const savedActiveButton = localStorage.getItem('activeButton') || 'stream';
    const [activeButton, setActiveButton] = useState(savedActiveButton);

    // Update active button when clicked and save to localStorage
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        localStorage.setItem('activeButton', buttonName); // Save the active button to localStorage
    };

    useEffect(() => {
        // Set the active button based on localStorage on page load (already handled by initial state)
        const savedButton = localStorage.getItem('activeButton');
        if (savedButton) {
            setActiveButton(savedButton);
        }
    }, []);

    return (
        <>
            <Grid className='border' container spacing={3}>
                <Grid item xs={12}>
                    <Toolbar className='d-flex justify-content-between' sx={{ paddingLeft: 0, paddingRight: 0, width: '100%' }}>
                        <div style={{ flexGrow: 1, display: 'flex', gap: '20px' }}>
                            <Link className='text-decoration-none text-black' to="/Classroom"> 
                            <Button className='text-black'
                                sx={{
                                    color: activeButton === 'stream' ? 'black' : 'default',
                                    borderBottom: activeButton === 'stream' ? '4px solid #1967d2' : 'none',
                                }}
                                onClick={() => handleButtonClick('stream')}
                            >
                              Stream 
                            </Button></Link>
                            <Button 
                                sx={{
                                    color: activeButton === 'classwork' ? 'black' : 'default',
                                    borderBottom: activeButton === 'classwork' ? '4px solid #1967d2' : 'none',
                                }}
                                onClick={() => handleButtonClick('classwork')}
                            >
                                <Link className='text-decoration-none text-black' to="/classwork">Classwork</Link>
                            </Button>
                            <Button className='text-black'
                                sx={{
                                    color: activeButton === 'people' ? 'black' : 'default',
                                    borderBottom: activeButton === 'people' ? '4px solid #1967d2' : 'none',
                                }}
                                onClick={() => handleButtonClick('people')}
                            >
                                People
                            </Button>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <IconButton color="black">
                                <VideocamIcon />
                            </IconButton>
                            <IconButton color="black">
                                <CalendarTodayIcon />
                            </IconButton>
                            <IconButton color="black">
                                <AddToDriveIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </Grid>
            </Grid>
        </>
    );
};

export default Layout;
