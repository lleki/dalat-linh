import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;

  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  `;
