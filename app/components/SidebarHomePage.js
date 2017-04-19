var React = require('react');
var ListAvatars = require('./ListAvatars');
var ListItem = require('./ListItem');
var TopViewed = require('./TopViewed');
var TopViewedItem = require('./TopViewedItem');

var SidebarHomePage = React.createClass({
   contextTypes: {
     PopularPosts: React.PropTypes.array
   },
   render: function() {
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
          {this.context.PopularPosts.slice(0, 5).map(function(post) {
              return (
          <TopViewedItem name={post.title} imgSrc={post.poster_path} author="Author Author"/>
           )
         })}
        </TopViewed>
      </div>

    );
  }
})
module.exports = SidebarHomePage;
