import { createGlobalStyle } from 'styled-components'

export const theme = {
  cubicBezier: {
    accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
    decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  },
  palette: {
    primary: ['#015468', '#568f96', '#badee4'],
    secondary: ['#fd8330', '#f6a462'],
    grayscale: ['#302e30', '#b2afab', '#f6f9f9', '#fff', 'transparent'],
  },
  fonts: {
    primary: 'sans-serif',
  },
  shadows: {
    none: 'none',
    extraSmall: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    small: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    medium: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    large: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    extraLarge: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  },
  sizes: {
    extraLarge: '2.2em',
    large: '1.6em',
    medium: '1.4em',
    normal: '1.2em',
    small: '1em',
    extraSmall: '.8em',
  },
  fontWeight: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 800,
    ultra: 900,
  },
  padding: {
    primary: '1.8em',
    secondary: '1.2em',
  },
}

export const getOptionsFrom = option => Object.keys(theme[option])

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #e0f2f5;
    margin: 0;
    min-height: 100vh;
    width: 100%;
  }
  a[disabled] {
    pointer-events: none;
  }
`
