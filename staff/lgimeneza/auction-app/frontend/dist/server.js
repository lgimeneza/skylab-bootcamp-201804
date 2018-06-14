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
	return '\n    <!doctype html>\n    <html>\n      <head>\n\t\t<link rel="icon" href="/dist/favicon.ico" type="image/ico" />\n\t\t\n\t\t<!-- Google font -->\n\t\t<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700" rel="stylesheet">  \n\t  \n\t\t<!-- Bootstrap -->\n\t\t<link type="text/css" rel="stylesheet" href="/dist/assets/styles/bootstrap.min.css"/>\n\t\t\n\t\t<!-- Slick -->\n\t\t<link type="text/css" rel="stylesheet" href="/dist/assets/styles/slick.css"/>\n\t\t<link type="text/css" rel="stylesheet" href="/dist/assets/styles/slick-theme.css"/>\n\t  \n\t\t<!-- nouislider -->\n\t\t<link type="text/css" rel="stylesheet" href="/dist/assets/styles/nouislider.min.css"/>\n\t  \n\t\t<!-- Font Awesome Icon -->\n\t\t<link rel="stylesheet" href="/dist/assets/styles/font-awesome.min.css">\n\t\t\n\t\t<!-- Custom stlylesheet -->\n\t\t<link rel="stylesheet" href="/dist/assets/styles/style.css"/>\n\n        ' + (Object.keys(helmet).length ? helmet.title.toString() : '') + '\n        ' + (Object.keys(helmet).length ? helmet.meta.toString() : '') + '\n\t\t' + (Object.keys(helmet).length ? helmet.link.toString() : '') + '\n\t\t\n      </head>\n\t  <body>\n\t\t<div id="root">' + html + '</div>\n\t\t\n        <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n\t\t</script>\n\n\t\t<script src="/dist/assets/js/jquery.min.js"></script>\n\t\t<script src="/dist/assets/js/bootstrap.min.js"></script>\n\t\t<script src="/dist/assets/js/slick.min.js"></script>\n\t\t<script src="/dist/assets/js/nouislider.min.js"></script>\n\t\t<script src="/dist/assets/js/jquery.zoom.min.js"></script>\n\t\t<script src="/dist/assets/js/main.js"></script>\n\t\t<script src="/dist/assets/app.bundle.js"></script>\n\n      </body>\n    </html>\n    ';
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
		res.status(400).send((0, _mainPage2.default)('', {}, {}));
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

var _privateRoute = __webpack_require__(/*! ./private-route.jsx */ "./src/shared/app/private-route.jsx");

var _privateRoute2 = _interopRequireDefault(_privateRoute);

var _logic = __webpack_require__(/*! ../logic */ "./src/shared/logic/index.js");

var _logic2 = _interopRequireDefault(_logic);

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

            _logic2.default.init();

            var routes = _routes2.default.routes.map(function (_ref, i) {
                var path = _ref.path,
                    component = _ref.component,
                    exact = _ref.exact;
                return _react2.default.createElement(_reactRouterDom.Route, { key: Math.random() + 'ROUTE_', exact: exact, path: path, component: component });
            });
            var privateRoutes = _routes2.default.privateRoutes.map(function (_ref2, i) {
                var path = _ref2.path,
                    component = _ref2.component,
                    exact = _ref2.exact;
                return _react2.default.createElement(_privateRoute2.default, { key: Math.random() + 'PRIVATEROUTE_', exact: exact, path: path, component: component });
            });
            var redirects = _routes2.default.redirects.map(function (_ref3, i) {
                var from = _ref3.from,
                    to = _ref3.to,
                    status = _ref3.status;
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
                    privateRoutes,
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
            this.props.getProducts(this.props.query);
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
                                            product.maxBid,
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
    var products = state.products,
        query = state.query;

    return { products: products, query: query };
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Landing);

/***/ }),

/***/ "./src/shared/app/login.jsx":
/*!**********************************!*\
  !*** ./src/shared/app/login.jsx ***!
  \**********************************/
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

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

