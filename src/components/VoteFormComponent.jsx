import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';
import anime from "animejs";
import styled from "styled-components";

import { findOneId, modifyOneScore } from '../pages/api/Api';
import ButtonComponent from './ButtonComponent';

const VoteFormStyles = styled.div`
  position: fixed;
  left: calc(50% - 20px - (${(props) => props.theme.widths.voteCircleSize}/2));
  bottom: -${(props) => props.theme.widths.voteCircleSize};
  z-index: 20;

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

    &:hover,&[disabled] {
      opacity: .75;
    }
    &[disabled] {
      background-color: ${(props) => props.theme.colors.darkGray};
      cursor: auto;
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
  const history = useHistory();
  const inputEl = useRef(null);
  const [data, setData] = useState({});
  const [disabled, setDisabled] = useState(true);

  useEffect(async () => {
    setData(Object.values((await findOneId(Cookies.get('isCatsSelected'))))[0]);
  }, [disabled]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setData(await Object.values((await findOneId(Cookies.get('isCatsSelected'))))[0]);

    if (!Cookies.get('pseudo') && Cookies.get('isCatsSelected')) {
      const inputVal = inputEl.current.value;
      const newScore = Number(await data?.score) + 1;

      modifyOneScore(Cookies.get('isCatsSelected'), newScore);
      Cookies.set('pseudo', inputVal);
      animeDownVoteForm();
    }
  };

  const animeDownVoteForm = () => {
    const targets = document.getElementById("vote-form");

    anime({
      targets,
      translateY: (240 + 70),
      opacity: [1, 0],
      duration: 400,
      easing: "easeOutQuad",
      delay: 400,
      complete: function() {
        history.push('/scores');
      }
    });
  };

  const handleChange = () => {
    const inputSize = inputEl.current.value.length;

    if (inputSize > 1 && !Cookies.get('pseudo')) {
      setDisabled(false);
    } else if (inputSize <= 1 || !inputSize || Cookies.get('pseudo')) {
      setDisabled(true);
    }
  };


  return (
    <VoteFormStyles id="vote-form">
      <div className="vote-body">
        <p className="vote-text">Confirmer<br/>votre sélection</p>
        <form action="post" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="pseudo">Saisir votre pseudo</label>
            <input ref={inputEl} type="text" id='pseudo' onChange={handleChange} />
          </div>
          <ButtonComponent type="submit" 
                            className="btn-vote-confirmed" 
                            disabled={disabled}>OK</ButtonComponent>
        </form>
      </div>
    </VoteFormStyles>
  )
};
