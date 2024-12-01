import React from 'react';
import {
    Box,
    Typography,
    AvatarGroup,
    Avatar,
    Chip,
    Grid,
    Divider,
    Button,
} from '@mui/material';

type Project = {
    id: string;
    title: string;
    created: string;
    priority: 'Low' | 'Medium' | 'High';
    tasks: { total: number; active: number };
    assignees: string[];
};

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            id: 'PN0001265',
            title: 'Medical App (iOS native)',
            created: 'Sep 12, 2020',
            priority: 'Medium',
            tasks: { total: 34, active: 13 },
            assignees: [
                'https://via.placeholder.com/40',
                'https://via.placeholder.com/40',
                'https://via.placeholder.com/40',
            ],
        },
        {
            id: 'PN0001221',
            title: 'Food Delivery Service',
            created: 'Sep 10, 2020',
            priority: 'Medium',
            tasks: { total: 50, active: 24 },
            assignees: [
                'https://via.placeholder.com/40',
                'https://via.placeholder.com/40',
                'https://via.placeholder.com/40',
            ],
        },
        {
            id: 'PN0001290',
            title: 'Food Delivery Service',
            created: 'May 28, 2020',
            priority: 'Low',
            tasks: { total: 23, active: 20 },
            assignees: [
                'https://via.placeholder.com/40',
                'https://via.placeholder.com/40',
                'https://via.placeholder.com/40',
            ],
        },
    ];

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'High':
                return { color: '#fbb03b', text: 'High' };
            case 'Medium':
                return { color: '#ffb74d', text: 'Medium' };
            case 'Low':
                return { color: '#9bc53d', text: 'Low' };
            default:
                return { color: '#757575', text: priority };
        }
    };

    return (
        <Box
            sx={{
                padding: 3,
                backgroundColor: '#F4F9FD',
                borderRadius: 2,

            }}
        >
            {/* Header */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h6" fontWeight="bold">
                    Projects
                </Typography>
                <Button variant="text" sx={{ textTransform: 'none', color: '#1976d2' }}>
                    View all &gt;
                </Button>
            </Box>


            {/* Project Cards */}
            {projects.map((project, index) => (
                <Box
                    key={index}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 2,
                        backgroundColor: '#fff',
                        borderRadius: 2,
                        boxShadow: '0px 6px 58px 0px rgba(196, 203, 214, 0.1036)',
                        marginBottom: 2,
                    }}
                >
                    {/* Project Info */}
                    <Box display="flex" alignItems="flex-start" gap={2}>
                        {/* Placeholder for Project Icon */}
                        <Box
                            sx={{
                                width: 40,
                                height: 40,
                                backgroundColor: '#e8f0fe',
                                borderRadius: 2,
                            }}
                        />
                        <Box>
                            <Typography variant="body1" fontWeight="bold">
                                {project.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: '#757575', marginTop: 0.5 }}
                            >
                                Created {project.created}
                            </Typography>
                            <Chip
                                label={getPriorityColor(project.priority).text}
                                sx={{
                                    backgroundColor: getPriorityColor(project.priority).color,
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    marginTop: 1,
                                }}
                                size="small"
                            />
                        </Box>
                    </Box>

                    {/* Project Data */}
                    <Box display="flex" alignItems="center" gap={3}>
                        <Box textAlign="center">
                            <Typography variant="caption" sx={{ color: '#757575' }}>
                                All tasks
                            </Typography>
                            <Typography variant="body1" fontWeight="bold">
                                {project.tasks.total}
                            </Typography>
                        </Box>
                        <Box textAlign="center">
                            <Typography variant="caption" sx={{ color: '#757575' }}>
                                Active tasks
                            </Typography>
                            <Typography variant="body1" fontWeight="bold">
                                {project.tasks.active}
                            </Typography>
                        </Box>
                        <Box textAlign="center">
                            <Typography variant="caption" sx={{ color: '#757575' }}>
                                Assignees
                            </Typography>
                            <AvatarGroup max={3}>
                                {project.assignees.map((assignee, idx) => (
                                    <Avatar key={idx} src={assignee} />
                                ))}
                            </AvatarGroup>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default Projects;

