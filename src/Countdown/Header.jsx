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
      minD: minDate,
      text: "",
      time: null,
      date: null
    }
    this.handleRequest = this.handleRequest.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }
  handleRequest(){
    this.setState({dopen: !this.state.dopen});
  }
  handleUpdate(){
    this.props.editor(this.state.text, this.state.date, this.state.time);
    this.setState({dopen: !this.state.dopen});
  }
  handleType(event){
    this.setState({text: event.target.value});
  }
  handleTime(event, date){
    this.setState({time: date});
  }
  handleDate(event, date){
    this.setState({date: date});
  }
  render() {
    return (
    	<div>
       <AppBar title={this.props.header} showMenuIconButton={false} iconElementRight={<ContentAddBox onTouchTap={this.handleRequest} style={{height:50, width:50, color:"#FAFAFA"}} />}/> 
       <Dialog title="Add an event..." open={this.state.dopen} onRequestClose={this.handleRequest} actions={[<RaisedButton label="Close" secondary={true} style={{margin:12}} onTouchTap={this.handleRequest}/>, <RaisedButton label="Add" primary={true} style={{margin:12}} onTouchTap={this.handleUpdate}/>]}>
       <TextField hintText="Type here..." floatingLabelText="Name of Event" fullWidth={true} onChange={this.handleType}/>
       <DatePicker onChange={this.handleDate} minDate = {this.state.minD} locale="en-US" hintText="Date"/> at <TimePicker onChange={this.handleTime} hintText="Time"/>
       </Dialog>      	
      </div>

  );}
}

export default Header;