var _user = __webpack_require__(/*! ./redux/actions/user */ "./src/shared/app/redux/actions/user.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
    _inherits(Login, _Component);

    function Login(props) {
        _classCallCheck(this, Login);

        // reset login status
        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.props.logout();

        _this.state = {
            username: '',
            password: '',
            submitted: false
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(Login, [{
        key: 'handleChange',
        value: function handleChange(e) {
            var _e$target = e.target,
                name = _e$target.name,
                value = _e$target.value;

            this.setState(_defineProperty({}, name, value));
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();

            this.setState({ submitted: true });
            var _state = this.state,
                username = _state.username,
                password = _state.password;

            if (username && password) {
                this.props.login(username, password, this.props.history);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var loggingIn = this.props.loggingIn;
            var _state2 = this.state,
                username = _state2.username,
                password = _state2.password,
                submitted = _state2.submitted;

            return _react2.default.createElement(
                'div',
                { className: 'col-md-6 col-md-offset-3' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Login'
                ),
                _react2.default.createElement(
                    'form',
                    { name: 'form', onSubmit: this.handleSubmit },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' + (submitted && !username ? ' has-error' : '') },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'username' },
                            'Username'
                        ),
                        _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'username', value: username, onChange: this.handleChange }),
                        submitted && !username && _react2.default.createElement(
                            'div',
                            { className: 'help-block' },
                            'Username is required'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' + (submitted && !password ? ' has-error' : '') },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'password' },
                            'Password'
                        ),
                        _react2.default.createElement('input', { type: 'password', className: 'form-control', name: 'password', value: password, onChange: this.handleChange }),
                        submitted && !password && _react2.default.createElement(
                            'div',
                            { className: 'help-block' },
                            'Password is required'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-primary' },
                            'Login'
                        ),
                        loggingIn && _react2.default.createElement('img', { src: 'data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==' }),
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/register', className: 'btn btn-link' },
                            'Register'
                        )
                    )
                )
            );
        }
    }]);

    return Login;
}(_react.Component);

function mapStateToProps(state) {
    var loggingIn = state.user.loggingIn;

    return {
        loggingIn: loggingIn
    };
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(_user.userActions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Login);

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

var _user = __webpack_require__(/*! ./redux/actions/user */ "./src/shared/app/redux/actions/user.js");

var _products = __webpack_require__(/*! ./redux/actions/products */ "./src/shared/app/redux/actions/products.js");

var productsActions = _interopRequireWildcard(_products);

var _query = __webpack_require__(/*! ./redux/actions/query */ "./src/shared/app/redux/actions/query.js");

var queryActions = _interopRequireWildcard(_query);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_Component) {
	_inherits(NavBar, _Component);

	function NavBar() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, NavBar);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			query: ''
		}, _this.handleChange = function (e) {
			var _e$target = e.target,
			    name = _e$target.name,
			    value = _e$target.value;

			_this.setState(_defineProperty({}, name, value));
		}, _this.handleSubmit = function (e) {
			e.preventDefault();

			var query = _this.state.query;


			_this.props.setQuery(query);
			_this.props.history.push('/');
		}, _this.handleHomeLink = function (e) {
			e.preventDefault();

			_this.setState({ query: '' });
			_this.props.setQuery('');
			_this.props.history.push('/');
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(NavBar, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.retrieveUser();
		}
	}, {
		key: 'render',
		value: function render() {
			var user = this.props.user;

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
										_reactRouterDom.Link,
										{ to: '/profile' },
										_react2.default.createElement('i', { className: 'fa fa-user-o' }),
										' ',
										Object.keys(user).length ? user.name : 'My Account',
										' '
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
											{ onSubmit: this.handleSubmit },
											_react2.default.createElement('input', { className: 'input', placeholder: 'Search here', name: 'query', value: this.state.query, onChange: this.handleChange }),
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
										{ to: '/', onClick: this.handleHomeLink },
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

	return NavBar;
}(_react.Component);

function mapStateToProps(state) {
	var user = state.user;

	return { user: user };
}
function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(_extends({}, _user.userActions, productsActions, queryActions), dispatch);
}

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(NavBar));

/***/ }),

