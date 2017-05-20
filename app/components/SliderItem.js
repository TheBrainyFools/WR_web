var React = require('react');
var Rating = require('./Rating');
var LearnMoreButton = require('./LearnMoreButton');
require("../js/slick.js");
var $ = require("jquery");

  var SliderItem = React.createClass({
    getInitialState: function() {
      return {
        sliderItemBg: ''
      };
    },
    getBgColor: function() {
    },
    componentDidMount: function() {
      $('.slider').slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        arrows:false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      }
    }]
    })
  },
    contextTypes: {
      LatestPosts: React.PropTypes.array,
      imgPath: React.PropTypes.string
    },
  render: function(props) {
      var sliderImgStyles = {
          maxHeight: '320px',
          width: '200px',
          boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 2px 10px rgba(0,0,0,0.23)",
          position: "relative",
          bottom: "-20px",
          left: '30px'

        };
        var sliderTextStyles = {
          color: '#fff'
        }
        var overview = this.props.overview;
        var excerpt = overview.slice(0,200);
    return (
        <div id="sliderItem" className="mdl-grid sliderItem">
        <div className="mdl-cell mdl-cell--6-col">
          <img id="sliderItemImg" src={this.context.imgPath+this.props.imgSrc} style={sliderImgStyles}/>
        </div>
        <div style={{sliderTextStyles, borderRight:'solid 1px #fff'}} className="mdl-cell mdl-cell--6-col">
          <h5>{this.props.name} </h5>
          <Rating rating={this.props.rating}/>
          <p id="overview"> {excerpt}</p>
          <LearnMoreButton linkTo={this.props.filmId}/>
        </div>
      </div>
    );
}

});
module.exports = SliderItem ;
