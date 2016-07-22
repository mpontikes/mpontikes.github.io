import React from 'react';
import TimePicker from 'material-ui/TimePicker';
import Paper from 'material-ui/Paper';
import {Grid, Row, Col, Clearfix, Button, Table} from 'react-bootstrap';

class Counter extends React.Component {
    constructor(props){
    super(props);
    const tDate = new Date();
    const cDate = new Date();
    tDate.setTime(this.props.date);
    this.state = {tdate: tDate, time: "Please wait..."}
    this.handleSec = this.handleSec.bind(this);
    this.interval = setInterval(this.handleSec, 1000);
}
handleSec() {
	var nes = new Date(this.state.tdate.getTime() - Date.now());
	var dy = (Math.floor(nes.getTime()/86400000)); 
	this.setState({time: dy + " : " + nes.getUTCHours() + " : " + nes.getUTCMinutes() + " : " + nes.getUTCSeconds()});
}

  render() {
  	var today = new Date();
    return (
 
	    <Col md={6} lg={6}>
	    	<Paper>
	    		<h1 style={{textAlign: "center", paddingTop: "20px", paddingBottom: "10px"}}>{this.props.title}</h1>
	    		<h4 style={{textAlign: "center"}}> Days : Hours : Mins : Secs </h4>
	    		<h1 style={{textAlign:"center", paddingBottom: "20px"}}> {this.state.time}</h1>
	    	</Paper>
	    </Col>
  );}
}

export default Counter;