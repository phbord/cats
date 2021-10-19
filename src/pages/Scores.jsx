import React, { useState, useEffect } from 'react';
import { v4 as uuid_v4 } from "uuid";
import anime from "animejs";
import styled from "styled-components";

import { fetchAPI } from './api/Api';

const ScoresStyles = styled.section`
  .scores-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    li {
      margin-right: 45px;
      margin-bottom: 10px;
      padding: 15px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    img {
      width: 100px;
      height: 100px;
      margin-bottom: 5px;
      border: 3px solid ${(props) => props.theme.colors.pink};
      border-radius: 50%;
    }

    span {
      margin-bottom: 5px;
    }

    strong {
      color: ${(props) => props.theme.colors.pink};
      font-size: 1.5rem;
    }
  }
`;

const Scores = () => {
  const [images, setImages] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(async () => {
    setImages(await fetchAPI());
  }, []);


  return (
    <ScoresStyles className='container'>
      <h1>Scores</h1>
      <ul className="scores-list">
        {
          images && images.data.sort((a, b) => Number(b.score) - Number(a.score)).map((image, index) => (
            <li key={uuid_v4()}>
              <span>n°{++index}</span>
              <img src={image.url} 
                    alt={image.id} />
              <strong>{image.score}</strong>
            </li>
          ))
        }
      </ul>
    </ScoresStyles>
  );
};

export default Scores;