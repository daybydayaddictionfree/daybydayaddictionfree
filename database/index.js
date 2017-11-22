const { Client } = require('pg');
const connectionString = require('../keysAndIds/db.js');

const client = new Client({
  connectionString,
  ssl: true,
});

client.connect()
  .then(() => console.log('Connected to postgresql database!'))
  .catch(e => console.log('connection error: ', e));

// create tables for database
// client.query('DROP TABLE smokers');
client.query('CREATE TABLE IF NOT EXISTS smokers(id serial not null primary key, name varchar(64), phone VARCHAR(64) UNIQUE, email VARCHAR(64) UNIQUE, timezone VARCHAR(64), progress int, responded boolean, admin boolean)');

// client.query('DROP TABLE friends');
client.query('CREATE TABLE IF NOT EXISTS friends(id serial not null primary key, name varchar(64), phone VARCHAR(64) UNIQUE, id_smokers int, phone_smokers VARCHAR(64) UNIQUE)');

// client.query('DROP TABLE messages');
client.query('CREATE TABLE IF NOT EXISTS messages (id serial not null primary key, text varchar(64), timestamp varchar (25), id_smokers int, id_friends int)');

// client.query('DROP TABLE cookies');
client.query('CREATE TABLE IF NOT EXISTS cookies (id serial not null primary key, token varchar(255), email VARCHAR(64) UNIQUE, id_smokers int)');


module.exports = {
  client,
  query: (text, params) =>
    client.query(text, params),
};
