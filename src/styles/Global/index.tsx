import { createGlobalStyle } from 'styled-components'
import { IGlobalStyle } from './interface'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }: IGlobalStyle) =>
      theme?.colors?.body ? theme.colors.body : '#fff'};
    color: hsl(192, 100%, 9%);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5em;
    margin: 0;
  }
`
