import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import ActivityCircle from '../src';
import injectTapEventPlugin from 'react-tap-event-plugin';

const ActivityCircleExample = require('raw!../src/ActivityCircle.example');

class Index extends React.Component { // eslint-disable-line
  static propTypes = {
    dev: PropTypes.bool,
  };

  constructor(...args) {
    super(...args);
    injectTapEventPlugin();
  }

  render() {
    const { dev } = this.props;

    if (dev) {
      return (
        <div className="component-documentation">
          <ActivityCircle
            goal={800}
            move={800}
            stand={4}
            exercise={14}
          />
        </div>
      );
    }

    return (
      <div className="component-documentation">
        <div className="component-documentation">
          <Playground codeText={ActivityCircleExample} scope={{ React, ActivityCircle }} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index dev />, document.getElementById('root'));

if (__ONBUILD_REACT_PERF__) {
  window.Perf = require('react-addons-perf');
}
