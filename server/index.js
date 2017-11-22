const cookiesMiddleWare = require('universal-cookie-express');
const express = require('express');
const path = require('path');
const parser = require('body-parser');
let twilio = require('twilio');
let twillioSend = require('../twillio/index');
const q = require('../database/queries');
const utils = require('./utils');

// Seeds table with dummy data, comment out when use real data
const seed = require('../database/seed.js');
// Uncomment the following line when are done with seed data:
const db = require('../database/index.js');

const port = 8080;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/verifyAuth', cookiesMiddleWare(), (req, res) => {
  console.log('Serving request type ', req.method, ' from ', req.path);
  // check database if cookie is valid
  // console.log("Token being checked", req.universalCookies.get("dbd-session-cookie"));
  q.checkCookie(req.universalCookies.get('dbd-session-cookie'))
    .then(({ rows } ) => {
      //  if cookie is valied get smokers info from database
    
      if (rows.length > 0) {
        q.retrieveUserInfo(rows[0].id_smokers)
          .then(({ rows }) => {
            const userData = rows[0];
          
            q.retrieveMessages(rows[0].id)
              .then(( {rows} ) => {
              
                userData.messages = rows;  
                
                res.send(userData);
              });
            });
      } else {
        res.send(false);
      }
    });
});

app.post('/login', cookiesMiddleWare(), (req, res) => {
  console.log('Serving request type ', req.method, ' from ', req.path);
  // check if new user or existing smoker
  q.checkEmail(req.body.email)
    .then(({ rows }) => {
      // if user is existing user
      console.log('ROWS IN LOGIIN', rows);
      if (rows.length > 0) {
        // store cookie
        q.insertCookie({ token: req.universalCookies.get('dbd-session-cookie'), email: rows.email, id: rows.id });
        // TODO get messages;
        res.send(rows);
        // if new user
      } else {
        // redirect to signup page
        res.send(false);
      }
    });
});

// post request for signup
app.post('/signup', cookiesMiddleWare(), (req, res) => {
  // check if existing user
  q.checkEmail(req.body.email)
    .then(({ rows }) => {
      // if user is existing user
      if (rows > 0) {
        // get messages
        q.retrieveMessages(rows.id)
        .then((messages) => {
          const userInfo = Object.assign(rows, messages);
          res.send(messages);
        });
        // send back messages and user info
        // redirect to home page on client side
      } else {
        // Add user info to database 
        q.insertSmoker(req.body)
          .then((results) => {
            const cookieInfo = Object.assign(results.rows[0], {token: req.universalCookies.get('dbd-session-cookie')} )
            const friendInfo = utils.friendify(req.body, results.rows[0].id);

            // add cookie and friends to database
            Promise.all(q.insertCookie(cookieInfo), q.insertFriends(friendInfo))
              .then(() => {
                // res.cookie('dbd-session-cookie', req.universalCookies.get('dbd-session-cookie'));
                res.send('user, cookie, friends added to database!');
              })
              .catch(err => {
                res.send(err);
              });
          });
      }
    });
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
