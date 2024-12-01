import React from 'react';
import {AppBar, Toolbar, IconButton, InputBase, Avatar, Button, Box, Typography} from '@mui/material';
import {Search as SearchIcon, Notifications as NotificationsIcon} from '@mui/icons-material';
import avatar from "../../../images/230f9ce9971353cecc3c52241dd67e57.png"
const TopHeader = () => {
    return (
        <div>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', padding: '0 16px'}}>
                <Box display="flex" alignItems="center" gap={2}>
                    {/* Search Bar */}
                    <Box
                        display="flex"
                        alignItems="center"
                        sx={{
                            backgroundColor: '#fff',
                            borderRadius: 2,
                            padding: '4px 8px',
                            minWidth: '412px',
                        }}
                    >
                        <SearchIcon sx={{color: '#757575', marginRight: 1}}/>
                        <InputBase
                            placeholder="Search"
                            sx={{
                                flex: 1,
                                fontSize: '16px',
                                fontFamily: 'Nunito Sans',
                                fontWeight: 400,
                                lineHeight: '21.82px',
                                textAlign: 'left',
                                textUnderlinePosition: 'from-font',
                                textDecorationSkipInk: 'none',
                                color: '#7D8592', // Keep your original color
                            }}
                        />

                    </Box>

                </Box>

                {/* Right Section */}
                <Box display="flex" alignItems="center" gap={2}>
                    {/* Notification Icon */}
                    <IconButton sx={{
                        backgroundColor: '#fff', padding: '8px',
                        '&:hover': {backgroundColor: 'rgba(230,234,239,0.42)'},

                    }}>
                        <NotificationsIcon sx={{color: '#333', width: '26px', height: '26px'}} />
                    </IconButton>

                    {/* Profile Avatar */}
                    <Box display="flex" alignItems="center" gap={1}>
                        <Avatar  src={avatar}  sx={{ width: 40, height: 40 }} alt="Evan Yates"/>
                        <Typography
                            sx={{
                                color: '#0A1629',
                                fontWeight: 700,
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontFamily: 'Nunito Sans, sans-serif',
                            }}
                        >
                            Evan Yates
                        </Typography>
                    </Box>
                </Box>



            </Toolbar>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', padding: '0 16px'}}>
            {/* Add Title */}
                <Box display="flex" alignItems="center" gap={1}>
                    <Typography
                        sx={{
                            color: '#0A1629',
                            fontWeight: 700,
                            fontSize: '36px',
                            lineHeight: '49.1px',
                            fontFamily: 'Nunito Sans, sans-serif',
                        }}
                    >
                       Projects
                    </Typography>
                </Box>
                {/* Add Project Button */}
                <Box display="flex" alignItems="center" gap={1}>

                    <Button
                        variant="contained"
                        sx={{
                            boxShadow: 'none',
                            borderRadius:14,
                            padding: '13px 20px',
                            textTransform: 'none',
                            backgroundColor: '#3F8CFF',
                            '&:hover': {backgroundColor: 'rgb(38,113,227)'},
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#ffffff',
                                fontWeight: 700,
                                fontSize: '16px',
                                lineHeight: '21.82px',
                                fontFamily: 'Nunito Sans, sans-serif',
                            }}
                        >
                            + Add Project
                        </Typography>

                    </Button>
                </Box>
            </Toolbar>
        </div>
    );
};

export default TopHeader;
