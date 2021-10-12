import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.bodyColor};
    font-family: ${(props) => props.theme.fonts.bodyFont};
  }

  a {
    text-decoration: none;
    -webkit-transition: all ${(props) => props.theme.transitions.defaultTrans} ease;
    -moz-transition: all ${(props) => props.theme.transitions.defaultTrans} ease;
    -ms-transition: all ${(props) => props.theme.transitions.defaultTrans} ease;
    -o-transition: all ${(props) => props.theme.transitions.defaultTrans} ease;
    transition: all ${(props) => props.theme.transitions.defaultTrans} ease;
  }

  ul,li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .container {
    min-height: calc(100vh - ${(props) => props.theme.heights.footerHeight});
    padding: calc(50px + ${(props) => props.theme.heights.headerHeight}) 0 calc(20px + ${(props) => props.theme.heights.footerHeight});
  }
`;