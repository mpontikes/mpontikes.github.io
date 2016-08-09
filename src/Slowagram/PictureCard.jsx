import React, {PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import CommunicationChat from 'material-ui/svg-icons/communication/chat';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


class PictureCard extends React.Component {
    static propTypes = {
        pic: PropTypes.string,
        puser: PropTypes.string,
        pavi: PropTypes.string,
        pcaption: PropTypes.string,
        pdate: PropTypes.string,
        user: PropTypes.string,
        login: PropTypes.bool
    };

    constructor(props){
        super(props);
        this.state = {
            plikes: 0, 
            copen: false,
            data: [{user:"ThatKid", date: "06/19/16", avatar: "https://www.bisnow.com/archives/houstonre/2011/Q1/images/frankroetzel.jpg", comment: "First", key: 0}],
            comment: "",
            thecoms: null,
            s: 0
        };
        this.handlepLike = this.handlepLike.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handlepLike() {
        let lol = this.state.plikes + 1;
        this.setState({plikes: lol});
    }

    handleComment(){
        this.setState({copen: !this.state.copen});
    }

    handleChange(event){
        this.setState({comment: event.target.value});
    }

    handleSubmit(){
        this.state.data.push({user:this.props.user, date: "Today", avatar: "http://blog.call-em-all.com/wp-content/uploads/2014/04/blog-why-i-love-callemall.png", comment: this.state.comment, key: this.state.s});
        this.handleUpdate();
        this.setState({comment: ""});
    }

    handleUpdate(){
        let s = this.state.s;
        this.setState({thecoms: this.state.data.map(function(com) {
            s = s+1;
            return( 
                <Card key={s}>
                    <CardHeader title={com.user} subtitle={com.date} avatar={com.avatar}/>
                    <CardText>
                        {com.comment}
                    </CardText>
                </Card>
            )
        })});
        this.setState({s: s});
    }

    componentWillMount(){
        this.handleUpdate();
    }

    render() {
        return (
            <div>
                <Card style={{margin: 20}}>
                    <CardHeader title={this.props.puser} subtitle = {this.props.pdate} avatar={this.props.pavi}/>
                    <CardMedia>
                        <img src={this.props.pic} />
                    </CardMedia>	
                    <CardText>
                        {this.props.pcaption}
                    </CardText>
                    <CardActions>
                        <RaisedButton label={"Likes: " + this.state.plikes} primary={true} icon={<ActionThumbUp />} onTouchTap={this.handlepLike}/>
                        <RaisedButton label="Comment" secondary={true} icon={<CommunicationChat />} onTouchTap={this.handleComment}/>
                    </CardActions>
                    <Dialog title="Comments" open={this.state.copen} actions={<FlatButton label="Close" primary={true} onTouchTap={this.handleComment}/>}>
                        {this.state.thecoms}
                        <Card style = {{padding: 20}}>  
                            <TextField value = {this.state.comment} onChange = {this.handleChange} hintText="Type here..." floatingLabelText="New Comment" fullWidth = {true}/>
                            <RaisedButton label="Sumbit" secondary={true} onTouchTap={this.handleSubmit} disabled={false}/>
                        </Card>
                    </Dialog>
                </Card>
            </div>
        );
    }
}

export default PictureCard;