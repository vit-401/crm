import React from 'react';
import { Box, TextField } from '@mui/material';

interface SMSCodeInputProps {
    value: string[];
    onChange: (value: string[]) => void;
}

const SMSCodeInput: React.FC<SMSCodeInputProps> = ({ value, onChange }) => {
    const handleChange = (index: number, newValue: string) => {
        const updatedValue = [...value];
        updatedValue[index] = newValue;
        onChange(updatedValue);
    };

    return (
        <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
            {value.map((digit, index) => (
                <TextField
                    key={index}
                    inputProps={{
                        maxLength: 1,
                        style: { textAlign: 'center' },
                    }}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                />
            ))}
        </Box>
    );
};

export default SMSCodeInput;
