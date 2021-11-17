import React, { useState, useEffect, useRef }  from 'react';
import anime from "animejs";
import styled from "styled-components";

import { modifyOneScore } from '../pages/api/Api';
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

  .btn-card {
    opacity: 0;cursor: pointer;

    &:hover {
      opacity: .33;
    }
  }
`;

const CardToSelectComponent = ({image, handleClick}) => {
  const [imgId, setImgId] = useState('');

  useEffect(() => {
  }, []);

  return (
    <CardStyles>
      <ButtonComponent className='btn-card' onClick={handleClick}></ButtonComponent>
      <img src={image.url} 
           alt={image.id}
           className='img-card'/>
      <figcaption className='figcaption-card'>Sélectionner</figcaption>
    </CardStyles>
  );
};

export default CardToSelectComponent;