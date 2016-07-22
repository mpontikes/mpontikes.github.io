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
    i: 2,
    text: '#000000'
  },
  general:{
    c1: '#00ACC1',
    c2: '#80DEEA',
    i: 1,
    text: '#000000'
  },
  sport:{
    c1: '#4CAF50',
    c2: '#A5D6A7',
    i: 3,
    text: '#000000'
  },
  ticket:{
    c1: '#90A4AE',
    c2: '#CFD8DC',
    i: 4,
    text: '#000000'
  },
  school:{
    c1: '#A1887F',
    c2: '#D7CCC8',
    i: 5,
    text: '#000000'
  },
  social:{
    c1: '#BA68C8',
    c2: '#E1BEE7',
    i: 6,
    text: '#000000'
  },
  importaint:{
    c1: '#EF5350',
    c2: '#EF9A9A',
    i: 7,
    text: '#000000'
  },
  city:{
    c1: '#F06292',
    c2: '#F8BBD0',
    i: 8,
    text: '#000000'
  }
};

const edata = [
  {
    name: "Austin City Limits",
    sdate: "7:00 pm on 06/19/16",
    edate: "11:00 pm on 06/19/16",
    location: "Zilker Park",
    address: "2100 Barton Springs Rd,Austin, TX 78704",
    theme: themes.music,
    price: [{p:"$234.00", d:"07/14/16"}, {p:"$123.00", d:"06/19/16"}],
    soldout: true,
    des: "Ut vix hinc mundi essent, ne diceret definitiones mei, ius te eius augue. Scaevola gubergren comprehensam at his, nec eruditi docendi eu. Pri no idque nemore, his libris altera an. Has te unum veri urbanitas, sit mentitum percipit contentiones eu. Ut duo simul aliquid, per verear volumus hendrerit ne, te omnes oblique cum. Has debitis ponderum quaestio ad, ornatus tractatos no est.Lorem abhorreant pri id, at per alia autem verear, an quo solum facete mnesarchum. Per et cibo dolorum. No primis honestatis est, cu velit timeam salutandi pri. Eam ei elit graece consectetuer, audire accusam quaestio nam et. Facer sonet ne vim, nec minim quaerendum in. Verear disputationi ne mel, sea illum epicuri detracto cu.Per liber nostro eu, mea eu nullam copiosae recteque. Ei homero disputationi mel, ei liber dissentiet nec. Explicari laboramus eloquentiam ut sea. Vim quot constituam ex."
  },
  {
    name: "Generaly General",
    sdate: "7:00 pm on 06/20/16",
    edate: "11:00 pm on 06/20/16",
    location: "Frisco, TX",
    address: "This is an address",
    theme: themes.general,
    price: [{p:"$2.00", d:"06/19/16"}],
    soldout: false,
    des: "Blah blah blah"
  },
  {
    name: "All Sports",
    sdate: "4:00 pm on 06/21/16",
    edate: "11:00 pm on 06/21/16",
    location: "Austin, TX",
    address: "This is an address",
    theme: themes.sport,
    price: [{p:"$222.00", d:"06/19/16"}],
    soldout: false,
    des: "Blah blah blah"
  },
  {
    name: "Pay to Play",
    sdate: "7:00 pm on 06/22/16",
    edate: "11:00 pm on 06/22/16",
    location: "A field",
    address: "This is an address",
    theme: themes.ticket,
    price: [{p:"$2222.00", d:"06/19/16"}],
    soldout: false,
    des: "Blah blah blah"
  },
  {
    name: "Class Get-togehter",
    sdate: "1:00 pm on 06/23/16",
    edate: "11:00 pm on 06/23/16",
    location: "Everywhere",
    address: "This is an address",
    theme: themes.school,
    price: [{p:"Free", d:"06/19/16"}],
    soldout: false,
    des: "Blah blah blah"
  },
  {
    name: "Talking Circle",
    sdate: "7:00 pm on 06/20/16",
    edate: "11:00 pm on 06/20/16",
    location: "Out of cities",
    address: "This is an address",
    theme: themes.social,
    price: [{p:"$22.00", d:"06/19/16"}],
    soldout: false,
    des: "Blah blah blah"
  },
  {
    name: "Super Importaint Thing",
    sdate: "7:00 pm on 06/20/16",
    edate: "11:00 pm on 06/20/16",
    location: "Here in Frisco, TX",
    address: "This is an address",
    theme: themes.importaint,
    price: [{p:"$2.00", d:"06/19/16"}],
    soldout: false,
    des: "Blah blah blah"
  },
  {
    name: "City Tours",
    sdate: "7:00 pm on 06/20/16",
    edate: "11:00 pm on 06/20/16",
    location: "Here in Frisco, TX",
    address: "This is an address",
    theme: themes.city,
    price: [{p:"$2.00", d:"06/19/16"}],
    soldout: false,
    des: "Blah blah blah"
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

var k = 0;
var thats = edata.map(function(picture) {
  k = k+1;
  return <EventBox tevent={picture} key={k}/>;
});

const PTix = () => (
<div>
  <MuiThemeProvider muiTheme={muiTheme}>
    <div> 
      <Header loggedin={false} user={udata[0]}/>
      {thats}
      <FlatButton label="Click me" onTouchTap={console.log("Yo")}/> 
    </div>
  </MuiThemeProvider>
</div>
);

function render() {
  var thats = edata.map(function(picture) {
    return <EventBox tevent={picture}/>;
  });

ReactDOM.render(<PTix />, document.getElementById('pevents'));
}

store.subscribe(render);
render();

