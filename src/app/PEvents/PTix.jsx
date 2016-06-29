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
  login: false
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

const udata =[
  {
    username: "mpontikes",
    password: "password",
    firstname: "Michael",
    lastname: "Pontikes",
    admin: true,
    id: 1
  }
];

const themes = {
  music:{
    c1: '#FF6F00',
    c2: '#FFD54F',
    i: 1
  },
  sports:{
    c1: 'ERROR',
    c2: 'ERROR',
    i: 2
  }
};

const edata = [{
  name: "Super Music",
  sdate: "7:00 pm on 06/19/16",
  edate: "11:00 pm on 06/19/16",
  location: "Here in Dallas, TX",
  address: "This is an address",
  theme: themes.music,
  price: [{p:"$22.00", d:"06/19/16"}],
  soldout: false
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
function hi(){
  store.dispatch(login());
}



const PTix = () => (
  <div>
    <MuiThemeProvider muiTheme={muiTheme}>
      <div> 
      <Header loggedin={false} user={udata[0]}/>
      <EventBox tevent={edata[0]}/>
        </div>
    </MuiThemeProvider>
  </div>
);

function render() {
  ReactDOM.render(<PTix />, document.getElementById('ptix'));
}
store.subscribe(render);
render();

