var React = require('react');
var Menu = require('./Menu');
var Footer = require('./Footer');
require("jquery");
var Films = require('./Films');

var Main = React.createClass({
  render: function(props) {
    require("../js/material.min.js");
    return (
      <div className="main-container">
        <Menu/>
          <Films>
            {this.props.children}
          </Films>
        <Footer/>
      </div>
    );
  }
});
module.exports = Main;
