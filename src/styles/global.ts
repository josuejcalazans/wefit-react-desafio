import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.colors.gray900};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, button {
    font-weight: 700;
    font-family: ${({ theme }) => theme.fontFamily};
  }

`