/***/ "./src/shared/app/private-route.jsx":
/*!******************************************!*\
  !*** ./src/shared/app/private-route.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PrivateRoute = function PrivateRoute(_ref) {
    var Component = _ref.component,
        rest = _objectWithoutProperties(_ref, ['component']);

    return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(props) {
            return localStorage.getItem('user') ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/login', state: { from: props.location } } });
        } }));
};

exports.default = PrivateRoute;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

var _product = __webpack_require__(/*! ./redux/actions/product */ "./src/shared/app/redux/actions/product.js");

var actions = _interopRequireWildcard(_product);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Product = function (_Component) {
    _inherits(Product, _Component);

    function Product() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Product);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Product.__proto__ || Object.getPrototypeOf(Product)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            bid: ''
        }, _this.componentDidMount = function () {
            var id = _this.props.match.params.id;

            _this.props.getProduct(id).then(function () {

                _this.setState({ bid: _this.props.product.maxBid });
            });
        }, _this.handleChange = function (e) {
            var _e$target = e.target,
                name = _e$target.name,
                value = _e$target.value;

            _this.setState(_defineProperty({}, name, value));
        }, _this.handleSubmit = function (e) {
            e.preventDefault();

            //TODO check bid

            var _this$props = _this.props,
                product = _this$props.product,
                user = _this$props.user;


            if (Object.keys(user).length === 0) {

                _this.props.history.push('/login');
            } else {
                var bid = _this.state.bid;


                if (product._id && user._id && bid) {
                    _this.props.addProductBid(product._id, user._id, bid).then(function () {
                        _this.props.getProduct(product._id);
                    });
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Product, [{
        key: 'render',
        value: function render() {
            var product = this.props.product;


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
                                        product.maxBid,
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
                                            _react2.default.createElement('input', { type: 'number', name: 'bid', value: this.bid, onChange: this.handleChange }),
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
                                        { onClick: this.handleSubmit, className: 'add-to-cart-btn' },
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
        value: function fetchData(_ref2) {
            var store = _ref2.store,
                id = _ref2.params.id;

            return store.dispatch(actions.getProduct(id));
        }
    }]);

    return Product;
}(_react.Component);

function mapStateToProps(state) {
    var product = state.product,
        user = state.user;

    return { product: product, user: user };
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Product);

/***/ }),

/***/ "./src/shared/app/profile.jsx":
/*!************************************!*\
  !*** ./src/shared/app/profile.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _user = __webpack_require__(/*! ./redux/actions/user */ "./src/shared/app/redux/actions/user.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_Component) {
    _inherits(Profile, _Component);

    function Profile() {
        _classCallCheck(this, Profile);

        return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
    }

    _createClass(Profile, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.retrieveUser();
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {}
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$user = this.props.user,
                name = _props$user.name,
                surname = _props$user.surname,
                email = _props$user.email,
                password = _props$user.password;

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
                    'div',
                    { className: 'col-md-6 col-md-offset-3 pt-2' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Profile'
                    ),
                    _react2.default.createElement(
                        'form',
                        { name: 'form', onSubmit: this.handleSubmit },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'Name' },
                                'Name'
                            ),
                            _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'name', value: name, onChange: this.handleChange })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'password' },
                                'Surname'
                            ),
                            _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'surname', value: surname, onChange: this.handleChange })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'password' },
                                'Email'
                            ),
                            _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'email', value: email, onChange: this.handleChange })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'password' },
                                'Password'
                            ),
                            _react2.default.createElement('input', { type: 'password', className: 'form-control', name: 'surname', value: password, onChange: this.handleChange })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'button',
                                { className: 'btn btn-primary' },
                                'Save'
                            ),
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/login', className: 'btn btn-link' },
                                'Logout'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Profile;
}(_react.Component);

