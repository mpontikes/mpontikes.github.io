import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
	paper:{
		margin: 25,
		textAlign: 'center' 
	},
	button:{
		margin: 23
	},
	subtext:{
    fontSize: 20,
  }
};

class ProjectCard extends React.Component {
	static propTypes = {
		title: PropTypes.string,
		dec: PropTypes.string,
		url: PropTypes.string,
		disable: PropTypes.bool
	};
	render(){
		return(
			<Paper style={styles.paper}>
				<br />
				<h1> {this.props.title} </h1>
				<span style={styles.subtext}> {this.props.dec} </span>
				<br />
				<RaisedButton label="Go" href={this.props.url} secondary={true} style={styles.button} disabled={this.props.disable}/>
            </Paper>
		)
	}
}

export default ProjectCard;