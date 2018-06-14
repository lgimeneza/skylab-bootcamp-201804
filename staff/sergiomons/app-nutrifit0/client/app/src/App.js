import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import logic from './logic'
import Register from './components/register'
import Login from './components/login'
import Home from './components/home'
import Categories from './components/categories/categories'
import ProductsByCategory from './components/products/by-category'
import Nav from './components/nav'
import Footer from './components/footer'

class App extends Component {

  // constructor(props) {

  //   super(props)
  // }

  state = {
    userData: {},
    parentsCategory: {},
    categories: {}
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
        <Nav userData={this.state.userData} parentsCategoryData={this.state.parentsCategory}/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/category/:categoryId/subcategories' component={Categories}/>
            <Route path='/category/:categoryId/products' component={ProductsByCategory}/>
            <Route path='/register' render={() => (!logic.loggedIn) ? <Register /> : <Home/>}/>
            <Route path='/auth' render={() => (!logic.loggedIn) ? <Login onLogin={this.onLogin}/> : <Home/>} />
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