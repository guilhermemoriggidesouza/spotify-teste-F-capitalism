import React, { useState, useEffect } from 'react';
import querystring from 'querystring'

const Login = ()=>{
  const [helloWorld, setHello] = useState({});

  const logarSpotify = () =>{
    window.location.href = 'https://accounts.spotify.com/authorize?'+
    querystring.stringify({
        response_type: 'code',
        client_id:'5b9475166c654131bb402fb4a6e463aa',
        scope: 'user-read-private user-read-email', 
        redirect_uri: 'http://localhost:3000/home'
    })
  }

  useEffect(() => {
  });

  return (
    <div>
      <p>login</p>
      <button onClick={logarSpotify}>Logar na sua conta spotify</button>
    </div>
  );
}

export default Login;
