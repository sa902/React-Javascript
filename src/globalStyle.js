import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    // margin: 0;
    // padding: 0;
    // background: teal;
    font-family: "patrick hand";
  }
  body.body-no-scroll {
	overflow: hidden;
  }
`;

export default GlobalStyle;
