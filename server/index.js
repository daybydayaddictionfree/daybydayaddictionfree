const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const port = 8080;
const app = express();

console.log(__dirname);
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

app.listen(port);
console.log('server started on port ', port);
