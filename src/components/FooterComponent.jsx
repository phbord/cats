import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterStyles = styled.footer`
  height: ${(props) => props.theme.heights.footerHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.darkGray};

  a {
    color: ${(props) => props.theme.colors.light};
    font-size: 14px;
    font-weight: 400;

    &:hover {
      opacity: .5;
    }
  }
`;

const FooterComponent = () => {
  return (
    <FooterStyles>
      <Link to="./assets/pdf/exercice-technique.pdf">
        <span>Voir le cahier des charges</span>
      </Link>
    </FooterStyles>
  );
};

export default FooterComponent;