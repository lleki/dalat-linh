import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap');
  
  html, body {
    height: 100%;
    margin: 0;

  }
  
  *, *::after, *::before {
    box-sizing: border-box;
  }
  `;
