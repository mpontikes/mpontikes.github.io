import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {indigo500, indigo700, grey100, indigo300, grey300, grey400, grey500,pinkA200,white, darkBlack, fullBlack, cyan500, green700} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import {Grid, Row, Col, Clearfix, Button, Table} from 'react-bootstrap';
import Header from './Header.jsx';
import Counter from './Counter.jsx'

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
    primary1Color: "#1E3456",
    primary2Color: "#1E3456",
    primary3Color: indigo300,
    accent1Color: "#7C3100",
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: "#1E3456",
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
});

var edata = [{title: "The LR is due in...", date: "1557550740000"}];
var k = 0;

var handleChange = function(name, date, time){
  var jo = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes());
  var lo = jo.getTime();
  edata.push({title: name, date: lo});
  ReactDOM.render(<MyCount />, document.getElementById('mycount'));
}

const MyCount = function(){
  var f = edata.map(function(picture) {
    k = k+1;
    return <Counter title={picture.title} date={picture.date} key={k}/>;
  });
  return (
    <div>
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header add={true} editor={handleChange} header="we are in the endgame now" data={edata}/>
          <Grid>
            {f}
          </Grid>
        </div>
      </MuiThemeProvider>
    </div>
  );
};

ReactDOM.render(<MyCount />, document.getElementById('mycount'));
