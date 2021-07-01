import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --red: #FF4949;
    --black: #000000;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #C8CBD8;
  }

html {
    background: var(--black);
    color: var(--white);
}

img {
    max-width: 100%;
}

body {
    margin: 1rem;
    min-height: auto;
    line-height: 1.5rem;
  }


`;
export default GlobalStyles;
