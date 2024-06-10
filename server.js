const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const app = express();



app.get('/', function (req, res) {
  res.send('Hello! welcome to the hotel')
})

app.listen(3000)