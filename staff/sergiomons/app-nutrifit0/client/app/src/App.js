import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Register, Login, Home, Categories, ProductsByCategory, Nav, Footer, Cart } from './components'
import './App.css';
import logic from './logic'
import ProductDetails from './components/products/details-product';
import {Animated} from "react-animated-css";

class App extends Component {

  state = {
    userData: {},
    removeCartItem: false 
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

  onRemoveFromCart = () => {

    console.log('adfasd')
     this.setState({
      removeCartItem: true
     })
  }

  render() {
console.log(this.state);
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
            <Route path='/register' render={() => (!logic.loggedIn) ? <Register/> : <Home/>}/>
            <Route path='/auth' render={() => (!logic.loggedIn) ? <Login onLogin={this.onLogin}/> : <Home/>} />
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