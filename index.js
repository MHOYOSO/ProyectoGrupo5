'use strict';

const express = require('express');
const PORT = 3000;
const HOST = '0.0.0.0';
const app = express();
const axios = require('axios')

app.get('/', (req, res) => {
  res.send('Hello buddy, im running in the port: ' + PORT);
});

app.get('/docker', (req, res)=>{
  axios.get('http://localhost:4000/').then(k =>{
    res.send({response: k.data})
  }).catch(e =>{ console.log(e)})
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);