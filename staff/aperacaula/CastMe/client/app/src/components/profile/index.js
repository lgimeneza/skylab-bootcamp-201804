import React, { Component } from "react";
import logic from "../../logic";
import Header from '../header'

class Profile extends Component {

    componentDidMount(){
        if (!logic.userId){
            this.props.onBackLanding()
        }
    }



  render() {
  return (
  
  <div> 
    <Header/>
    <button onClick={this.props.logOut}>Log Out</button>
    <button onClick={this.props.unregister}>Unregister</button>


  </div>);
  }
}


export default Profile