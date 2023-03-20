import { createTheme } from "@mui/material/styles";

export const firstTheme = createTheme({
    palette: {
        primary: {
            light: '#c6a3ff',
            main: '#9474cc',
            dark: '#64489b',
            contrastText: '#000000'
        },
        secondary: {
            light: '#fff3ff',
            main: '#d0c0e8',
            dark: '#9f90b6',
            contrastText: '#000000'
        }
    },
    components: {
        MuiLink: {
          defaultProps: {
            underline: 'none'
          },
          styleOverrides: {
            root: {
              textDecoration: 'none',
              color: "black"
            }
          }
        },
        MuiAppBar: {
          defaultProps: {
            elevation: 0,
            position: 'fixed',
          },
          styleOverrides: {
            root: {
              backgroundColor: '#9474cc',
              height: 70
            }
          }
        },
        // MuiTypography: {
        //   styleOverrides: {
        //     h1: {
        //       fontSize: 30,
        //       fontWeight: 600
        //     },
        //     h2: {
        //       fontSize: 20,
        //       fontWeight: 400
        //     },
        //     subtitle1: {
        //       fontSize: 18,
        //       fontWeight: 600
        //     }
        //   }
        // },
    
    }
})