var React = require('react');
var Tabs = require('./Tabs');
var SidebarHomePage = require('./SidebarHomePage');
var ItemsGrid = require('./ItemsGrid');

var ContentGrid = React.createClass({
  getInitialState: function() {
    return {
      filter: "LatestPosts"
    };
  },
  render: function() {
    var _this = this;
    function handleFilterLatest() {
      _this.setState({filter:"LatestPosts"});
    }
    function handleFilterPopular() {
      _this.setState({filter:"PopularPosts"});
    }
    return (
      <div className="mdl-grid">
        <SidebarHomePage/>
        <div className="mdl-cell--9-col mdl-cell--12-col-phone">
        <Tabs handleFilterLatest={handleFilterLatest}
              handleFilterPopular={handleFilterPopular}/>
        <ItemsGrid filter={this.state.filter}/>
        </div>
      </div>
    );
  }

});

module.exports = ContentGrid;
