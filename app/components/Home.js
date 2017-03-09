var React = require('react');
var Main = require('./Main');
var Menu = require('./Menu');
var ContentGrid = require('./ContentGrid');
var Slider = require('./Slider');

var Home = React.createClass({
  render: function() {
    return (
      <div>
           <Slider/>
          <ContentGrid/>
      </div>
    );
  }

});

module.exports = Home;
