import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Helvetica;
    }

    body {
        height: 100vh;
    }
    
    main {
      min-height: 70vh;
    }

    html {
        position: relative;
    }
    
    button {
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        width: 0px;
    }
    
`;
