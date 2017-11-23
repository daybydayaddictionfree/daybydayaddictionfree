const { key, sid } = require('../keysAndIds/twillioKey');
const twilio = require('twilio');

const accountSid = sid;
const authToken = key;

// require the Twilio module and create a REST client

const client = new twilio(accountSid, authToken);

const send = (telNumber, message) => {
  client.messages.create({
    to: telNumber,
    from: '+14156809196',
    body: message,
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

const sendStatusToFriends = (status, telNumbers, smokerName) => {
  let message = '';
  if (status === '1'){
    message = smokerName + ' did not smoke a cigarette today.';
  } else if (status === '2') {
    message = smokerName + ' smoked a cigarette today.';
  } else {
    return;
  }
  telNumbers.forEach((telNumber) => {
    send(telNumber.phone, message);
  });
};


module.exports.sendSmokers = sendSmokers;
module.exports.sendStatusToFriends = sendStatusToFriends;
