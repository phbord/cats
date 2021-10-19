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

    span {
      font-size: 1.2rem;
      font-weight: 700;
    }

    figure {
      margin: .5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .img-content {
      width: 100px;
      height: 100px;
      margin-bottom: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 3px solid ${(props) => props.theme.colors.pink};
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.dark};
      overflow: hidden;
    }

    img {
      max-width: 100px;
      max-height: 100px;
    }

    figcaption {
      color: ${(props) => props.theme.colors.pink};
      font-size: 1.5rem;
      font-weight: 500;
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
              <figure>
                <div className="img-content">
                  <img src={image.url} 
                        alt={image.id} />
                </div>
                <figcaption>{image.score} pts</figcaption>
              </figure>
            </li>
          ))
        }
      </ul>
    </ScoresStyles>
  );
};

export default Scores;