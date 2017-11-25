const { Client } = require('pg');
const queries = require('../database/queries');


describe('Persistent data storage', () => {

  beforeEach(function(done) {
    // TODO update with your local database information
    const client = new Client({
      user: 'jasonborer',
      host: 'localhost',
      password: '',
      database: 'example',
    });

    client.connect()
    .then(() => console.log('Connected to testing postgresql database!'))
    .catch(e => console.log('connection error: ', e));
   
    // clear the database
    client.query('DELETE FROM smokers');
    client.query('DELETE FROM friends');
    client.query('DELETE FROM messages');
    client.query('DELETE FROM cookies');
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
      .then((result)=> {
        expect(result.length).to.equal(1);
      });
  });

  it('should insert friends into the DB', (done) => {
    const friends = [
      ['mike', '1111111111', 1],
      ['john', '2222222222', 1],
      ['Jorge', '3333333333', 1],
    ];
    queries.insertFriends(friends)
      .then((result) => {
        expect(result.length).to.equal(1);
      });
  })

  it('should insert messages into the DB', (done) => {
    const message = ['Nice job!', '2pm', 1, 1];
    queries.insertMessage(message)
      .then((result) => {
        expect(result.length).to.equal(1);
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
        expect(result.length).to.equal(1);
      });
  });

  it('should retrieve messages from the db', (done) => {
    const message = ['Nice job!'];
    queries.insertMessage(message)
      .then(() => {
        queries.retrieveMessages(1)
          .then((result) => {
            expect(result.length).to.equal(1);
          });
      });
  });
});
