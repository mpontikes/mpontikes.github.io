import React from 'react';
import AppBar from 'material-ui/AppBar';
import ImageAddAPhoto from 'material-ui/svg-icons/image/add-a-photo';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog';
import {green700} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import Snackbar from 'material-ui/Snackbar';


class SiteHeader extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      userdata: [{user: "mpontikes", pass: "HEY"}, {user:"admin", pass: "password"}],
      uploads: 0,
      open: false,
      loggedin: false,
      user: "",
      aopen: false,
      vap: true,
      picture:"",
      caption:"",
      date: null,
      password:"",
      error: "",
      snack: false
    }
    this.handleUploads = this.handleUploads.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.getStuff = this.getStuff.bind(this);
    this.handlePic = this.handlePic.bind(this);
    this.handleCap = this.handleCap.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleAMenu = this.handleAMenu.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleSClose = this.handleSClose.bind(this);
  }

  handleUploads() {
    let yo = this.state.uploads + 1;
    this.props.onShiftArray(this.state.picture, this.state.caption, this.state.date);
    this.setState({uploads: yo});
    this.setState({aopen: false});
    this.setState({vap: true});
    this.setState({date: null});
    this.setState({picture: ""});
    this.setState({caption: ""});
  }

  getStuff(){
    let fee = ((this.state.picture.length * this.state.caption.length) === 0) || (this.state.date === null);
    this.setState({vap: fee});
  }

  handleMenu() {
    this.setState({open: !this.state.open});
  }

  handleLogin() {
    let u = this.state.user;
    let p = this.state.password;
    let li = false;
    this.state.userdata.map(function(picture) {
      if(picture.user === u) {
        if(picture.pass === p) {
          li = true;
        }
      }
    });
    if(li == true) {
      this.setState({loggedin: !this.state.loggedin});
      this.props.getUser(this.state.user);
      this.props.getLogin(this.state.loggedin);
    }
    else {
      this.setState({snack: true});
    }
  }

  handleChange(event){
    this.setState({user: event.target.value});
  }

  handlePass(event){
    this.setState({password: event.target.value});
  }

  handleUpload(){
    this.setState({aopen: !this.state.aopen});
  }

  handlePic(event){
    this.setState({picture: event.target.value}, this.getStuff);
  }

  handleCap(event){
    this.setState({caption: event.target.value}, this.getStuff);
  }

  handleDate(event, date){
    var d = date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear();
    this.setState({date: d}, this.getStuff);
  }
  
  handleAMenu() {
    this.setState({aopen: false});
    this.setState({vap: true});
    this.setState({date: null});
    this.setState({picture: ""});
    this.setState({caption: ""});
  }

  handleSClose() {
    this.setState({snack: false});
  }

  render() {
    return (
      <div>
        <AppBar title="Slowagram" showMenuIconButton = {true} onLeftIconButtonTouchTap= {this.handleMenu} iconElementRight={
          <IconButton onTouchTap={this.handleUpload} tooltip={this.state.user + "'s Uploaded Photos: " + this.state.uploads} touch={true} tooltipPosition="bottom-left" disabled={!this.state.loggedin}>
            <ImageAddAPhoto />
          </IconButton>
        }/>
        <Drawer open={this.state.open}>
          <AppBar title={this.state.user} showMenuIconButton={true} onLeftIconButtonTouchTap= {this.handleMenu}/>
          <Card>
            <CardText>
              <TextField hintText="" onChange = {this.handleChange} value={this.state.user} floatingLabelText="Username" floatingLabelFixed={false} disabled={this.state.loggedin} errorText={this.state.error} style={{width:234}}/>
              <TextField hintText="" onChange = {this.handlePass} value={this.state.password} floatingLabelText="Password" type="password" disabled={this.state.loggedin} errorText={this.state.error} style={{width: 234}}/>
              <RaisedButton label="Log in" secondary={true} disabled={this.state.loggedin} onClick={this.handleLogin}/>
            </CardText>
          </Card>
          <MenuItem primaryText="Github" href="https://github.com/callemall/material-ui"/>
          <MenuItem primaryText="Material Ui" href="http://www.material-ui.com/#/"/>
          <MenuItem primaryText="Back to Home" href="./index.html"/>
        </Drawer>
        <Dialog title="Add Photo" open={this.state.aopen} actions={[
          <FlatButton label="Close" onClick={this.handleAMenu} secondary={true}/>,
          <FlatButton label="Upload" primary={true} onClick={this.handleUploads} disabled={this.state.vap}/>
        ]}>
          <TextField hintText="URL here..." floatingLabelText="Picture" style={{width:720}}onChange={this.handlePic}/>
          <br />
          <TextField hintText="Text here..." floatingLabelText="Caption" style={{width:720}} onChange={this.handleCap}/>
          <br />
          <br />
          <DatePicker hintText="Date" mode="landscape" style={{width:720}} onChange={this.handleDate} disabled={false} />
        </Dialog>
        <Snackbar open={this.state.snack} message="Invalid Login!" autoHideDuration={4000} onRequestClose={this.handleSClose}/>
      </div>
    );
  }
}

export default SiteHeader;
