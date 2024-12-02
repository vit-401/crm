import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {ADMIN_MAIN, ADMIN_PATH} from "../../utils/paths";
import notfound from "../../images/404.avif"
const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate(ADMIN_PATH.DASHBOARD); // Navigate to the home page or any other route
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                backgroundColor: "#f5f5f5",
                textAlign: "center",
                padding: 4,
            }}
        >
            {/* 404 Illustration */}
            <Box
                component="img"
                src={notfound} // Replace with your 404 illustration URL
                alt="404 Not Found"
                sx={{
                    maxWidth: "400px",
                    width: "100%",
                    marginBottom: 4,
                }}
            />

            {/* Page Title */}
            <Typography
                variant="h2"
                fontWeight="bold"
                sx={{ color: "#0A1629", marginBottom: 2 }}
            >
                {/*404*/}
            </Typography>

            {/* Error Message */}
            <Typography variant="body1" sx={{ color: "#555", marginBottom: 4 }}>
                Oops! The page you’re looking for doesn’t exist.
            </Typography>

            {/* Back to Home Button */}
            <Button
                variant="contained"
                onClick={handleGoHome}
                sx={{
                    backgroundColor: "#2979ff",
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    "&:hover": {
                        backgroundColor: "#255cb3",
                    },
                }}
            >
                Back to Home
            </Button>
        </Box>
    );
};

export default NotFoundPage;
