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
    return (
      <div >
        <Paper style={{background: this.props.color, margin: 21}}>
          <Grid style={{color: this.props.tevent.theme.text}}>
            <Row>
              <Col lg={2} md={3} sm={3} xs={4}>
                
              </Col>
              <Col lg={8} md={7} sm={6} xs={8}>
                <h1>{this.props.t.name}</h1>
                <h4>{this.props.tevent.sdate}<p />
                {this.props.tevent.location}<p />
                {fp}</h4>
              </Col>
              <Col lg={2} md={2} sm={3} xs={12}>
                <br />
                <br />
                <br />
                <RaisedButton label="More info..." backgroundColor={this.props.tevent.theme.c2} labelStyle={{color: this.props.tevent.theme.text}} onTouchTap={this.handleClose}/>
              </Col>
            </Row>
          </Grid>
        </Paper>
        <Dialog actionsContainerStyle={{background: this.props.tevent.theme.c2, color: this.props.tevent.theme.text}} bodyStyle={{background: this.props.tevent.theme.c2, color: this.props.tevent.theme.text}} titleStyle={{background: this.props.tevent.theme.c2, color: this.props.tevent.theme.text, fontSize:"50px", padding: "39px"}} title={this.props.tevent.name} actions={[<RaisedButton label="Close" backgroundColor={this.props.tevent.theme.c1} labelStyle={{color: this.props.tevent.theme.text}} onTouchTap={this.handleClose}/>]} open={this.state.open} onRequestClose={this.handleClose}>
          <Grid>
            <Row>
              <Col md={5} lg={4} sm={6}>
                <span style={{fontSize: "19px"}}>{this.props.tevent.sdate} to {this.props.tevent.edate}</span>
                <br />
                <br />
                {this.props.tevent.des}
              </Col>
              <Col md={4} lg={3} sm={4}>
                <span style={{fontSize: "25px"}}>{this.props.tevent.location}</span>
                <br />
                {this.props.tevent.address.slice(0, this.props.tevent.address.indexOf(","))}
                <br />
                {this.props.tevent.address.slice(this.props.tevent.address.indexOf(",")+1)}
                <br />
                <br />
                <Table style={{border:"2px solid " + this.props.tevent.theme.c1 }} bordered condensed>
                  <thead>
                    <tr style={{border:"2px solid " + this.props.tevent.theme.c1 }}>
                      <th style={{border:"2px solid " + this.props.tevent.theme.c1 }}>Date</th>
                      <th style={{border:"2px solid " + this.props.tevent.theme.c1 }}>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {thatsa}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Grid>
        </Dialog>
      </div>
  );
  }
}

export default EventBox;