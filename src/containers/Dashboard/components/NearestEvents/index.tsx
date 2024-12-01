import React from 'react';
import { Box, Typography, Divider, List, ListItem, ListItemText, ListItemIcon, Chip } from '@mui/material';
import { AccessTime, ArrowUpward, ArrowDownward } from '@mui/icons-material';

type Event = {
    title: string;
    time: string;
    duration: string;
    priority: 'High' | 'Low';
};

const NearestEvents: React.FC = () => {
    const events: Event[] = [
        {
            title: 'Presentation of the new department',
            time: 'Today | 5:00 PM',
            duration: '4h',
            priority: 'High',
        },
        {
            title: "Anna's Birthday",
            time: 'Today | 6:00 PM',
            duration: '4h',
            priority: 'Low',
        },
        {
            title: "Ray's Birthday",
            time: 'Tomorrow | 2:00 PM',
            duration: '4h',
            priority: 'Low',
        },
    ];

    const getPriorityIcon = (priority: Event['priority']) => {
        switch (priority) {
            case 'High':
                return <ArrowUpward sx={{ color: '#fbb03b' }} />;
            case 'Low':
                return <ArrowDownward sx={{ color: '#9bc53d' }} />;
            default:
                return null;
        }
    };

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
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" fontWeight="bold">
                    Nearest Events
                </Typography>
                <Typography variant="body2" sx={{ color: '#1976d2', cursor: 'pointer' }}>
                    View all &gt;
                </Typography>
            </Box>


            {/* Events List */}
            <List>
                {events.map((event, index) => (
                    <ListItem key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        {/* Priority Indicator */}
                        <Box
                            sx={{
                                width: 4,
                                height: '100%',
                                borderRadius: 2,
                                backgroundColor: index === 0 ? '#2979ff' : '#d1c4e9',
                            }}
                        ></Box>

                        {/* Event Details */}
                        <Box flex={1}>
                            <Typography variant="body1" fontWeight="bold">
                                {event.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#757575', marginTop: 0.5 }}>
                                {event.time}
                            </Typography>
                        </Box>

                        {/* Event Priority */}
                        <ListItemIcon sx={{ minWidth: 30 }}>{getPriorityIcon(event.priority)}</ListItemIcon>

                        {/* Event Duration */}
                        <Chip
                            icon={<AccessTime />}
                            label={event.duration}
                            size="small"
                            sx={{
                                backgroundColor: '#f0f4fa',
                                color: '#757575',
                                fontWeight: 'bold',
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default NearestEvents;
