import React, { Component } from 'react';
import { Landing, Home, Register, Login, Products } from './components'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/auth" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/products" component={Products} />
      </Switch>
    )
  }

}

export default App;
