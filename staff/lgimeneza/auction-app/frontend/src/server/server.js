import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { StaticRouter as Router, matchPath } from 'react-router';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import helmet from 'react-helmet';
import App from '../shared/app/app.jsx';
import reducers from '../shared/app/redux/reducers/combine';
import thunk from '../shared/app/redux/middleware/thunk';
import routeBank from '../shared/routes/routes';

const app = express();

app.use('/dist', express.static('./dist'));

app.get('*', async (req, res) => {
	try {
		// create a new redux store on each request
		const store = createStore(reducers, {}, applyMiddleware(thunk));
		let foundPath = null;
		// match request url to our React Router paths and grab component
		let { component } = routeBank.routes.find(
			({ path, exact }) => {
				foundPath = matchPath(req.url,
					{
						path,
						exact,
						strict: false
					}
				)
				return foundPath;
			}) || {};
		// safety check for valid component, if no component we initialize an empty shell
		if (!component)
			component = {};
		// safety check for fetchData function, if no function we give it an empty promise
		if (!component.fetchData)
			component.fetchData = () => new Promise(resolve => resolve());
		// our isomorphic application grabbing async data
		await component.fetchData({ store, params: (foundPath ? foundPath.params : {}) });
		// get store state (js object of entire store)
		let preloadedState = store.getState();
		// context is used by react router, empty by default
		let context = {};
		const html = ReactDOM.renderToString(
			<Provider store={store}>
				<Router context={context} location={req.url}>
					<App />
				</Router>
			</Provider>
		)
		// render helmet data aka meta data in <head></head>
		const helmetData = helmet.renderStatic();
		// check context for url, if url exists then react router has ran into a redirect
		if (context.url)
			// process redirect through express by redirecting
			res.redirect(context.status, 'http://' + req.headers.host + context.url);
		else if (foundPath && foundPath.path == '/404')
			// if 404 then send our custom 404 page with initial state and meta data, this is needed for status code 404
			res.status(404).send(renderFullPage(html, preloadedState, helmetData))
		else
			// else send down page with initial state and meta data
			res.send(renderFullPage(html, preloadedState, helmetData))
	} catch (error) {
		res.status(400).send(renderFullPage('An error occured.', {}, {}));
	}
});

const port = process.env.PORT || 9000;
app.listen(port, function () {
	console.log('app running on localhost:' + port);
});

function renderFullPage(html, preloadedState, helmet) {
	return `
    <!doctype html>
    <html>
      <head>
		<link rel="icon" href="/dist/favicon.ico" type="image/ico" />
		
		<!-- Google font -->
		<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700" rel="stylesheet">  
	  
		<!-- Bootstrap -->
		<link type="text/css" rel="stylesheet" href="/dist/assets/styles/bootstrap.min.css"/>
		
		<!-- Slick -->
		<link type="text/css" rel="stylesheet" href="/dist/assets/styles/slick.css"/>
		<link type="text/css" rel="stylesheet" href="/dist/assets/styles/slick-theme.css"/>
	  
		<!-- nouislider -->
		<link type="text/css" rel="stylesheet" href="/dist/assets/styles/nouislider.min.css"/>
	  
		<!-- Font Awesome Icon -->
		<link rel="stylesheet" href="/dist/assets/styles/font-awesome.min.css">
		
		<!-- Custom stlylesheet -->
		<link rel="stylesheet" href="/dist/assets/styles/style.css"/>

        ${helmet.title.toString()}
        ${helmet.meta.toString()}
		${helmet.link.toString()}
		
      </head>
	  <body>
		<div id="root">${html}</div>
		
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
		</script>

		<script src="/dist/assets/js/jquery.min.js"></script>
		<script src="/dist/assets/js/bootstrap.min.js"></script>
		<script src="/dist/assets/js/slick.min.js"></script>
		<script src="/dist/assets/js/nouislider.min.js"></script>
		<script src="/dist/assets/js/jquery.zoom.min.js"></script>
		<script src="/dist/assets/js/main.js"></script>
		<script src="/dist/assets/app.bundle.js"></script>

      </body>
    </html>
    `
}