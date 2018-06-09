import React, { Component } from 'react';
import { Landing, Home, Register, Login, Categories } from './components'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/auth" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/categories/:id" component={Categories} />
      </Switch>
    )
  }

}

export default App;
