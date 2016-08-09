import React from 'react';
import SiteHeader from './SiteHeader.jsx';
import PictureCard from './PictureCard.jsx';

class MainPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: [{pi: "https://pbs.twimg.com/media/B_TXcfEVIAAY0K1.png", da: "06//13/16", us: "mpontikes", av: "https://pbs.twimg.com/profile_images/709013243583279105/WNFfT9UX.jpg", ca:"Snow Day"},{pi: "https://s3.amazonaws.com/infinum.web.production/repository_items/files/000/000/429/original/1.png?1413359570", da: "05//19/16", us: "matid", av: "https://avatars0.githubusercontent.com/u/19177617?v=3", ca:"New ticket app!"}],
            user:"Anonymous",
            login: false,
            pic: "",
            cap: ""
        };
        this.handleUnshiftArray = this.handleUnshiftArray.bind(this);
        this.handlePassUser = this.handlePassUser.bind(this);
        this.handlePassLogin = this.handlePassLogin.bind(this);
    }

    handleUnshiftArray(pic, dec, date){
        let to = this.state.data.unshift({pi: pic, da: date, us: this.state.user, av: "http://blog.call-em-all.com/wp-content/uploads/2014/04/blog-why-i-love-callemall.png", ca:dec});
        this.setState({to});
    }

    handlePassUser(hello){
        this.setState({user: hello});
    }
    
    handlePassLogin(hello){
        this.setState({login: hello});
    }

    render(){
        let sup = this.state.user;
        let heyy = this.state.login;
        let d = 0
        let thecars = this.state.data.map(function(picture) {
            d = d+1;
            return <PictureCard pic={picture.pi} puser={picture.us} pavi={picture.av} pcaption={picture.ca} pdate={picture.da} user={sup} login={heyy} key={d}/>;
        });
        return (
            <div>
                <SiteHeader onShiftArray={this.handleUnshiftArray} getData={this.getData} getUser={this.handlePassUser} getLogin={this.handlePassLogin}/>
                {thecars}
            </div>
        );
    }
}

export default MainPage;