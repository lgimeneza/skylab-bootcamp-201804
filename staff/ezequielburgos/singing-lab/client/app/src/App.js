import React, { Component } from 'react';
import { Landing, Register, Login, Categories, Products, ProductData, OurTeam } from './components'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/auth" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/our-team" component={OurTeam} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/categories/:id" component={Products} />
        <Route exact path="/categories/products/:id" component={ProductData} />
      </Switch>
    )
  }

}

export default App;
