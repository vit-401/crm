import React, {FC} from 'react';
import {AppBar, Toolbar, IconButton, InputBase, Avatar, Button, Box, Typography} from '@mui/material';
import {Search as SearchIcon, Notifications as NotificationsIcon} from '@mui/icons-material';
import avatar from "../../../images/230f9ce9971353cecc3c52241dd67e57.png"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {useLocation} from "react-router-dom";
import {ADMIN_PATH} from "../../../utils/paths";

interface TopHeaderProps{
    title:string
}

const TopHeader:FC<TopHeaderProps> = (props) => {
    const location = useLocation()
    return (
        <div>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', padding: '0 '}}>
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
                        <NotificationsIcon sx={{color: '#333', width: '26px', height: '26px'}}/>
                    </IconButton>

                    {/* Profile Avatar */}
                    <Box display="flex" alignItems="center" gap={1}>
                        <Avatar src={avatar} sx={{width: 40, height: 40}} alt="Evan Yates"/>
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
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'end',
                padding: '0 16px',
                marginTop: '20px'
            }}>


                {/* Left Side: Welcome Message and Title */}
                <Box>
                    {
                        location.pathname === ADMIN_PATH.DASHBOARD && <Typography
                            variant="body2"
                            sx={{
                                color: '#757575',
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '20px',
                            }}
                        >
                            Welcome back, Evan!
                        </Typography>
                    }

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
                            {props.title}

                        </Typography>
                    </Box>
                </Box>

                {/* Right Side: Date Range Picker */}
                <Box display="flex" alignItems="center" gap={2}>

                    <Button

                        variant="contained"
                        startIcon={<CalendarTodayIcon/>}
                        sx={{
                            backgroundColor: '#f0f4fa',
                            color: '#0A1629',
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '20px',
                            textTransform: 'none',
                            borderRadius: '8px',
                            boxShadow: 'none',
                            padding: '8px 16px',
                            '&:hover': {
                                backgroundColor: '#e6effb',
                            },
                        }}
                    >
                        Nov 16, 2020 - Dec 16, 2020
                    </Button>
                </Box>

            </Toolbar>
        </div>
    );
};

export default TopHeader;
