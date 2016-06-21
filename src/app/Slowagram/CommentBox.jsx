import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class CommentBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [{user:"jlane", date: "", avatar: "http://lorempixel.com/100/100/nature/", comment: "First"}],
      comment: "",
      thecoms: null
    }
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event){
    this.setState({comment: event.target.value});
  }
  handleSubmit(){
    this.state.data.push({user:this.props.user, date: "", avatar: "https://pbs.twimg.com/profile_images/709013243583279105/WNFfT9UX.jpg", comment: this.state.comment});
    this.handleUpdate();
    
  }
  handleUpdate(){
    this.setState({thecoms: this.state.data.map(function(com) {
            return( 
              <div>
                <Card>
                  <CardHeader
                    title={com.user}
                    subtitle={com.date}
                    avatar={com.avatar}
                  />
                <CardText>
                  {com.comment}
                </CardText>
              </Card>
            </div>)
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