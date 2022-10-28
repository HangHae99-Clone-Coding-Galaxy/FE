import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    *{
        padding: 0;
        margin: 0;
        font-family: 'NanumSquare', sans-serif !important;
        color: #444;
    };
    button{
        cursor: pointer;
    }
`;

export default GlobalStyle;
