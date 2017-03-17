var React = require('react');
var GridItem = require('./GridItem');
var axios = require('axios');


var ItemsGrid = React.createClass({
  img :{
   "base_url": "https://image.tmdb.org/t/p/",
   "size": "original",
   "path":"post.poster_path"
 },

  getInitialState: function() {
   return {
     posts: []
   }
 },
 componentDidMount: function() {
   var _this = this;
    this.serverRequest =
     axios
       .get("https://api.themoviedb.org/3/movie/popular?api_key=fe497b618e596d47a41279dafb0d1cbf&language=en-US&page=1")
       .then(function(result) {
         _this.setState({
           posts: result.data.results
         });
       })
 },

 componentWillUnmount: function() {
   this.serverRequest.abort();
 },

  render: function(props) {
  return (
    <div>
      {this.state.posts.map(function(post) {
          return (
       <GridItem
         key={post.id}
         name={post.title}
         imgSrc={post.poster_path}
         overview={post.overview}
         />
       );
     })}
    </div>
  )
}
});

module.exports = ItemsGrid;
