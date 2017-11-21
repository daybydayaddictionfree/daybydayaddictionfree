const db = require('./index.js');

const seedDatabase = () => {
  client.query('INSERT INTO smokers (name, phone, email, progress) VALUES ($1, $2, $3, $4)', ['Abraham Lincoln', '555-555-5555', 'abe@gmail.com', 0]);

  client.query('INSERT INTO friends(name, phone, id_smokers) VALUES ($1, $2, $3)', ['Mom', '333-333-3333', 1]);

  client.query('INSERT INTO messages(text, timestamp, id_smokers, id_friends) VALUES ($1, $2, $3, $4)', ['Goodjob sweetie!!!', '11/18/2017', 1, 1]);
};

seedDatabase();
