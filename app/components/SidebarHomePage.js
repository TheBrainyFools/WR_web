var React = require('react');
var ListAvatars = require('./ListAvatars');
var ListItem = require('./ListItem');
var TopViewed = require('./TopViewed');
var TopViewedItem = require('./TopViewedItem');

 function SidebarHomePage(props) {
   var SidebarHomePageStyles ={
     padding:"5px"
   }
    return (
      <div className="mdl-cell--3-col mdl-cell--12-col-phone" style={SidebarHomePageStyles}>
        <ListAvatars>
          <ListItem name="Luke Bessone"/>
          <ListItem name="Gun Gustin"/>
          <ListItem name="Rayen Hostling"/>
          <ListItem name="Tina Kandelaki"/>
        </ListAvatars>
        <TopViewed>
          <TopViewedItem name="name" author="author"/>
        </TopViewed>
      </div>

    );
  }

module.exports = SidebarHomePage;
