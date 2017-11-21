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
client.query('DROP TABLE smokers');
client.query('CREATE TABLE IF NOT EXISTS smokers(id serial not null primary key, name varchar(64), phone VARCHAR(64) UNIQUE, email VARCHAR(64) UNIQUE, timezone VARCHAR(64), progress int, reminder VARCHAR(64) )');

client.query('DROP TABLE friends');
client.query('CREATE TABLE IF NOT EXISTS friends(id serial not null primary key, name varchar(64), phone VARCHAR(64) UNIQUE, id_smokers int)');

client.query('DROP TABLE messages');
client.query('CREATE TABLE IF NOT EXISTS messages (id serial not null primary key, text varchar(64), timestamp varchar (25), id_smokers int, id_friends int)');



// Seed table with dummy data

// client.query('INSERT INTO smokers (name, phone, email, progress) VALUES ($1, $2, $3, $4)', ['Abraham Lincoln', '555-555-5555', 'abe@gmail.com', 0]);

// client.query('INSERT INTO friends(name, phone, id_smokers) VALUES ($1, $2, $3)', ['Mom', '333-333-3333', 1]);

// client.query('INSERT INTO messages(text, timestamp, id_smokers, id_friends) VALUES ($1, $2, $3, $4)', ['Goodjob sweetie!!!', '11/18/2017', 1, 1]);


client.query('SELECT * from friends')
  .then((result) => {
    console.log(result.rows);
  });

module.exports = {
  query: (text, params) =>
    client.query(text, params),
};
