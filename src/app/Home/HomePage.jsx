import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

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
    }
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
          <h1> My Projects </h1>
          <h3>These are the projects that I'm working on. All are open source on Github!</h3>
          <RaisedButton
            label="Github Link"
            linkButton={true}
            href="https://github.com/mpontikes/mpontikes.github.io"
            secondary={true}
            style={styles.button}
          />
          <br />
        <TextField margin={23} value={this.state.text} hintText="Password" onChange={this.handleChange}/>
         <RaisedButton
            label="Submit"
            linkButton={true}
            href={"https://mpontikes.github.io/" + this.state.text}
            primary={true}
            style={styles.button}
          />
      </Paper>
    </div>	
    );
  }
}

export default HomePage;