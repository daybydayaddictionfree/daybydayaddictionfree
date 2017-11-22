'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = require('react-router-dom');

var _universalCookie = require('universal-cookie');

var _universalCookie2 = _interopRequireDefault(_universalCookie);

var _HomePage = require('./HomePage');

var _HomePage2 = _interopRequireDefault(_HomePage);

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

var _sampleData = require('../../../sampleData');

var _sampleData2 = _interopRequireDefault(_sampleData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cookies = new _universalCookie2.default();

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      loggedIn: false,
      profileObj: {},
      tokenId: ''
    };
    _this.responseGoogle = _this.responseGoogle.bind(_this);
    _this.logState = _this.logState.bind(_this);
    _this.homePage = _this.homePage.bind(_this);
    _this.checkCookies = _this.checkCookies.bind(_this);
    _this.logout = _this.logout.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.checkCookies();
    }
  }, {
    key: 'checkCookies',
    value: function checkCookies() {
      var _this2 = this;

      if (cookies.get('dbd-session-cookie')) {
        _axios2.default.get('/verifyAuth').then(function (response) {
          console.log(response);
          _this2.setState({
            loggedIn: true
          });
        });
      }
    }
  }, {
    key: 'logout',
    value: function logout() {
      this.setState({
        loggedIn: false
      });
    }
  }, {
    key: 'responseGoogle',
    value: function responseGoogle(googleResponse) {
      var _this3 = this;

      console.log(googleResponse);
      console.log('in response function');
      cookies.set('dbd-session-cookie', googleResponse.tokenId);

      // Need to add axios.get request here to ('/login')
      _axios2.default.get('/login').then(function (response) {
        console.log(response);
        _this3.setState({
          loggedIn: true,
          profileObj: googleResponse.profileObj,
          tokenId: googleResponse.tokenId
        });
      });
    }
  }, {
    key: 'logState',
    value: function logState() {
      console.log('Here is state');
      console.log(this.state);
    }
  }, {
    key: 'homePage',
    value: function homePage() {
      return _react2.default.createElement(_HomePage2.default, { messages: _sampleData2.default, userState: this.state, cookies: cookies, logout: this.logout });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.loggedIn) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'nav',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/landing', style: { margin: '5px' } },
              'LandingPage'
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/signup', style: { margin: '5px' } },
              'SigupPage'
            ),
            _react2.default.createElement(_Login2.default, { responseGoogle: this.responseGoogle })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _reactRouterDom.Switch,
              null,
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/landing', component: LandingPage }),
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/signup', component: SignupPage }),
              _react2.default.createElement(_reactRouterDom.Redirect, { to: '/landing' })
            )
          )
        );
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { onClick: this.logState },
          'Click to console log user credentials'
        ),
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/home', render: this.homePage }),
          _react2.default.createElement(_reactRouterDom.Redirect, { to: '/home' })
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

