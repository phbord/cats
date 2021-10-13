import React, { useEffect } from 'react'

export async function fetchAPI() {
  const url = "https://latelier.co/data/cats.json";
  const config = {
    method: "GET",
    mode: "cors",
    'Access-Control-Allow-Origin': url,
    // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    headers: {
      "Content-Type": "application/json",
      //'Accept': 'application/json'
    },
  };

  // const res = await fetch(url, config)
  //                     .catch(err => err);
  // const data = await res.json();

  const response = fetch(url, config)
    .then((response) => response.json())
    .then((response) => console.log(response));

  // console.log('res: ',res);
  // console.log('data: ',data);
}
