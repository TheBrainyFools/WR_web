var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var PropTypes = React.PropTypes;
var Search = require('./Search');
var createHistory = require('history').createBrowserHistory;
var SearchResultsByWord = require('./SearchResultsByWord');
var history = createHistory()

var SearchHandler = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      searchWord: ''
    }
  },
  handleSubmitSearch: function (e) {
    e.preventDefault();
    var searchWord = this.state.searchWord;
    this.setState({
      searchWord: ''
    });
  },
  handleUpdateSearch: function (event) {
    this.setState({
      searchWord: event.target.value
    });
  history.push('/search/'+this.state.searchWord)
  },
  render: function() {
    return (
      <Search onSubmitSearch={this.handleSubmitSearch}
        onUpdateSearch={this.handleUpdateSearch}
        searchWord={this.state.searchWord}/>
    );
  }

});

module.exports = SearchHandler;
