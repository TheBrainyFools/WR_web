var React = require('react');
var PropTypes = React.PropTypes;
var ItemsGrid = require('./ItemsGrid');
var SidebarHomePage = require('./SidebarHomePage');

var SearchResults = React.createClass({

  render: function() {
    return (
        <div className="mdl-grid">
          <SidebarHomePage/>
          <div className="mdl-cell--9-col">
            <h4>Search results by: search word</h4>
            <ItemsGrid />
          </div>
        </div>
    );
  }

});

module.exports = SearchResults;
