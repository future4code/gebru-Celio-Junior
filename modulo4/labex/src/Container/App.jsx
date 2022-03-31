import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/globalStyles'
import { theme } from '../styles/themes'

import { Router } from '../routes/routes'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  )
}

export default App
