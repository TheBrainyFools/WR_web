var React = require('react');
var axios = require('axios');

var Films = React.createClass({
  img :{
   "base_url": "https://image.tmdb.org/t/p/",
   "size": "original",
   "path":"post.poster_path"
 },
  getInitialState: function() {
   return {
     PopularPosts: [],
     LatestPosts: []
   }
 },
 getChildContext: function() {
     return {
       PopularPosts: this.state.PopularPosts,
       LatestPosts: this.state.LatestPosts,
       imgPath:'https://image.tmdb.org/t/p/original'
     };
   },
   childContextTypes: {
     PopularPosts: React.PropTypes.array,
     LatestPosts: React.PropTypes.array,
     imgPath: React.PropTypes.string
   },
 componentWillMount: function() {
   var _this = this;
    this.serverRequest =
     axios
       .get("https://api.themoviedb.org/3/movie/popular?api_key=fe497b618e596d47a41279dafb0d1cbf&language=en-US&page=1")
       .then(function(result) {
         _this.setState({
           PopularPosts: result.data.results
         });
       });
        axios
          .get("https://api.themoviedb.org/3/movie/upcoming?api_key=fe497b618e596d47a41279dafb0d1cbf&language=en-US")
          .then(function(result) {
            _this.setState({
              LatestPosts: result.data.results
            });
          })
 },
 componentWillUnmount: function() {
   this.serverRequest.abort();
 },

  render: function(props) {
  return (
    <div>
       {this.props.children}
    </div>
  )
}
});

module.exports = Films;
