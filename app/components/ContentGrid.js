var React = require('react');
var Tabs = require('./Tabs');
var SidebarHomePage = require('./SidebarHomePage');
var ItemsGrid = require('./ItemsGrid');

var ContentGrid = React.createClass({
  render: function() {
    function handleClick(e) {
      e.preventDefault();
      console.log('click');
    }
    return (
      <div className="mdl-grid">
        <SidebarHomePage/>
        <div className="mdl-cell--9-col mdl-cell--12-col-phone">
        <Tabs handleClick={handleClick()}/>
        <ItemsGrid/>
        </div>
      </div>
    );
  }

});

module.exports = ContentGrid;
