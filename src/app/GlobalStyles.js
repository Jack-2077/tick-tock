import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
  }
  body {
    min-height: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: "Google Sans Display", Roboto, Arial, sans-serif;
    background: #232529;
    color: #e2e3e7;
  }
`;

export default GlobalStyles;
