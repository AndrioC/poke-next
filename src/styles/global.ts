import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --white: #FFFFFF;
        --black: #000000;

        --grey: #F1F5F7;

        --yellow: #FFD74F;
        --yellow-10: #FFEAA4;
        --yellow-100: #deae0b;

        --purple: #6F48EC;
        --purple-10: #7955E8;
        --purple-20: #A68EEF;
        --purple-30: #6A40E4;
        --purple-40: #BBA8F2;
        --purple-50: #7A57FD;
        --purple-60: #CFC9E9;

        --purple-60-opacity-40: rgba(207, 201, 233, 0.6);

        --brown: #B68300;

        --unselected-type: rgba(121, 85, 232, 0.3);

        --dark-blue-background: #200E64;
        --liner-gradinet: linear-gradient(180deg, #7a57fd 0%, #6135d7 100%);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        box-shadow: 4px 2px 14px rgba(0, 0, 0, 0.05);
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
