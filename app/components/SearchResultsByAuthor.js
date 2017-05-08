var React = require('react');
var PropTypes = React.PropTypes;
var SearchResults = require('./SearchResults');
var ReactRouter = require('react-router');
var GridItem = require('./GridItem');
var createHistory = require('history').createBrowserHistory;
var history = createHistory();

var SearchResultsByAuthor = React.createClass({
  contextTypes: {
    PopularPosts: React.PropTypes.array,
    LatestPosts: React.PropTypes.array
  },
  searchByAuthor: function () {
    var searchWord = this.props.params.searchWord;
    var _this = this;
    var searchResults = [];
    var searchResultsPosts = [];
          this.context.LatestPosts.map(function(post) {
            var overview = post.overview;
            var postTitle = post.title;
            if(overview.includes(searchWord) || postTitle.includes(searchWord)){
              searchResultsPosts.push(<GridItem
                key={post.id}
                name={post.title}
                imgSrc={post.poster_path}
                overview={post.overview}
                filmId = {post.id}
                />);
            }
            return(searchResultsPosts)
          })
          this.setState({searchResultsState:searchResultsPosts});
  },
 getInitialState: function() {
   return {
     searchWord: this.props.params.searchWord,
     searchResultsState: [],
     filmCast: [],
     crew: []
   };
 },
  componentWillMount: function() {
    this.serverRequest =
    axios.get("https://api.themoviedb.org/3/movie/"+id+"/credits?api_key=fe497b618e596d47a41279dafb0d1cbf")
      .then(function(result) {
        _this.setState({
          filmCast: result.data.cast,
          crew: result.data.crew
        });
      })
     this.searchByWord();
   },
   componentWillUpdate: function() {
      this.searchByWord();
    },
  render: function(props) {
        if(this.state.searchResultsState.length > 0){
        return (
          <SearchResults>
            <h4>Search results by: {this.props.params.searchWord}</h4>
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