function mapStateToProps(state) {
    var user = state.user;

    return {
        user: user
    };
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(_user.userActions, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Profile);

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

/***/ "./src/shared/app/redux/actions/alert.js":
/*!***********************************************!*\
  !*** ./src/shared/app/redux/actions/alert.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.alertActions = undefined;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var alertActions = exports.alertActions = {
    success: success,
    error: error,
    clear: clear
};

function success(message) {
    return { type: _constants.alertConstants.SUCCESS, message: message };
}

function error(message) {
    console.log('error message', message);

    return { type: _constants.alertConstants.ERROR, message: message };
}

function clear() {
    return { type: _constants.alertConstants.CLEAR };
}

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
exports.addProductBid = addProductBid;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var _logic = __webpack_require__(/*! ../../../logic */ "./src/shared/logic/index.js");

var _logic2 = _interopRequireDefault(_logic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getProduct(id) {
    return async function (dispatch, getState) {
        var data = await _logic2.default.retrieveProduct(id);
        dispatch({ type: _constants.Types.UPDATE_PRODUCT, payload: data });
    };
}

function addProductBid(productId, userId, bid) {
    return async function (dispatch, getState) {
        var data = await _logic2.default.addProductBid(productId, userId, bid);
        dispatch({ type: _constants.Types.ADD_PRODUCT_BID, payload: data });
    };
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

function getProducts(query) {
    return async function (dispatch, getState) {
        var products = await _logic2.default.listProducts(query);
        dispatch({ type: _constants.Types.UPDATE_PRODUCTS, products: products });
    };
}

/***/ }),

/***/ "./src/shared/app/redux/actions/query.js":
/*!***********************************************!*\
  !*** ./src/shared/app/redux/actions/query.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setQuery = setQuery;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

function setQuery(query) {
    return async function (dispatch, getState) {
        dispatch({ type: _constants.Types.UPDATE_QUERY, query: query });
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
exports.userActions = undefined;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var _logic = __webpack_require__(/*! ../../../logic */ "./src/shared/logic/index.js");

var _logic2 = _interopRequireDefault(_logic);

var _alert = __webpack_require__(/*! ./alert */ "./src/shared/app/redux/actions/alert.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userActions = exports.userActions = {
    login: login,
    logout: logout,
    retrieveUser: retrieveUser,
    register: register
};

function login(username, password, history) {
    return function (dispatch) {

        _logic2.default.login(username, password).then(function (user) {
            dispatch({ type: _constants.Types.UPDATE_USER, payload: user });
            history.push('/');
        }).catch(function (error) {
            dispatch(_alert.alertActions.error(error));
        });
    };
}

function logout() {
    return function (dispatch) {

        _logic2.default.logout().then(function () {
            dispatch({ type: _constants.Types.UPDATE_USER, payload: {} });
        }).catch(function (error) {
            dispatch(_alert.alertActions.error(error));
        });
    };
}

function retrieveUser() {
    return function (dispatch) {

        _logic2.default.retrieveUser().then(function (user) {
            dispatch({ type: _constants.Types.UPDATE_USER, payload: user });
        }).catch(function (error) {
            _logic2.default.logout();
            dispatch(_alert.alertActions.error(error));
        });
    };
}

function register(user) {
    return function (dispatch) {

        _logic2.default.register(user).then(function () {
            browserHistory.push('/login');
            dispatch(_alert.alertActions.success('Registration successful'));
        }).catch(function (error) {
            dispatch(_alert.alertActions.error(error));
        });
    };
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
    ADD_PRODUCT_BID: 'ADD_PRODUCT_BID',
    UPDATE_PRODUCTS: 'UPDATE_PRODUCTS',
    UPDATE_NAME: 'UPDATE_NAME',
    UPDATE_USER: 'UPDATE_USER',
    UPDATE_QUERY: 'UPDATE_QUERY'
};

var alertConstants = exports.alertConstants = {
    SUCCESS: 'ALERT_SUCCESS',
    ERROR: 'ALERT_ERROR',
    CLEAR: 'ALERT_CLEAR'
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

/***/ "./src/shared/app/redux/reducers/alert.js":
/*!************************************************!*\
  !*** ./src/shared/app/redux/reducers/alert.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = alert;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

function alert() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _constants.alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case _constants.alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case _constants.alertConstants.CLEAR:
      return {};
    default:
      return state;
  }
}

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

var _products = __webpack_require__(/*! ./products */ "./src/shared/app/redux/reducers/products.js");