var LandingPage = function LandingPage() {
  return _react2.default.createElement(
    'h1',
    null,
    'Future Landing Page'
  );
};
var SignupPage = function SignupPage() {
  return _react2.default.createElement(
    'h1',
    null,
    'Future Signup Page'
  );
};

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbImNvb2tpZXMiLCJBcHAiLCJzdGF0ZSIsImxvZ2dlZEluIiwicHJvZmlsZU9iaiIsInRva2VuSWQiLCJyZXNwb25zZUdvb2dsZSIsImJpbmQiLCJsb2dTdGF0ZSIsImhvbWVQYWdlIiwiY2hlY2tDb29raWVzIiwibG9nb3V0IiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZ29vZ2xlUmVzcG9uc2UiLCJzZXQiLCJtYXJnaW4iLCJMYW5kaW5nUGFnZSIsIlNpZ251cFBhZ2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLCtCQUFoQjs7SUFFTUMsRzs7O0FBQ0osaUJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsS0FEQztBQUVYQyxrQkFBWSxFQUZEO0FBR1hDLGVBQVM7QUFIRSxLQUFiO0FBS0EsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjRCxJQUFkLE9BQWhCO0FBQ0EsVUFBS0UsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNGLElBQWQsT0FBaEI7QUFDQSxVQUFLRyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JILElBQWxCLE9BQXBCO0FBQ0EsVUFBS0ksTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUosSUFBWixPQUFkO0FBWFk7QUFZYjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0csWUFBTDtBQUNEOzs7bUNBRWM7QUFBQTs7QUFDYixVQUFJVixRQUFRWSxHQUFSLENBQVksb0JBQVosQ0FBSixFQUF1QztBQUNyQyx3QkFBTUEsR0FBTixDQUFVLGFBQVYsRUFDR0MsSUFESCxDQUNRLFVBQUNDLFFBQUQsRUFBYztBQUNsQkMsa0JBQVFDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLGlCQUFLRyxRQUFMLENBQWM7QUFDWmQsc0JBQVU7QUFERSxXQUFkO0FBR0QsU0FOSDtBQU9EO0FBQ0Y7Ozs2QkFFUTtBQUNQLFdBQUtjLFFBQUwsQ0FBYztBQUNaZCxrQkFBVTtBQURFLE9BQWQ7QUFHRDs7O21DQUVjZSxjLEVBQWdCO0FBQUE7O0FBQzdCSCxjQUFRQyxHQUFSLENBQVlFLGNBQVo7QUFDQUgsY0FBUUMsR0FBUixDQUFZLHNCQUFaO0FBQ0FoQixjQUFRbUIsR0FBUixDQUFZLG9CQUFaLEVBQWtDRCxlQUFlYixPQUFqRDs7QUFFQTtBQUNBLHNCQUFNTyxHQUFOLENBQVUsUUFBVixFQUNHQyxJQURILENBQ1EsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCQyxnQkFBUUMsR0FBUixDQUFZRixRQUFaO0FBQ0EsZUFBS0csUUFBTCxDQUFjO0FBQ1pkLG9CQUFVLElBREU7QUFFWkMsc0JBQVljLGVBQWVkLFVBRmY7QUFHWkMsbUJBQVNhLGVBQWViO0FBSFosU0FBZDtBQUtELE9BUkg7QUFTRDs7OytCQUVVO0FBQ1RVLGNBQVFDLEdBQVIsQ0FBWSxlQUFaO0FBQ0FELGNBQVFDLEdBQVIsQ0FBWSxLQUFLZCxLQUFqQjtBQUNEOzs7K0JBRVU7QUFDVCxhQUNFLG9EQUFVLDhCQUFWLEVBQThCLFdBQVcsS0FBS0EsS0FBOUMsRUFBcUQsU0FBU0YsT0FBOUQsRUFBdUUsUUFBUSxLQUFLVyxNQUFwRixHQURGO0FBR0Q7Ozs2QkFFUTtBQUNQLFVBQUksQ0FBQyxLQUFLVCxLQUFMLENBQVdDLFFBQWhCLEVBQTBCO0FBQ3hCLGVBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFNLElBQUcsVUFBVCxFQUFvQixPQUFPLEVBQUVpQixRQUFRLEtBQVYsRUFBM0I7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQU0sSUFBRyxTQUFULEVBQW1CLE9BQU8sRUFBRUEsUUFBUSxLQUFWLEVBQTFCO0FBQUE7QUFBQSxhQUZGO0FBR0UsNkRBQU8sZ0JBQWdCLEtBQUtkLGNBQTVCO0FBSEYsV0FERjtBQU1FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLHFFQUFPLFdBQVAsRUFBYSxNQUFLLFVBQWxCLEVBQTZCLFdBQVdlLFdBQXhDLEdBREY7QUFFRSxxRUFBTyxXQUFQLEVBQWEsTUFBSyxTQUFsQixFQUE0QixXQUFXQyxVQUF2QyxHQUZGO0FBR0Usd0VBQVUsSUFBRyxVQUFiO0FBSEY7QUFERjtBQU5GLFNBREY7QUFnQkQ7QUFDRCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFRLFNBQVMsS0FBS2QsUUFBdEI7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFDRSxpRUFBTyxXQUFQLEVBQWEsTUFBSyxPQUFsQixFQUEwQixRQUFRLEtBQUtDLFFBQXZDLEdBREY7QUFFRSxvRUFBVSxJQUFHLE9BQWI7QUFGRjtBQUZGLE9BREY7QUFTRDs7OztFQTdGZSxnQkFBTWMsUzs7QUFnR3hCLElBQU1GLGNBQWMsU0FBZEEsV0FBYztBQUFBLFNBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOO0FBQUEsQ0FBcEI7QUFDQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWE7QUFBQSxTQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjtBQUFBLENBQW5COztrQkFFZXJCLEciLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBMaW5rLCBSb3V0ZSwgUmVkaXJlY3QsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi9Ib21lUGFnZSc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbic7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vLi4vc2FtcGxlRGF0YSc7XG5cbmNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2dnZWRJbjogZmFsc2UsXG4gICAgICBwcm9maWxlT2JqOiB7fSxcbiAgICAgIHRva2VuSWQ6ICcnLFxuICAgIH07XG4gICAgdGhpcy5yZXNwb25zZUdvb2dsZSA9IHRoaXMucmVzcG9uc2VHb29nbGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvZ1N0YXRlID0gdGhpcy5sb2dTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaG9tZVBhZ2UgPSB0aGlzLmhvbWVQYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGVja0Nvb2tpZXMgPSB0aGlzLmNoZWNrQ29va2llcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9nb3V0ID0gdGhpcy5sb2dvdXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuY2hlY2tDb29raWVzKCk7XG4gIH1cblxuICBjaGVja0Nvb2tpZXMoKSB7XG4gICAgaWYgKGNvb2tpZXMuZ2V0KCdkYmQtc2Vzc2lvbi1jb29raWUnKSkge1xuICAgICAgYXhpb3MuZ2V0KCcvdmVyaWZ5QXV0aCcpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvZ2dlZEluOiB0cnVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2dnZWRJbjogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIHJlc3BvbnNlR29vZ2xlKGdvb2dsZVJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5sb2coZ29vZ2xlUmVzcG9uc2UpO1xuICAgIGNvbnNvbGUubG9nKCdpbiByZXNwb25zZSBmdW5jdGlvbicpO1xuICAgIGNvb2tpZXMuc2V0KCdkYmQtc2Vzc2lvbi1jb29raWUnLCBnb29nbGVSZXNwb25zZS50b2tlbklkKTtcblxuICAgIC8vIE5lZWQgdG8gYWRkIGF4aW9zLmdldCByZXF1ZXN0IGhlcmUgdG8gKCcvbG9naW4nKVxuICAgIGF4aW9zLmdldCgnL2xvZ2luJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxvZ2dlZEluOiB0cnVlLFxuICAgICAgICAgIHByb2ZpbGVPYmo6IGdvb2dsZVJlc3BvbnNlLnByb2ZpbGVPYmosXG4gICAgICAgICAgdG9rZW5JZDogZ29vZ2xlUmVzcG9uc2UudG9rZW5JZCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGxvZ1N0YXRlKCkge1xuICAgIGNvbnNvbGUubG9nKCdIZXJlIGlzIHN0YXRlJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gIH1cblxuICBob21lUGFnZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhvbWVQYWdlIG1lc3NhZ2VzPXttZXNzYWdlc30gdXNlclN0YXRlPXt0aGlzLnN0YXRlfSBjb29raWVzPXtjb29raWVzfSBsb2dvdXQ9e3RoaXMubG9nb3V0fSAvPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUubG9nZ2VkSW4pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xhbmRpbmdcIiBzdHlsZT17eyBtYXJnaW46ICc1cHgnIH19ID5MYW5kaW5nUGFnZTwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NpZ251cFwiIHN0eWxlPXt7IG1hcmdpbjogJzVweCcgfX0gPlNpZ3VwUGFnZTwvTGluaz5cbiAgICAgICAgICAgIDxMb2dpbiByZXNwb25zZUdvb2dsZT17dGhpcy5yZXNwb25zZUdvb2dsZX0gLz5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvbGFuZGluZ1wiIGNvbXBvbmVudD17TGFuZGluZ1BhZ2V9IC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3NpZ251cFwiIGNvbXBvbmVudD17U2lnbnVwUGFnZX0gLz5cbiAgICAgICAgICAgICAgPFJlZGlyZWN0IHRvPVwiL2xhbmRpbmdcIiAvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5sb2dTdGF0ZX0gPkNsaWNrIHRvIGNvbnNvbGUgbG9nIHVzZXIgY3JlZGVudGlhbHM8L2J1dHRvbj5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9ob21lXCIgcmVuZGVyPXt0aGlzLmhvbWVQYWdlfSAvPlxuICAgICAgICAgIDxSZWRpcmVjdCB0bz1cIi9ob21lXCIgLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoKSA9PiA8aDE+RnV0dXJlIExhbmRpbmcgUGFnZTwvaDE+O1xuY29uc3QgU2lnbnVwUGFnZSA9ICgpID0+IDxoMT5GdXR1cmUgU2lnbnVwIFBhZ2U8L2gxPjtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19