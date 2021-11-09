import React, { useState, useEffect } from 'react';
import { v4 as uuid_v4 } from "uuid";
import styled from "styled-components";

import { fetchAPI } from './api/Api';
import CardComponent from 'components/CardComponent';

const ScoresStyles = styled.section`
  li {
    margin-bottom: ${(props) => props.theme.margins.spaceMarginY};
    display: flex;
    align-items: stretch;
  }
`;

const Scores = () => {
  const [images, setImages] = useState(null);

  useEffect(async () => {
    setImages(await fetchAPI());
  }, []);


  return (
    <ScoresStyles className='container'>
      <h1>Scores</h1>
      <ul className='row'>{
        images && images?.data?.sort((a, b) => Number(b.score) - Number(a.score)).map((image, index) => (
          <li key={uuid_v4()} 
              className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
            <CardComponent image={image} index={index}/>
          </li>
        ))
      }</ul>
    </ScoresStyles>
  );
};

export default Scores;