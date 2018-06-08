import React, { Component } from 'react';
import {Route, withRouter, Switch, Redirect} from 'react-router-dom';

import castmeApi from '../../../CastMe Api/src';
import './App.css';
import Landing from './components/Landing/landing.js'
//import Home from './components/Home/Home'
//import Login from './components/Login/Login'
//import Profile from './components/Profile/Profile'
//import Register from './components/RegisterUser/Register'

class App extends Component {
  render() {
    return (
      <Switch>
        <main>
          <div className="App">
            <Route exact path="/" component={Landing} />
          
            {/* <Route path="/auth" component={Login} /> */}
            {/* <Route path="/users" component={Register} /> */}
          
            {/* <Route path="/home" render={()=> ((Xtorage.session.get("user") === null)? (<Redirect to="/"/>):(<Home/>))}/> */}
          
            {/* <Route path="/profile" render={()=> ((Xtorage.session.get("user") === null)? (<Redirect to="/"/>):(<Profile/>))}/> */}
            </div>
        </main>
      </Switch>
    );
  }
}

export default withRouter(App);

