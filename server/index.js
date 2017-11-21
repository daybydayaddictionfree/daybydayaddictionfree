const express = require('express');
const path = require('path');
const parser = require('body-parser');

var twilio = require('twilio');


var twillioSend = require('../twillio/index.js');

const port = 8080;
const app = express();

console.log(__dirname);
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
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

