const { Client } = require('pg');
const queries = require('../database/queries');
const connectionString = require('../keysAndIds/db.js'); 


describe('Persistent data storage', () => {

  beforeEach(function(done) {

    const client = new Client({
      connectionString,
      ssl: true,
    });

    client.connect()
    .then(() => console.log('Connected to testing postgresql database!'))
    .catch(e => console.log('connection error: ', e));
   
  });

  afterEach(() => {
    client.end();
  });

  it('should insert new smokers into the DB', (done) => {
    const smoker = {
      name: 'Lebron',
      userNum: '+15555555555',
      email: 'lebron@gmail.com',
    };
    queries.insertSmoker(smoker)
      .then((result) => {
        expect(result.rowCount).to.equal(1);
        client.query('DELETE FROM smokers WHERE name=$1', [smoker.name]);
      });
  });

  it('should insert friends into the DB', (done) => {
    const friends = [
      ['mike', '1111111111', 1],
    ];
    queries.insertFriends(friends)
      .then((result) => {
        expect(result.rowCount).to.equal(1);
        client.query('DELETE FROM friends WHERE name=$1', [friends[0][0]]);
      });
  });

  it('should insert messages into the DB', (done) => {
    const message = ['Nice job!', '2pm', 0, 0];
    queries.insertMessage(message)
      .then((result) => {
        expect(result.rowCount).to.equal(1);
        client.query('DELETE FROM messages WHERE timestamp=$1', [message[1]]);
      });
  });

  it('should insert a cookie into the DB', (done) => {
    const token = {
      token: 'thisisatestcookie',
      email: 'lebron@gmail.com',
      id: 1,
    };
    queries.insertCookie(token)
      .then((result) => {
        expect(result.rowCount).to.equal(1);
        client.query('DELETE FROM cookies WHERE token=$1', [token.token]);
      });
  });

  it('should retrieve messages from the db', (done) => {
    const message = ['Nice job!'];
    queries.insertMessage(message)
      .then(() => {
        queries.retrieveMessages(1)
          .then((result) => {
            expect(result.rowCount).to.equal(1);
          });
      });
  });
});

