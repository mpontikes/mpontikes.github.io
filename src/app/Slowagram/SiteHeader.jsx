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


import UploadBox from './UploadBox.jsx';

class SiteHeader extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      uploads: 0,
      open: false,
      loggedin: false,
      user: "",
      aopen: false,
      vap: true
    }
    this.handleUploads = this.handleUploads.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.getStuff = this.getStuff.bind(this);
  }

  
  handleUploads() {
    let yo = this.state.uploads + 1;
    this.props.onShiftArray();
    this.setState({uploads: yo});
  }

  getStuff(pic, cap, date){
    this.props.getData(pic, cap, date);
    let fee = (pic.length * cap.length) === 0
    this.setState({vap: fee})
  }

  handleMenu() {
    this.setState({open: !this.state.open});
  }

  handleLogin() {
    this.setState({loggedin: !this.state.loggedin});
    this.props.getUser(this.state.user);
    this.props.getLogin(this.state.loggedin);
  }

  handleChange(event){
    this.setState({user: event.target.value});
  }

  handleUpload(){
    this.setState({aopen: !this.state.aopen});
  }


  render() {
    return (
      <div>
        <AppBar
          title="Slowagram"
          showMenuIconButton = {true}
          onLeftIconButtonTouchTap= {this.handleMenu}
          iconElementRight={
            <IconButton
              onTouchTap={this.handleUpload}
              tooltip={this.state.user + " Uploaded Photos: " + this.state.uploads}
              touch={true}
              tooltipPosition="bottom-left"
            >
              <ImageAddAPhoto />
            </IconButton>
          }
        />
        <Drawer
          open={this.state.open}
        >
          <AppBar
            title={this.state.user}
            showMenuIconButton = {true}
            onLeftIconButtonTouchTap= {this.handleMenu}
          />
          <Card>
            <CardText>
              <TextField
                hintText=""
                onChange = {this.handleChange}
                value={this.state.user}
                floatingLabelText="Username"
                floatingLabelFixed={false}
                disabled={this.state.loggedin}
              />
              <TextField
                hintText=""
                floatingLabelText="Password"
                type="password"
                disabled={this.state.loggedin}
              />
              <RaisedButton
                label="Log in"
                secondary={true}
                disabled={this.state.loggedin}
                onClick={this.handleLogin}
              />
            </CardText>
          </Card>
          <MenuItem
            primaryText="Github"
            href="https://github.com/callemall/material-ui"
          />
          <MenuItem
            primaryText="Material Ui"
            href="http://www.material-ui.com/#/"
          />
          <MenuItem
            primaryText="Back to Home"
            href="https://mpontikes.github.io"
          />
        </Drawer>
        <Dialog
          title="Add Photo"
          open={this.state.aopen}
          actions={
            [
              <FlatButton
                label="Close"
                secondary={true}
                onTouchTap={this.handleUpload}
              />,
              <FlatButton
                label="Upload"
                primary={true}
                onClick={this.handleUploads}
                onTouchTap={this.handleUpload}
                disabled={this.state.vap}
              />
            ]
          }
        >
          <UploadBox getData={this.getStuff}/>
        </Dialog>
      </div>
    );
  }

}

export default SiteHeader;
