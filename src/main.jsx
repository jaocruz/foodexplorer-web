import React from 'react'
import ReactDOM from 'react-dom/client'

import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'

import { SignUp } from './pages/sign-up'
import { SignIn } from './pages/sign-in'

import { Home } from './pages/home'
import { DishDetails } from './pages/dish-details'
import { AddDish } from './pages/add-dish'
import { EditDish } from './pages/edit-dish'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SignUp/>
    </ThemeProvider>
  </React.StrictMode>,
)
