import  { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        &::-webkit-scrollbar{
            width: 0 .5rem;
        }
        &-::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
        
    }
    body{
        font-family: 'Nunito Sans', sans-serif;
        width: 100%;
    }
    h1{
        font-size: 3rem;
        font-family: 'Zen Tokyo Zoo', cursive;
        font-weight: lighter;
        padding: 3rem;
    }
    h3{
        font-size: 2rem;
        color: #333;
        padding: 1.5rem;
    }
    p{
        font-size: 1.5rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
`;

export default GlobalStyles;