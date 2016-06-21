import React from 'react';

import SiteHeader from './SiteHeader.jsx';
import PictureCard from './PictureCard.jsx';



class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {pi: "http://image.shutterstock.com/z/stock-photo-a-seagull-at-brighton-uk-shallow-depth-of-field-focus-on-the-eyes-224398849.jpg", da: "06//13/16", us: "mpontikes", av: "https://assets.entrepreneur.com/static/1425479423-vince-vaughn-appearing-free-cheesy-stock-images-you-can-download-getty-3.jpg", ca:"This is my masterpiece"},
                {pi: "https://s3.amazonaws.com/infinum.web.production/repository_items/files/000/000/429/original/1.png?1413359570", da: "05//19/16", us: "le232sz", av: "https://avatars0.githubusercontent.com/u/19177617?v=3", ca:"Please like this picture"}
            ],
            user:"Anonymous",
            login: false,
            pic: "",
            cap: ""

        }
        this.handleUnshiftArray = this.handleUnshiftArray.bind(this);
        this.handlePassUser = this.handlePassUser.bind(this);
        this.handlePassLogin = this.handlePassLogin.bind(this);
        this.getData = this.getData.bind(this);
    }

    handleUnshiftArray(){
        const data = this.state.data;
        data.unshift({pi: this.state.pic, da: "Today", us: this.state.user, av: "https://pbs.twimg.com/profile_images/709013243583279105/WNFfT9UX.jpg", ca:this.state.cap});
        this.setState({data});
    }

    handlePassUser(hello){
        this.setState(
            {user: hello}
        );
    }
    handlePassLogin(hello){
        this.setState(
            {login: hello}
        );
    }
    getData(pic, cap, date){
        this.setState({pic});
        this.setState({cap});
    }

    render() {
        let sup = this.state.user;
        let heyy = this.state.login
         var thecars = this.state.data.map(function(picture) {
            return <PictureCard 
                    pic={picture.pi}
                    puser={picture.us}
                    pavi={picture.av}
                    pcaption={picture.ca}
                    pdate={picture.da}
                    user={sup}
                    login={heyy}
                />;
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