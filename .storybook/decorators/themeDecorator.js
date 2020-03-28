import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles, theme } from '@theme'

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
)

export default ThemeDecorator