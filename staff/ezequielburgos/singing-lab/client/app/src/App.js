import React, { Component } from 'react';
import { Landing, Register, Login, Categories, Products, ProductData, OurTeam, Profile, Cart, Order, Navbar, AllProducts } from './components'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import logic from './logic'

class App extends Component {
  state = {
    loggedIn: logic.loggedIn,
    cartLength: logic.cart().length,
  }

  onLogin = () => {
    this.setState({ loggedIn: true })

    this.props.history.push('/')
  }

  onLogout = () => {
    this.setState({ loggedIn: false })
  }

  onAddToCart = id => {
    logic.addProductToCart(id)
      .then(() => this.setState({ cartLength: logic.cart().length }))
      .catch(err => alert(err.message))
  }


  render() {
    return (
      <div>
        <Navbar loggedIn={this.state.loggedIn} onLogout={this.onLogout} cartLength={this.state.cartLength} />
        <Switch>
          <Route exact path="/" render={() => <Landing />} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/products" component={AllProducts} />
          <Route exact path="/our-team" component={OurTeam} />
          <Route exact path="/auth" render={() => <Login onLogin={this.onLogin} />} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/categories/:id" render={props => <Products categoryId={props.match.params.id} onAddToCart={this.onAddToCart} />} />
          <Route exact path="/categories/products/:id" render={props => <ProductData productId={props.match.params.id} onAddToCart={this.onAddToCart} />} />
          <Redirect to="/" />
        </Switch >
      </div>
    )
  }
}

export default withRouter(App);
