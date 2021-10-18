import React, { useEffect } from 'react';
import fs from 'fs';

import data from '../../data/data.json';

export async function fetchAPI() {
  // const url = "https://latelier.co/data/cats.json";
  // const config = {
  //   method: "GET",
  //   mode: "cors",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  // const res = await fetch(url, config).catch(err => err);
  // const data = await res.json();
  // const images = await data.images;

  // console.log('res: ',res);
  // console.log('data: ',images);
  // return data;

  // STRAPI
  const url = "http://localhost:1337/images";
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(url, config).catch(err => err);
  const data = await res.json();

  return {data};


  // JSON file
  // const images = await data.images;
  // return images;
}
