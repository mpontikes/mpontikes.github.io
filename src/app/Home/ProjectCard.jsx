import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
	paper:{
		margin: 25,
		textAlign: 'center' 
	},
	button:{
		margin: 23
	}
}

class ProjectCard extends React.Component {
	constructor(props){
		super(props);
		this.state= {
		}
	}
	render(){
		return(
			<Paper style={styles.paper}>
			<br />
			<h1> {this.props.title} </h1>
			<h3> {this.props.dec} </h3>
			<RaisedButton
            label="Go"
            linkButton={true}
            href={this.props.url}
            secondary={true}
            style={styles.button}
            disabled={this.props.disable}/>
            </Paper>
			)
	}
}

export default ProjectCard;