import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import CommunicationChat from 'material-ui/svg-icons/communication/chat';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import CommentBox from './CommentBox.jsx';

class PictureCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            plikes: 0, 
            copen: false
        }
        this.handlepLike = this.handlepLike.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }

    handlepLike() {
        let lol = this.state.plikes + 1;
        this.setState({plikes: lol});
    }

    handleComment(){
        this.setState({copen: !this.state.copen});

    }

    render() {
        return (
            <div>
                <Card>
                    <CardHeader 
                        title={this.props.puser}
                        subtitle = {this.props.pdate}
                        avatar={this.props.pavi}
                    />
                    <CardMedia>
                        <img src={this.props.pic} />
                    </CardMedia>	
                    <CardText>
                        {this.props.pcaption}
                    </CardText>
                    <CardActions>
                        <RaisedButton
                            label={"Likes: " + this.state.plikes}
                            primary={true}
                            icon={<ActionThumbUp />}
                            onTouchTap={this.handlepLike}
                        />
                        <RaisedButton
                            label="Comment"
                            secondary={true}
                            icon={<CommunicationChat />}
                            onTouchTap={this.handleComment}
                        />
                    </CardActions>
                    <Dialog
                        title="Comments"
                        open={this.state.copen}
                        actions={ 
                            <FlatButton
                                label="Close"
                                primary={true}
                                onTouchTap={this.handleComment}
                            />
                        }
                    >
                        <CommentBox user={this.props.user} login={this.props.login}/>
                    </Dialog>
                </Card>
            </div>
        );
    }

}

export default PictureCard;