const { key, sid } = require('../keysAndIds/twillioKey');

const accountSid = sid;
const authToken = key;

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

const send = () => {
  client.messages.create({
    to: '+15106851561',
    from: '+4156809196',
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  }, (err, message) => {
    console.log(message.sid);
  });
};

module.exports = send;
