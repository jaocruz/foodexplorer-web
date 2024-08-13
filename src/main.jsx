import React from 'react'
import ReactDOM from 'react-dom/client'

import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'

import { IngredientButton } from "./components/ingredient-button"

import { Home } from './pages/home'
import { DishDetails } from './pages/dish-details'
import { AddDish } from './pages/add-dish'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AddDish/>
    </ThemeProvider>
  </React.StrictMode>,
)
