import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from '@mui/material';
import { FilterList, ViewList, Settings } from '@mui/icons-material';

const TaskDashboard = () => {
    const projects = [
        { id: 'PN0001245', name: 'Medical App (iOS native)', active: true },
        { id: 'PN0001245', name: 'Food Delivery Service' },
        { id: 'PN0001245', name: 'Fortune website' },
        { id: 'PN0001245', name: 'Planner App' },
        { id: 'PN0001245', name: 'Time tracker - personal account' },
        { id: 'PN0001245', name: 'Internal Project' },
    ];

    const tasks = [
        {
            name: 'Research',
            estimate: '2d 4h',
            spentTime: '1d 2h',
            assignee: 'https://via.placeholder.com/40',
            priority: 'Medium',
            status: 'Done',
        },
        {
            name: 'Mind Map',
            estimate: '1d 2h',
            spentTime: '4h 25m',
            assignee: 'https://via.placeholder.com/40',
            priority: 'Medium',
            status: 'In Progress',
        },
        {
            name: 'UX sketches',
            estimate: '4d',
            spentTime: '2d 2h 20m',
            assignee: 'https://via.placeholder.com/40',
            priority: 'Low',
            status: 'In Progress',
        },
        {
            name: 'UX Login + Registration',
            estimate: '2d',
            spentTime: '3h 15m',
            assignee: 'https://via.placeholder.com/40',
            priority: 'Low',
            status: 'To Do',
        },
        {
            name: 'UI Login + Registration',
            estimate: '1d 2h',
            spentTime: '4h',
            assignee: 'https://via.placeholder.com/40',
            priority: 'Medium',
            status: 'In Review',
        },
        {
            name: 'UI for other screens',
            estimate: '4d',
            spentTime: '2d 2h 20m',
            assignee: 'https://via.placeholder.com/40',
            priority: 'Low',
            status: 'In Progress',
        },
    ];

    return (
        <Box display="flex" height="100vh" bgcolor="#f8f9fc">
            {/* Sidebar */}
            <Box
                width="300px"
                bgcolor="#fff"
                p={2}
                boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
                borderRight="1px solid #e0e0e0"
            >
                <Typography variant="h6" fontWeight="bold" mb={2}>
                    Current Projects
                </Typography>
                <List>
                    {projects.map((project) => (
                        <ListItem
                            button
                            key={project.name}
                            sx={{
                                backgroundColor: project.active ? '#e8f0ff' : 'transparent',
                                borderRadius: 2,
                                mb: 1,
                            }}
                        >
                            <ListItemText
                                primary={project.name}
                                secondary={project.active ? 'View details >' : null}
                                primaryTypographyProps={{
                                    fontWeight: project.active ? 'bold' : 'normal',
                                    fontSize: 14,
                                }}
                                secondaryTypographyProps={{
                                    color: 'primary',
                                    fontSize: 12,
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Main Content */}
            <Box flex={1} p={3}>
                {/* Header */}
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                    <Typography variant="h5" fontWeight="bold">
                        Tasks
                    </Typography>
                    <Box display="flex" gap={2}>
                        <IconButton>
                            <ViewList />
                        </IconButton>
                        <IconButton>
                            <Settings />
                        </IconButton>
                        <IconButton>
                            <FilterList />
                        </IconButton>
                    </Box>
                </Box>

                {/* Task Table */}
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Task Name</TableCell>
                                <TableCell>Estimate</TableCell>
                                <TableCell>Spent Time</TableCell>
                                <TableCell>Assignee</TableCell>
                                <TableCell>Priority</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tasks.map((task, index) => (
                                <TableRow key={index}>
                                    <TableCell>{task.name}</TableCell>
                                    <TableCell>{task.estimate}</TableCell>
                                    <TableCell>{task.spentTime}</TableCell>
                                    <TableCell>
                                        <Avatar src={task.assignee} alt="Assignee" />
                                    </TableCell>
                                    <TableCell>{task.priority}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            sx={{
                                                textTransform: 'none',
                                                backgroundColor:
                                                    task.status === 'Done'
                                                        ? 'green'
                                                        : task.status === 'In Progress'
                                                            ? 'blue'
                                                            : task.status === 'To Do'
                                                                ? 'gray'
                                                                : 'purple',
                                                '&:hover': {
                                                    backgroundColor:
                                                        task.status === 'Done'
                                                            ? '#228b22'
                                                            : task.status === 'In Progress'
                                                                ? '#115293'
                                                                : '#707070',
                                                },
                                            }}
                                        >
                                            {task.status}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default TaskDashboard;
