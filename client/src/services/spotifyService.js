import querystring from 'querystring'

export async function conectSpotifyWithCode(callbackUrl, code, base64ClientIdSecrect){
    return await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic '+Buffer(base64ClientIdSecrect).toString('base64'),
            'Content-Type': "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: callbackUrl
        })
    })
    .then(response => response.json())
    .then(json => {
        return json
    })
}

export function loginSpotify(clientId, callbackUrl){
    window.location.href = 'https://accounts.spotify.com/authorize?'+
    querystring.stringify({
        response_type: 'code',
        client_id:clientId,
        scope: 'user-read-private user-read-email user-read-currently-playing user-modify-playback-state user-read-playback-state streaming app-remote-control user-top-read user-read-playback-position user-read-recently-played user-library-modify user-library-read playlist-read-collaborative playlist-modify-public playlist-read-private playlist-modify-private', 
        redirect_uri: callbackUrl
    })
}

export async function infosUserSpotify(access_token){
    return await fetch('https://api.spotify.com/v1/me', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+access_token,
            'Content-Type': "application/json",
        },
    })
    .then(response => response.json())
    .then(json => {
        return json
    })
}

export async function playlistSpotify(user_id, access_token){
    return await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+access_token,
            'Content-Type': "application/json",
        },
    })
    .then(response => response.json())
    .then(json => {
        return json
    })
}