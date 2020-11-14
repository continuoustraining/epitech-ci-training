'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
//var mysql  = require('mysql');

// App
const app = express();
app.get('/hello', (req, res) => {
    res.set({role: req.headers.Role})
    res.redirect('/' + req.headers.role).end()
});
app.get('/manager', (req, res) => {
  //console.log("Environment variables:", process.env)
/*  var connection = mysql.createConnection({
    host     : process.env.MYSQL_HOST,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
  });
   
  connection.connect();
  
  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
  console.log("Passage avant res.send <<<<<<<<<<<<<")*/
  res.send('hello manager')
  //connection.end();
});

app.get('/employee', (req, res) => {
  res.send('hello employee') 
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
module.exports = app
