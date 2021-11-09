import React, { useState, useEffect }  from 'react';
import Cookies from 'js-cookie';
import anime from "animejs";
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

  .btn-card {
    opacity: 0;cursor: pointer;

    &:hover {
      opacity: .33;
    }
  }
`;

const CardToSelectComponent = ({image}) => {
  const [nbClick, setNbClick] = useState(0);

  useEffect(() => {
    if (nbClick > 0) {
      Cookies.set('isCatsSelected', image.id);
      animeUpVoteForm();
    }
  }, [nbClick]);

  const handleClick = () => {
    setNbClick(nbClick + 1);
  };

  const animeUpVoteForm = () => {
    if (!Cookies.get('pseudo')) {
      const targets = document.getElementById("vote-form");

      anime({
        targets,
        translateY: (-240 - 70),
        opacity: [0, 1],
        duration: 400,
        delay: 1500,
        easing: "easeOutQuad"
      });
    }
  };

  return (
    <CardStyles>
      {
        !Cookies.get('pseudo') && 
        <ButtonComponent className='btn-card' onClick={handleClick}></ButtonComponent>
      }
      <img src={image.url} 
           alt={image.id}
           className='img-card'/>
      {
        !Cookies.get('pseudo') && 
        <figcaption className='figcaption-card'>Sélectionner</figcaption>
      }
    </CardStyles>
  );
};

export default CardToSelectComponent;