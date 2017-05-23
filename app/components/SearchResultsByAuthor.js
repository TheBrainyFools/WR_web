var React = require('react');
var PropTypes = React.PropTypes;
var SearchResults = require('./SearchResults');
var ReactRouter = require('react-router');
var GridItem = require('./GridItem');
var axios = require('axios');

var SearchResultsByAuthor = React.createClass({
  contextTypes: {
    PopularPosts: React.PropTypes.array,
    LatestPosts: React.PropTypes.array
  },
  searchByAuthor: function () {
    var searchWord = this.props.params.author;
    var _this = this;
    var searchResults = [];
    var searchResultsPosts = [];
          this.context.LatestPosts.map(function(post) {
            this.serverRequest =
              axios.get("https://api.themoviedb.org/3/movie/"+post.id+"/credits?api_key=fe497b618e596d47a41279dafb0d1cbf")
              .then(function(result) {
              var filmCast = result.data.cast;
              console.log(filmCast);
            if(filmCast.includes(searchWord)){
              searchResultsPosts.push(<GridItem
                key={post.id}
                name={post.title}
                imgSrc={post.poster_path}
                overview={post.overview}
                filmId = {post.id}
                />);
            }
            else return(0)
          })
            return(searchResultsPosts)
          })
          this.setState({searchResultsState:searchResultsPosts});
  },
 getInitialState: function() {
   return {
     searchWord: this.props.params.author,
     searchResultsState: []
   };
 },
  componentDidMount: function() {
     this.searchByAuthor();
   },
   componentWillUpdate: function() {
      this.searchByAuthor();
    },
  render: function(props) {
        if(this.state.searchResultsState.length > 0){
        return (
          <SearchResults>
            <h4>Search results by: {this.props.params.author}</h4>
            {this.state.searchResultsState}
          </SearchResults>
        )
      }
      else{
        return(
          <SearchResults>
            <h4>Nothing was found</h4>
          </SearchResults>
        )
      }
  }
});

module.exports = SearchResultsByAuthor;
