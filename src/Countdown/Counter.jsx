import React from 'react';
import TimePicker from 'material-ui/TimePicker';
import Paper from 'material-ui/Paper';
import {Grid, Row, Col, Clearfix, Button, Table} from 'react-bootstrap';

class Counter extends React.Component {
    constructor(props){
    super(props);
    this.state = {}
}

  render() {
    return (
    	<Grid>
	    	<Col md={4}>
	    	<Paper>
	    		<h1> Sup </h1>
	    	</Paper>
	    	</Col>
	    	<Col md={4}>
	    	<Paper>
	    		<h1> Sup </h1>
	    	</Paper>
	    	</Col>
	    	<Col md={4}>
	    	<Paper>
	    		<h1> Sup </h1>
	    	</Paper>
	    	</Col>
    	</Grid>
  );}
}

export default Counter;