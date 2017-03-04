var React = require('react');
var ListAvatars = require('./ListAvatars');
var ListItem = require('./ListItem');
var TopViewed = require('./TopViewed');
var TopViewedItem = require('./TopViewedItem');

 function Sidebar() {
    return (
      <div className="mdl-cell--3-col mdl-cell--12-col-phone">
        <ListAvatars>
          <ListItem name="Luke Bessone"/>
          <ListItem name="Gun Gustin"/>
          <ListItem name="Rayen Hostling"/>
          <ListItem name="Tina Kandelaki"/>
        </ListAvatars>
        <TopViewed>
          <TopViewedItem name="Logan"/>
          <TopViewedItem name="Lucy"/>
          <TopViewedItem name="Assasins Creed"/>
          <TopViewedItem name="Teen Turtles 2"/>
          <TopViewedItem name="My name is Jef"/>
        </TopViewed>
        </div>

    );
  }

module.exports = Sidebar;
