import React, { useState } from "react";
import {
    Box,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
    Button,
} from "@mui/material";

const SignupStepTwo: React.FC = () => {
    const [serviceUsage, setServiceUsage] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [bestOption, setBestOption] = useState<string>("");

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                maxWidth: "500px",
                margin: "0 auto",
                padding: "24px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
        >
            {/* Step Indicator */}
            <Typography variant="subtitle2" sx={{ color: "#2979ff", textAlign: "center", marginBottom: 2 }}>
                STEP 2/4
            </Typography>
            <Typography variant="h5" fontWeight="bold" textAlign="center" marginBottom={4}>
                Tell about yourself
            </Typography>

            {/* Why will you use the service? */}
            <FormControl fullWidth sx={{ marginBottom: 3 }}>
                <InputLabel>Why will you use the service?</InputLabel>
                <Select
                    value={serviceUsage}
                    onChange={(e) => setServiceUsage(e.target.value)}
                    label="Why will you use the service?"
                >
                    <MenuItem value="Work">Work</MenuItem>
                    <MenuItem value="Personal">Personal</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                </Select>
            </FormControl>

            {/* What describes you best? */}
            <FormControl fullWidth sx={{ marginBottom: 3 }}>
                <InputLabel>What describes you best?</InputLabel>
                <Select
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    label="What describes you best?"
                >
                    <MenuItem value="Business Owner">Business Owner</MenuItem>
                    <MenuItem value="Employee">Employee</MenuItem>
                    <MenuItem value="Freelancer">Freelancer</MenuItem>
                </Select>
            </FormControl>

            {/* Radio Buttons */}
            <FormControl component="fieldset" sx={{ marginBottom: 4 }}>
                <Typography variant="body1" fontWeight="bold" marginBottom={1}>
                    What describes you best?
                </Typography>
                <RadioGroup
                    row
                    value={bestOption}
                    onChange={(e) => setBestOption(e.target.value)}
                >
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>

            {/* Navigation Buttons */}

        </Box>
    );
};

export default SignupStepTwo;
