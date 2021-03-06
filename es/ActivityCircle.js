var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// material-ui
import CircularProgress from 'material-ui/CircularProgress';
import * as Colors from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// open source
import Confetti from 'react-confetti';

// styles
import styles from './styles';

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


      var JSX = React.createElement(
        MuiThemeProvider,
        null,
        React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { style: styles.container },
            React.createElement(
              'div',
              { style: styles.move },
              React.createElement(CircularProgress, {
                mode: 'determinate',
                thickness: 18,
                color: Colors.redA400,
                value: move || 0,
                size: 180,
                max: goal
              })
            ),
            React.createElement('img', {
              src: 'https://storage.googleapis.com/wid-images/exercise.png',
              style: styles.moveImg
            }),
            React.createElement(
              'div',
              { style: styles.exercise },
              React.createElement(CircularProgress, {
                mode: 'determinate',
                thickness: 18,
                color: Colors.lightGreenA700,
                value: exercise || 0,
                size: 140,
                max: 30
              })
            ),
            React.createElement('img', {
              src: 'https://storage.googleapis.com/wid-images/move.png',
              style: styles.exerciseImg
            }),
            React.createElement(
              'div',
              { style: styles.stand },
              React.createElement(CircularProgress, {
                mode: 'determinate',
                thickness: 18,
                color: Colors.cyanA400,
                value: stand || 0,
                size: 100,
                max: 12
              })
            ),
            React.createElement('img', {
              src: 'https://storage.googleapis.com/wid-images/stand.png',
              style: styles.standImg
            })
          ),
          React.createElement(
            'div',
            { style: styles.message },
            React.createElement(
              'span',
              { style: styles.text },
              message
            )
          )
        )
      );

      return goal === move ? React.createElement(
        'div',
        null,
        React.createElement(Confetti, null),
        JSX
      ) : JSX;
    }
  }]);

  return ActivityCircle;
}(Component);

ActivityCircle.propTypes = {
  goal: PropTypes.number,
  move: PropTypes.number,
  stand: PropTypes.number,
  exercise: PropTypes.number
};
export default ActivityCircle;