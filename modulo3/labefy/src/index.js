import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './styles/globalStyle'
import App from './app/App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals()