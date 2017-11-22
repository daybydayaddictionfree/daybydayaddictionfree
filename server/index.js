const cookiesMiddleWare = require('universal-cookie-express');
const express = require('express');
const path = require('path');
const parser = require('body-parser');
let twilio = require('twilio');
let twillioSend = require('../twillio/index');
const q = require('../database/queries');

// Seeds table with dummy data, comment out when use real data
const seed = require('../database/seed.js');
// Uncomment the following line when are done with seed data:
// const db = require('../database/index.js');

const port = 8080;
const app = express();

app.use(parser.json());
// app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/verifyAuth', cookiesMiddleWare(), (req, res) => {
  console.log('Serving request type ', req.method, ' from ', req.path);
  // check database if cookie is valid
  q.checkCookie(req.universalCookies.get('dbd-session-cookie'))
    .then(({ rows }) => {
      console.log('FIRST RESULT', rows);
      //  if cookie is valied get smokers info from database
      if (rows.length > 0) {
        q.retriveUserInfo(rows.email)
          .then((result) => {
            console.log(result);
          });
      }
    });
  // console.log(req.universalCookies.get('dbd-session-cookie'));
  // send back user info
  res.send('WE CHECK COOKIE VS DATABASE');
});

app.post('/login', cookiesMiddleWare(), (req, res) => {
  console.log('Serving request type ', req.method, ' from ', req.path);
  console.log('Req.body In /login', req.body);
  // check if new user or existing smoker
  // get smoker info from database
  q.retrieveUserInfo(req.body.email)
  // if existing user
    .then(({ rows }) => {
      if (rows > 0) {
        // store cookie
        q.storeCookie({ token: req.universalCookies.get('dbd-session-cookie'), email: rows.email, idSmokers: rows.id });
        res.send(rows);
        // if not
      } else {
        // redirect to signup page   
        res.send(false);
      }
    });
  // console.log(req.universalCookies.get('dbd-session-cookie'));
  // send smoker info back if present or 'false' if not
  // res.send('WE SHOULD ADD COOKIE TO DATABASE');
});

// post request for signup
  // check if existing user
    // if existing user 
      // get their info from database and redirect to user home page
    // if new user
      // add info and cookie to database    

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
app.post('/admin', cookiesMiddleWare(), (req, res) => {
  // check cookie and admin status
  // set all responded values to false
    // if true 
      // run fcn   
});

app.post('/sms', function(req, res) {
  console.log(req.body.Body);
  // twilio = require('twilio');
  let twiml = new twilio.twiml.MessagingResponse();
  twiml.message('The Robots are coming! Head for the hills!');
  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end('');
});

app.listen(port);
console.log('server started on port ', port);
