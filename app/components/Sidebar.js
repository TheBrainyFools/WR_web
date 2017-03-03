var React = require('react');
var ListAvatars = require('./ListAvatars');
var ListItem = require('./ListItem');

 function Sidebar() {
    return (
      <div className="mdl-cell--3-col mdl-cell--12-col-phone">
        <ListAvatars>
          <ListItem name="Luke Bessone"/>
          <ListItem name="Gun Gustin"/>
          <ListItem name="Rayen Hostling"/>
          <ListItem name="Tina Kandelaki"/>
        </ListAvatars>
        </div>

    );
  }

module.exports = Sidebar;
