import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {grey50} from 'material-ui/styles/colors';
import ActionBuild from 'material-ui/svg-icons/action/build';
import Toggle from 'material-ui/Toggle';
import {Grid, Row, Col, Clearfix, Button, Table} from 'react-bootstrap';
import MoneyCard from './MoneyCard.jsx';
import DatePicker from 'material-ui/DatePicker';

class Page extends React.Component {
  constructor(props){
    super(props);
    var date = Date.now();
    this.state = {
      menuopen: false,
      spring: false,
      dinein: 1500.00,
      buck: 300.00,
      date: date
    }
    this.handleMenu = this.handleMenu.bind(this);
    this.handleSpring = this.handleSpring.bind(this);
    this.handleDolChange = this.handleDolChange.bind(this);
    this.handleBukChange = this.handleBukChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleMenu(){
    this.setState({menuopen: !this.state.menuopen});
  }
  handleSpring(){
    this.setState({spring: !this.state.spring});
  }

  handleDolChange(event){
    this.setState({
      dinein: event.target.value,
    });
  };

  handleBukChange(event){
    this.setState({
      buck: event.target.value,
    });
  };

  handleDateChange(event, date){
    this.setState({date:date.getTime() + 10000}, console.log(this.state.date));
  }


  render() {
    return (
      <div>
        <AppBar showMenuIconButton={false} title="MyFinance" iconElementRight= {<IconButton onTouchTap={this.handleMenu}><ActionBuild /></IconButton>}/>
        <Dialog title="Settings" open={this.state.menuopen} actions={<FlatButton label="Close" onTouchTap= {this.handleMenu} />} onRequestClose= {this.handleMenu}>
          <Grid style={{display:"inline"}}>
            <Row>
              <Col md={6} lg={6} sm={6}>
                <br />
                <Toggle onToggle={this.handleSpring} label="Include Spring Break" defaultToggled={this.state.spring} />
                <DatePicker floatingLabelText="Jump to Date" value={new Date(this.state.date)} onChange={this.handleDateChange}/>
              </Col>
              <Col md={6} lg={6} sm={6}>
                <TextField floatingLabelText="Starting Dine-in Dollars" floatingLabelFixed={true} onChange={this.handleDolChange} value={this.state.dinein}/> 
                <br />
                <TextField floatingLabelText="Starting Bevo Bucks" floatingLabelFixed={true} onChange={this.handleBukChange} value={this.state.buck}/> 
              </Col>
            </Row>
          </Grid>
        </Dialog>
        <MoneyCard account="Dine-In Dollars" start={this.state.dinein} spring={this.state.spring} date={this.state.date}/>
        <MoneyCard account="Bevo Bucks" start={this.state.buck} spring={this.state.spring} date={this.state.date}/>
      </div>	
    );
  }
}

export default Page;