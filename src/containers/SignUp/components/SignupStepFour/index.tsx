import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const SignupStepFour: React.FC = () => {
    const [emails, setEmails] = useState<string[]>([""]);

    const handleAddEmail = () => {
        setEmails([...emails, ""]);
    };

    const handleChangeEmail = (index: number, value: string) => {
        const updatedEmails = [...emails];
        updatedEmails[index] = value;
        setEmails(updatedEmails);
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
            <Typography
                variant="subtitle2"
                sx={{ color: "#2979ff", textAlign: "center", marginBottom: 2 }}
            >
                STEP 4/4
            </Typography>
            <Typography
                variant="h5"
                fontWeight="bold"
                textAlign="center"
                marginBottom={4}
            >
                Invite Team Members
            </Typography>

            {/* Email Fields */}
            {emails.map((email, index) => (
                <TextField
                    key={index}
                    label={`Member's Email`}
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => handleChangeEmail(index, e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
            ))}

            {/* Add Another Member */}
            <Button
                startIcon={<AddIcon />}
                variant="text"
                onClick={handleAddEmail}
                sx={{
                    color: "#2979ff",
                    textTransform: "none",
                    fontWeight: "bold",
                    marginBottom: 4,
                }}
            >
                Add another Member
            </Button>


        </Box>
    );
};

export default SignupStepFour;
