import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {indigo500, indigo700, grey100, indigo300, grey300, grey400, grey500,pinkA200,white, darkBlack, fullBlack, cyan500, green700} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import Avatar from'material-ui/Avatar';
import Badge from'material-ui/Badge';
import Card from'material-ui/Card';
import Checkbox from'material-ui/Checkbox';
import Chip from 'material-ui/Chip';
import CircularProgress from 'material-ui/CircularProgress';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Drawer';
import Drawer from 'material-ui/DropDownMenu';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import GridList from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import LinearProgress from 'material-ui/LinearProgress';
import List from 'material-ui/List';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Popover from 'material-ui/Popover';
import RadioButton from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import SelectField from 'material-ui/SelectField';
import Slider from 'material-ui/Slider';
import Snackbar from 'material-ui/Snackbar';
import Stepper from 'material-ui/Stepper';
import Subheader from 'material-ui/Subheader';
import SvgIcon from 'material-ui/SvgIcon';
import Table from 'material-ui/Table';
import Tabs from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import Toggle from 'material-ui/Toggle';
import Toolbar from 'material-ui/Toolbar';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

const v =[
  {
    username: "mpontikes",
    password: "password",
    firstname: "Michael",
    lastname: "Pontikes",
    admin: true,
    id: 1
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
const Test = () => (
  <div>
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Paper>
          <AppBar title="Material-Ui Test Page"/>
          <AutoComplete dataSource={["this", "is", "a", "test"]}/>
          <br />
          <Avatar>t</Avatar>
          <Badge  badgeContent={<NotificationsIcon />}/>
          <Card />
          <Checkbox />
          <Chip />
          <CircularProgress />
          <DatePicker />
          <Dialog open={false}/>
          <Divider />
          <Drawer open={false}/>
          <DropDownMenu />
          <FlatButton label="Test"/>
          <FloatingActionButton />
          <FontIcon />
          <GridList />
          <IconButton />
          <IconMenu iconButtonElement={<NotificationsIcon />}/>
          <LinearProgress />
          <List />
          <Menu />
          <MenuItem />
          <Paper />
          <Popover />
          <RadioButton />
          <RaisedButton label="Test"/>
          <RefreshIndicator left={70} top={100}/>
          <SelectField />
          <Slider />
          <Snackbar open={false} message="Test"/>
          <Subheader />
          <SvgIcon />
          <Table />
          <Tabs />
          <TextField />
          <TimePicker />
          <Toggle />
          <Toolbar />
        </Paper>
      </div>
    </MuiThemeProvider>
  </div>
);
function render() {
  ReactDOM.render(<Test />, document.getElementById('test'));
}
render();
