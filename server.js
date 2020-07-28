const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const request = require('request')
const querystring = require('querystring');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/authorize', async(req, res)=>{
    try{
        let authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                grant_type:    'authorization_code',
                code:          req.query.code,
                redirect_uri:  'http://localhost:3333/home',
            },
            headers:{
                'Authorization': 'Basic '+Buffer(process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_SECRET).toString('base64')
            },
            json: true
        }
        
        request.post(authOptions, (error, response, body)=>{
            if (!error && response.statusCode === 200) {
                res.json(body)
            }else{
                res.json({err : error})
            }
        })
    }catch(err){
        res.status(404).send(err)
    }
})

app.listen(port, () => console.log(`Listening on port ${port}`));