import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.bodyColor};
    font-family: ${(props) => props.theme.fonts.bodyFont};
  }

  a,button,.nav-list {
    text-decoration: none;
    -webkit-transition: all ${(props) => props.theme.transitions.defaultTrans} ease;
    -moz-transition: all ${(props) => props.theme.transitions.defaultTrans} ease;
    -ms-transition: all ${(props) => props.theme.transitions.defaultTrans} ease;
    -o-transition: all ${(props) => props.theme.transitions.defaultTrans} ease;
    transition: all ${(props) => props.theme.transitions.defaultTrans} ease;
  }

  button {
    padding: 0;
    border: 0;
    overflow: hidden;
  }

  ul,li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .container {
    min-height: calc(100vh - ${(props) => props.theme.heights.footerHeight});
    padding: calc(50px + ${(props) => props.theme.heights.headerHeight}) ${(props) => props.theme.margins.containerMarginX} calc(20px + ${(props) => props.theme.heights.footerHeight});

    h1 {
      margin-bottom: 2.2rem;
      color: ${(props) => props.theme.colors.darkGray};

      .h1-start {
        margin-right: 7.5px;
      }
      .h1-end {
        font-size: 75%;
        font-weight: 500;
      }
    }
  }
  
  .img-card {
    width: 100%;
    overflow: hidden;
  }

  .figcaption-card {
    position: absolute;
    z-index: 1;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    padding: 10px;
    border-radius: 2.5px;
    background-color: rgba(219,138,169,.5);
    color: ${(props) => props.theme.colors.light};
    font-weight: 300;
  }

  .btn-card {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.pink};
    opacity: 0;
  }
`;