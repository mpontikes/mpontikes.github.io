import React from 'react';
import Paper from 'material-ui/Paper';
import ImageAudiotrack from 'material-ui/svg-icons/image/audiotrack';
import ImageNaturePeople from 'material-ui/svg-icons/image/nature-people';
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel';
import {GridList, GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import {Grid, Row, Col, Clearfix, Button, Table} from 'react-bootstrap';
import SocialLocationCity from 'material-ui/svg-icons/social/location-city';
import MapsDirectionsRun from 'material-ui/svg-icons/maps/directions-run';
import MapsLocalActivity from 'material-ui/svg-icons/maps/local-activity';
import SocialSchool from 'material-ui/svg-icons/social/school';
import SocialGroup from 'material-ui/svg-icons/social/group';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import Dialog from 'material-ui/Dialog';

const styles = {
  icon:{
    height: 180,
    width: 180,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  }
};


class EventBox extends React.Component {
  static propTypes = {
    tevent: React.PropTypes.object
  };
  
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
    this.render= this.render.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(){
    this.setState({open:!this.state.open});
  }

  render() {

    if(this.props.tevent.theme.i == 1) {
      var icons = <ImageNaturePeople style={styles.icon} color={this.props.tevent.theme.c2} viewBox='0 0 24 24'/>;
    }
    else if(this.props.tevent.theme.i == 2) {
      var icons = <ImageAudiotrack style={styles.icon} color={this.props.tevent.theme.c2} viewBox='0 0 24 24'/>;
    }
    else if(this.props.tevent.theme.i == 3) {
     var icons = <MapsDirectionsRun style={styles.icon} color={this.props.tevent.theme.c2} viewBox='0 0 24 24'/>;
    }
    else if(this.props.tevent.theme.i == 4) {
      var icons = <MapsLocalActivity style={styles.icon} color={this.props.tevent.theme.c2} viewBox='0 0 24 24'/>;
    }
    else if(this.props.tevent.theme.i == 5) {
      var icons = <SocialSchool style={styles.icon} color={this.props.tevent.theme.c2} viewBox='0 0 24 24'/>;
    }
    else if(this.props.tevent.theme.i == 6){
      var icons = <SocialGroup style={styles.icon} color={this.props.tevent.theme.c2} viewBox='0 0 24 24'/>;
    }
    else if(this.props.tevent.theme.i == 7){
      var icons = <ToggleStar style={styles.icon} color={this.props.tevent.theme.c2} viewBox='0 0 24 24'/>;
    }
    else if(this.props.tevent.theme.i == 8){
      var icons = <SocialLocationCity style={styles.icon} color={this.props.tevent.theme.c2} viewBox='0 0 24 24'/>;
    }
    else{
      var icons = <NavigationCancel style={styles.icon} color={this.props.tevent.theme.c2} viewBox='0 0 24 24'/>
    }
    var k = 0;
    var l = this.props.tevent.theme.c1;
    return (
      <div >
        <Paper style={{background: this.props.tevent.theme.c1, margin: 21}}>
          <Grid style={{color: this.props.tevent.theme.text}}>
            <Row>
              <Col lg={2} md={3} sm={3} xs={4}>
                {"Hi"}
              </Col>
              <Col lg={8} md={7} sm={6} xs={8}>
                <h1>{this.props.tevent.name}</h1>
                <h4>{this.props.tevent.number}<p />
                {this.props.tevent.vote.info}<p />
                </h4>
              </Col>
              <Col lg={2} md={2} sm={3} xs={12}>
                <br />
                Resault:
                <br />
                Pass!
                <br />
              </Col>
            </Row>
          </Grid>
        </Paper>
      </div>
  );
  }
}

export default EventBox;