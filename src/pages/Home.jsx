import React, { useState, useEffect } from 'react';
import { v4 as uuid_v4 } from "uuid";
import styled from "styled-components";

import { fetchAPI } from './api/Api';
import CardComponent from 'components/CardComponent';
import VoteFormComponent from 'components/VoteFormComponent';

const HomeStyles = styled.section`
  li {
    margin-bottom: ${(props) => props.theme.margins.spaceMarginY};
    display: flex;
    align-items: stretch;
  }
`;

const Home = () => {
  const [images, setImages] = useState(null);

  useEffect(async () => {
    setImages(await fetchAPI());
  }, []);
  
  return (
    <HomeStyles className='container'>
      <h1>
        <span className='h1-start'>Votez</span>
        <span className='h1-end'>pour un chat</span>
      </h1>
      <ul className='row'>{
        images && images.data.map(image => (
          <li key={uuid_v4()} 
              className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
            <CardComponent image={image}/>
          </li>
        ))
      }</ul>
      <VoteFormComponent/>
    </HomeStyles>
  );
};

export default Home;