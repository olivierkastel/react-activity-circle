import * as Colors from 'material-ui/styles/colors';
import Spacing from 'material-ui/styles/spacing';
import { fade } from 'material-ui/utils/colorManipulator';

export default {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.black,
    primary2Color: Colors.grey400,
    primary3Color: Colors.grey400,
    accent1Color: Colors.blue500,
    accent2Color: Colors.lightGreen50,
    accent3Color: Colors.blue600,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.green500,
    clockCircleColor: fade(Colors.darkBlack, 0.07),
    shadowColor: Colors.fullBlack,
  },
};
