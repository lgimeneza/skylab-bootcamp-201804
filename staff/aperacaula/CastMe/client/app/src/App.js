import React, { Component } from 'react';
import {Route, withRouter, Switch} from 'react-router-dom';
import Landing from './components/Landing/landing.js'
//import Home from './components/Home/Home'
import Login from './components/Login/login'
import Register from './components/Register/register'
import UploadPic from './components/UploadPicture/upload-picture'
//import Profile from './components/Profile/Profile'

import './index.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <main>
          <div className="App">
        
            <Route exact path="/" component={Landing} />
          
            <Route path="/auth" component={Login} />
            <Route path="/users" component={Register} />
            <Route path="/upload_picture" component={UploadPic} />
          
            {/* <Route path="/home" render={()=> ((Xtorage.session.get("user") === null)? (<Redirect to="/"/>):(<Home/>))}/> */}
          
            {/* <Route path="/profile" render={()=> ((Xtorage.session.get("user") === null)? (<Redirect to="/"/>):(<Profile/>))}/> */}
            </div>
        </main>
      </Switch>
    );
  }
}

export default withRouter(App);

