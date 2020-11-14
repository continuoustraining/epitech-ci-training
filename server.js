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
  res.send('hello manager')
});

app.get('/employee', (req, res) => {
  res.send('hello employee') 
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
module.exports = app
