var React = require('react');
var PropTypes = React.PropTypes;
require("../js/material.min.js");
var Link = require('react-router').Link;

function Tabs (props){
    return (
    <div className="mdl-tabs mdl-js-tabs">
      <div className="mdl-tabs__tab-bar">
        <h4 style={{float:"left", marginRight:"50%", lineHeight:"24px"}}> Find </h4>
        <a onClick={props.handleClick} href="#mostPopular" className="mdl-tabs__tab is-active">Most popular</a>
        <a onClick={props.handleClick} href="#latest" className="mdl-tabs__tab">Latest</a>
      </div>
    </div>
    );
  }

module.exports = Tabs;
