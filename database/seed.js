const Promise = require('bluebird');
const { client, query } = require('./index.js');
const q = require('./queries');

// Seed table with dummy data
const seedDatabase = () => {
  // query('INSERT INTO smokers (name, phone, email, progress) VALUES ($1, $2, $3, $4)', ['Abraham Lincoln', '555-555-5555', 'abe@gmail.com', 0]);

  // query('INSERT INTO friends(name, phone, id_smokers) VALUES ($1, $2, $3)', ['Mom', '333-333-3333', 1]);

  query('INSERT INTO messages(text, timestamp, id_smokers, id_friends) VALUES ($1, $2, $3, $4)', ['Goodjob sweetie!!!', '11/18/2017', 2, 1]);
  query('INSERT INTO messages(text, timestamp, id_smokers, id_friends) VALUES ($1, $2, $3, $4)', ['Keep it goin!', '11/18/2017', 2, 1]);
  query('INSERT INTO messages(text, timestamp, id_smokers, id_friends) VALUES ($1, $2, $3, $4)', ['Stay strong!', '11/18/2017', 2, 2]);
};

// seedDatabase();
// Test to see if data is posting
// Promise.resolve(seedDatabase())
//   .then(() => {
//     client.query('SELECT * from cookies')
//     // q.retrieveUserInfo({ email: 'borerjason@gmail.com' })
//       .then((result) => {
//         console.log(result.rows);
//       });
//   });

