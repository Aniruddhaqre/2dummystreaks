import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DailyButton from './DailyButton.jsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Theme from './theme.js'


const theme = extendTheme({Theme})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
  </React.StrictMode>,
)
