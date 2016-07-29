import React, {Component, PropTypes} from 'react';
import Paper from "material-ui/Paper";

class MoneyCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: true,
    }
    console.log(Date.now());
  }
  render() {
    var bal = "Loading...";
    var now = Date.now();
    if(now < 1471669200000){
      bal = this.props.start;
    }
    else if(now > 1471669200000 && now < 1481781600000){
      var time = 117-(Math.floor((1481781600000 - now)/86400000));
      bal = (this.props.start - ((this.props.start/235)*time)).toFixed(2);
    }
    return (
      <div>
        <Paper style={{margin:25, textAlign:"center"}}>
          <p style={{fontSize:26, margin:20}}>The current {this.props.account} line is...</p>
          <p style={{fontSize:75}}>${bal}</p>
          <p style={{fontSize:26, margin:20}}>...at an average of ${(this.props.start/235).toFixed(2)} a day</p>
        </Paper>
      </div>	
      );
  }
}

export default MoneyCard;