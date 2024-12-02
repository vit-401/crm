import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
} from "@mui/material";

const SignupStepThree: React.FC=() => {
    const [companyName, setCompanyName] = useState<string>("");
    const [businessDirection, setBusinessDirection] = useState<string>("");
    const [teamSize, setTeamSize] = useState<string>("");

    const handleTeamSizeSelect = (size: string) => {
        setTeamSize(size);
    };

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
                STEP 3/4
            </Typography>
            <Typography variant="h5" fontWeight="bold" textAlign="center" marginBottom={4}>
                Tell about your company
            </Typography>

            {/* Company Name */}
            <TextField
                label="Your Company's Name"
                variant="outlined"
                fullWidth
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                sx={{ marginBottom: 3 }}
            />

            {/* Business Direction */}
            <FormControl fullWidth sx={{ marginBottom: 3 }}>
                <InputLabel>Business Direction</InputLabel>
                <Select
                    value={businessDirection}
                    onChange={(e) => setBusinessDirection(e.target.value)}
                    label="Business Direction"
                >
                    <MenuItem value="IT and programming">IT and programming</MenuItem>
                    <MenuItem value="Marketing">Marketing</MenuItem>
                    <MenuItem value="Finance">Finance</MenuItem>
                    <MenuItem value="Education">Education</MenuItem>
                    <MenuItem value="Healthcare">Healthcare</MenuItem>
                </Select>
            </FormControl>

            {/* Team Size */}
            <Typography variant="body1" fontWeight="bold" textAlign="center" marginBottom={2}>
                How many people in your team?
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 2,
                    marginBottom: 4,
                }}
            >
                {["Only me", "2 - 5", "6 - 10", "11 - 20", "21 - 40", "41 - 50", "51 - 100", "101 - 500"].map(
                    (size) => (
                        <Button
                            key={size}
                            variant={teamSize === size ? "contained" : "outlined"}
                            onClick={() => handleTeamSizeSelect(size)}
                            sx={{
                                borderRadius: "8px",
                                textTransform: "none",
                                fontWeight: teamSize === size ? "bold" : "normal",
                                backgroundColor: teamSize === size ? "#2979ff" : "transparent",
                                color: teamSize === size ? "#fff" : "#2979ff",
                                borderColor: "#2979ff",
                                "&:hover": {
                                    backgroundColor: teamSize === size ? "#255cb3" : "#e3f2fd",
                                },
                            }}
                        >
                            {size}
                        </Button>
                    )
                )}
            </Box>

            {/* Navigation Buttons */}

        </Box>
    );
};

export default SignupStepThree;
