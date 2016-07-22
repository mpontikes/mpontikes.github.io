import React from 'react';
import AppBar from 'material-ui/AppBar';

class Header extends React.Component {
    constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    return (
    	<div>
       <AppBar />       	
      </div>

  );}
}

export default Header;