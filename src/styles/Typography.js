import { createGlobalStyle } from "styled-components"

const font = "../assets/fonts/Montserrat-Regular.ttf"
const impact =
  "https://res.cloudinary.com/dtxylaqlc/raw/upload/v1621866668/FFTE%20Website/impact_tsbvtk.ttf"

const Typography = createGlobalStyle`

@font-face {
    font-family: "montserrat";
    src: url(${font}) format("ttf");
}

@font-face {
    font-family: "impact";
    src: url(${impact}) format("ttf");
}

html {
    font-family: 'montserrat','Helvetica Neue', sans-serif;
    color: var(--white);
}

a {
    color: var(--red);
}

a:hover {
    color: var(--grey);
    animation: hover 0.5s;
}

@keyframes hover {
    from {color: var(--red)}
    to {color: var(--grey)}
}





`

export default Typography
