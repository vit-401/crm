import React from 'react';
import { Box, Typography, Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Button, Icon } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AttachFileIcon from '@mui/icons-material/AttachFile';

type Activity = {
    name: string;
    role: string;
    avatar: string;
    actions: { icon: React.ReactNode; description: string }[];
};

const ActivityStream: React.FC = () => {
    const activities: Activity[] = [
        {
            name: 'Oscar Holloway',
            role: 'UI/UX Designer',
            avatar: 'https://via.placeholder.com/40',
            actions: [
                {
                    icon: <ArrowUpwardIcon color="primary" />,
                    description: 'Updated the status of Mind Map task to In Progress',
                },
                {
                    icon: <AttachFileIcon color="primary" />,
                    description: 'Attached files to the task',
                },
            ],
        },
        {
            name: 'Emily Tyler',
            role: 'Copywriter',
            avatar: 'https://via.placeholder.com/40',
            actions: [
                {
                    icon: <ArrowUpwardIcon color="primary" />,
                    description: 'Updated the status of Mind Map task to In Progress',
                },
            ],
        },
    ];

    return (
        <Box
            sx={{
                padding: 3,
                backgroundColor: '#fff',
                borderRadius: 2,
                boxShadow: '0px 6px 58px 0px rgba(196, 203, 214, 0.1036)',
            }}
        >
            {/* Header */}
            <Typography variant="h6" fontWeight="bold" mb={2}>
                Activity Stream
            </Typography>

            {/* Activity List */}
            <List>
                {activities.map((activity, index) => (
                    <Box key={index} mb={2}>
                        <ListItem alignItems="flex-start" disableGutters>
                            <ListItemAvatar>
                                <Avatar src={activity.avatar} alt={activity.name} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Typography variant="body1" fontWeight="bold">
                                        {activity.name}
                                    </Typography>
                                }
                                secondary={
                                    <Typography variant="body2" sx={{ color: '#757575' }}>
                                        {activity.role}
                                    </Typography>
                                }
                            />
                        </ListItem>

                        {activity.actions.map((action, actionIndex) => (
                            <Box
                                key={actionIndex}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: '#f0f4fa',
                                    borderRadius: 2,
                                    padding: 1,
                                    margin: '8px 0',
                                }}
                            >
                                <Box sx={{ marginRight: 2 }}>{action.icon}</Box>
                                <Typography variant="body2" sx={{ color: '#333' }}>
                                    {action.description}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                ))}
            </List>

            {/* View More */}
            <Box textAlign="center" mt={2}>
                <Button
                    variant="text"
                    sx={{
                        textTransform: 'none',
                        color: '#1976d2',
                        fontWeight: 'bold',
                    }}
                >
                    View more &darr;
                </Button>
            </Box>
        </Box>
    );
};

export default ActivityStream;
