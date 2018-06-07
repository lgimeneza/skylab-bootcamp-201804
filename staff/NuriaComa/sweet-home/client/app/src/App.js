import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing/'
import Home from './components/Home/'
import Login from './components/Login/'
import Register from './components/Register/'
import Xtorage from './Xtorage'

class App extends Component {
  render() {
    return (
      <Switch>
        
          <div className="App">
            <Route exact path="/" component={Landing} />
          
            <Route path="/auth" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
            {/* <Route path="/home" render={()=> ((Xtorage.session.get("user") === null)? (<Redirect to="/"/>):(<Home/>))}/> */}
          
            </div>
        
      </Switch>
    );
  }
}

export default withRouter(App);
