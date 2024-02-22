import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <GlobalStyle />
      <>
        <Router />
      </> */}
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
