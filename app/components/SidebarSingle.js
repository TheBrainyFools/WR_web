var React = require('react');
var TopViewed = require('./TopViewed');
var TopViewedItem = require('./TopViewedItem');
var GridItem = require('./GridItem');
var SidebarCard = require('./SidebarCard');

var SidebarSingle = React.createClass({
  contextTypes: {
    PopularPosts: React.PropTypes.array,
    LatestPosts: React.PropTypes.array
  },
  render: function(props){
      var whiteSidebar = {
      padding:"0px 10px",
      marginTop: "30px",
      marginLeft:"30px"
    }
    for (i = 0; i < 6; i++){
      var sidebarPosts = [i];
        this.context.LatestPosts.slice(0, 5).map(function(post) {
          sidebarPosts.push(<SidebarCard
            key={post.id}
            name={post.title}
            imgSrc={post.poster_path}
            overview={post.overview}
            filmId = {post.id}/>);
        })
      }
     return (
       <div className="mdl-cell--3-col mdl-cell--12-col-phone" style={whiteSidebar}>
       {sidebarPosts}
       </div>

     );
  }
})

module.exports = SidebarSingle;
