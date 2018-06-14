import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Landing from './components/Landing/landing.js'
import Login from './components/Login/login'
import Register from './components/Register/register'
import UploadPicture from './components/UploadPicture/upload-picture'
import Home from './components/Home/home'
//import Profile from './components/Profile/Profile'

import './index.css'

class App extends Component {
  state = { picture: undefined }

  goToUploadPicture = () => this.props.history.push("/upload_picture")

  uploadPicture = (picture) => {
    this.setState({ picture })

    this.props.history.push('/users')
  }

  render() {
    return (
      <Switch>
        <main>
          <div className="App">
            {

            }
            <Route exact path="/" component={Landing} />
            <Route path="/auth" component={Login} />
            <Route path="/users" render={() => <Register picture={this.state.picture} onClickUploadPicture={this.goToUploadPicture} />} />
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

