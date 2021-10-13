import React, { useContext, useEffect } from 'react';
import { v4 as uuid_v4 } from "uuid";
import styled from "styled-components";

import { fetchAPI } from './api/Api';

const HomeStyles = styled.section`

`;

const Home = () => {
  useEffect(() => {
    fetchAPI();
  }, []);
  
  return (
    <HomeStyles className='container'>
      
    </HomeStyles>
  );
};

export default Home;