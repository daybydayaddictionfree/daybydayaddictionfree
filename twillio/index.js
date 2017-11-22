const { key, sid } = require('../keysAndIds/twillioKey');

const accountSid = sid;
const authToken = key;

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

const send = (number) => {
  number = "+" + number;
  client.messages.create({
    to: number,
    from: '+4156809196',
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  }, (err, message) => {
    console.log(message.sid);
  });
};
const sendSmokers = () => {
  var array = ['15106851561', '19176553779', '18313327272'];
  array.forEach((item) => {
    send(item);
  });
};

module.exports = sendSmokers;
