import React, { useState, useEffect } from 'react'
import { Context } from '../context/Context'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/theme'

import { GlobalStyles } from '../styles/globalStyles'
import { Pages } from '../routes/routes'

const App = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])

  return (
    <Context.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Pages />
      </ThemeProvider>
    </Context.Provider>
  )
}

export default App
