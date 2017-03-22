var React = require('react');
var GridItem = require('./GridItem');
var axios = require('axios');

var ItemsGrid = React.createClass({
  img :{
   "base_url": "https://image.tmdb.org/t/p/",
   "size": "original",
   "path":"post.poster_path"
 },
 contextTypes: {
   PopularPosts: React.PropTypes.array
 },
  render: function(props) {
  return (
    <div>
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
