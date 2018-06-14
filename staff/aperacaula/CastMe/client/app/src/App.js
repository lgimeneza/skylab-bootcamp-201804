import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Landing from './components/landing'
import Login from './components/login'
import Register from './components/register'
import UploadPicture from './components/upload-picture'
import Home from './components/home'
//import logic from './logic'
//import Profile from './components/Profile/Profile'

import './index.css'

class App extends Component {
  state = { 
    picture: undefined ,
    userId: ''
  }

  goToUploadPicture = () => this.props.history.push("/upload_picture")
  goLanding = () => this.props.history.push("/")
  goRegister= () => this.props.history.push("/register")


  uploadPicture = (picture) => {
    this.setState({ picture })

    this.props.history.push('/register')
  }

  // correctingRoute = (paramsUserId)=> {
	// 	if(!logic.userId) this.props.history.push('/')
	// 	if (paramsUserId !== logic.userId){
	// 		this.props.history.push(`/home/${logic.userId}`)
  //   }
  //   return true

  // }

  goHome = (userId) => this.props.history.push(`/home/${userId}`)

  render() {
    return (
      <Switch>
        <main>
          <div className="App">
            {

            }
            <Route exact path="/" component={Landing} />
            <Route path="/login" render={()=> <Login onBackLanding={this.goLanding} onRegister={this.goRegister} onLogin={this.goHome}/>} />
            <Route path="/register" render={() => <Register picture={this.state.picture} onClickUploadPicture={this.goToUploadPicture} onBackLanding={this.goLanding}/>} />
            <Route path="/upload_picture" render={props => <UploadPicture onUploadPicture={this.uploadPicture} />} />
            <Route path="/home/:userId" component={Home} />
            {/* <Route path="/home" render={()=> ((Xtorage.session.get("user") === null)? (<Redirect to="/"/>):(<Home/>))}/> */}

            {/* <Route path="/profile" render={()=> ((Xtorage.session.get("user") === null)? (<Redirect to="/"/>):(<Profile/>))}/> */}
          </div>
        </main>
      </Switch>
    );
  }
}

export default withRouter(App);

