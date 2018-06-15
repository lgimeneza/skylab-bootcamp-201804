import React, { Component } from 'react';
import Home from './component/home'
import Calendar from './component/calendar'
import { Switch, Route } from 'react-router-dom'
import { Login } from './component/login';
import { Register } from './component/register';
import BookingHours from './component/bookingHours';
import Profile from './component/profile';
import './design/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/calendar/:year/:month' component={Calendar} />
          <Route exact path='/calendar/:year/:month/:day' component={BookingHours}/>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={Profile}/>
        </Switch>
      </div>
    )
  }
}

export default App;
