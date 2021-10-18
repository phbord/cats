import React, { useRef, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import anime from "animejs";
import styled from "styled-components";

import ButtonComponent from './ButtonComponent';

const VoteFormStyles = styled.div`
  position: fixed;
  left: 50%;
  bottom: 70px;
  z-index: 20;
  transform: translateX(-50%);

  .vote-body {
    width: ${(props) => props.theme.widths.voteCircleSize};
    height: ${(props) => props.theme.widths.voteCircleSize};
    margin: 0 ${(props) => props.theme.margins.containerMarginX};
    padding: ${(props) => props.theme.margins.spaceMarginY};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: rgba(0,88,219,.5);
    text-align: center;
    overflow: hidden;
  }

  .vote-text {
    margin-bottom: .75rem;
    color: ${(props) => props.theme.colors.light};
    font-size: 24px;
    font-weight: 600;
  }

  .btn-vote-confirmed {
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.pink};
    color: ${(props) => props.theme.colors.light};
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      opacity: .75;
    }
  }

  input {
    width: 140px;
    margin-bottom: 10px;
    border: 1px solid ${(props) => props.theme.colors.darkGray};
    border-radius: 2.5px;
  }

  label {
    margin-bottom: 5px;
    display: block;
    color: ${(props) => props.theme.colors.light};
  }
`;

export default function VoteFormComponent() {
  const inputEl = useRef(null);
  
  const handleClick = () => {
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Cookies.get('pseudo')) {
      const inputVal = inputEl.current.value;
      Cookies.set('pseudo', inputVal);
    }
    const toto = JSON.stringify({tata: "titi"});
    // fs.writeFile('../data/data.json', toto, err => {
    //   if (err) {
    //       console.log('Error writing file', err)
    //   } else {
    //       console.log('Successfully wrote file')
    //   }});

    console.log('pseudo => ', Cookies.get('pseudo'));
  };

  return (
    <VoteFormStyles>
      <div className="vote-body">
        <p className="vote-text">Confirmer<br/>votre sélection</p>
        <form action="post" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="pseudo">Saisir votre pseudo</label>
            <input ref={inputEl} type="text" id='pseudo' />
          </div>
          <ButtonComponent type="submit" 
                            className="btn-vote-confirmed" 
                            onClick={handleClick}>OK</ButtonComponent>
        </form>
      </div>
    </VoteFormStyles>
  )
}
