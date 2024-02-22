import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/header'
import { LayoutContainer } from './components/ui/layout'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <LayoutContainer>
        <Header />
      </LayoutContainer>
    </ThemeProvider>
  )
}
