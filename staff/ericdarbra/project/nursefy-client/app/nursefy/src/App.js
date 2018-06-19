
import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Landing, Login, Register, Home, HomeAdmin}  from './components'
import './App.css';
import logic from './logic'

logic.init()

class App extends Component {
  render() {
    return (

      <div>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />  
          <Route path="/home" component={Home}/>
          <Route path="/home-admin" component={HomeAdmin}/>      
        </Switch>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
