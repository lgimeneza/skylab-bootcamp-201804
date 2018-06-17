import React, { Component } from 'react';
import './App.scss';
import Main from "./components/Main/";
import Header from "./components/Header/";
import logic from "./logic";



class App extends Component {


  state = {
    isLogged:false,
    photoProfile: undefined,
    name: undefined,
    city: undefined,
    newNotifications:[],
    notifications:[],
    idUser: localStorage.getItem("id-app"),
    allDataUser:{}

  }

  clearNotifications=()=>{
    this.setState({ newNotifications:[] })
  }


  changePhotoProfile=(photoProfile)=>{
    this.setState({ photoProfile})
    console.log(this.state.photoProfile,photoProfile)

  }



  getNotifications=()=>{    

    logic.retrieveUser(this.idUser()).then(({notifications})=>{

      let newNotifications = logic.getNotifications(notifications)
      this.setState({ newNotifications })
      return newNotifications
    })

  }

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
    .then(allDataUser => {
       
        let { photoProfile, name, city, notifications } =allDataUser
        if(!photoProfile)photoProfile ="../../images/others/profile-dog.jpg"
        this.setState({
          photoProfile,
          name,
          city,
          idUser,
          notifications,
          isLogged:true,
          allDataUser
        })
      })  
  }

  componentDidMount() {
    this.retrieveUser(this.idUser())
  }


  render() {

    return (
      <div className="App">
        <Header dataUser={this.state} logOut={this.logOut} clearNotifications={this.clearNotifications}  />
        <Main  dataUser={this.state} changePhotoProfile={this.changePhotoProfile}  retrieveUser={this.state.allDataUser} getNotifications={this.getNotifications}   logIn={this.logIn}  isLogged={this.state.isLogged} />
      </div>
    )
  }
}

export default App;
