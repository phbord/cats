import React from 'react';
import { Link, NavLink } from "react-router-dom";
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
      &.selected {
        position: relative;
        display: flex;
        justify-content: center;

        &:before {
          position: absolute;
          top: -22px;
          content: '';
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 15px 15px 0 15px;
          border-color: ${(props) => props.theme.colors.darkGray} transparent transparent transparent;
        }
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
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" 
                     to="/scores">Scores</NavLink>
          </li>
        </ul>
      </nav>
    </HeaderStyles>
  );
};

export default HeaderComponent;