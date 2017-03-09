var React = require('react');
var Menu = require('./Menu');
var Footer = require('./Footer');
require("../js/material.min.js");
require("jquery");
require("../js/slick.js");

var Main = React.createClass({
  render: function(props) {
    return (
      <div className="main-container">
        <Menu/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
});
module.exports = Main;
