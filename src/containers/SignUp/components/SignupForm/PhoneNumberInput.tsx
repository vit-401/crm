import React from 'react';
import { Box, TextField, Select, MenuItem } from '@mui/material';

interface PhoneNumberInputProps {
    value: string;
    onChange: (value: string) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ value, onChange }) => {
    return (
        <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
            {/* Country Code */}
            <Select
                defaultValue="+1"
                sx={{ width: '100px' }}
            >
                <MenuItem value="+1">+1</MenuItem>
                <MenuItem value="+91">+91</MenuItem>
                <MenuItem value="+44">+44</MenuItem>
            </Select>

            {/* Phone Number */}
            <TextField
                type="tel"
                placeholder="345 567-23-56"
                variant="outlined"
                fullWidth
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </Box>
    );
};

export default PhoneNumberInput;
