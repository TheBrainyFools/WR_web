var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var routes = require('./routes/routes');


ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('main'));
