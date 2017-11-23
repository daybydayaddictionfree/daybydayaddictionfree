const cookiesMiddleWare = require('universal-cookie-express');
const express = require('express');
const path = require('path');
const parser = require('body-parser');
let twilio = require('twilio');
let sendSmokers = require('../twillio/index');
const q = require('../database/queries');
const utils = require('./utils');

// Seeds table with dummy data, comment out when use real data
const seed = require('../database/seed.js');
// Uncomment the following line when are done with seed data:
const db = require('../database/index.js');

const port = process.env.PORT || 8080;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/sendcheckins', (req, res) => {
  sendSmokers();
  res.send();
});

app.get('/verifyAuth', cookiesMiddleWare(), (req, res) => {
  console.log('Serving request type ', req.method, ' from ', req.path);

  // Is cookie valid?
  q.checkCookie(req.universalCookies.get('dbd-session-cookie'))
    .then(({ rows }) => {
      // If cookie is valid..
      if (rows.length > 0) {
        // Get user info

        q.retrieveUserInfo(rows[0].id_smokers)
          .then((data) => {
            const userData = data.rows[0];

            // Get messages from user's friends
            q.retrieveMessages(userData.id)
              .then((result) => {
                userData.messages = result.rows;

                // Send info and messages back to client

                res.send(userData);
              })
              .catch((err) => {
                res.send(err);
              });
          });

      // If cookie is not valid..
      } else {
        res.send(false);
      }
    });
});

app.post('/login', cookiesMiddleWare(), (req, res) => {
  // Check if user is already signed up
  q.checkEmail(req.body.email)
    .then(({ rows }) => {
      // if user is existing user
      if (rows.length > 0) {
        const userData = rows[0];
        // store cookie in database
        q.insertCookie({ token: req.universalCookies.get('dbd-session-cookie'), email: rows[0].email, id: rows[0].id })
          .then(() => {
            // Get user messages from database
            q.retrieveMessages(rows[0].id)
              .then((result) => {
                // add messages to user object
                userData.messages = result.rows;
                // send user info and messages back to client
                res.send(userData);
              });
          });
      // if new user
      } else {
        // redirect to signup page
        res.send(false);
      }
    });
});

// post request for signup
app.post('/signup', cookiesMiddleWare(), (req, res) => {
  // Add user info to database
  q.insertSmoker(req.body)
    .then((results) => {
      const cookieInfo = Object.assign(results.rows[0], {token: req.universalCookies.get('dbd-session-cookie') });
      const friendInfo = utils.friendify(req.body, results.rows[0].id);

      // add cookie and friends to database
      Promise.all(q.insertCookie(cookieInfo), q.insertFriends(friendInfo))
        .then(() => {
          res.send(true);
        })
        .catch((err) => {
          res.send(err);
        });
    });
});

app.get('/logout', cookiesMiddleWare(), (req, res) => {
  console.log('Serving request type ', req.method, ' from ', req.path);
  const token = req.universalCookies.get('dbd-session-cookie');
  // console.log(req.universalCookies.get('dbd-session-cookie'));
  q.removeCookie(token)
    .then(() => {
      res.send('REMOVED COOKIE FROM DATABASE');
    });
});

app.get('*', cookiesMiddleWare(), (req, res) => {
  console.log('Serving request type ', req.method, ' from ', req.path);
  // console.log(req.universalCookies.get('dbd-session-cookie'));
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});
app.post('/admin', cookiesMiddleWare(), (req, res) => {

});

app.post('/sms', (req, res) => {
  var message = req.body.Body;
  var number = req.body.From;
  q.retrieveUserOnNum(number).then(({ rows }) => {
    if (rows.length === 1) {
      console.log('I am a smoker');
      //is smooker
      let userRow = rows[0];
      let friends = [];
      q.retrieveFriendsOnId(userRow.id).then(({ rows }) => {
        friends = rows;
        twillioSend.sendStatusToFriends(message, rows, userRow.name);
        q.updateSmokerRecord(message, userRow.id, userRow.progress);
      });

    } else {
      q.retrieveFriendOnNum(number).then(({ rows }) => {
        if (friendRows.length === 1) {
          //is friend

        } else {
          //is nonesense
          res.send();
        }
      });
    }
  });


  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end('');
});

app.listen(port);
console.log('server started on port ', port);
