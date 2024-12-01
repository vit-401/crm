import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Checkbox,
    FormControlLabel,
    InputAdornment,
    IconButton,
    Grid,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import {useNavigate} from "react-router-dom";
import {ADMIN_PATH} from "../../utils/paths";

const SignInPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSignIn = (event: React.FormEvent): void => {
        event.preventDefault();

        const isValidUser = validateUserCredentials(username, password);

        if (!isValidUser) {
            alert('User not found');
            return;
        }
        saveCredentialsToLocalStorage(username, password);
    };

    const validateUserCredentials = (username: string, password: string): boolean => {
        return username === 'adminn' && password === 'qwqw';
    };

    const saveCredentialsToLocalStorage = (username: string, password: string): void => {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        navigate(ADMIN_PATH.DASHBOARD)

    };


    return (
        <Grid container sx={{ height: '100vh', backgroundColor: '#f5f6fa' }}>
            {/* Left Section */}
            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    backgroundColor: '#4F84FF',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    padding: '2rem',
                }}
            >

                <Typography variant="h5" fontWeight={600}>
                    Your place to work
                </Typography>
                <Typography variant="h6" fontWeight={400} mb={2}>
                    Plan. Create. Control.
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 2,
                        backgroundColor: '#E3F2FD',
                        width: 80,
                        height: 80,
                    }}
                >
                    <ViewAgendaIcon sx={{ fontSize: 40, color: '#1E88E5' }} />
                </Box>
            </Grid>

            {/* Right Section */}
            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                }}
            >
                <Typography variant="h5" fontWeight={600} mb={4}>
                    Sign In to Wookroom
                </Typography>
                <Box component="form" sx={{ width: '100%', maxWidth: '400px' }} onSubmit={handleSignIn}>
                    <TextField
                        fullWidth
                        label="Username"
                        placeholder="Neo"
                        type="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        margin="normal"
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                        sx={{ mb: 2 }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        mb={2}
                    >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                            }
                            label="Remember me"
                        />
                        <Typography
                            variant="body2"
                            sx={{ color: '#4F84FF', cursor: 'pointer' }}
                        >
                            Forgot Password?
                        </Typography>
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            backgroundColor: '#4F84FF',
                            color: '#fff',
                            padding: '0.8rem',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            mb: 2,
                            '&:hover': {
                                backgroundColor: '#3a6fdc',
                            },
                        }}
                    >
                        Sign In
                    </Button>
                    <Typography textAlign="center" variant="body2">
                        Don’t have an account?{' '}
                        <Typography
                            component="span"
                            sx={{
                                color: '#4F84FF',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                            }}
                        >
                            Sign Up
                        </Typography>
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default SignInPage;
