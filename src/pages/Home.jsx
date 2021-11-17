import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { v4 as uuid_v4 } from "uuid";
import styled from "styled-components";

import { fetchAPI } from './api/Api';
import CardToSelectComponent from 'components/CardToSelectComponent';

const HomeStyles = styled.section`
  li {
    margin-bottom: ${(props) => props.theme.margins.spaceMarginY};
    display: flex;
    align-items: stretch;
  }
`;

const Home = () => {
  const history = useHistory();
  const [images, setImages] = useState(null);
  const [imagesMin, setImagesMin] = useState(0);
  const [imagesMax, setImagesMax] = useState(2);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(async () => {
    setImages(await fetchAPI());
  }, []);

  useEffect(() => {
    setIsClicked(false);
    setImagesMin(0);
    setImagesMax(2);
  }, [])

  const handleClick = e => {
    const imgId = Number(e.target.nextSibling.alt);

    //modifyOneScore(imgId, newScore);

    setIsClicked(true);
    setImagesMin(imagesMin + 2);
    setImagesMax(imagesMax + 2);
    console.log(imagesMin,'==>',imagesMax,'==>',isClicked);
  };

  
  return (
    <HomeStyles className='container'>
      <h1>
        <span className='h1-start'>Votez</span>
        <span className='h1-end'>pour un chat</span>
      </h1>
      <ul className='row'>{
        images && images?.data?.map((image, index) => (isClicked === false || imagesMin <= index) && (index < imagesMax) && (
          (index === images.data.length) && (
            // setIsClicked(false),
            // setImagesMin(0),
            // setImagesMax(2),
            history.push('/scores')
          ),
          <li key={uuid_v4()} 
              className='col-xs-12 col-sm-6'><p>{images.data.length} / {index}</p>
            <CardToSelectComponent image={image} index={index} handleClick={handleClick}/>
          </li>
        ))
      }</ul>
    </HomeStyles>
  );
};

export default Home;