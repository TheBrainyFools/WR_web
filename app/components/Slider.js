var React = require('react');
var PropTypes = React.PropTypes;
var $ = require("jquery");
var GridItem = require('./GridItem');
var SliderItem = require('./SliderItem');

var Slider = React.createClass({

  componentDidMount: function() {
    $('.slider').slick({
      dots: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 1
         });
  },

  render: function() {
    var style = {
       width: "100%",
       height: "300px",
      backgroundColor: "#8dd1de"
    };

    return (
      <div className="slider" style={style}>
        <SliderItem/>
        <SliderItem/>
        <SliderItem/>
        <SliderItem/>
      </div>
    );
  }

});

module.exports = Slider;
