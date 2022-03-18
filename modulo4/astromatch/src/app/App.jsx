// import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './globalStyle'
import { colors } from '../helpers/colors'

import { Display } from '../components/Display'
import { ButtonClear } from '../components/ButtonClear'

const App = () => {
  return (
    	<ThemeProvider theme={colors}>
    		<GlobalStyle />
      		<Display />
			<ButtonClear />
    	</ThemeProvider>
  	)
}

export default App;