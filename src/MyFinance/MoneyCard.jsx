import React, {Component, PropTypes} from 'react';
import Paper from "material-ui/Paper";

class MoneyCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: true,
    }
  }
  render() {
    var bal = "Loading...";
    var now = this.props.date;
    var days = 236
    if(this.props.spring){
      days = 243;
    }
    if(now < 1471669200000){
      var bal = this.props.start;
    }
    else if(now > 1471669200000 && now < 1481781600000){
      var time = 118-(Math.floor((1481781600000 - now)/86400000));
      bal = (this.props.start - ((this.props.start/days)*time)).toFixed(2);
    }
    else if(now > 1481781600000 && now < 1484373600000){
      var time = 119;
      bal = (this.props.start - ((this.props.start/days)*time)).toFixed(2);
    }
    else if(now > 1484373600000 && now < 1494997200000 && this.props.spring){
      var time = 120 + (122-(Math.floor((1494997200000 - now)/86400000)));
      bal = (this.props.start - ((this.props.start/days)*time)).toFixed(2);
    }
    else if(now > 1484373600000 && now < 1489298400000){
      var time = 120 + (56-(Math.floor((1489298400000 - now)/86400000)));
      bal = (this.props.start - ((this.props.start/days)*time)).toFixed(2);
    }
    else if(now > 1489298400000 && now < 1489986000000){
      var time = 177;
      bal = (this.props.start - ((this.props.start/days)*time)).toFixed(2);
    }
    else if(now > 1489986000000 && now < 1494997200000){
      var time = 178 + (57-(Math.floor((1494997200000 - now)/86400000)));
      bal = (this.props.start - ((this.props.start/days)*time)).toFixed(2);
    }
    else if(now > 1494997200000){
      var time = days;
      bal = 0;
    }
    
    return (
      <div>
        <Paper style={{margin:25, textAlign:"center"}}>
          <p style={{fontSize:26, margin:20}}>The current {this.props.account} line is...</p>
          <p style={{fontSize:75}}>${bal}</p>
          <p style={{fontSize:26, margin:20}}>...at an average of ${(this.props.start/days).toFixed(2)} a day</p>
        </Paper>
      </div>	
      );
  }
}

export default MoneyCard;