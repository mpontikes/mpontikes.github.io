import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {indigo500, indigo700, grey100, indigo300, grey300, grey400, grey500,pinkA200,white, darkBlack, fullBlack, cyan500, green700} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Header from './Header.jsx'
import EventBox from './EventBox.jsx'

var defaultState = {
  login: true
};

const store = createStore(update, defaultState);

function login(){
  return{
    type: 'LOGIN'
  };
}

function update(state, action){
  if (typeof state === 'undefined'){
    return "ERROR!";
  }
  if(action.type === "LOGIN"){
    console.log(store.login);
    return {login: true};
  }
}

const themes = {
  sr:{
    c1: '#FF6F00',
    c2: '#FFD54F',
    text: '#000000',
    type:"Senate Resolution"
  },
  jr:{
    c1: '#00ACC1',
    c2: '#80DEEA',
    text: '#000000',
    type:"Joint Resolution"
  },
  sb:{
    c1: '#4CAF50',
    c2: '#A5D6A7',
    text: '#000000',
    type:"Senate Bill"
  }
};

const edata = [
  {
    name: "A Resolution Idk",
    number: "1234",
    theme: themes.sr,
    vote:{
      who: 1,
      info: "Passed"
    },
    des: "The Austin City Limits (ACL) Music Festival is an annual music festival held in Zilker Park in Austin, Texas on two consecutive three-day weekends."
  },
  {
    name: "Another Resolution Idk",
    number: "1234",
    theme: themes.jr,
    vote:{
      who: 1,
      info: "Passed"
    },
    des: "The Austin City Limits (ACL) Music Festival is an annual music festival held in Zilker Park in Austin, Texas on two consecutive three-day weekends."
  }
];

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
    primary1Color: indigo500,
    primary2Color: indigo700,
    primary3Color: indigo300,
    accent1Color: green700,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
});

var k = 0;
var thats = edata.map(function(picture) {
  k = k+1;
  return <EventBox tevent={picture} key={k}/>;
});

const PTix = () => (
<div>
  <MuiThemeProvider muiTheme={muiTheme}>
    <div> 
      <Header />
      {thats}
    </div>
  </MuiThemeProvider>
</div>
);

function render() {
  var thats = edata.map(function(picture) {
    return <EventBox tevent={picture}/>;
  });

ReactDOM.render(<PTix />, document.getElementById('utls'));
}

store.subscribe(render);
render();

