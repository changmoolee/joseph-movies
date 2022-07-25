import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
html {
  overflow-y: scroll;
}
body {
  font-family: 'IBM Plex Sans', sans-serif;
  line-height: 120%;
}

`;

export default GlobalStyle;
