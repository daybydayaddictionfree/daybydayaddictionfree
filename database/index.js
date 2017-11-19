const { Client } = require('pg');

const client = new Client();

client.connect();

// connecting with heroku
// const connection = 'postgres://jasonborer:Metro123@localhost/node_hero';

pg.connect(connection, (err, client, done) => {
  if (err) {
    return console.error('error fetching database');
  } 
});

