'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Card = require('material-ui/Card');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function Message(props) {
  return _react2.default.createElement(
    _Card.Card,
    { style: { width: '66%', margin: '5px auto' } },
    _react2.default.createElement(_Card.CardHeader, {
      title: props.message.sender,
      subtitle: props.message.timeStamp
    }),
    _react2.default.createElement(
      _Card.CardText,
      null,
      props.message.text
    )
  );
};

exports.default = Message;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9NZXNzYWdlLmpzeCJdLCJuYW1lcyI6WyJNZXNzYWdlIiwid2lkdGgiLCJtYXJnaW4iLCJwcm9wcyIsIm1lc3NhZ2UiLCJzZW5kZXIiLCJ0aW1lU3RhbXAiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxTQUFWQSxPQUFVO0FBQUEsU0FDZDtBQUFBO0FBQUEsTUFBTSxPQUFPLEVBQUVDLE9BQU8sS0FBVCxFQUFnQkMsUUFBUSxVQUF4QixFQUFiO0FBQ0U7QUFDRSxhQUFPQyxNQUFNQyxPQUFOLENBQWNDLE1BRHZCO0FBRUUsZ0JBQVVGLE1BQU1DLE9BQU4sQ0FBY0U7QUFGMUIsTUFERjtBQUtFO0FBQUE7QUFBQTtBQUFXSCxZQUFNQyxPQUFOLENBQWNHO0FBQXpCO0FBTEYsR0FEYztBQUFBLENBQWhCOztrQkFVZVAsTyIsImZpbGUiOiJNZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgQ2FyZEhlYWRlciwgQ2FyZFRleHQgfSBmcm9tICdtYXRlcmlhbC11aS9DYXJkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE1lc3NhZ2UgPSBwcm9wcyA9PiAoXG4gIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnNjYlJywgbWFyZ2luOiAnNXB4IGF1dG8nIH19PlxuICAgIDxDYXJkSGVhZGVyXG4gICAgICB0aXRsZT17cHJvcHMubWVzc2FnZS5zZW5kZXJ9XG4gICAgICBzdWJ0aXRsZT17cHJvcHMubWVzc2FnZS50aW1lU3RhbXB9XG4gICAgLz5cbiAgICA8Q2FyZFRleHQ+e3Byb3BzLm1lc3NhZ2UudGV4dH08L0NhcmRUZXh0PlxuICA8L0NhcmQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlO1xuIl19