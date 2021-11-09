import React from 'react';
import styled from "styled-components";

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
  
`;

const CardComponent = ({image, index}) => {
  return (
    <CardStyles>
      <img src={image.url} 
           alt={image.id}
           className='img-card'/>
      <figcaption className='figcaption-card'>
        <strong>n°{++index} </strong>
        <span>/ {image.score} pts</span>
      </figcaption>
    </CardStyles>
  );
};

export default CardComponent;