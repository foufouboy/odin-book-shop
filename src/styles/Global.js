import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
    }

    body {
        font-family: "Source Serif 4";
    }

    :root {
        --dark-blue: #001524;
        --dark-grey: #445D48;
        --peach: #D6CC99;
        --beige: #FDE5D4;
    }
`

export default GlobalStyles;