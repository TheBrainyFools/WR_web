var React = require('react');
var GridItem = require('./GridItem');
var axios = require('axios');

var ItemsGrid = React.createClass({
 contextTypes: {
   PopularPosts: React.PropTypes.array,
   LatestPosts: React.PropTypes.array
 },
  render: function(props) {
    if(this.props.filter == 'PopularPosts'){
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
  return(
    <div id='latestPosts'>
      {this.context.LatestPosts.map(function(latest) {
          return (
       <GridItem
         key={latest.id}
         name={latest.title}
         imgSrc={latest.poster_path}
         overview={latest.overview}
         filmId = {latest.id}
         />
       )
     })}
   </div>
  )
}
});

module.exports = ItemsGrid;
