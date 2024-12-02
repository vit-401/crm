import {createTheme} from '@mui/material/styles';


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


const theme = createTheme({
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
            main: '#7D8592',
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
