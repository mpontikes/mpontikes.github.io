import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import ProjectCard from './ProjectCard.jsx';

const styles = {
  paper:{
    textAlign: 'center',
    margin: 25,
  },
  button:{
    margin: 25,
  },
  underline:{
    borderColor: '#303F9F',
  }
};

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({text: event.target.value});
  }
  
  render() {
    return (
      <div>
        <Paper style={styles.paper}>
          <br />
          <h1>The University of Texas at Austin Community Facebook Groups</h1>
          <h3>Below is a list of groups on Facebook that are ment to bring the community of UT together through discussions, memes, and other means.</h3>
          <RaisedButton label="Click here to suggest a new group!" href="https://github.com/mpontikes/mpontikes.github.io" secondary={true} style={styles.button}/>
        </Paper>
        <ProjectCard title="UT LONGmemes for HORNSy teens" url="https://www.facebook.com/groups/UTLongmemes/" dec="Memes" disable={false} />
        <ProjectCard title="OverHERD at UT Austin" url="https://www.facebook.com/groups/oVeRhEaRdaTuTAuStIn/" dec="Conversations taken out of context" disable={false} />
        <ProjectCard title="Bevo's Wholesome Meme Stash" url="https://www.facebook.com/groups/295585077520465/" dec="Memes that make you feel good" disable={false} />
        <ProjectCard title="UT Austin discussion & petty arguments" url="https://www.facebook.com/groups/187052928705558/" dec="Arguments" disable={true} /> 
      </div>	
    );
  }
}

export default HomePage;