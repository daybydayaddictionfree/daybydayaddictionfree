const { Client } = require('pg');
const db = require('../keysAndIds/db.js');

const client = new Client({
  connectionString: db.connectionString,
  ssl: true,
});

client.connect()
  .then(() => console.log('Connected to postgresql database!'))
  .catch(e => console.log('connection error: ', e));

client.query('DROP TABLE smokers');
client.query('CREATE TABLE IF NOT EXISTS smokers(id serial not null primary key, name varchar(64), phone VARCHAR(15) UNIQUE, email VARCHAR(64), timezone VARCHAR(15), progress int, reminder VARCHAR(15) )');

client.query('INSERT INTO smokers (name, phone, email, progress) VALUES ($1, $2, $3, $4)', ['Abraham Lincoln', '555-555-5555', 'abe@gmail.com', 0]);

client.query('SELECT * from smokers')
  .then((result) => {
    console.log(result.rows);
  });

module.exports = {
  query: (text, params) =>
    client.query(text, params),
};

