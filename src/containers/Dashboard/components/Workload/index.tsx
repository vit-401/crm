import React from 'react';
import { Box, Typography, Avatar, Grid, Button, Chip } from '@mui/material';


type User = {
    name: string;
    role: string;
    level: string;
    img: string;
    progress: number; // Add a progress property (0-100)
};
const Workload = () => {
    const users: User[] = [
        { name: 'Shawn Stone', role: 'UI/UX Designer', level: 'Middle', img: 'https://via.placeholder.com/150', progress: 80 },
        { name: 'Randy Delgado', role: 'UI/UX Designer', level: 'Junior', img: 'https://via.placeholder.com/150', progress: 50 },
        { name: 'Emily Tyler', role: 'Copywriter', level: 'Middle', img: 'https://via.placeholder.com/150', progress: 90 },
        { name: 'Louis Castro', role: 'Copywriter', level: 'Senior', img: 'https://via.placeholder.com/150', progress: 70 },
        { name: 'Blake Silva', role: 'iOS Developer', level: 'Senior', img: 'https://via.placeholder.com/150', progress: 60 },
        { name: 'Joel Phillips', role: 'UI/UX Designer', level: 'Middle', img: 'https://via.placeholder.com/150', progress: 85 },
        { name: 'Wayne Marsh', role: 'Copywriter', level: 'Junior', img: 'https://via.placeholder.com/150', progress: 40 },
        { name: 'Oscar Hollo', role: 'UI/UX Designer', level: 'Middle', img: 'https://via.placeholder.com/150', progress: 75 },
    ];

    return (
        <Box
            sx={{
                padding: 3,
                backgroundColor: '#ffffff',
                borderRadius: 2,
                boxShadow: '0px 6px 58px 0px rgba(196, 203, 214, 0.1036)',
            }}
        >
            {/* Header */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h6">
                    Workload
                </Typography>
                <Button variant="text" sx={{ textTransform: 'none', color: '#1976d2' }}>
                    View all &gt;
                </Button>
            </Box>

            {/* User Cards */}
            <Grid container spacing={3}>
                {users.map((user, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Box
                            sx={{

                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                backgroundColor: '#F4F9FD',
                                borderRadius: 2,
                                padding: 2,
                            }}
                        >
                            <Box sx={{
                                position: 'relative',
                                width: 70,
                                height: 70,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                        background: `conic-gradient(#1976d2 ${user.progress}%, #e0e0e0 ${user.progress}%)`,
                                    }}
                                ></Box>
                                <Avatar
                                    src={user.img}
                                    alt={user.name}
                                    sx={{
                                        width: 65,
                                        height: 65,
                                        border: '3px solid white',
                                        zIndex: 1,
                                    }}
                                />
                            </Box>
                            {/* Avatar */}

                            <Typography variant="centeredUnderlineText" fontWeight="bold">
                                {user.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#757575', marginBottom: 1 }}>
                                {user.role}
                            </Typography>
                            <Chip
                                label={user.level}
                                sx={{
                                    border:'1px solid #7D8592',
                                    color:"#7D8592",
                                    backgroundColor: '#fff',
                                    borderRadius:'5px',
                                    fontVariant:'p'
                                }}
                                size="small"
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Workload;
