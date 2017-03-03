var React = require('react');
var ReactRouter = require('react-router');
var Menu = require('./Menu');
var Main = require('./Main');
var ContentGrid = require('./ContentGrid');
var Slider = require('./Slider');

var Home = React.createClass({
  render: function() {
    return (
      <Main>
      <div>
           <Menu/>
           <Slider/>
          <ContentGrid/>
      </div>
    </Main>
    );
  }

});

module.exports = Home;
