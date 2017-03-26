var React = require('react');
var GridItem = require('./GridItem');
var axios = require('axios');

var ItemsGrid = React.createClass({
 contextTypes: {
   PopularPosts: React.PropTypes.array
 },
  render: function(props) {
  return (
    <div id='mostPopular'>
      {this.context.PopularPosts.map(function(post) {
          return (
       <GridItem
         key={post.id}
         name={post.title}
         imgSrc={post.poster_path}
         overview={post.overview}
         filmId = {post.id}
         />
       )
     })}
   </div>
  )
}
});

module.exports = ItemsGrid;
