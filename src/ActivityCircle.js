import React, { Component } from 'react';
import PropTypes from 'prop-types';

// material-ui
import CircularProgress from 'material-ui/CircularProgress';
import * as Colors from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// images
import exerciseImg from './images/exercise.png';
import moveImg from './images/move.png';
import standImg from './images/stand.png';

// open source
import Confetti from 'react-confetti';

// styles
import styles from './styles';

export default class ActivityCircle extends Component {
  static propTypes = {
    goal: PropTypes.number,
    move: PropTypes.number,
    stand: PropTypes.number,
    exercise: PropTypes.number,
  };

  state = {
    message: 'Keep Going !',
  }

  componentWillReceiveProps(nextProps) {
    const { goal, move } = nextProps;
    const ratio = Math.floor(move / goal * 100);

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

  render() {
    const { goal, move, stand, exercise } = this.props;
    const { message } = this.state;

    const JSX = (
      <MuiThemeProvider>
        <div>
          <div style={styles.container}>
            <div style={styles.move}>
              <CircularProgress
                mode="determinate"
                thickness={18}
                color={Colors.redA400}
                value={move || 0}
                size={180}
                max={goal}
              />
            </div>
            <img src={moveImg} style={styles.moveImg} />
            <div style={styles.exercise}>
              <CircularProgress
                mode="determinate"
                thickness={18}
                color={Colors.lightGreenA700}
                value={exercise || 0}
                size={140}
                max={30}
              />
            </div>
            <img src={exerciseImg} style={styles.exerciseImg} />
            <div style={styles.stand}>
              <CircularProgress
                mode="determinate"
                thickness={18}
                color={Colors.cyanA400}
                value={stand || 0}
                size={100}
                max={12}
              />
            </div>
            <img src={standImg} style={styles.standImg} />
          </div>
          <div style={styles.message}>
            <span style={styles.text}>{ message }</span>
          </div>
        </div>
      </MuiThemeProvider>
    );

    return (goal === move) ?
      <div><Confetti />{JSX}</div> : JSX;
  }
}
