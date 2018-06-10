/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/mainPage.js":
/*!********************************!*\
  !*** ./src/server/mainPage.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = renderFullPage;
function renderFullPage(html, preloadedState, helmet) {
	return '\n    <!doctype html>\n    <html>\n      <head>\n\t\t<link rel="icon" href="/dist/favicon.ico" type="image/ico" />\n\t\t\n\t\t<!-- Google font -->\n\t\t<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700" rel="stylesheet">  \n\t  \n\t\t<!-- Bootstrap -->\n\t\t<link type="text/css" rel="stylesheet" href="/dist/assets/styles/bootstrap.min.css"/>\n\t\t\n\t\t<!-- Slick -->\n\t\t<link type="text/css" rel="stylesheet" href="/dist/assets/styles/slick.css"/>\n\t\t<link type="text/css" rel="stylesheet" href="/dist/assets/styles/slick-theme.css"/>\n\t  \n\t\t<!-- nouislider -->\n\t\t<link type="text/css" rel="stylesheet" href="/dist/assets/styles/nouislider.min.css"/>\n\t  \n\t\t<!-- Font Awesome Icon -->\n\t\t<link rel="stylesheet" href="/dist/assets/styles/font-awesome.min.css">\n\t\t\n\t\t<!-- Custom stlylesheet -->\n\t\t<link rel="stylesheet" href="/dist/assets/styles/style.css"/>\n\n        ' + (Object.keys(helmet).length !== 0 && helmet.title.toString()) + '\n        ' + (Object.keys(helmet).length !== 0 && helmet.meta.toString()) + '\n\t\t' + (Object.keys(helmet).length !== 0 && helmet.link.toString()) + '\n\t\t\n      </head>\n\t  <body>\n\t\t<div id="root">' + html + '</div>\n\t\t\n        <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n\t\t</script>\n\n\t\t<script src="/dist/assets/js/jquery.min.js"></script>\n\t\t<script src="/dist/assets/js/bootstrap.min.js"></script>\n\t\t<script src="/dist/assets/js/slick.min.js"></script>\n\t\t<script src="/dist/assets/js/nouislider.min.js"></script>\n\t\t<script src="/dist/assets/js/jquery.zoom.min.js"></script>\n\t\t<script src="/dist/assets/js/main.js"></script>\n\t\t<script src="/dist/assets/app.bundle.js"></script>\n\n      </body>\n    </html>\n    ';
}

/***/ }),

/***/ "./src/server/renderRoute.js":
/*!***********************************!*\
  !*** ./src/server/renderRoute.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _app = __webpack_require__(/*! ../shared/app/app.jsx */ "./src/shared/app/app.jsx");

var _app2 = _interopRequireDefault(_app);

var _combine = __webpack_require__(/*! ../shared/app/redux/reducers/combine */ "./src/shared/app/redux/reducers/combine.js");

var _combine2 = _interopRequireDefault(_combine);

var _thunk = __webpack_require__(/*! ../shared/app/redux/middleware/thunk */ "./src/shared/app/redux/middleware/thunk.js");

var _thunk2 = _interopRequireDefault(_thunk);

