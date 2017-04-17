var React = require('react');
var PropTypes = React.PropTypes;
var ItemsGrid = require('./ItemsGrid');
var SidebarHomePage = require('./SidebarHomePage');
var axios = require('axios');

var SearchResults = React.createClass({

  render: function(props) {
    return (
        <div className="mdl-grid">
          <SidebarHomePage/>
          <div className="mdl-cell--9-col">
            {this.props.children}
          </div>
        </div>
    );
  }

});

module.exports = SearchResults;
