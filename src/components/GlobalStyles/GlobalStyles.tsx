import React from "react";
import { Global, css } from "@emotion/react";

const globalFontStyles = `
  @font-face {
    font-family: 'Clear Sans';
    src: url('/fonts/ClearSans-Thin.woff') format('woff');
    font-weight: 200;
  }
  @font-face {
    font-family: 'Clear Sans';
    src: url('/fonts/ClearSans-Light.woff') format('woff');
    font-weight: 300;
  }
  @font-face {
    font-family: 'Clear Sans';
    src: url('/fonts/ClearSans-Regular.woff') format('woff');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Clear Sans';
    src: url('/fonts/ClearSans-Italic.woff') format('woff');
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: 'Clear Sans';
    src: url('/fonts/ClearSans-Medium.woff') format('woff');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Clear Sans';
    src: url('/fonts/ClearSans-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Clear Sans';
    src: url('/fonts/ClearSans-Bold.woff') format('woff');
    font-weight: 600;
  }
 
`;
export const GlobalStyles = (): JSX.Element => (
  <Global
    styles={css`
      ${globalFontStyles}
    `}
  />
);
