const express = require('express');
const consign = require('consign');
const dbConnection = require('./dbConnection');


const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

consign().include('app/routes')
         .then('config/dbConnection.js')
         .then('app/models')
         .into(app);


module.exports = app;