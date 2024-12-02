import {Box, StepIconProps} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";

const CustomStepIcon = (props: StepIconProps) => {
    const { active, completed } = props;

    return completed ? (
        <CheckCircleIcon
            sx={{
                color: '#fff', // Set the color of the completed icon to white
            }}
        />
    ) : (
        <Box
            sx={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                border:`1px solid  ${active ? '#fff': 'rgba(255,255,255,0.30)'}`,
                backgroundColor: active ? 'rgba(255,255,255,0.30)' : 'transparent', // Blue for active, gray for default

            }}
        >

        </Box>
    );
};

export default CustomStepIcon;