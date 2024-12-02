import React, { useState } from 'react';
import { Box, Typography, TextField, Button, InputAdornment, IconButton, Alert } from '@mui/material';
import { Visibility, VisibilityOff, InfoOutlined } from '@mui/icons-material';
import PhoneNumberInput from './PhoneNumberInput';
import SMSCodeInput from './SMSCodeInput';

const SignupForm: React.FC = () => {
    const [phone, setPhone] = useState('');
    const [smsCode, setSmsCode] = useState(['', '', '', '']);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ phone, smsCode: smsCode.join(''), email, password });
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: '500px' }}>
            <Typography variant="subtitle2" sx={{ color: '#2979ff', textAlign: 'center', marginBottom: 2 }}>
                STEP 1/4
            </Typography>
            <Typography variant="h5" fontWeight="bold" textAlign="center" marginBottom={3}>
                Valid your phone
            </Typography>

            {/* Phone Number */}
            <PhoneNumberInput value={phone} onChange={(value) => setPhone(value)} />

            {/* SMS Code */}
            <SMSCodeInput value={smsCode} onChange={(value) => setSmsCode(value)} />

            {/* SMS Information */}
            <Alert
                icon={<InfoOutlined />}
                severity="info"
                sx={{
                    backgroundColor: '#e6f4f1',
                    color: '#1976d2',
                    marginBottom: 2,
                    fontSize: '14px',
                }}
            >
                SMS was sent to your number +1 345 673-56-67. It will be valid for 01:25
            </Alert>

            {/* Email */}
            <TextField
                type="email"
                label="Email Address"
                variant="outlined"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ marginBottom: 2 }}
            />

            {/* Password */}
            <TextField
                type={showPassword ? 'text' : 'password'}
                label="Create Password"
                variant="outlined"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />


        </Box>
    );
};

export default SignupForm;
