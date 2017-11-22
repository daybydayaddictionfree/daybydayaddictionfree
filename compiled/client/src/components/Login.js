'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGoogleLogin = require('react-google-login');

var _reactGoogleLogin2 = _interopRequireDefault(_reactGoogleLogin);

var _GoogleId = require('../../../keysAndIds/GoogleId.js');

var _GoogleId2 = _interopRequireDefault(_GoogleId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var responseGoogle = function responseGoogle(response) {
  console.log(response);
};

var Login = function Login(props) {
  return _react2.default.createElement(_reactGoogleLogin2.default, {
    clientId: _GoogleId2.default.client_id,
    buttonText: 'Login using Google',
    onSuccess: props.responseGoogle,
    onFailure: props.responseGoogle
  });
};

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Mb2dpbi5qc3giXSwibmFtZXMiOlsicmVzcG9uc2VHb29nbGUiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJMb2dpbiIsImNsaWVudF9pZCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ25DQyxVQUFRQyxHQUFSLENBQVlGLFFBQVo7QUFDRCxDQUZEOztBQUlBLElBQU1HLFFBQVEsU0FBUkEsS0FBUTtBQUFBLFNBQ1o7QUFDRSxjQUFVLG1CQUFTQyxTQURyQjtBQUVFLGdCQUFXLG9CQUZiO0FBR0UsZUFBV0MsTUFBTU4sY0FIbkI7QUFJRSxlQUFXTSxNQUFNTjtBQUpuQixJQURZO0FBQUEsQ0FBZDs7a0JBU2VJLEsiLCJmaWxlIjoiTG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdvb2dsZUxvZ2luIGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XG5pbXBvcnQgR29vZ2xlSWQgZnJvbSAnLi4vLi4vLi4va2V5c0FuZElkcy9Hb29nbGVJZC5qcyc7XG5cbmNvbnN0IHJlc3BvbnNlR29vZ2xlID0gKHJlc3BvbnNlKSA9PiB7XG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbn07XG5cbmNvbnN0IExvZ2luID0gcHJvcHMgPT4gKFxuICA8R29vZ2xlTG9naW5cbiAgICBjbGllbnRJZD17R29vZ2xlSWQuY2xpZW50X2lkfVxuICAgIGJ1dHRvblRleHQ9XCJMb2dpbiB1c2luZyBHb29nbGVcIlxuICAgIG9uU3VjY2Vzcz17cHJvcHMucmVzcG9uc2VHb29nbGV9XG4gICAgb25GYWlsdXJlPXtwcm9wcy5yZXNwb25zZUdvb2dsZX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl19