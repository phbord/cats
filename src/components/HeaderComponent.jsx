import React from 'react';
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import BurgerSvgComponent from './BurgerSvgComponent';
import ButtonComponent from './ButtonComponent';
import LogoSvgComponent from './LogoSvgComponent';

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
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

  .nav-menu {
    position: relative;
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

    @media (max-width: ${(props) => props.theme.breakpoints.headerMaxWidth}) {
      position: absolute;
      bottom: -65px;
      right: -100px;
      padding: 7.5px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: ${(props) => props.theme.colors.lightGray};
      opacity: 0;

      &.opacity-1 {
        right: 10px;
        opacity: 1;
      }

      li {
        margin-bottom: 7.5px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      a {
        padding: 0 15px;
        color: ${(props) => props.theme.colors.light};

        &:first-child {
          margin-right: 0;
          font-weight: 400;
        }
        &.selected:before {
          display: none;
        }
        &:hover {
          background-color: ${(props) => props.theme.colors.pink};
        }
      }
    }
  }

  .btn-menu {
    width: ${(props) => props.theme.widths.btnMenuSize};
    height: ${(props) => props.theme.widths.btnMenuSize};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.darkGray};
    cursor: pointer;

    &:hover {
      opacity: .5;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.desktopMinWidth}) {
      display: none;
    }
  }
`;

const HeaderComponent = () => {
  const [isOpened, setIsOpened] = React.useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <HeaderStyles>
      <Link to="/">
        <h1>
          <LogoSvgComponent width="25" height="25" fill="#706F6F"/>
          <span>Cat Mash</span>
        </h1>
      </Link>
      <nav className=''>
        <ButtonComponent className="btn-menu" onClick={handleClick}>
          <BurgerSvgComponent width="19" height="19" fill="#fff" />
        </ButtonComponent>
        <ul className={ isOpened ? 'nav-list opacity-1' : 'nav-list' }>
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