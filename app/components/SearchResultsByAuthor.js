var React = require('react');
var PropTypes = React.PropTypes;
var SearchResults = require('./SearchResults');

function SearchResultsByAuthor() {
    return (
      <SearchResults>
        <h4>Search results by author: author name</h4>
      </SearchResults>
    );
  }

module.exports = SearchResultsByAuthor;
