import React, { useState, useEffect, useContext } from 'react';
import { conectSpotifyWithCode, infosUserSpotify, playlistSpotify } from '../services/spotifyService'
import { connectionsContext } from '../context'
import SpotifyPlayer from 'react-spotify-web-playback';

const Home = (props)=>{
  const urlSearch = new URLSearchParams(props.location.search)
  const [connection, setConnection] = useContext(connectionsContext)
  const [user, setUser] = useState({})
  const [playlists, setPlaylists] = useState([])
  
  async function getTokenAuthorization(){
    if(!localStorage.access_token || !localStorage.refresh_token){
      setConnection({})
      const tokens = await conectSpotifyWithCode(
        'http://localhost:3000/home', 
        urlSearch.get('code'), 
        '886197e15b45429eafa71a03f7bc155e:2f41ca3eff9d4de1bc6c480ebfd378e3'
      )
      localStorage.access_token = tokens.access_token
      localStorage.refresh_token = tokens.refresh_token
      setConnection(localStorage)
    }
  }

  async function getInfosUser(){
    const infosUser = await infosUserSpotify(connection.access_token)
    setUser({
      user_name: infosUser.display_name,
      user_id: infosUser.id
    })
    return infosUser.id
  }

  async function getPlaylists(userId){
    const infosSpotify = await playlistSpotify(userId, connection.access_token)
    console.log(infosSpotify)
    setPlaylists(infosSpotify.items)
  }

  async function init(){
    await getTokenAuthorization() 
    const userId = await getInfosUser()
    await getPlaylists(userId)
  }  

  function cleanConnection(){
    localStorage.clear();
    setConnection({})
    props.history.goBack(null)
  }

  useEffect(() => { 
    init()
  }, [])

  return (
    <div>
      <p>seu access token: {connection.access_token??"nada"}</p>
      <p>seu refresh token: {connection.refresh_token??"nada"}</p>
      <p>Nome: {user.user_name??""} <br></br> Id:{user.user_id}</p>
      <ul>
        {playlists.map((element, i) => <li key={element.name+i}>{element.name}</li>)}
      </ul>
      <button onClick={cleanConnection}>zerar bangue</button>
       {connection.access_token??"nada"}
      <SpotifyPlayer
        token={connection.access_token}
        uris={['spotify:playlist:37i9dQZF1DX2sUQwD7tbmL']}
      />;
    </div>
  );
}

export default Home;