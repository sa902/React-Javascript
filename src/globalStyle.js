import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
// setsome global defaults   
body {
    font-family: "patrick hand";
  }
  // For use with hiding background with modal
  body.body-no-scroll {
	  overflow: hidden;
  }
  // Common Use Cases 
  .centre {
    display: flex;
    justify-content: center;
  }
`;

export default GlobalStyle;
