var React = require('react');
var Tabs = require('./Tabs');
var Sidebar = require('./Sidebar');
var ItemsGrid = require('./ItemsGrid');

var ContentGrid = React.createClass({
  render: function() {
    return (
      <div className="mdl-grid" style={{marginTop:100+'px'}}>
        <Sidebar/>
        <div className="mdl-cell--9-col mdl-cell--12-col-phone">
        <Tabs/>
        <ItemsGrid/>
        </div>
      </div>
    );
  }

});

module.exports = ContentGrid;
