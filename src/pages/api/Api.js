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

  return { data };


  // JSON file
  // const images = await data.images;
  // return images;
}

export async function findOneId(id) {
  // STRAPI
  const url = "http://localhost:1337/images";
  const config = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(url, config).catch(err => err);
  const data = await res.json();
  const getId = data.filter(x => (x["id"]) == id);
  //console.log('DATA ===> ',getId[0]);

  return { getId: getId[0] };
}

export async function modifyOneScore(id) {
  // STRAPI
  const url = "http://localhost:1337/images";
  const creds = {};
  const config = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds)
  };
}
