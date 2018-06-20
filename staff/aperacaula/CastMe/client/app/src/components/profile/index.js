import React, { Component } from "react";
import logic from "../../logic";
import Header from "../header";

class Profile extends Component {
  state = {
    name: "",
    surname: "",
    profilePicture: ""
  };

  componentDidMount() {
    if (!logic.userId) {
      this.props.onBackLanding();
    }else{
        logic.retrieveUserLite(logic.userId)
        .then(({ name, surname, profilePicture }) => {
          this.setState({
            name,
            surname,
            profilePicture
          });
          return true
        })
    }
  }

  render() {
    return (
      <div>
        <Header
          profilePicture={this.state.profilePicture}
          name={this.state.name}
          surname={this.state.surname}
        />
        <button onClick={this.props.logOut}>Log Out</button>
        <button onClick={this.props.unregister}>Unregister</button>
      </div>
    );
  }
}

export default Profile;
