'use strict';

var Promise = require('bluebird');

var _require = require('./index.js'),
    client = _require.client,
    query = _require.query;

// Seed table with dummy data


var seedDatabase = function seedDatabase() {
  query('INSERT INTO smokers (name, phone, email, progress) VALUES ($1, $2, $3, $4)', ['Abraham Lincoln', '555-555-5555', 'abe@gmail.com', 0]);

  query('INSERT INTO friends(name, phone, id_smokers) VALUES ($1, $2, $3)', ['Mom', '333-333-3333', 1]);

  query('INSERT INTO messages(text, timestamp, id_smokers, id_friends) VALUES ($1, $2, $3, $4)', ['Goodjob sweetie!!!', '11/18/2017', 1, 1]);
};

// Test to see if data is posting
Promise.resolve(seedDatabase()).then(function () {
  client.query('SELECT * from smokers').then(function (result) {
    console.log(result.rows);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2RhdGFiYXNlL3NlZWQuanMiXSwibmFtZXMiOlsiUHJvbWlzZSIsInJlcXVpcmUiLCJjbGllbnQiLCJxdWVyeSIsInNlZWREYXRhYmFzZSIsInJlc29sdmUiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInJvd3MiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsVUFBVUMsUUFBUSxVQUFSLENBQWhCOztlQUMwQkEsUUFBUSxZQUFSLEM7SUFBbEJDLE0sWUFBQUEsTTtJQUFRQyxLLFlBQUFBLEs7O0FBRWhCOzs7QUFDQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkQsUUFBTSw0RUFBTixFQUFvRixDQUFDLGlCQUFELEVBQW9CLGNBQXBCLEVBQW9DLGVBQXBDLEVBQXFELENBQXJELENBQXBGOztBQUVBQSxRQUFNLGtFQUFOLEVBQTBFLENBQUMsS0FBRCxFQUFRLGNBQVIsRUFBd0IsQ0FBeEIsQ0FBMUU7O0FBRUFBLFFBQU0sdUZBQU4sRUFBK0YsQ0FBQyxvQkFBRCxFQUF1QixZQUF2QixFQUFxQyxDQUFyQyxFQUF3QyxDQUF4QyxDQUEvRjtBQUNELENBTkQ7O0FBUUE7QUFDQUgsUUFBUUssT0FBUixDQUFnQkQsY0FBaEIsRUFDR0UsSUFESCxDQUNRLFlBQU07QUFDVkosU0FBT0MsS0FBUCxDQUFhLHVCQUFiLEVBQ0dHLElBREgsQ0FDUSxVQUFDQyxNQUFELEVBQVk7QUFDaEJDLFlBQVFDLEdBQVIsQ0FBWUYsT0FBT0csSUFBbkI7QUFDRCxHQUhIO0FBSUQsQ0FOSCIsImZpbGUiOiJzZWVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUHJvbWlzZSA9IHJlcXVpcmUoJ2JsdWViaXJkJyk7XG5jb25zdCB7IGNsaWVudCwgcXVlcnkgfSA9IHJlcXVpcmUoJy4vaW5kZXguanMnKTtcblxuLy8gU2VlZCB0YWJsZSB3aXRoIGR1bW15IGRhdGFcbmNvbnN0IHNlZWREYXRhYmFzZSA9ICgpID0+IHtcbiAgcXVlcnkoJ0lOU0VSVCBJTlRPIHNtb2tlcnMgKG5hbWUsIHBob25lLCBlbWFpbCwgcHJvZ3Jlc3MpIFZBTFVFUyAoJDEsICQyLCAkMywgJDQpJywgWydBYnJhaGFtIExpbmNvbG4nLCAnNTU1LTU1NS01NTU1JywgJ2FiZUBnbWFpbC5jb20nLCAwXSk7XG5cbiAgcXVlcnkoJ0lOU0VSVCBJTlRPIGZyaWVuZHMobmFtZSwgcGhvbmUsIGlkX3Ntb2tlcnMpIFZBTFVFUyAoJDEsICQyLCAkMyknLCBbJ01vbScsICczMzMtMzMzLTMzMzMnLCAxXSk7XG5cbiAgcXVlcnkoJ0lOU0VSVCBJTlRPIG1lc3NhZ2VzKHRleHQsIHRpbWVzdGFtcCwgaWRfc21va2VycywgaWRfZnJpZW5kcykgVkFMVUVTICgkMSwgJDIsICQzLCAkNCknLCBbJ0dvb2Rqb2Igc3dlZXRpZSEhIScsICcxMS8xOC8yMDE3JywgMSwgMV0pO1xufTtcblxuLy8gVGVzdCB0byBzZWUgaWYgZGF0YSBpcyBwb3N0aW5nXG5Qcm9taXNlLnJlc29sdmUoc2VlZERhdGFiYXNlKCkpXG4gIC50aGVuKCgpID0+IHtcbiAgICBjbGllbnQucXVlcnkoJ1NFTEVDVCAqIGZyb20gc21va2VycycpXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5yb3dzKTtcbiAgICAgIH0pO1xuICB9KTtcbiJdfQ==