var _routes = __webpack_require__(/*! ../shared/routes/routes */ "./src/shared/routes/routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _mainPage = __webpack_require__(/*! ./mainPage */ "./src/server/mainPage.js");

var _mainPage2 = _interopRequireDefault(_mainPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async function renderRoute(req, res) {
	try {
		// create a new redux store on each request
		var store = (0, _redux.createStore)(_combine2.default, {}, (0, _redux.applyMiddleware)(_thunk2.default));
		var foundPath = null;
		// match request url to our React Router paths and grab component

		var _ref = _routes2.default.routes.find(function (_ref2) {
			var path = _ref2.path,
			    exact = _ref2.exact;

			foundPath = (0, _reactRouter.matchPath)(req.url, {
				path: path,
				exact: exact,
				strict: false
			});
			return foundPath;
		}) || {},
		    component = _ref.component;

		// safety check for valid component, if no component we initialize an empty shell


		if (!component) component = {};
		// safety check for fetchData function, if no function we give it an empty promise
		if (!component.fetchData) component.fetchData = function () {
			return new Promise(function (resolve) {
				return resolve();
			});
		};
		// our isomorphic application grabbing async data
		await component.fetchData({ store: store, params: foundPath ? foundPath.params : {} });
		// get store state (js object of entire store)
		var preloadedState = store.getState();
		// context is used by react router, empty by default
		var context = {};
		var html = _server2.default.renderToString(_react2.default.createElement(
			_reactRedux.Provider,
			{ store: store },
			_react2.default.createElement(
				_reactRouter.StaticRouter,
				{ context: context, location: req.url },
				_react2.default.createElement(_app2.default, null)
			)
		));
		// render helmet data aka meta data in <head></head>
		var helmetData = _reactHelmet2.default.renderStatic();
		// check context for url, if url exists then react router has ran into a redirect
		if (context.url)
			// process redirect through express by redirecting
			res.redirect(context.status, 'http://' + req.headers.host + context.url);else if (foundPath && foundPath.path == '/404')
			// if 404 then send our custom 404 page with initial state and meta data, this is needed for status code 404
			res.status(404).send((0, _mainPage2.default)(html, preloadedState, helmetData));else
			// else send down page with initial state and meta data
			res.send((0, _mainPage2.default)(html, preloadedState, helmetData));
	} catch (error) {
		res.status(400).send((0, _mainPage2.default)('An error occured.', {}, {}));
	}
};

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _renderRoute = __webpack_require__(/*! ./renderRoute */ "./src/server/renderRoute.js");

var _renderRoute2 = _interopRequireDefault(_renderRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Configuration ===============================================================
var app = (0, _express2.default)();
app.use('/dist', _express2.default.static('./dist'));

app.get('*', _renderRoute2.default);

var port = process.env.PORT || 9000;

// Launch ======================================================================
// Starts the Express server on port 9000 and logs that it has started
app.listen(port, function () {
	console.log('Express server started at: http://localhost:' + port + '/'); // eslint-disable-line no-console
});

/***/ }),

/***/ "./src/shared/app/app.jsx":
/*!********************************!*\
  !*** ./src/shared/app/app.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _redirectWStatus = __webpack_require__(/*! ./redirect-w-status.jsx */ "./src/shared/app/redirect-w-status.jsx");

var _redirectWStatus2 = _interopRequireDefault(_redirectWStatus);

var _navbar = __webpack_require__(/*! ./navbar.jsx */ "./src/shared/app/navbar.jsx");

var _navbar2 = _interopRequireDefault(_navbar);

var _routes = __webpack_require__(/*! ../routes/routes */ "./src/shared/routes/routes.js");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var routes = _routes2.default.routes.map(function (_ref, i) {
                var path = _ref.path,
                    component = _ref.component,
                    exact = _ref.exact;
                return _react2.default.createElement(_reactRouterDom.Route, { key: Math.random() + 'ROUTE_', exact: exact, path: path, component: component });
            });
            var redirects = _routes2.default.redirects.map(function (_ref2, i) {
                var from = _ref2.from,
                    to = _ref2.to,
                    status = _ref2.status;
                return _react2.default.createElement(_redirectWStatus2.default, { key: Math.random() + 'REDIRECT_', from: from, to: to, status: status });
            });
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_navbar2.default, null),
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    routes,
                    redirects
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(App);

/***/ }),

/***/ "./src/shared/app/landing.jsx":
/*!************************************!*\
  !*** ./src/shared/app/landing.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

var _products = __webpack_require__(/*! ./redux/actions/products */ "./src/shared/app/redux/actions/products.js");

var actions = _interopRequireWildcard(_products);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Landing = function (_Component) {
    _inherits(Landing, _Component);

    function Landing() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Landing);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Landing.__proto__ || Object.getPrototypeOf(Landing)).call.apply(_ref, [this].concat(args))), _this), _this.onProductClickHandler = function (id) {
            return function (e) {
                e.preventDefault();
                _this.props.history.push('/product/' + id);
            };
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Landing, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.getProducts();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { id: 'store', className: 'col-md-12' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        this.props.products.map(function (product) {
                            return _react2.default.createElement(
                                'div',
                                { className: 'col-md-4 col-xs-6', key: product._id, onClick: _this2.onProductClickHandler(product._id) },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'product' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'product-img' },
                                        _react2.default.createElement('img', { src: '/dist/assets/' + product.image, alt: '' }),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'product-label' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'new' },
                                                'NEW'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'product-body' },
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'product-category' },
                                            'Category'
                                        ),
                                        _react2.default.createElement(
                                            'h3',
                                            { className: 'product-name' },
                                            _react2.default.createElement(
                                                'a',
                                                { href: '#' },
                                                product.title
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'product-price' },
                                            product.startPrice,
                                            '\u20AC'
                                        ),
                                        _react2.default.createElement('div', { className: 'product-rating' }),
                                        _react2.default.createElement(
                                            'button',
                                            { type: 'button', className: 'btn btn-primary' },
                                            'Make offer'
                                        )
                                    )
                                )
                            );
                        })
                    )
                )
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref2) {
            var store = _ref2.store;

            return store.dispatch(actions.getProducts());
        }
    }]);

    return Landing;
}(_react.Component);

