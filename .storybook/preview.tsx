import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/styles/Global'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // options: {
  //   storySort: (a, b) =>
  //     a[1].kind === b[1].kind
  //       ? 0
  //       : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  // },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
]
