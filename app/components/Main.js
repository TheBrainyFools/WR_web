var React = require('react');
var PropTypes = React.PropTypes;
require("../css/style.css");
require("../js/material.min.js");

 function Main (props) {
    return (
      <div className="main-container">
        {props.children}
      </div>
    );
  }

module.exports = Main;
