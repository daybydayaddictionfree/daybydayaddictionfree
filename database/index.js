const { Pool, Client } = require('pg');
const db = require('../keysAndIds/db.js');

const pool = new Pool({
  connectionString: db.connectionString,
});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});

const client = new Client();

client.connect();

module.exports = {
  query: (text, params, callback) =>
    pool.query(text, params, callback),
};

