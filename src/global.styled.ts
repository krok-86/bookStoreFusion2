import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  font-family: 'Poppins', sans-serif;
  min-width: 290px;
  }

  body {
    margin: 0 auto;
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
/* .tail-spin{
display: flex;
justify-content: center;
align-items: center;
background-color: green;
color: blue;
width: 1200px;
height: 1200px;
} */
`;