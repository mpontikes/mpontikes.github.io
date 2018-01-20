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
  },
  header:{
    fontWeight:'bold',
    fontSize: 35
  },
  subtext:{
    fontSize: 20,
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
          <br />
          <br />
          <span style={styles.header}>The University of Texas at Austin Community Facebook Groups</span>
          <br />
          <br />
          <br />
          <span style={styles.subtext}>UT Austin has a vast community with all types of intrests. Below I have listed some UT Facebook groups that you can join to chat, argue, post, and meme about UT culture. These pages are not endorsed by UT Austin and are monitored by students.</span>
          <br />
          <br />
          <RaisedButton label="Click here to suggest a new group!" href="https://goo.gl/forms/T0hBsV6183fg1MOg1" secondary={true} style={styles.button}/>
          <br />
          <br />
        </Paper>
        <ProjectCard title="UT LONGmemes for HORNSy teens" url="https://www.facebook.com/groups/UTLongmemes/" dec="Like memes? This is the offical UT Meme Page! Enjoy memes about everything UT!" disable={false} />
        <ProjectCard title="OverHERD at UT Austin" url="https://www.facebook.com/groups/oVeRhEaRdaTuTAuStIn/" dec="Said something and thought 'I really hope that no one took this out of context'? Well it might be on this page!" disable={false} />
        <ProjectCard title="Bevo's Wholesome Meme Stash" url="https://www.facebook.com/groups/295585077520465/" dec="Feeling down? Well check out these wholesome memes to feel better!" disable={false} />
        <ProjectCard title="UT Austin discussion & petty arguments" url="https://www.facebook.com/groups/187052928705558/" dec="Feel like agruing with people? Well you've come to the right place!" disable={false} /> 
        <ProjectCard title="UT Missed Connections" url="https://www.facebook.com/groups/719698794904072/" dec="What to get in contact with some random person you passed on Speedway? It might be a longshot, but hey, anything is possible!" disable={false} /> 
      </div>	
    );
  }
}

export default HomePage;