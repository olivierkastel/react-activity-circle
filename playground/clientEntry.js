import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import ActivityCircle from '../src';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// material-ui
import Slider from 'material-ui/Slider';

// styles
import styles from './styles';

// theme
import * as muiTheme from './theme';


const ActivityCircleExample = require('raw!../src/ActivityCircle.example');

class Index extends React.Component { // eslint-disable-line
  static propTypes = {
    dev: PropTypes.bool,
  };

  constructor(...args) {
    super(...args);
    injectTapEventPlugin();
  }

  state = {
    goal: 600,
    move: 0,
    stand: 0,
    exercise: 0,
  };

  render() {
    const { goal, move, stand, exercise } = this.state;
    const { dev } = this.props;

    if (dev) {
      return (
        <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
          <div className="component-documentation">
            <ActivityCircle
              {...this.state}
            />
          <div style={styles.controlPanel}>
            <div style={styles.text}>Move:
              <span style={{ color: '#ff1744', fontWeight: 600 }} >
                {` ${Math.floor(move / goal * 100)}% (${move} Kcal)`}
              </span>
            </div>
            <Slider
              max={goal}
              min={0}
              value={move}
              onChange = { (e, value) => {
                this.setState({ move: value });
              }}
            />
            <div style={styles.text}>Exercise:
              <span style={{ color: '#00c853', fontWeight: 600 }} >
                {` ${exercise} mn`}
              </span>
            </div>
            <Slider
              max={30}
              min={0}
              value={exercise}
              onChange = { (e, value) => {
                this.setState({ exercise: value });
              }}
            />
          <div style={styles.text}>Stand:
              <span style={{ color: '#03a9f4', fontWeight: 600 }} >
                {` ${stand}`}
              </span>
            </div>
            <Slider
              max={12}
              min={0}
              value={stand}
              onChange = { (e, value) => {
                this.setState({ stand: Math.floor(value) });
              }}
            />
          </div>
          </div>
      </MuiThemeProvider>
      );
    }

    return (
      <MuiThemeProvider>
        <div className="component-documentation">
          <div className="component-documentation">
            <Playground codeText={ActivityCircleExample} scope={{ React, ActivityCircle }} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Index dev />, document.getElementById('root'));

if (__ONBUILD_REACT_PERF__) {
  window.Perf = require('react-addons-perf');
}
