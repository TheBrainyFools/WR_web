var React = require('react');
var Menu = require('./Menu');
var Footer = require('./Footer');
require("jquery");
var Films = require('./Films');

var Main = React.createClass({
  contextTypes: {
    PopularPosts: React.PropTypes.array,
    LatestPosts: React.PropTypes.array
  },
  getInitialState: function() {
    return {
      searchResultsState: this.props.searchResultsPosts
    };
  },
  searchByWord: function () {
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
  render: function(props) {
    require("../js/material.min.js");
    return (
      <div className="main-container">
        <Menu/>
          <Films searchResultsPosts={this.state.searchResultsState}>
            {this.props.children}
          </Films>
        <Footer/>
      </div>
    );
  }
});
module.exports = Main;
