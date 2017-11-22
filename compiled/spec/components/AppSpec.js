'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _testUtils = require('react-dom/test-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('App', function () {

  var app = void 0;

  beforeEach(function () {
    app = (0, _testUtils.renderIntoDocument)(_react2.default.createElement(App, null));
  });

  it('should be a stateful class component', function () {
    expect(_react2.default.Component.isPrototypeOf(App)).to.be.true;
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwZWMvY29tcG9uZW50cy9BcHBTcGVjLmpzeCJdLCJuYW1lcyI6WyJkZXNjcmliZSIsImFwcCIsImJlZm9yZUVhY2giLCJpdCIsImV4cGVjdCIsIkNvbXBvbmVudCIsImlzUHJvdG90eXBlT2YiLCJBcHAiLCJ0byIsImJlIiwidHJ1ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBT0FBLFNBQVMsS0FBVCxFQUFnQixZQUFNOztBQUVwQixNQUFJQyxZQUFKOztBQUVBQyxhQUFXLFlBQU07QUFDZkQsVUFBTSxtQ0FBbUIsOEJBQUMsR0FBRCxPQUFuQixDQUFOO0FBQ0QsR0FGRDs7QUFJQUUsS0FBRyxzQ0FBSCxFQUEyQyxZQUFNO0FBQy9DQyxXQUFPLGdCQUFNQyxTQUFOLENBQWdCQyxhQUFoQixDQUE4QkMsR0FBOUIsQ0FBUCxFQUEyQ0MsRUFBM0MsQ0FBOENDLEVBQTlDLENBQWlEQyxJQUFqRDtBQUNELEdBRkQ7QUFHRCxDQVhEIiwiZmlsZSI6IkFwcFNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgU2ltdWxhdGUsXG4gIHJlbmRlckludG9Eb2N1bWVudCxcbiAgZmluZFJlbmRlcmVkRE9NQ29tcG9uZW50V2l0aENsYXNzLFxuICBzY3J5UmVuZGVyZWRET01Db21wb25lbnRzV2l0aENsYXNzXG59IGZyb20gJ3JlYWN0LWRvbS90ZXN0LXV0aWxzJztcblxuZGVzY3JpYmUoJ0FwcCcsICgpID0+IHtcblxuICBsZXQgYXBwO1xuXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGFwcCA9IHJlbmRlckludG9Eb2N1bWVudCg8QXBwIC8+KTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBiZSBhIHN0YXRlZnVsIGNsYXNzIGNvbXBvbmVudCcsICgpID0+IHtcbiAgICBleHBlY3QoUmVhY3QuQ29tcG9uZW50LmlzUHJvdG90eXBlT2YoQXBwKSkudG8uYmUudHJ1ZTtcbiAgfSlcbn0pO1xuIl19