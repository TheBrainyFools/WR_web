var React = require('react');
var PropTypes = React.PropTypes;
var SearchResults = require('./SearchResults');
var ReactRouter = require('react-router');

var SearchResultsByWord = React.createClass({

  render: function(props) {
    return (
      <SearchResults>
        <h4>Search results by: {this.props.params.searchWord}</h4>
      </SearchResults>
    );
  }

});

module.exports = SearchResultsByWord;
