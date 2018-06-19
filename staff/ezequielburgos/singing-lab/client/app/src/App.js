import React, { Component } from 'react';
import { Landing, Register, Login, Categories, Products, ProductData, OurTeam, Profile, Cart, Order, Navbar, AllProducts } from './components'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import logic from './logic'
import swal from 'sweetalert2'
import $ from 'jquery'

class App extends Component {
  state = {
    loggedIn: logic.loggedIn,
    cartLength: logic.cart().length
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
      .then(() => {

        this.setState({ cartLength: logic.cart().length })

        var cart = $(".fa-shopping-cart")
        var imgtodrag = $('#img-' + id);

        if (imgtodrag !== 'undefined'){
          console.log('imgtodrag: ', imgtodrag);

          var imgclone = imgtodrag.clone()
            .offset({
              top: imgtodrag.offset().top,
              left: imgtodrag.offset().left
            })
            .css({
              'opacity': '0.5',
              'position': 'absolute',
              'height': '200px',
              'width': '200px',
              'z-index': '100000'
            })
            .appendTo("body")
            .animate({
              'top': cart.offset().top - 10,
              'left': cart.offset().left - 10,
              'width': 30,
              'height': 30
            }, 1000, "linear");

        setTimeout(function () {
          $(imgclone).remove()
        }, 1000)

        }
      })
      .catch(err => swal(err.message))
  }


  render() {
    return (
      <div>
        <Navbar loggedIn={this.state.loggedIn} onLogout={this.onLogout} cartLength={this.state.cartLength} />
        <Switch>
          <Route exact path="/" render={props => <Landing productId={props.match.params.id} onAddToCart={this.onAddToCart} />} />
          <Route exact path="/our-team" component={OurTeam} />
          <Route exact path="/auth" render={() => <Login onLogin={this.onLogin} />} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/order" component={Order} />
          {/* {this.state.loggedIn ? <Route exact path="/profile" component={Profile} /> : <Redirect to="/" />} */}
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/products" render={props => <AllProducts categoryId={props.match.params.id} onAddToCart={this.onAddToCart} />} />
          <Route exact path="/categories/:id" render={props => <Products categoryId={props.match.params.id} onAddToCart={this.onAddToCart} />} />
          <Route exact path="/categories/products/:id" render={props => <ProductData productId={props.match.params.id} onAddToCart={this.onAddToCart} />} />
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
