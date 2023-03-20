import '@/styles/globals.css'
import { firstTheme } from '../themes'
import { ThemeContext, ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import { SWRConfig } from 'swr/_internal'
import { AuthProvider } from '@/context/auth'
import { useState } from 'react'
import { createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

export default function App({ Component, pageProps }: AppProps) {

  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const theme = themeMode === 'light' ? firstTheme : darkTheme;

  // const toggleTheme2 = () => {
  //   setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  // };
  const toggleTheme2 = () => {
    if (themeMode === 'light') {
      setThemeMode('dark');
    } else {
      setThemeMode('light');
    }
  };

  const toggleTheme = (mode: ThemeMode) => {
    if (mode === 'light' || mode === 'dark') {
      setThemeMode(mode);
    }
  };



  return (
    <SWRConfig 
    value={{
      fetcher: (resource, init) =>
        fetch(resource, init).then(res => res.json())
    }}
    >
      {/* <AuthProvider>
        <ThemeProvider theme={firstTheme}>
              <CssBaseline/>
              <Component {...pageProps}/>
            </ThemeProvider>
      </AuthProvider> */}

    <AuthProvider>
      <ThemeContext.Provider value={{ themeMode, toggleTheme, toggleTheme2 }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </AuthProvider>

    </SWRConfig>
  )
}
