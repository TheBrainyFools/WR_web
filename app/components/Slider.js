var React = require('react');
var PropTypes = React.PropTypes;
var $ = require("jquery");
var GridItem = require('./GridItem');
var SliderItem = require('./SliderItem');

var Slider = React.createClass({
  contextTypes: {
    LatestPosts: React.PropTypes.array,
    imgPath: React.PropTypes.string
  },
  render: function(props) {
    var style = {
       width: "100%",
       height: "300px",
      backgroundColor: "#8dd1de",
      marginBottom:"100px"
    };
    return (
        <div className="slider" style={style}>
        {this.context.LatestPosts.map(function(post) {
          return (
          <div key={post.id}>
            <SliderItem
              key={post.name}
              name={post.title}
              imgSrc={post.poster_path}
              overview={post.overview}
              filmId = {post.id}
              rating={post.vote_average}>
            </SliderItem>
         </div>
        )})}
      </div>
    )
  }

});

module.exports = Slider;
