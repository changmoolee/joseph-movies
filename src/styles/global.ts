import { createGlobalStyle } from "styled-components";
import reset from "./reset";

const GlobalStyle = createGlobalStyle`
${reset}
html {
  overflow-y: scroll;
}



`;

export default GlobalStyle;