var _products2 = _interopRequireDefault(_products);

var _product = __webpack_require__(/*! ./product */ "./src/shared/app/redux/reducers/product.js");

var _product2 = _interopRequireDefault(_product);

var _user = __webpack_require__(/*! ./user */ "./src/shared/app/redux/reducers/user.js");

var _user2 = _interopRequireDefault(_user);

var _alert = __webpack_require__(/*! ./alert */ "./src/shared/app/redux/reducers/alert.js");

var _alert2 = _interopRequireDefault(_alert);

var _query = __webpack_require__(/*! ./query */ "./src/shared/app/redux/reducers/query.js");

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
    products: _products2.default,
    product: _product2.default,
    user: _user2.default,
    alert: _alert2.default,
    query: _query2.default
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
exports.default = product;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var initialState = {};

function product() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _constants.Types.UPDATE_PRODUCT:
            return action.payload;
        case _constants.Types.ADD_PRODUCT_BID:
            return action.payload;
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
exports.default = products;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var initialState = {
    products: []
};
function products() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _constants.Types.UPDATE_PRODUCTS:
            return action.products;
        default:
            return state;
    }
}

/***/ }),

/***/ "./src/shared/app/redux/reducers/query.js":
/*!************************************************!*\
  !*** ./src/shared/app/redux/reducers/query.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = query;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var initialState = '';

function query() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _constants.Types.UPDATE_QUERY:
            return action.query;
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
exports.default = user;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var initialState = {};

function user() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _constants.Types.UPDATE_USER:
            return action.payload;
        default:
            return state;
    }
}

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

    /**
     * Initializes logic's storage
     */
    init: function init() {
        auctionApi.token = function (token) {
            if (token) {
                localStorage.setItem('token', token);

                return;
            }

            return localStorage.getItem('token');
        };
    },
    listProducts: function listProducts(query) {
        return auctionApi.listProducts(query);
    },
    retrieveProduct: function retrieveProduct(productId) {
        return auctionApi.retrieveProduct(productId);
    },
    addProductBid: function addProductBid(productId, userId, price) {
        return auctionApi.addProductBid(productId, userId, price);
    },
    login: function login(username, password) {
        var _this = this;

        return auctionApi.authenticateUser(username, password).then(function (user) {
            // login successful if there's a jwt token in the response
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        }).catch(function (error) {
            _this.logout();
            return Promise.reject(error);
        });
    },
    logout: function logout() {
        return Promise.resolve().then(function () {
            localStorage.removeItem('user');
        });
    },
    retrieveUser: function retrieveUser() {
        var user = JSON.parse(localStorage.getItem('user'));

        if (user === null) {
            return auctionApi.retrieveUser();
        }

        return auctionApi.retrieveUser(user._id);
    },
    register: function register(user) {},
    getAll: function getAll() {},
    delete: function _delete(id) {},
    handleResponse: function handleResponse(response) {
        console.log('hereee', response);
        return response.json().then(function (data) {
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    logout();
                    location.reload(true);
                }

                var error = data && data.error || response.statusText;
                return Promise.reject(error);
            }

            return data;
        });
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

var _profile = __webpack_require__(/*! ../app/profile.jsx */ "./src/shared/app/profile.jsx");

var _profile2 = _interopRequireDefault(_profile);

var _landing = __webpack_require__(/*! ../app/landing.jsx */ "./src/shared/app/landing.jsx");

var _landing2 = _interopRequireDefault(_landing);

var _product = __webpack_require__(/*! ../app/product.jsx */ "./src/shared/app/product.jsx");

var _product2 = _interopRequireDefault(_product);

var _login = __webpack_require__(/*! ../app/login.jsx */ "./src/shared/app/login.jsx");

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    routes: [{
        path: '/',
        component: _landing2.default,
        exact: true
    }, {
        path: '/product/:id',
        component: _product2.default,
        exact: true
    }, {
        path: '/login',
        component: _login2.default,
        exact: true
    }],
    privateRoutes: [{
        path: '/profile',
        component: _profile2.default,
        exact: true
    }],
    redirects: [{
        from: '/people',
        to: '/profile',
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