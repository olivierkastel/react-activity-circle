'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CircularProgress = require('material-ui/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _colors = require('material-ui/styles/colors');

var Colors = _interopRequireWildcard(_colors);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _reactConfetti = require('react-confetti');

var _reactConfetti2 = _interopRequireDefault(_reactConfetti);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// material-ui


// open source


// styles


var ActivityCircle = function (_Component) {
  _inherits(ActivityCircle, _Component);

  function ActivityCircle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ActivityCircle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActivityCircle.__proto__ || Object.getPrototypeOf(ActivityCircle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      message: 'Keep Going !'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ActivityCircle, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var goal = nextProps.goal,
          move = nextProps.move;

      var ratio = Math.floor(move / goal * 100);

      if (ratio < 25) {
        this.setState({ message: 'Wake up and move !' });
      } else if (ratio < 50) {
        this.setState({ message: 'Keep Going' });
      } else if (ratio < 75) {
        this.setState({ message: 'You\'re doing great !' });
      } else if (ratio < 100) {
        this.setState({ message: 'You\'re almost there !' });
      } else if (ratio === 100) {
        this.setState({ message: 'Congratulations !' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          goal = _props.goal,
          move = _props.move,
          stand = _props.stand,
          exercise = _props.exercise;
      var message = this.state.message;


      var JSX = _react2.default.createElement(
        _MuiThemeProvider2.default,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { style: _styles2.default.container },
            _react2.default.createElement(
              'div',
              { style: _styles2.default.move },
              _react2.default.createElement(_CircularProgress2.default, {
                mode: 'determinate',
                thickness: 18,
                color: Colors.redA400,
                value: move || 0,
                size: 180,
                max: goal
              })
            ),
            _react2.default.createElement('img', {
              src: 'https://storage.googleapis.com/wid-images/exercise.png',
              style: _styles2.default.moveImg
            }),
            _react2.default.createElement(
              'div',
              { style: _styles2.default.exercise },
              _react2.default.createElement(_CircularProgress2.default, {
                mode: 'determinate',
                thickness: 18,
                color: Colors.lightGreenA700,
                value: exercise || 0,
                size: 140,
                max: 30
              })
            ),
            _react2.default.createElement('img', {
              src: 'https://storage.googleapis.com/wid-images/move.png',
              style: _styles2.default.exerciseImg
            }),
            _react2.default.createElement(
              'div',
              { style: _styles2.default.stand },
              _react2.default.createElement(_CircularProgress2.default, {
                mode: 'determinate',
                thickness: 18,
                color: Colors.cyanA400,
                value: stand || 0,
                size: 100,
                max: 12
              })
            ),
            _react2.default.createElement('img', {
              src: 'https://storage.googleapis.com/wid-images/stand.png',
              style: _styles2.default.standImg
            })
          ),
          _react2.default.createElement(
            'div',
            { style: _styles2.default.message },
            _react2.default.createElement(
              'span',
              { style: _styles2.default.text },
              message
            )
          )
        )
      );

      return goal === move ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactConfetti2.default, null),
        JSX
      ) : JSX;
    }
  }]);

  return ActivityCircle;
}(_react.Component);

ActivityCircle.propTypes = {
  goal: _propTypes2.default.number,
  move: _propTypes2.default.number,
  stand: _propTypes2.default.number,
  exercise: _propTypes2.default.number
};
exports.default = ActivityCircle;
module.exports = exports['default'];