function mapStateToProps(state) {
    return _extends({}, state.products);
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Landing);

/***/ }),

/***/ "./src/shared/app/navbar.jsx":
/*!***********************************!*\
  !*** ./src/shared/app/navbar.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home() {
		_classCallCheck(this, Home);

		return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	}

	_createClass(Home, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'header',
					null,
					_react2.default.createElement(
						'div',
						{ id: 'top-header' },
						_react2.default.createElement(
							'div',
							{ className: 'container' },
							_react2.default.createElement(
								'ul',
								{ className: 'header-links pull-left' },
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: '#' },
										_react2.default.createElement('i', { className: 'fa fa-phone' }),
										' +021-95-51-84'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: '#' },
										_react2.default.createElement('i', { className: 'fa fa-envelope-o' }),
										' email@email.com'
									)
								)
							),
							_react2.default.createElement(
								'ul',
								{ className: 'header-links pull-right' },
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: '#' },
										_react2.default.createElement('i', { className: 'fa fa-user-o' }),
										' My Account'
									)
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ id: 'header' },
						_react2.default.createElement(
							'div',
							{ className: 'container' },
							_react2.default.createElement(
								'div',
								{ className: 'row' },
								_react2.default.createElement(
									'div',
									{ className: 'col-md-3' },
									_react2.default.createElement(
										'div',
										{ className: 'header-logo' },
										_react2.default.createElement(
											'a',
											{ href: '#', className: 'logo' },
											_react2.default.createElement('img', { src: './img/logo.png', alt: '' })
										)
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'col-md-6' },
									_react2.default.createElement(
										'div',
										{ className: 'header-search' },
										_react2.default.createElement(
											'form',
											null,
											_react2.default.createElement('input', { className: 'input', placeholder: 'Search here' }),
											_react2.default.createElement(
												'button',
												{ className: 'search-btn' },
												'Search'
											)
										)
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'col-md-3 clearfix' },
									_react2.default.createElement(
										'div',
										{ className: 'header-ctn' },
										_react2.default.createElement(
											'div',
											null,
											_react2.default.createElement(
												'a',
												{ href: '#' },
												_react2.default.createElement('i', { className: 'fa fa-heart-o' }),
												_react2.default.createElement(
													'span',
													null,
													'Your Wishlist'
												),
												_react2.default.createElement(
													'div',
													{ className: 'qty' },
													'2'
												)
											)
										),
										_react2.default.createElement(
											'div',
											{ className: 'menu-toggle' },
											_react2.default.createElement(
												'a',
												{ href: '#' },
												_react2.default.createElement('i', { className: 'fa fa-bars' }),
												_react2.default.createElement(
													'span',
													null,
													'Menu'
												)
											)
										)
									)
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'nav',
					{ id: 'navigation' },
					_react2.default.createElement(
						'div',
						{ className: 'container' },
						_react2.default.createElement(
							'div',
							{ id: 'responsive-nav' },
							_react2.default.createElement(
								'ul',
								{ className: 'main-nav nav navbar-nav' },
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										_reactRouterDom.Link,
										{ to: '/' },
										'Home'
									)
								)
							)
						)
					)
				)
			);
		}
	}], [{
		key: 'fetchData',
		value: function fetchData() {}
	}]);

	return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ "./src/shared/app/product.jsx":
/*!************************************!*\
  !*** ./src/shared/app/product.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

var _product = __webpack_require__(/*! ./redux/actions/product */ "./src/shared/app/redux/actions/product.js");

