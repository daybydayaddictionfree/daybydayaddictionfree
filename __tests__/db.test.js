const queries = require('../database/queries');
const { client } = require('../database/index');


test('should insert new smokers into the DB', () => {
  const smoker = {
    name: 'Lebron',
    userNum: '+15555555555',
    email: 'lebron@gmail.com',
  };
  queries.insertSmoker(smoker)
    .then((result) => {
      expect(result.rowCount).toBe(1);
      client.query('DELETE FROM smokers WHERE name=$1', [smoker.name])
        .then();
    });
});

test('should insert friends into the DB', () => {
  const friends = [
    ['mike', '1111111111', 1],
  ];
  queries.insertFriends(friends)
    .then((result) => {
      expect(result.rowCount).toBe(1);
      client.query('DELETE FROM friends WHERE name=$1', [friends[0][0]]);
    });
});

test('should insert messages into the DB', () => {
  const message = ['Nice job!', '2pm', 0, 0];
  queries.insertMessage(message)
    .then((result) => {
      expect(result.rowCount).toBe(1);
      client.query('DELETE FROM messages WHERE timestamp=$1', [message[1]]);
    });
});

test('should insert a cookie into the DB', () => {
  const token = {
    token: 'thisisatestcookie',
    email: 'lebron@gmail.com',
    id: 1,
  };
  queries.insertCookie(token)
    .then((result) => {
      expect(result.rowCount).toBe(1);
      client.query('DELETE FROM cookies WHERE token=$1', [token.token]);
    });
});

test('should retrieve messages from the DB', () => {
  const message = ['Nice job!'];
  queries.insertMessage(message)
    .then(() => {
      queries.retrieveMessages(1)
        .then((result) => {
          expect(result.rowCount).toBe(1);
        });
    });
});
