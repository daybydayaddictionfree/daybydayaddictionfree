'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _MessageList = require('./MessageList.jsx');

var _MessageList2 = _interopRequireDefault(_MessageList);

var _ProgressBar = require('./ProgressBar.jsx');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _reactGoogleLogin = require('react-google-login');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage(props) {
  var logout = function logout() {
    _axios2.default.get('/logout').then(function () {
      props.cookies.remove('dbd-session-cookie');
    }).then(function () {
      props.logout();
    }).catch(function (err) {
      return console.log('Error logging out ', err);
    });
  };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactGoogleLogin.GoogleLogout, {
      buttonText: 'Logout',
      onLogoutSuccess: logout
    }),
    _react2.default.createElement(
      'h1',
      { style: { textAlign: 'center' } },
      props.userState.profileObj.givenName,
      ' ',
      props.userState.profileObj.familyName
    ),
    _react2.default.createElement(_ProgressBar2.default, null),
    _react2.default.createElement(_MessageList2.default, { messages: props.messages })
  );
};

exports.default = HomePage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Ib21lUGFnZS5qc3giXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsImxvZ291dCIsImdldCIsInRoZW4iLCJjb29raWVzIiwicmVtb3ZlIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwidGV4dEFsaWduIiwidXNlclN0YXRlIiwicHJvZmlsZU9iaiIsImdpdmVuTmFtZSIsImZhbWlseU5hbWUiLCJtZXNzYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUIsTUFBTUMsU0FBUyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsb0JBQU1DLEdBQU4sQ0FBVSxTQUFWLEVBQ0dDLElBREgsQ0FDUSxZQUFNO0FBQ1ZILFlBQU1JLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQixvQkFBckI7QUFDRCxLQUhILEVBSUdGLElBSkgsQ0FJUSxZQUFNO0FBQ1ZILFlBQU1DLE1BQU47QUFDRCxLQU5ILEVBT0dLLEtBUEgsQ0FPUztBQUFBLGFBQU9DLFFBQVFDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ0MsR0FBbEMsQ0FBUDtBQUFBLEtBUFQ7QUFTRCxHQVZEOztBQVlBLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFDRSxrQkFBVyxRQURiO0FBRUUsdUJBQWlCUjtBQUZuQixNQURGO0FBS0U7QUFBQTtBQUFBLFFBQUksT0FBTyxFQUFFUyxXQUFXLFFBQWIsRUFBWDtBQUFzQ1YsWUFBTVcsU0FBTixDQUFnQkMsVUFBaEIsQ0FBMkJDLFNBQWpFO0FBQUE7QUFBNkViLFlBQU1XLFNBQU4sQ0FBZ0JDLFVBQWhCLENBQTJCRTtBQUF4RyxLQUxGO0FBTUUsOERBTkY7QUFPRSwyREFBYSxVQUFVZCxNQUFNZSxRQUE3QjtBQVBGLEdBREY7QUFXRCxDQXhCRDs7a0JBMEJlaEIsUSIsImZpbGUiOiJIb21lUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IE1lc3NhZ2VMaXN0IGZyb20gJy4vTWVzc2FnZUxpc3QuanN4J1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vUHJvZ3Jlc3NCYXIuanN4JztcbmltcG9ydCB7IEdvb2dsZUxvZ291dCB9IGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XG5cbmNvbnN0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICBheGlvcy5nZXQoJy9sb2dvdXQnKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBwcm9wcy5jb29raWVzLnJlbW92ZSgnZGJkLXNlc3Npb24tY29va2llJyk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBwcm9wcy5sb2dvdXQoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvciBsb2dnaW5nIG91dCAnLCBlcnIpKTtcblxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxHb29nbGVMb2dvdXRcbiAgICAgICAgYnV0dG9uVGV4dD1cIkxvZ291dFwiXG4gICAgICAgIG9uTG9nb3V0U3VjY2Vzcz17bG9nb3V0fVxuICAgICAgLz5cbiAgICAgIDxoMSBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19ID57cHJvcHMudXNlclN0YXRlLnByb2ZpbGVPYmouZ2l2ZW5OYW1lfSB7cHJvcHMudXNlclN0YXRlLnByb2ZpbGVPYmouZmFtaWx5TmFtZX08L2gxPlxuICAgICAgPFByb2dyZXNzQmFyIC8+XG4gICAgICA8TWVzc2FnZUxpc3QgbWVzc2FnZXM9e3Byb3BzLm1lc3NhZ2VzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdfQ==