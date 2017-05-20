var React = require('react');
var ContentGrid = require('./ContentGrid');
var Slider = require('./Slider');
var MainContainer = require('../containers/MainContainer.js')

var Home = React.createClass({
  render: function() {
    return (
      <div className="home">
           <Slider/>
          <ContentGrid/>
      </div>
    );
  }

});

module.exports = Home;
