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

class Page extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuopen: false,
      christmas: true,
      spring: true,
      dinein: 1500,
      buck: 300
    }
    this.handleMenu = this.handleMenu.bind(this);
    this.handleChris = this.handleChris.bind(this);
    this.handleSpring = this.handleSpring.bind(this);
    this.handleDolChange = this.handleDolChange.bind(this);
    this.handleBukChange = this.handleBukChange.bind(this);
  }

  handleMenu(){
    this.setState({menuopen: !this.state.menuopen});
  }

  handleChris(){
    this.setState({christmas: !this.state.christmas});
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


  render() {
    return (
      <div>
        <AppBar showMenuIconButton={false} title="MyFinance" iconElementRight= {<IconButton onTouchTap={this.handleMenu}><ActionBuild /></IconButton>}/>
        <Dialog title="Settings" open={this.state.menuopen} actions={<FlatButton label="Close" onTouchTap= {this.handleMenu} />} onRequestClose= {this.handleMenu}>
          <Grid style={{display:"inline"}}>
          <Row>
          <Col md={6} lg={6} sm={6}>
          <Toggle onToggle={this.handleChris} label="Exclude Christmas Break" defaultToggled={this.state.christmas} disabled/>
          <br />
          <Toggle onToggle={this.handleSpring} label="Exclude Spring Break" defaultToggled={this.state.spring} disabled/>
          </Col>
          <Col md={6} lg={6} sm={6}>
          <TextField floatingLabelText="Starting Dine-in Dollars" floatingLabelFixed={true} onChange={this.handleDolChange} value={this.state.dinein}/> 
          <br />
          <TextField floatingLabelText="Starting Bevo Bucks" floatingLabelFixed={true} onChange={this.handleBukChange} value={this.state.buck}/> 
          </Col>
          </Row>
          </Grid>
        </Dialog>
        <MoneyCard account="Dollars" start={this.state.dinein} christmas={this.state.christmas} spring={this.state.spring}/>
        <MoneyCard account="Bucks" start={this.state.buck} christmas={this.state.christmas} spring={this.state.spring} />
      </div>	
      );
  }
}

export default Page;