const { key, sid } = require('../keysAndIds/twillioKey');

const accountSid = sid;
const authToken = key;

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

const send = (number) => {
  number = "+" + number;
  client.messages.create({
    to: number,
    from: '+14156809196',
    body: 'Please respond with a 1 or 2. 1 meaning yes you have smoked today, 2 meaning no you have not smoked today.',
  }, (err, message) => {
    console.log(err);
  });
};
const sendSmokers = () => {
  var array = ['+15106851561', '+19176553779', '+18313327272'];
  array.forEach((item) => {
    send(item);
  });
};

const sendInvalid = (number) => {
  client.messages.create({
    to: number,
    from: '+14156809196',
    body: 'Invalid response, please reply with a 1 or 2.',
  }, (err, message) => {
    console.log(err);
  });
};

const sendUserFriendMessage = (number, message) => {
  client.messages.create({
    to: number,
    from: '+14156809196',
    body: message,
  }, (err, message) => {
    console.log(err);
  });
};


module.exports = sendSmokers;
