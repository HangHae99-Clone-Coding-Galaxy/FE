import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    *{
        padding: 0;
        margin: 0;
        font-family: 'NanumSquare', sans-serif !important;
        color: black;
    };
`;

export default GlobalStyle;
