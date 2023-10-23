import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
    }

    body::-webkit-scrollbar {
        -ms-overflow-style: none;
        display: none;
    }

    body {
        // Default styles :

        font-family: "Source Serif 4";
        background-color: var(--dark-blue);
        color: var(--beige);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    :root {
        --dark-blue: #001524;
        --dark-grey: #445D48;
        --peach: #D6CC99;
        --beige: #FDE5D4;
    }
`

export default GlobalStyles;