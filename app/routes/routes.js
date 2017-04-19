var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var FilmPage = require('../components/FilmPage');
var SearchResultsByWord = require('../components/SearchResultsByWord');
var PopularFilmsPage = require('../components/PopularFilmsPage');
var LatestFilmsPage = require('../components/LatestFilmsPage');


var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="/films/:id" component={FilmPage}/>
      <Route path="/search/:searchWord" component={SearchResultsByWord}/>
      <Route path="/popular" component={PopularFilmsPage}/>
        <Route path="/latest" component={LatestFilmsPage}/>
   </Route>
  </Router>
)

module.exports = routes;
