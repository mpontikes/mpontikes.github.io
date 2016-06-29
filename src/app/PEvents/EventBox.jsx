import React from 'react';
import Paper from 'material-ui/Paper';
import ImageAudiotrack from 'material-ui/svg-icons/image/audiotrack';
import {GridList, GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import {Grid, Row, Col, Clearfix, Button} from 'react-bootstrap';

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
    }
    this.render= this.render.bind(this);
    console.log(this.props.tevent.theme);
  }



  render() {
    var icons = <ImageAudiotrack style={styles.icon} color={this.props.tevent.theme.c2} viewBox='0 0 24 24'/>;
    return (
    <div>
    <Paper style={{background: this.props.tevent.theme.c1, margin: 21}}>
      <Grid>
        <Row>
          <Col lg={2} md={3} sm={3} xs={4}>
            {icons}
          </Col>
          <Col lg={8} md={7} sm={6} xs={8}>
            <h1>{this.props.tevent.name}</h1>
            <h4>{this.props.tevent.sdate} to {this.props.tevent.edate}<p />
            {this.props.tevent.location}<p />
            {this.props.tevent.price[0].p}</h4>
          </Col>
          <Col lg={2} md={2} sm={3} xs={12}>
          <br />
          <br />
          <br />
            <RaisedButton label="More info..." backgroundColor={this.props.tevent.theme.c2}/>
          </Col>
        </Row>
      </Grid>
    </Paper>
    </div>
    );
  }
}

export default EventBox;