var actions = _interopRequireWildcard(_product);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Product = function (_Component) {
    _inherits(Product, _Component);

    function Product() {
        _classCallCheck(this, Product);

        return _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).apply(this, arguments));
    }

    _createClass(Product, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var id = this.props.match.params.id;

            this.props.getProduct(id);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                params = _props.match.params,
                product = _props.product;

            return _react2.default.createElement(
                'div',
                { className: 'section' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-5 col-md-push-2' },
                            _react2.default.createElement(
                                'div',
                                { id: 'product-main-img' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'product-preview' },
                                    _react2.default.createElement('img', { src: '/dist/assets/' + product.image, alt: '' })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-2  col-md-pull-5' },
                            _react2.default.createElement(
                                'div',
                                { id: 'product-imgs' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'product-preview' },
                                    _react2.default.createElement('img', { src: '/dist/assets/images/product01.png', alt: '' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'product-preview' },
                                    _react2.default.createElement('img', { src: '/dist/assets/images/product03.png', alt: '' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'product-preview' },
                                    _react2.default.createElement('img', { src: '/dist/assets/images/product08.png', alt: '' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'product-preview' },
                                    _react2.default.createElement('img', { src: '/dist/assets/images/product06.png', alt: '' })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-5' },
                            _react2.default.createElement(
                                'div',
                                { className: 'product-details' },
                                _react2.default.createElement(
                                    'h2',
                                    { className: 'product-name' },
                                    product.title
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'h3',
                                        { className: 'product-price' },
                                        product.startPrice,
                                        '\u20AC '
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'product-available' },
                                        'Active'
                                    )
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    product.description
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'add-to-cart' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'qty-label' },
                                        'Enter your bid',
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'input-number' },
                                            _react2.default.createElement('input', { type: 'number', value: product.startPrice }),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'qty-up' },
                                                '+'
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'qty-down' },
                                                '-'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'add-to-cart-btn' },
                                        _react2.default.createElement('i', { className: 'fa fa-shopping-cart' }),
                                        ' Submit bid'
                                    )
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'product-links' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Share:'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#' },
                                            _react2.default.createElement('i', { className: 'fa fa-facebook' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#' },
                                            _react2.default.createElement('i', { className: 'fa fa-twitter' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#' },
                                            _react2.default.createElement('i', { className: 'fa fa-google-plus' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#' },
                                            _react2.default.createElement('i', { className: 'fa fa-envelope' })
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store,
                id = _ref.params.id;

            return store.dispatch(actions.getProduct(id));
        }
    }]);

    return Product;
}(_react.Component);

function mapStateToProps(state) {
    return _extends({}, state.product);
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Product);

/***/ }),

/***/ "./src/shared/app/redirect-w-status.jsx":
/*!**********************************************!*\
  !*** ./src/shared/app/redirect-w-status.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RedirectWithStatus = function RedirectWithStatus(_ref) {
    var key = _ref.key,
        from = _ref.from,
        to = _ref.to,
        status = _ref.status;
    return _react2.default.createElement(_reactRouterDom.Route, { render: function render(_ref2) {
            var staticContext = _ref2.staticContext;

            // there is no `staticContext` on the client, so
            // we need to guard against that here
            if (staticContext) staticContext.status = status;
            return _react2.default.createElement(_reactRouterDom.Redirect, { key: key, from: from, to: to });
        } });
};
exports.default = RedirectWithStatus;

/***/ }),

/***/ "./src/shared/app/redux/actions/product.js":
/*!*************************************************!*\
  !*** ./src/shared/app/redux/actions/product.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getProduct = getProduct;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var _axios = __webpack_require__(/*! axios */ "axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getProduct(id) {
    return async function (dispatch, getState) {
        var _ref = await getProductFromAPI(id),
            data = _ref.data.data;

        dispatch({ type: _constants.Types.UPDATE_PRODUCT, payload: { product: data } });
    };
}
function getProductFromAPI(id) {
    return _axios2.default.get('http://localhost:5000/api/product/' + id);
}

/***/ }),

/***/ "./src/shared/app/redux/actions/products.js":
/*!**************************************************!*\
  !*** ./src/shared/app/redux/actions/products.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getProducts = getProducts;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var _logic = __webpack_require__(/*! ../../../logic */ "./src/shared/logic/index.js");

var _logic2 = _interopRequireDefault(_logic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getProducts() {
    return async function (dispatch, getState) {
        var products = await _logic2.default.listProducts();
        dispatch({ type: _constants.Types.UPDATE_PRODUCTS, payload: { products: products } });
    };
}

/***/ }),

/***/ "./src/shared/app/redux/actions/user.js":
/*!**********************************************!*\
  !*** ./src/shared/app/redux/actions/user.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getName = getName;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var _axios = __webpack_require__(/*! axios */ "axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getName(id) {
    return async function (dispatch, getState) {
        var _ref = await getUserFromAPI(id),
            data = _ref.data;

        dispatch({ type: _constants.Types.UPDATE_NAME, payload: data });
    };
}
function getUserFromAPI(id) {
    return _axios2.default.get('https://jsonplaceholder.typicode.com/users/' + id);
}

/***/ }),

/***/ "./src/shared/app/redux/constants/index.js":
/*!*************************************************!*\
  !*** ./src/shared/app/redux/constants/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Types = exports.Types = {
    UPDATE_PRODUCT: 'UPDATE_PRODUCT',
    UPDATE_PRODUCTS: 'UPDATE_PRODUCTS',
    UPDATE_NAME: 'UPDATE_NAME'
};

/***/ }),

