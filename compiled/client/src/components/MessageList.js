'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Message = require('./Message.jsx');

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageList = function MessageList(props) {
  return _react2.default.createElement(
    'div',
    null,
    props.messages.map(function (item) {
      return _react2.default.createElement(_Message2.default, { message: item, key: item._id });
    })
  );
};

exports.default = MessageList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9NZXNzYWdlTGlzdC5qc3giXSwibmFtZXMiOlsiTWVzc2FnZUxpc3QiLCJwcm9wcyIsIm1lc3NhZ2VzIiwibWFwIiwiaXRlbSIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxTQUFkQSxXQUFjO0FBQUEsU0FDbEI7QUFBQTtBQUFBO0FBQ0dDLFVBQU1DLFFBQU4sQ0FBZUMsR0FBZixDQUFtQjtBQUFBLGFBQVEsbURBQVMsU0FBU0MsSUFBbEIsRUFBd0IsS0FBS0EsS0FBS0MsR0FBbEMsR0FBUjtBQUFBLEtBQW5CO0FBREgsR0FEa0I7QUFBQSxDQUFwQjs7a0JBTWVMLFciLCJmaWxlIjoiTWVzc2FnZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9NZXNzYWdlLmpzeCc7XG5cbmNvbnN0IE1lc3NhZ2VMaXN0ID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIHtwcm9wcy5tZXNzYWdlcy5tYXAoaXRlbSA9PiA8TWVzc2FnZSBtZXNzYWdlPXtpdGVtfSBrZXk9e2l0ZW0uX2lkfSAvPil9XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUxpc3Q7XG4iXX0=