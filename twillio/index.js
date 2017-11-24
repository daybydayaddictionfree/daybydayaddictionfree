const { key, sid } = require('../keysAndIds/twillioKey');
const { getAllSmokerTelNumbers } = require('../database/queries');
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

const sendSmokerCheckins = () => {
  getAllSmokerTelNumbers()
    .then(({ rows }) => {
      rows.forEach((row) => {
        const message = 'Hi ' + row.name + ', have you smoked a cigarette since our last check-in? \'1\' for YES, \'2\' for NO';
        send(row.phone, message);
      });
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

module.exports.sendSmokerCheckins = sendSmokerCheckins;
module.exports.sendStatusToFriends = sendStatusToFriends;
