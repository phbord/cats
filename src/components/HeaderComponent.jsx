import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoSvgComponent from './LogoSvgComponent';

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${(props) => props.theme.heights.headerHeight};
  padding: 5px ${(props) => props.theme.margins.containerMarginX};
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.darkGray};
  background-color: ${(props) => props.theme.colors.headerColor};

  &,h1,.nav-list {
    display: flex;
    align-items: center;
  }

  a {
    &:hover {
      opacity: .5;
    }
  }

  h1 {
    svg {
      margin-right: 10px;
      color: ${(props) => props.theme.colors.darkGray};
    }
    span {
      color: ${(props) => props.theme.colors.darkGray};
      font-size: 25px;
      font-weight: 300;
      text-transform: uppercase;
      line-height: normal;
    }
  }

  .nav-list {
    a {
      color: ${(props) => props.theme.colors.darkGray};

      &:first-child {
        margin-right: 10px;
        font-weight: 600;
      }
    }
  }
`;

const HeaderComponent = () => {
  return (
    <HeaderStyles>
      <Link to="/">
        <h1>
          <LogoSvgComponent width="25" height="25" fill="#706F6F"/>
          <span>Cat Mash</span>
        </h1>
      </Link>
      <nav>
        <ul className='nav-list'>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/scores">Scores</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyles>
  );
};

export default HeaderComponent;