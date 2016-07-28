import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {indigo500, indigo700, grey100, indigo300, grey300, grey400, grey500,pinkA200,white, darkBlack, fullBlack, cyan500, green700} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import {Grid, Row, Col, Clearfix, Button, Table} from 'react-bootstrap';
import Header from "./Header.jsx"

// Website Data (Don't edit above here)
const annouce =<div> <p>

{/* Edit Annocement Below */}
This is a new site
{/* Edit Annocement Above */}

</p> </div>; const progress = {

// Edit Progress Below 
  gen: 1,
  write: 5,
  film: 0,
  post: 0
// Edit Progress Above

}; const events =[{

  //Edit General Events Below
  title: "An Event",
  when: "At Sometime",
  where: "At Someplace"
//Edit General Events Above 
},{

// Edit Writing Events Below
  title: "An Event",
  when: "At Sometime",
  where: "At Someplace"
{/* Edit Writing Events Above */}},{

{/* Edit Filmming Events Below */}
  title: "An Event",
  when: "At Sometime",
  where: "At Someplace"
{/* Edit Flimming Events Above */}},{

{/* Edit Editting Events Below */}
  title: "An Event",
  when: "At Sometime",
  where: "At Someplace"
{/* Edit Editting Events Above */}}]; const staff=<div>

{/* Edit Staff List Below */}
<p>Michael Pontikes </p>
{/* Edit Staff List Above */}

</div>;

{/* END OF WEBSITE DATA (DO NOT EDIT PAST HERE!!) */}

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
    primary1Color: "#CF5300",
    primary2Color: "#CF5300",
    primary3Color: indigo300,
    accent1Color: "#7C3100",
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: "#CF5300",
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
});


const Film = function(){
  return (<div>
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Header title="Freshmen Film" staff={staff} percent={progress.gen} an={annouce}/>
        <ProgressBox type="Writing" percent={progress.write} />
        <ProgressBox type="Filmming" percent={progress.film} />
        <ProgressBox type="Editing" percent={progress.post} />
        <EventBox type="General" data={events[0]} />
        <EventBox type="Writing" data={events[1]} />
        <EventBox type="Filmming" data={events[2]} />
        <EventBox type="Editing" data={events[3]} />
      </div>  
    </MuiThemeProvider>
  </div>);
};

ReactDOM.render(<Film />, document.getElementById('film'));
