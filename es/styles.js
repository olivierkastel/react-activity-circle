export default {
  container: {
    width: 180,
    height: 180,
    background: 'black',
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    padding: 20,
    position: 'relative'
  },
  message: {
    width: 180,
    marginRight: 15,
    marginLeft: 15,
    background: 'black',
    padding: 20,
    color: 'white',
    fontFamily: 'Helvetica',
    textAlign: 'center'
  },
  move: {
    zIndex: 100,
    position: 'absolute',
    transform: 'rotate(-90deg)'
  },
  exercise: {
    zIndex: 100,
    position: 'absolute',
    transform: 'rotate(-90deg)',
    margin: 20
  },
  stand: {
    zIndex: 100,
    position: 'absolute',
    transform: 'rotate(-90deg)',
    margin: 40
  },
  text: {
    background: 'rgba(255,255,255,0.4)',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 5
  },
  moveImg: {
    position: 'absolute',
    zIndex: 1000,
    height: 10,
    marginLeft: 86,
    marginTop: 4
  },
  exerciseImg: {
    position: 'absolute',
    zIndex: 1000,
    height: 10,
    marginLeft: 85,
    marginTop: 24
  },
  standImg: {
    position: 'absolute',
    zIndex: 1000,
    height: 9,
    marginLeft: 85,
    marginTop: 45
  }
};