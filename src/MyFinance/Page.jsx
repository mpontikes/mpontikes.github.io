import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {grey50} from 'material-ui/styles/colors';
import ActionBuild from 'material-ui/svg-icons/action/build'

class Page extends React.Component {
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
    return (
      <div>
        <AppBar showMenuIconButton={false} title="MyFinance" iconElementRight= {<IconButton onTouchTap={this.handleMenu}><ActionBuild /></IconButton>}/>
        
      </div>	
      );
  }
}

export default Page;