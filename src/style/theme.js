import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      primary: {
        main: '#000000'
      }
    },
    shape: {
      borderRadius: 0,
    },
    typography: {
        fontFamily: 'Monospace'
    }
  })

  export default theme