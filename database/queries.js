const { query } = require('./index');

const insertSmoker = (smoker =>
  query('INSERT INTO smokers (name, phone, email, progress) VALUES ($1, $2, $3, $4)', smoker));

const insertFriends = (friend =>
  query('INSERT INTO friends(name, phone, id_smokers) VALUES ($1, $2, $3)', friend));

const insertMessage = (message =>
  query('INSERT INTO messages(text, timestamp, id_smokers, id_friends) VALUES ($1, $2, $3, $4)', message));

const retrieveUser = (info =>
  query('SELECT id FROM smokers WHERE email= $1', [info.email]));

module.exports.insertSmoker = insertSmoker;
module.exports.insertFriends = insertFriends;
module.exports.insertMessage = insertMessage;
module.exports.retrieveUser = retrieveUser;
