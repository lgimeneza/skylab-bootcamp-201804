import React from 'react';
import { Landing, Register, Login, Categories, Products, ProductData, OurTeam, Profile, Cart } from './components'
import { Switch, Route } from 'react-router-dom'

function App() {

    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/our-team" component={OurTeam} />
        <Route exact path="/auth" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/categories/:id" component={Products} />
        <Route exact path="/categories/products/:id" component={ProductData} />
      </Switch>
    )
}

export default App;
