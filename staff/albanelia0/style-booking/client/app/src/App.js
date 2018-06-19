import React, { Component } from 'react';
import Home from './component/home'
import Calendar from './component/calendar'
import {PrivateRoute} from './component/privateRoute'
import { Switch, Route } from 'react-router-dom'
import { Login } from './component/login';
import { Register } from './component/register';
import BookingHours from './component/bookingHours';
import Profile from './component/profile';
import ConfirmBooking from './component/confirmBooking';
import './design/App.css';
import Navbar from './component/navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar ref={navbar => navbar ? this.navbarLogin = navbar.login : null} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/calendar/:year/:month' component={Calendar} />
          <Route exact path='/calendar/:year/:month/:day' component={BookingHours}/>
          <Route path='/login' render={(routeProps) => <Login {...routeProps} navbarLogin={this.navbarLogin} />} />
          <Route path='/register' component={Register} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/confirmBooking" component={ConfirmBooking} />
        </Switch>
      </div>
    )
  }
}

export default App;
