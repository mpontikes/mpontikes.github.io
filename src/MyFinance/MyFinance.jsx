import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {indigo500, indigo700, grey100, indigo300, grey300, grey400, grey500,pinkA200,white, darkBlack, fullBlack, cyan500, green700} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import TextField from 'material-ui/TextField';
import Page from './Page.jsx'

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  spacing: {
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopDrawerMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56,
  },
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: "#1B5E20",
    primary2Color: "#1B5E20",
    primary3Color: "#C8E6C9",
    accent1Color: green700,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: "#1B5E20",
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
});

const Sup = () => (
  <div>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Page />
    </MuiThemeProvider>
  </div>
);

ReactDOM.render(<Sup />, document.getElementById('sup'));