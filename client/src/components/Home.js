import React, { useState, useEffect } from 'react';

const Home = ()=>{

  useEffect(() => {
    fetch('/authorize?code=')
    .then((response) => response.json())
    .then((json)=>{
      console.log(json)
    })
  });

  return (
    <div>
      <p>home</p>
    </div>
  );
}

export default Home;
