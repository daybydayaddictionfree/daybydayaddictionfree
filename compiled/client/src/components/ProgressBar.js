'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LinearProgress = require('material-ui/LinearProgress');

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressBar = function (_React$Component) {
  _inherits(ProgressBar, _React$Component);

  function ProgressBar(props) {
    _classCallCheck(this, ProgressBar);

    var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this, props));

    _this.state = {
      /* this number will update from the database everytime a
      smoker has a successful or unsuccessful day */
      completed: 30
    };
    return _this;
  }

  // call this or a similar function when database is updated


  _createClass(ProgressBar, [{
    key: 'progress',
    value: function progress(value) {
      this.setState({ completed: value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_LinearProgress2.default, { style: { width: '66%', margin: '5px auto' }, mode: 'determinate', max: 60, value: this.state.completed });
    }
  }]);

  return ProgressBar;
}(_react2.default.Component);

exports.default = ProgressBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci5qc3giXSwibmFtZXMiOlsiUHJvZ3Jlc3NCYXIiLCJwcm9wcyIsInN0YXRlIiwiY29tcGxldGVkIiwidmFsdWUiLCJzZXRTdGF0ZSIsIndpZHRoIiwibWFyZ2luIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxXOzs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWDs7QUFFQUMsaUJBQVc7QUFIQSxLQUFiO0FBSGlCO0FBUWxCOztBQUVEOzs7Ozs2QkFDU0MsSyxFQUFPO0FBQ2QsV0FBS0MsUUFBTCxDQUFjLEVBQUVGLFdBQVdDLEtBQWIsRUFBZDtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFLDBEQUFnQixPQUFPLEVBQUVFLE9BQU8sS0FBVCxFQUFnQkMsUUFBUSxVQUF4QixFQUF2QixFQUE2RCxNQUFLLGFBQWxFLEVBQWdGLEtBQUssRUFBckYsRUFBeUYsT0FBTyxLQUFLTCxLQUFMLENBQVdDLFNBQTNHLEdBREY7QUFHRDs7OztFQXBCdUIsZ0JBQU1LLFM7O2tCQXVCakJSLFciLCJmaWxlIjoiUHJvZ3Jlc3NCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ21hdGVyaWFsLXVpL0xpbmVhclByb2dyZXNzJztcblxuY2xhc3MgUHJvZ3Jlc3NCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvKiB0aGlzIG51bWJlciB3aWxsIHVwZGF0ZSBmcm9tIHRoZSBkYXRhYmFzZSBldmVyeXRpbWUgYVxuICAgICAgc21va2VyIGhhcyBhIHN1Y2Nlc3NmdWwgb3IgdW5zdWNjZXNzZnVsIGRheSAqL1xuICAgICAgY29tcGxldGVkOiAzMCxcbiAgICB9O1xuICB9XG5cbiAgLy8gY2FsbCB0aGlzIG9yIGEgc2ltaWxhciBmdW5jdGlvbiB3aGVuIGRhdGFiYXNlIGlzIHVwZGF0ZWRcbiAgcHJvZ3Jlc3ModmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY29tcGxldGVkOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmVhclByb2dyZXNzIHN0eWxlPXt7IHdpZHRoOiAnNjYlJywgbWFyZ2luOiAnNXB4IGF1dG8nIH19IG1vZGU9XCJkZXRlcm1pbmF0ZVwiIG1heD17NjB9IHZhbHVlPXt0aGlzLnN0YXRlLmNvbXBsZXRlZH0gLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuIl19