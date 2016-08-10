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

const udata =[
  {
    username: "mpontikes",
    password: "password",
    firstname: "Some",
    lastname: "User",
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
    sdate: "11:00 am on 07/30/16",
    edate: "10:00 pm on 08/2/16",
    location: "Zilker Park",
    address: "2100 Barton Springs Rd,Austin, TX 78704",
    theme: themes.music,
    price: [{p:"$234.00", d:"07/14/16"}, {p:"$123.00", d:"06/19/16"}],
    soldout: true,
    des: "The Austin City Limits (ACL) Music Festival is an annual music festival held in Zilker Park in Austin, Texas on two consecutive three-day weekends. Inspired by the PBS concert series of the same name, the festival is produced by Austin-based company C3 Presents, which also produces Lollapalooza.[1] The reputation of the ACL television show helped contribute to the success of the first festival.The ACL Music Festival has eight stages where musical groups from genres including rock, indie, country, folk, electronic and hip hop perform for fans. Approximately 450,000 people attend the festival each year.[2][citation needed] In addition to the music performances, there are food and drinks, an art market, a kids area for families, and other activities for attendees."
  },
  {
    name: "React Meetup",
    sdate: "7:00 pm on 06/20/16",
    edate: "11:00 pm on 06/20/16",
    location: "Santa Monica, CA",
    address: "604 Arizona Ave, Santa Monica, CA 90401",
    theme: themes.general,
    price: [{p:"$2.00", d:"06/19/16"}],
    soldout: false,
    des: "A Meetup for React Devs"
  },
  {
    name: "Texas VS. OU",
    sdate: "7:00 pm on 10/08/16",
    edate: "11:00 pm on 10/08/16",
    location: "Dallas, TX",
    address: "3750 The Midway, Dallas, TX 75215",
    theme: themes.sport,
    price: [{p:"$222.00", d:"06/19/16"}],
    soldout: false,
    des: "Since 1900, it has become one of college football's most eagerly anticipated games. The game usually has conference championship significance and, sometimes, national championship significance. Since 1945, one or both of the two teams has gone into the contest ranked among the top 25 teams more than 90 percent of the time."
  },
  {
    name: "Madeon",
    sdate: "7:00 pm on 11/22/16",
    edate: "11:00 pm on 11/22/16",
    location: "Dallas,TX",
    address: "12345 Inwood Rd, Dallas, TX 75244",
    theme: themes.ticket,
    price: [{p:"$2222.00", d:"06/19/16"}],
    soldout: true,
    des: "Hugo Pierre Leclercq (born 30 May 1994), better known by his stage name Madeon, is a French songwriter, record producer, musician and DJ from Nantes, France.[1] He initially came to public attention through a YouTube video, Pop Culture, where he performed a mash-up of nearly forty different popular songs in real-time using a Novation Launchpad. It received millions of hits in its first few days of release.[2]"
  },
  {
    name: "Class Get-togehter",
    sdate: "1:00 pm on 08/11/16",
    edate: "11:00 pm on 08/11/16",
    location: "Austin, TX",
    address: "106 W Liberty Ave, Round Rock, TX 78664",
    theme: themes.school,
    price: [{p:"Free", d:"06/19/16"}],
    soldout: false,
    des: "Get together with the class."
  },
  {
    name: "Ice Cream Social",
    sdate: "11:00 am on 11/20/16",
    edate: "11:00 pm on 11/20/16",
    location: "Miami, FL",
    address: "3312, 1320 S Dixie Hwy, Coral Gables, FL 33146",
    theme: themes.social,
    price: [{p:"$22.00", d:"06/19/16"}],
    soldout: false,
    des: "Meet friends over icecream."
  },
  {
    name: "Party on the Plaza",
    sdate: "11:00 pm on 03/14/16",
    edate: "5:00 am on 03/15/16",
    location: "The Bahamas",
    address: "One Casino Drive, Suite 13, Paradise Island, Bahamas",
    theme: themes.importaint,
    price: [{p:"$334.00", d:"06/19/16"}],
    soldout: false,
    des: "It's a crazy party"
  },
  {
    name: "City Tours",
    sdate: "7:00 pm on 06/20/16",
    edate: "11:00 pm on 06/20/16",
    location: "Plano, TX",
    address: "1101 Campbell Rd Plano, TX 75093",
    theme: themes.city,
    price: [{p:"$332.00", d:"06/19/16"}],
    soldout: false,
    des: "A Tour Around Plano"
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
      <Header loggedin={true} user={udata[0]}/>
      {thats}
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

