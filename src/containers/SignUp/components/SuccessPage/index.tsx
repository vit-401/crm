import React from "react";
import { Box, Typography, Button } from "@mui/material";

const SuccessPage: React.FC<{ onStart: () => void }> = ({ onStart }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                backgroundColor: "#f5f5f5",
                padding: 4,
            }}
        >
            {/* Illustration */}
            <Box
                component="img"
                src="https://via.placeholder.com/400x300" // Replace with the actual illustration URL
                alt="Success Illustration"
                sx={{
                    maxWidth: "400px",
                    width: "100%",
                    marginBottom: 4,
                }}
            />

            {/* Success Message */}
            <Typography
                variant="h5"
                fontWeight="bold"
                textAlign="center"
                sx={{ marginBottom: 3 }}
            >
                You are successfully registered!
            </Typography>

            {/* Let's Start Button */}
            <Button
                variant="contained"
                onClick={onStart}
                sx={{
                    backgroundColor: "#2979ff",
                    textTransform: "none",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    "&:hover": {
                        backgroundColor: "#255cb3",
                    },
                }}
            >
                Let’s Start &rarr;
            </Button>
        </Box>
    );
};

export default SuccessPage;
