import React, {Component, PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

class Header extends React.Component {


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
  	return(
  	<div>
    <Paper style={{margin:25, padding:25, textAlign:'center'}}>
          <h1>{this.props.title}</h1>
          <br />
          <LinearProgress mode="determinate" value={this.props.percent} />
          <h4>{this.props.percent}%</h4>
          <h3>Annoucments</h3>
          {this.props.an}
          <RaisedButton label="Staff" primary={true} onTouchTap={this.handleMenu}/>
          <Dialog title="Staff" open={this.state.menuopen} bodyStyle={{color: "#000000"}} onRequestClose={this.handleMenu} actions={<RaisedButton label="Close" primary={true} onTouchTap={this.handleMenu}/>}>
          {this.props.staff}
          </Dialog>
    </Paper>
    </div>);
  }
}

export default Header;



