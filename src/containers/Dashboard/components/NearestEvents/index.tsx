import React from 'react';
import {Box, Typography, Divider, List, ListItem, ListItemText, ListItemIcon, Chip, Button, Grid} from '@mui/material';
import {AccessTime, ArrowUpward, ArrowDownward} from '@mui/icons-material';
import {Link} from "react-router-dom";
import {ADMIN_PATH} from "../../../../utils/paths";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

type Event = {
    title: string;
    time: string;
    duration: string;
    priority: 'High' | 'Low';
    color: string
};

const NearestEvents: React.FC = () => {
    const events: Event[] = [
        {
            title: 'Presentation of the new department',
            time: 'Today | 5:00 PM',
            duration: '4h',
            priority: 'High',
            color: "#3F8CFF"
        },
        {
            title: "Anna's Birthday",
            time: 'Today | 6:00 PM',
            duration: '4h',
            priority: 'Low',
            color: "#DE92EB"
        },
        {
            title: "Ray's Birthday",
            time: 'Tomorrow | 2:00 PM',
            duration: '4h',
            priority: 'Low',
            color: "#DE92EB"
        },
    ];

    const getPriorityIcon = (priority: Event['priority']) => {
        switch (priority) {
            case 'High':
                return <ArrowUpward sx={{color: '#fbb03b'}}/>;
            case 'Low':
                return <ArrowDownward sx={{color: '#9bc53d'}}/>;
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
                <Typography variant="h6">
                    Nearest Events
                </Typography>

                <Link
                    to={ADMIN_PATH.NEAREST_EVENT} // Replace with the appropriate route
                    style={{
                        textTransform: "none",
                        color: "#1976d2",
                        textDecoration: "none",
                        fontSize: "inherit",
                    }}
                >
                    View all &gt;
                </Link>
            </Box>


            {/* Events List */}
            <List>
                {events.map((event, index) => (
                    <ListItem
                        key={index}
                        sx={{
                            gap: 2,
                            padding: '16px 0', // Add vertical spacing between list items
                        }}
                    >
                        {/* Priority Indicator */}
                        <Box
                            sx={{
                                width: 4,
                                height: '100%',
                                minHeight: '95px',
                                borderRadius: 2,
                                backgroundColor: event.color,
                            }}
                        ></Box>

                        <Grid container spacing={2}>
                            {/* Title Row */}
                            <Grid item container xs={12} spacing={1} alignItems="center">
                                <Grid item xs={8}>
                                    <Typography variant="body1" fontWeight="bold">
                                        {event.title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} container justifyContent="flex-end">
                                    <ListItemIcon sx={{ minWidth: 30 }}>
                                        {getPriorityIcon(event.priority)}
                                    </ListItemIcon>
                                </Grid>
                            </Grid>

                            {/* Time and Duration Row */}
                            <Grid item container xs={12} spacing={1} alignItems="center">
                                <Grid item xs={8}>
                                    <Typography variant="body2" sx={{ color: '#757575' }}>
                                        {event.time}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} container justifyContent="flex-end">
                                    {/*<Chip*/}
                                    {/*    icon={<AccessTime />}*/}
                                    {/*    label={event.duration}*/}
                                    {/*    size="small"*/}
                                    {/*    sx={{*/}
                                    {/*        backgroundColor: '#f0f4fa',*/}
                                    {/*        color: '#757575',*/}
                                    {/*        fontWeight: 'bold',*/}
                                    {/*    }}*/}
                                    {/*/>*/}
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            marginTop: '10px',
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "flex-end",
                                            gap: 1,
                                            backgroundColor: "#F4F9FD",
                                            padding: "5px 10px",
                                            borderRadius: '8px',

                                        }}
                                    >
                                        <AccessTimeIcon fontSize="small"/> {event.duration}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ListItem>
                ))}
            </List>


        </Box>
    );
};

export default NearestEvents;
