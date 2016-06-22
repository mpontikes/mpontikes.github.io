import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class CommentBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [{user:"ThatKid", date: "06/19/16", avatar: "https://www.bisnow.com/archives/houstonre/2011/Q1/images/frankroetzel.jpg", comment: "First"}],
      comment: "",
      thecoms: null,
      s: 0
    }
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event){
    this.setState({comment: event.target.value});
  }
  handleSubmit(){
    this.state.data.push({user:this.props.user, date: "Today", avatar: "http://blog.call-em-all.com/wp-content/uploads/2014/04/blog-why-i-love-callemall.png", comment: this.state.comment});
    this.handleUpdate();
    this.setState({comment: ""});
    
  }
  handleUpdate(){
    this.setState({thecoms: this.state.data.map(function(com) {
            return( 
                <Card>
                  <CardHeader
                    title={com.user}
                    subtitle={com.date}
                    avatar={com.avatar}
                  />
                <CardText>
                  {com.comment}
                </CardText>
              </Card>)
          })});
  }

  componentWillMount(){
    this.handleUpdate();
  }


  render() {
    return (
      <div>
        {this.state.thecoms}
        <Card>  
          <TextField
           value = {this.state.comment}
           onChange = {this.handleChange}
            hintText="Type here..."
            floatingLabelText="New Comment"
            fullWidth = {true}
          />
          <RaisedButton label="Sumbit" secondary={true} onTouchTap={this.handleSubmit} disabled={false}/>
        </Card>
      </div>
    );
  }

}

export default CommentBox;