const cookiesMiddleWare = require('universal-cookie-express');
const express = require('express');
const path = require('path');
const parser = require('body-parser');

var twilio = require('twilio');


var twillioSend = require('../twillio/index.js');

// Seeds table with dummy data, comment out when use real data
const seed = require('../database/seed.js');
// Uncomment the following line when are done with seed data:
// const db = require('../database/index.js');

const port = 8080;
const app = express();

console.log(__dirname);
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/verifyAuth', cookiesMiddleWare(), (req, res) => {
  console.log('Serving request type ', req.method, ' from ', req.path);
  // console.log(req.universalCookies.get('dbd-session-cookie'));
  res.send('WE CHECK COOKIE VS DATABASE');
});

app.get('/login', cookiesMiddleWare(), (req, res) => {
  console.log('Serving request type ', req.method, ' from ', req.path);
  // console.log(req.universalCookies.get('dbd-session-cookie'));
  res.send('WE SHOULD ADD COOKIE TO DATABASE');
});

app.get('/logout', cookiesMiddleWare(), (req, res) => {
  console.log('Serving request type ', req.method, ' from ', req.path);
  // console.log(req.universalCookies.get('dbd-session-cookie'));
  res.send('WE SHOULD REMOVE COOKIE FROM DATABASE');
});

app.get('*', cookiesMiddleWare(), (req, res) => {
  console.log('Serving request type ', req.method, ' from ', req.path);
  // console.log(req.universalCookies.get('dbd-session-cookie'));
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

app.post('/sms', function(req, res) {
  console.log(req.body.Body);
  var twilio = require('twilio');
  var twiml = new twilio.twiml.MessagingResponse();
  twiml.message('The Robots are coming! Head for the hills!');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end('');
});


app.listen(port);
console.log('server started on port ', port);

