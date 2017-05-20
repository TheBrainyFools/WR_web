var React = require('react');
var GridItem = require('./GridItem');
var SidebarHomePage = require('./SidebarHomePage');

var LatestFilmsPage = React.createClass({
  contextTypes: {
    LatestPosts: React.PropTypes.array
  },
  render: function() {
    return (
      <div className="mdl-grid">
        <SidebarHomePage/>
        <div className="mdl-cell--9-col">
          {this.context.LatestPosts.map(function(post) {
              return (
                <GridItem
                  key={post.id}
                  name={post.title}
                  imgSrc={post.poster_path}
                  overview={post.overview}
                  filmId = {post.id}
                   rating={post.vote_average}/>
              )
            })}
     </div>
     </div>
    );
  }

});

module.exports = LatestFilmsPage;
