import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Landing from './components/landing'
import Login from './components/login'
import Register from './components/register'
import UploadPicture from './components/upload-picture'
import Home from './components/home'
import ProjectList from './components/projects-list'
import Profile from './components/profile'
import ProjectPage from './components/project-page'

import logic from './logic'

import './index.css'

class App extends Component {
  state = { 
    picture: undefined ,
    userId: ''
  }

  goToUploadPicture = () => this.props.history.push("/upload_picture")
  goLanding = () => {
    if (logic.userId) {
      this.props.history.push(`/home/${logic.userId}`)
    }else{
      this.props.history.push("/")

    }
  }
  goRegister= () => this.props.history.push("/register")


  uploadPicture = (picture) => {
    this.setState({ picture })

    this.props.history.push('/register')
  }

  correctingRoute = (paramsUserId)=> {
		if(!logic.userId) this.props.history.push('/')
		if (paramsUserId !== logic.userId){
			this.props.history.push(`/home/${logic.userId}`)
    }
    return true

  }

 

  goHome = (userId) => {
    this.setState({userId})
    this.props.history.push(`/home/${userId}`)
  }

  goProjectInfo= (projectId) =>{
    this.props.history.push(`/castings/${projectId}`)
  }

  logOut=()=>{
    logic.userId= undefined
    sessionStorage.clear()
    this.props.history.push("/")
  }

  render() {
    return (
      <Switch>
        <main>
          <div className="App">
            {

            }
            <Route exact path="/" render={()=> <Landing onHome={this.goHome}/>} />
            <Route path="/login" render={()=> <Login onBackLanding={this.goLanding} onRegister={this.goRegister} onLogin={this.goHome}/>} />
            <Route path="/register" render={() => <Register picture={this.state.picture} onClickUploadPicture={this.goToUploadPicture} onBackLanding={this.goLanding}/>} />
            <Route path="/upload_picture" render={() => <UploadPicture onUploadPicture={this.uploadPicture} onRegister={this.goRegister}/>} />
            
            <Route exact path="/castings" render={()=> <ProjectList onBackLanding={this.goLanding} onRegister={this.goRegister} onLogin={this.goHome} onProjectInfo={this.goProjectInfo}/>} />
            <Route path="/home/:userId" render={()=> <Home onCorrection={this.correctingRoute} onLogOut={this.goLanding} userId={this.state.userId} onProjectInfo={this.goProjectInfo}/>} />
            
            <Route path="/profile" render={()=> <Profile logOut={this.logOut} unregister={this.unregister} onBackLanding={this.goLanding}/>}/>
            <Route path="/castings/:projectId" render={(props)=> <ProjectPage projectId={props.match.params.projectId} onHome={this.goHome}/>} />

          </div>
        </main>
      </Switch>
    );
  }
}

export default withRouter(App);

