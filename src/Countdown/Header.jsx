import React from 'react';
import AppBar from 'material-ui/AppBar';
import ContentAddBox from 'material-ui/svg-icons/content/add-box';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';

class Header extends React.Component {
    constructor(props){
      const minDate = new Date();
    super(props);
    this.state = {
      dopen: false,
      minD: minDate
    }
    this.handleRequest = this.handleRequest.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleRequest(){
    this.setState({dopen: !this.state.dopen});
  }
  handleUpdate(){
    this.props.editor;
    this.handleRequest();
  }
  render() {
    return (
    	<div>
       <AppBar title="Countdown" showMenuIconButton={false} /> 
       <Dialog title="Coming Soon" open={this.state.dopen} onRequestClose={this.handleRequest} actions={[<RaisedButton label="Close" secondary={true} style={{margin:12}} onTouchTap={this.handleRequest}/>, <RaisedButton label="Add" primary={true} style={{margin:12}} onTouchTap={this.handleUpdate}/>]}>
       <TextField hintText="Type here..." floatingLabelText="Name of Event" fullWidth={true} />
       <DatePicker minDate = {this.state.minD} locale="en-US" hintText="Date"/> at <TimePicker hintText="Time"/>
       </Dialog>      	
      </div>

  );}
}

export default Header;