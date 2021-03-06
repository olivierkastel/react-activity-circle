var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import * as Colors from 'material-ui/styles/colors';

import styles from './styles';

var SeedComponent = function (_Component) {
  _inherits(SeedComponent, _Component);

  function SeedComponent() {
    var _ref;

    _classCallCheck(this, SeedComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SeedComponent.__proto__ || Object.getPrototypeOf(SeedComponent)).call.apply(_ref, [this].concat(args)));

    _this.state = {
      message: 'Keep Going !'
    };

    console.log('constructor');
    return _this;
  }

  _createClass(SeedComponent, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      console.log('componentWillReceiveProps');
      var _props = this.props,
          goal = _props.goal,
          move = _props.move;

      var ratio = move / goal * 100;

      if (ratio < 25) {
        this.setState({ message: 'You should run now !' });
      } else if (ratio < 50) {
        this.setState({ message: 'Keep Going' });
      } else if (ratio < 75) {
        this.setState({ message: 'You\'re doing great !' });
      } else if (ratio === 100) {
        this.setState({ message: 'Congratulations !' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          goal = _props2.goal,
          move = _props2.move,
          stand = _props2.stand,
          exercise = _props2.exercise;
      var message = this.state.message;


      return React.createElement(
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
                thickness: 15,
                color: Colors.redA400,
                value: move || 0,
                size: 180,
                max: goal
              })
            ),
            React.createElement(
              'div',
              { style: styles.exercise },
              React.createElement(CircularProgress, {
                mode: 'determinate',
                thickness: 15,
                color: Colors.lightGreenA700,
                value: exercise || 0,
                size: 140,
                max: 30
              })
            ),
            React.createElement(
              'div',
              { style: styles.stand },
              React.createElement(CircularProgress, {
                mode: 'determinate',
                thickness: 15,
                color: Colors.cyanA400,
                value: stand || 0,
                size: 100,
                max: 12
              })
            )
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
    }
  }]);

  return SeedComponent;
}(Component);

SeedComponent.propTypes = {
  goal: PropTypes.number,
  move: PropTypes.number,
  stand: PropTypes.number,
  exercise: PropTypes.number
};
export default SeedComponent;