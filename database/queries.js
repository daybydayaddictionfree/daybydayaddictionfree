const format = require('pg-format');
const { query } = require('./index');

const insertSmoker = (({ name, userNum, email}) =>
  query('INSERT INTO smokers (name, phone, email, progress) VALUES ($1, $2, $3, $4) RETURNING id, email', [name, userNum, email, 0]));

const insertFriends = ((friends) => {
  const sql = format('INSERT INTO friends(name, phone, id_smokers) VALUES %L', friends)
  return query(sql)
});

const insertMessage = (message =>
  query('INSERT INTO messages(text, timestamp, id_smokers, id_friends) VALUES ($1, $2, $3, $4)', message));

const retrieveUserInfo = (email =>
  query('SELECT * FROM smokers WHERE email=$1', [email]));

const checkCookie = (token =>
  query('SELECT email FROM cookies WHERE token=$1', [token]));

const insertCookie = (({ token, email, id }) => 
  query('INSERT INTO cookies(token, email, id_smokers) VALUES ($1, $2, $3)', [token,email, id]));

module.exports.insertSmoker = insertSmoker;
module.exports.insertFriends = insertFriends;
module.exports.insertMessage = insertMessage;
module.exports.retrieveUserInfo = retrieveUserInfo;
module.exports.checkCookie = checkCookie;
module.exports.insertCookie = insertCookie;
