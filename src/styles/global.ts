import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    body {
        width: 100vw;
        height: 100vh;
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.grey};
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: ${({ theme }) => theme.fonts.mono};
    }
    button {
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
`;