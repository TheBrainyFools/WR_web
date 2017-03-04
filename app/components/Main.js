var React = require('react');
var PropTypes = React.PropTypes;
require("../js/material.min.js");
require("jquery");
require("../js/slick.js");

 function Main (props) {
    return (
      <div className="main-container">
        {props.children}
      </div>
    );
  }

module.exports = Main;
