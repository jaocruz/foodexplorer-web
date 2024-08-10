import React from 'react'
import ReactDOM from 'react-dom/client'

import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'

import { DishCard } from './components/dish-card'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DishCard/>
    </ThemeProvider>
  </React.StrictMode>,
)
