import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

class UploadBox extends React.Component {
    constructor(props){
    super(props);
    this.state = {
    picture:"",
    caption:"",
    date:null}
    this.handlePic = this.handlePic.bind(this);
  this.handleCap = this.handleCap.bind(this);
  this.handleDate = this.handleDate.bind(this);
  }
  handlePic(event){
    this.setState({picture: event.target.value},this.props.getData(this.state.picture, this.state.caption, this.state.data));
    
  }
  handleCap(event){
    this.setState({caption: event.target.value},this.props.getData(this.state.picture, this.state.caption, this.state.data));
  }
  handleDate(event, date){
    this.setState({
      date: date,
    },this.props.getData(this.state.picture, this.state.caption, this.state.data));
  };
  


  render() {
    return (
    	<div>
        	<TextField
      			hintText="URL here..."
      			floatingLabelText="Picture"
            onChange={this.handlePic}
    		/>
    		<br />
    		<TextField
      			hintText="Text here..."
      			floatingLabelText="Caption"
            onChange={this.handleCap}
    		/>
    		<br />
    		<DatePicker 
    			hintText="Date" 
    			mode="landscape"
          onChange={this.handleDate}
          disabled={true} />
        </div>

    	);}
}

export default UploadBox;