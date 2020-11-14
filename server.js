'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/hello', (req, res) => {
    res.set({role: req.headers.Role})
    res.redirect('/' + req.headers.role).end()
});
app.get('/manager', (req, res) => {
  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    database: 'test',
    password: ''
  });
  connection.connect();
  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
  });
  res.send('hello manager')
  connection.end();
});
app.get('/employee', (req, res) => {
  res.send('hello employee') 
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
module.exports = app
