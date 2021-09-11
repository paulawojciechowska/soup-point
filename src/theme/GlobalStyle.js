import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }

    body {
        font-family: 'Urbanist', sans-serif;
        margin: 0;
        padding: 0;
        overflow-y: hidden;
    }

    a, button {
        font-family: 'Urbanist', sans-serif;
    }
`;

export default GlobalStyle;
