import React from 'react'
import ReactDOM from 'react-dom/client'

import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'

import { Button } from './components/button'
import { PiReceipt } from 'react-icons/pi'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Button
        icon={PiReceipt}
        title="Meu pedido (0)"
      />
    </ThemeProvider>
  </React.StrictMode>,
)
