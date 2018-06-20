import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Register, Login, Home, Categories, ProductsByCategory, Nav, Footer, Cart, Order } from './components'
import './App.css';
import api from 'client-api';
import logic from './logic'
import ProductDetails from './components/products/details-product';
import {Animated} from "react-animated-css";


api.token = function (token) {
  if (typeof token !== 'undefined') {
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

  // onAddToCart = id => {
  //   logic.addProductToCart(id)
  //   .then(() => {
        
  //       this.setState({ cartLength: logic.cart().length })

  //     })
  //     .catch(err => err)
  // }

  render() {
    return (
      <div className="App">
        <Nav userData={this.state.userData} />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/category/:categoryId/subcategories' render={props=> <Categories categoryId={props.match.params.categoryId}/* refreshCart={this.onAddToCart} *//>}/>
            <Route path='/category/:categoryId/products/' render={props=> <ProductsByCategory categoryId={props.match.params.categoryId}/* refreshCart={this.onAddToCart} *//>}/>
            <Route path='/product/:productId'  render={props=> <ProductDetails productId={props.match.params.productId}/* refreshCart={this.onAddToCart} *//>}/>
            <Route path='/cart' render={()=> <Cart/>} /> 
            <Route path='/order' render={()=> <Order/>} />
            <Route path='/register' render={()=> (!logic.loggedIn) ? <Register/> : <Redirect to='/' />}/>
            <Route path='/auth' render={()=> (!logic.loggedIn) ? <Login onLogin={this.onLogin}/> : <Redirect to='/' />} />
        </Switch>
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