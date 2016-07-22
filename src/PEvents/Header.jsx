import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {grey50} from 'material-ui/styles/colors';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

const styles = {
  text:{
    color: grey50,
  }
};

class Header extends React.Component {
  static propTypes = {
    loggedin: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    handleLogin: PropTypes.func
  };

  constructor(props){
    super(props);
    this.state = {
      menuopen: false
    }
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu(){
    this.setState({menuopen: !this.state.menuopen});
  }

  render() {
    if(!this.props.loggedin){
      var login = 
      <div>
      <TextField hintText="Username" underlineShow = {false} inputStyle={styles.text}/> 
      <TextField hintText="Password" type="Password" underlineShow = {false} inputStyle={styles.text}/>
      <FlatButton label="Login" primary={true} onTouchTap={this.props.handleLogin} labelStyle={styles.text}/>
      </div>;
    }

    else{
      var login = 
      <div>
      <FlatButton label = {"Welcome, " + this.props.user.firstname + " " + this.props.user.lastname + "!"}labelStyle={styles.text}/>
      <FlatButton label = "Logoff" labelStyle={styles.text} onTouchTap={this.props.handleLogin} />
      </div>;
    }

    return (
      <div>
      <AppBar title="MEvents" iconElementRight={login} onLeftIconButtonTouchTap={this.handleMenu} showMenuIconButton={false}/>
      <Drawer open = {this.state.menuopen}>
        <AppBar title="Admin Menu" onLeftIconButtonTouchTap={this.handleMenu}/>
        <MenuItem>Add Event</MenuItem>
        <MenuItem>Get Event Code</MenuItem>
        <Divider />
        <MenuItem href="https://mpontikes.github.io">Github</MenuItem>
        <MenuItem href="http://www.material-ui.com/#/">Material-UI</MenuItem>
        <MenuItem href="./index.html">Pontikes' Projects</MenuItem>
      </Drawer>
      </div>	
      );
  }
}

export default Header;