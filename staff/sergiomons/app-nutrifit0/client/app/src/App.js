import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Register, Login, Home, Categories, ProductsByCategory, Nav, Footer, Cart, Order } from './components'
import './App.css';
import api from 'client-api';
import logic from './logic'
import ProductDetails from './components/products/details-product';
import {Animated} from "react-animated-css";


api.token = function (token) {
  if (typeof token === 'undefined') {
    if (token === null)
      sessionStorage.removeItem('token')
    else
      sessionStorage.setItem('token', token)

    return
  }
  return sessionStorage.getItem('token')
}

logic.userId = function (userId) {
  if (typeof userId !== 'undefined') {
    if (userId === null)
      sessionStorage.removeItem('userId')
    else
      sessionStorage.setItem('userId', userId)

    return
  }

  return sessionStorage.getItem('userId')
}

const cart = sessionStorage.getItem('cart')

if (cart && cart !== 'undefined')
  logic._cart = JSON.parse(cart)

logic.cart = function (cart) {
  if (typeof cart !== 'undefined') {
    if (cart === null)
      sessionStorage.removeItem('cart')
    else
      sessionStorage.setItem('cart', JSON.stringify(cart))

    return
  }

  return this._cart
}


class App extends Component {

  state = {
    userData: {},
  }

  componentDidMount() {

    if (logic.loggedIn) {
    logic.retrieveUser()
    .then(userData => {
          this.setState({
          userData
      })
    })
  }
  }

  onLogin = () => {

        logic.retrieveUser()
        .then(userData => {
              this.setState({
              userData
          })
        })
  }

  render() {
    return (
      <div className="App">
        <Nav userData={this.state.userData}/>
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/category/:categoryId/subcategories' component={Categories}/>
            <Route path='/category/:categoryId/products/' component={ProductsByCategory}/>
            <Route path='/product/:productId' component={ProductDetails}/>
            <Route path='/cart' render={() => <Cart onRemoveItems={this.onRemoveFromCart}/>} /> 
            <Route path='/order' render={() => <Order onRemoveItems={this.onRemoveFromCart}/>} />
            <Route path='/register' render={() => (!logic.loggedIn) ? <Register/> : <Redirect to='/' />}/>
            <Route path='/auth' render={() => (!logic.loggedIn) ? <Login onLogin={this.onLogin}/> : <Redirect to='/' />} />
        </Switch>
        </Animated>
        <Footer/>
      </div>
    );
  }
}

export default App;



{/* <div className="App">
<Menu />
<Header />
<Route exact path="/" render={() => <Landing />} />
{
  <Route exact path="/register" render={() => {
    return this.state.registered ?
      <Link to="/login"><Login /></Link>
      :
      <Register onRegister={this.onRegister} onRegisterError={this.onRegisterError} />
  }} />
}
<Route exact path="/login" render={() => !logic.loggedIn && <Login onLogin={this.onLogin} onLoginError={this.onLoginError} />} />
{logic.loggedIn && <Route exact path="/home" render={() => <Home onLogout={this.onLogout} />} />}
<Footer />
</div> */}