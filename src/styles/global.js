import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    
    
    --color-grey-0:#F8F9FA;
    --color-grey-1:#868E96;
    --color-grey-2:#343B41;
    --color-grey-3:#212529;
    --color-grey-4:#121214;
    
    --color-primary:#FF577F;
    --color-primary-focus:#FF427F;
    --color-primary-negative: #59323F;

    --color-success: #3FE864;
    --color-negative: #E83F5B;

    --radius-1: 0.5rem;
    --radius-2: 0.25rem;

    --font-size-title-1:1.625rem; /* 26px*/
    --font-size-title-2:1.375rem; /* 22px*/
    --font-size-title-3:1.125rem; /* 18px*/
    --font-size-text-1:1rem;  /* 16px*/
    --font-size-text-2:0.875rem; /* 14px*/
    --font-size-text-3:0.75rem; /* 12px*/
    --font-size-text-4:0.625rem; /* 10px*/

    --font-weight-1:700;
    --font-weight-2:600;
    --font-weight-3:400;

}

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }
    a{
        color: unset;
        text-decoration: none;
    }
    ul, ol, li{
        list-style: none;
    }
    h1, h2, h3, h4, h5, h6, p, a, span, li, button, input, textarea, label{
        font-family: "Inter", sans-serif;
    }

    .flex{
        display: flex;
    }


    .column{
        flex-direction: column;
    }

    .between{
        justify-content: space-between;
    }

    .align-center{
        align-items: center;
    }

    .gap-1rem{
        gap:1rem;
    }
`;

