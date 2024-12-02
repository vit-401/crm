import React, { useState } from 'react';
import { Box, Typography, Stepper, Step, StepLabel, Button, StepIconProps } from '@mui/material';
import SignupForm from './components/SignupForm'; // Step 1
import SignupStepTwo from './components/SignupStepTwo'; // Step 2 (Tell about yourself)
import SignupStepThree from './components/SignupStepThree'; // Step 3 (Tell about your company)
import SignupStepFour from './components/SignupStepFour'; // Step 4 (Invite Team Members)
import SuccessPage from './components/SuccessPage'; // Final success screen
import {ADMIN_PATH} from "../../utils/paths";
import {useNavigate} from "react-router-dom";
import CustomStepIcon from "./components/CustomStepIcon";










const SignupPage: React.FC = () => {
    const navigate = useNavigate();

    const steps = ['Valid your phone', 'Tell about yourself', 'Tell about your company', 'Invite Team Members'];

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        if (activeStep < steps.length) {
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    };

    const handleFinish = () => {
        // Logic to handle "Finish"
        console.log('Sign-up process completed!');
        // Navigate to success page or main application
        handleNext()
    };
    const onStart = () => {
        localStorage.setItem('username', 'adminn');
        localStorage.setItem('password', 'qwqw');
        navigate(ADMIN_PATH.DASHBOARD)
    }

    // Render the current step content
    const renderStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <SignupForm />;
            case 1:
                return <SignupStepTwo />;
            case 2:
                return <SignupStepThree  />;
            case 3:
                return <SignupStepFour  />;
            case 4:
                return <SuccessPage onStart={onStart} />;
            default:
                return <Typography variant="body1">Unknown Step</Typography>;
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh',
                backgroundColor: '#f5f5f5',
            }}
        >
            {/* Left Panel */}
            <Box
                sx={{
                    flex: '0 0 300px',
                    backgroundColor: '#2979ff',
                    color: '#fff',
                    padding: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h5" fontWeight="bold" mb={2}>
                    Get started
                </Typography>
                <Stepper orientation="vertical" activeStep={activeStep} sx={{ color: 'white' }}>
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <StepLabel
                                StepIconComponent={CustomStepIcon}
                                >
                                <Typography variant="body2" sx={{ color: '#fff' }}>
                                    {step}
                                </Typography>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>

            {/* Right Panel */}
            <Box
                sx={{
                    flex: 1,
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {renderStepContent(activeStep)}

                {/* Navigation Buttons */}
                {activeStep < steps.length && (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: activeStep === 0 ? 'flex-end' : 'space-between',
                            width: '100%',
                            marginTop: 3,
                        }}
                    >
                        {activeStep > 0 && (
                            <Button
                                variant="text"
                                sx={{
                                    color: '#2979ff',
                                    textTransform: 'none',
                                }}
                                onClick={handleBack}
                            >
                                &larr; Previous
                            </Button>
                        )}
                        {activeStep < steps.length - 1 ? (
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#2979ff',
                                    textTransform: 'none',
                                    padding: '8px 16px',
                                    '&:hover': { backgroundColor: '#255cb3' },
                                }}
                                onClick={handleNext}
                            >
                                Next Step &rarr;
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#2979ff',
                                    textTransform: 'none',
                                    padding: '8px 16px',
                                    '&:hover': { backgroundColor: '#255cb3' },
                                }}
                                onClick={handleFinish}
                            >
                                Finish &rarr;
                            </Button>
                        )}
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default SignupPage;
