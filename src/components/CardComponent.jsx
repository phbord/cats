import React, { useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import styled from "styled-components";
import ButtonComponent from './ButtonComponent';

const CardStyles = styled.figure`
  position: relative;
  width: 100%;
  margin: 0;
  border: 1px solid ${(props) => props.theme.colors.darkGray};
  border-radius: 7.5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.dark};
  overflow: hidden;
  
  img {
    width: 100%;
    overflow: hidden;
  }

  .figcaption-card {
    position: absolute;
    z-index: 1;
    left: calc(50% - (108.64px/2));
    bottom: 20px;
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
    cursor: pointer;

    &:hover {
      opacity: .33;
    }
  }
`;

const CardComponent = ({image}) => {
  const handleClick = () => {
    Cookies.set('isCatsSelected', image.id);
  };

  return (
    <CardStyles>
      <ButtonComponent className='btn-card' 
                       onClick={handleClick}></ButtonComponent>
      <img src={image.url} 
           alt={image.id} />
      <figcaption className='figcaption-card'>Sélectionner</figcaption>
    </CardStyles>
  );
};

export default CardComponent;