import {createTheme} from '@mui/material/styles';
import { ButtonProps } from "@mui/material";


declare module '@mui/material/styles' {
    interface TypographyVariants {
        centeredUnderlineText: React.CSSProperties;
        p: React.CSSProperties;

    }

    interface TypographyVariantsOptions {
        centeredUnderlineText?: React.CSSProperties;
        p: React.CSSProperties;

    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        centeredUnderlineText: true;
        p: true
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        "button-popup": true; // Add your custom variant here
    }
}



const theme = createTheme({
    components: {

        MuiButton: {
            variants: [
                {
                    props: {variant: "button-popup"},
                    style: {
                        backgroundColor: '#3F8CFF', // Default background
                        color: '#FFFFFF',          // Default text color
                        fontFamily: "Nunito Sans, Arial, sans-serif", // Primary font
                        fontSize: 16, // Base font size
                        fontWeight: 600,
                        borderRadius: '14px',
                        textTransform: 'none', // Disable uppercase by default
                        boxShadow: "0px 6px 12px 0px rgba(63, 140, 255, 0.42)",
                        padding: "10px 22px",
                        '&:hover': {
                            backgroundColor: '#3A81EB', // Hover state
                        },
                        '&:active': {
                            backgroundColor: '#1F6DE0', // Pressed state
                        },
                        '&.Mui-disabled': {
                            backgroundColor: '#CED5E0', // Disabled state
                            color: '#9E9E9E',          // Disabled text color
                        },
                    }
                }
            ],
        },
    },
    typography: {
        h6: {
            color: '#0A1629',
            fontWeight: 700,
            fontSize: '22px',
            lineHeight: '30px',
            fontFamily: 'Nunito Sans, sans-serif',
        },
        p: {
            fontFamily: 'Nunito Sans, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            lineHeight: '12px',
            textAlign: 'center',
        },
        centeredUnderlineText: {
            fontFamily: 'Nunito Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '21.82px',
            textAlign: 'center',
        },
    },
    palette: {
        primary: {
            light: '#757ce8',
            main: 'rgba(63, 140, 255, 1)',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#7D8592',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 1152,
            lg: 1336,
            xl: 1920,
        },
    },
});

export default theme;
