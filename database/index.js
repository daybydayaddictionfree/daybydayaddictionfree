const { Client } = require('pg');
const db = require('../keysAndIds/db.js');

const client = new Client({
  connectionString: db.connectionString,
  ssl: true,
});

client.connect()
  .then(() => console.log('Connected to postgresql database!'))
  .catch(e => console.log('connection error: ', e));

client.query('DROP TABLE smokers')
client.query('CREATE TABLE smokers (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255), phone VARCHAR(15) UNIQUE, email VARCHAR(15), timezone VARCHAR(15), progress INT(15), reminder VARCHAR(15)');

module.exports = {
  query: (text, params) =>
    client.query(text, params),
};

