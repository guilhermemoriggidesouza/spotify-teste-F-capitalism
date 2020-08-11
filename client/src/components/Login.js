import React, { useState, useEffect, useContext } from 'react';
import { loginSpotify } from '../services/spotifyService'
import { connectionsContext } from '../context';

const Login = ()=>{
  const [connection, setConnection] = useContext(connectionsContext)

  useEffect(()=>{
    console.log('VAIII')
  }, [])

  return (
    <div>
      <p>login {connection.access_token}</p>
      <button onClick={()=> loginSpotify('886197e15b45429eafa71a03f7bc155e', 'http://localhost:3000/home')}> Logar na sua conta spotify </button>
    </div>
  );
}

export default Login;
