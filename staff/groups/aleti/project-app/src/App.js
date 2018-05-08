import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import { history } from './components/history';
import { alertActions } from './components/alert.actions';
import { PrivateRoute } from './components/PrivateRoute';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

class App extends Component {

  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
        // clear alert on location change
        //dispatch(alertActions.clear());
    });
}

  render() {
    const { alert } = this.props;
    return (
        <div className="jumbotron">
            <div className="container">
                <div className="col-sm-8 col-sm-offset-2">
                    {/* {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    } */}
                    <Router history={history}>
                        <div>
                            <PrivateRoute exact path="/" component={ HomePage } />
                            <Route path="/login" component={ LoginPage } />
                            <Route path="/register" component={ RegisterPage } />
                        </div>
                    </Router>
                </div>
            </div>
        </div>
    );
}
}

export default App