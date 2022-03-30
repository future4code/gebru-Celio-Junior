import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/globalStyles'
import { Home } from '../pages/Home'
import { theme } from '../styles/themes'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}

export default App
