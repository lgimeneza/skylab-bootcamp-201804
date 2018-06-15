import React, { Component } from 'react';
import './App.scss';
import Main from "./components/Main/";
import Header from "./components/Header/";
import logic from "./logic";



class App extends Component {


  state = {
    isLogged:undefined,
    photoProfile: undefined,
    name: undefined,
    city: undefined,
    idUser: localStorage.getItem("id-app"),

  };


  idUser = () => {
    return localStorage.getItem("id-app")
  }


  logIn = () => {
    this.retrieveUser(this.idUser())
  }

  logOut = () => {

    logic.logOut()
    this.setState({
      isLogged: false,
      idUser:undefined
      
    });
  }


  retrieveUser = (idUser) => {

    if (idUser) return logic.retrieveUser(idUser).then(data => data)

      .then(({ photoProfile, name, city }) => {
        if(!photoProfile)photoProfile ="../../images/others/profile-dog.jpg"
        
        this.setState({
          photoProfile,
          name,
          city,
          idUser,
          isLogged:true
        })
      })  
  }

  componentDidMount() {
    this.retrieveUser(this.idUser())
  }


  render() {

    return (
      <div className="App">
        <Header dataUser={this.state} logOut={this.logOut} />
        <Main dataUser={this.state} retrieveUser={this.retrieveUser}  logIn={this.logIn}  isLogged={this.state.isLogged} />
      </div>
    )
  }
}

export default App;
