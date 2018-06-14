import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import RedirectWithStatus from './redirect-w-status.jsx';
import Navbar from './navbar.jsx';
import routeOptions from '../routes/routes';
import PrivateRoute from './private-route.jsx';
import logic from '../logic'

class App extends Component {
    render() {

        logic.init()

        let routes = routeOptions.routes.map(({ path, component, exact }, i) =>
            <Route key={Math.random() + 'ROUTE_'} exact={exact} path={path} component={component} />
        );
        let privateRoutes = routeOptions.privateRoutes.map(({ path, component, exact }, i) =>
            <PrivateRoute key={Math.random() + 'PRIVATEROUTE_'} exact={exact} path={path} component={component} />
        );
        let redirects = routeOptions.redirects.map(({ from, to, status }, i) =>
            <RedirectWithStatus key={Math.random() + 'REDIRECT_'} from={from} to={to} status={status} />
        );

        return (
            <div>
                <Navbar />
                <Switch>
                    {routes}
                    {privateRoutes}
                    {redirects}
                </Switch>
            </div>
        );
    }
}
export default withRouter(App);