/***/ "./src/shared/app/redux/middleware/thunk.js":
/*!**************************************************!*\
  !*** ./src/shared/app/redux/middleware/thunk.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var customMiddleware = function customMiddleware(store) {
    return function (next) {
        return function (action) {
            return isFunction(action) ? action(store.dispatch, store.getState) : next(action);
        };
    };
};
var isFunction = function isFunction(action) {
    return typeof action === 'function';
};
exports.default = customMiddleware;

/***/ }),

/***/ "./src/shared/app/redux/reducers/combine.js":
/*!**************************************************!*\
  !*** ./src/shared/app/redux/reducers/combine.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(/*! redux */ "redux");

var _user = __webpack_require__(/*! ./user */ "./src/shared/app/redux/reducers/user.js");

var _user2 = _interopRequireDefault(_user);

var _products = __webpack_require__(/*! ./products */ "./src/shared/app/redux/reducers/products.js");

var _products2 = _interopRequireDefault(_products);

var _product = __webpack_require__(/*! ./product */ "./src/shared/app/redux/reducers/product.js");

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
    user: _user2.default,
    products: _products2.default,
    product: _product2.default
});

exports.default = reducers;

/***/ }),

/***/ "./src/shared/app/redux/reducers/product.js":
/*!**************************************************!*\
  !*** ./src/shared/app/redux/reducers/product.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = productReducer;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var initialState = {
    product: {}
};
function productReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _constants.Types.UPDATE_PRODUCT:
            return _extends({}, state, { product: action.payload.product });
        default:
            return state;
    }
}

/***/ }),

/***/ "./src/shared/app/redux/reducers/products.js":
/*!***************************************************!*\
  !*** ./src/shared/app/redux/reducers/products.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = productsReducer;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var initialState = {
    products: []
};
function productsReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _constants.Types.UPDATE_PRODUCTS:
            return _extends({}, state, { products: action.payload.products });
        default:
            return state;
    }
}

/***/ }),

/***/ "./src/shared/app/redux/reducers/user.js":
/*!***********************************************!*\
  !*** ./src/shared/app/redux/reducers/user.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = userReducer;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var initialState = {
    name: null,
    email: null
};
function userReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _constants.Types.UPDATE_NAME:
            return _extends({}, state, { name: action.payload.name, email: action.payload.email });
        default:
            return state;
    }
}

/***/ }),

/***/ "./src/shared/app/user.jsx":
/*!*********************************!*\
  !*** ./src/shared/app/user.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _user = __webpack_require__(/*! ./redux/actions/user */ "./src/shared/app/redux/actions/user.js");

var actions = _interopRequireWildcard(_user);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_Component) {
    _inherits(User, _Component);

    function User() {
        _classCallCheck(this, User);

        return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
    }

    _createClass(User, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.getName(1);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement('meta', { charSet: 'utf-8' }),
                    _react2.default.createElement(
                        'title',
                        null,
                        'User'
                    )
                ),
                _react2.default.createElement(
                    'strong',
                    null,
                    'User page '
                ),
                'Async data [ name: ',
                this.props.name,
                'email: ',
                this.props.email,
                ']'
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store;

            return store.dispatch(actions.getName(1));
        }
    }]);

    return User;
}(_react.Component);

function mapStateToProps(state) {
    return _extends({}, state.user);
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(User);

/***/ }),

/***/ "./src/shared/logic/index.js":
/*!***********************************!*\
  !*** ./src/shared/logic/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var auctionApi = __webpack_require__(/*! api */ "api");

auctionApi.url = 'http://localhost:5000/api';

var logic = {
    listProducts: function listProducts() {
        return auctionApi.listProducts();
    }
};

module.exports = logic;

/***/ }),

/***/ "./src/shared/routes/routes.js":
/*!*************************************!*\
  !*** ./src/shared/routes/routes.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _user = __webpack_require__(/*! ../app/user.jsx */ "./src/shared/app/user.jsx");

var _user2 = _interopRequireDefault(_user);

var _landing = __webpack_require__(/*! ../app/landing.jsx */ "./src/shared/app/landing.jsx");

var _landing2 = _interopRequireDefault(_landing);

var _product = __webpack_require__(/*! ../app/product.jsx */ "./src/shared/app/product.jsx");

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    routes: [{
        path: '/',
        component: _landing2.default,
        exact: true
    }, {
        path: '/user',
        component: _user2.default,
        exact: true
    }, {
        path: '/product/:id',
        component: _product2.default,
        exact: true
    }],
    redirects: [{
        from: '/people',
        to: '/user',
        status: 301
    }]
};

/***/ }),

/***/ "api":
/*!**********************!*\
  !*** external "api" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("api");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map