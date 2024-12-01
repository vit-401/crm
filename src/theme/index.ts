import {createTheme} from '@mui/material/styles';

const theme = createTheme({
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
